// Formular Diagnostic: trimitere la Formspree fără reîncărcarea paginii.
(function () {
  var form = document.getElementById('dx-form');
  if (!form) return;
  var status = document.getElementById('dx-status');
  var btn = form.querySelector('button[type="submit"]');
  var btnHtml = btn.innerHTML;

  // Sursa cererii: ?utm_source=ebh -> diagnostic-ebh
  var src = new URLSearchParams(location.search).get('utm_source');
  if (src) form.elements.sursa.value = 'diagnostic-' + src.replace(/[^a-z0-9_-]/gi, '').slice(0, 40);

  function show(kind, text) {
    status.hidden = false;
    status.className = 'form-status ' + kind;
    status.textContent = text;
  }

  function check(input, msg) {
    var old = input.parentNode.querySelector('.field-error');
    if (old) old.remove();
    var ok = input.value.trim().length > 0 && (input.type !== 'tel' || /[0-9]{6,}/.test(input.value.replace(/\D/g, '')));
    input.setAttribute('aria-invalid', ok ? 'false' : 'true');
    if (!ok) {
      var p = document.createElement('p');
      p.className = 'field-error';
      p.id = input.id + '-err';
      p.textContent = msg;
      input.parentNode.appendChild(p);
      input.setAttribute('aria-describedby', p.id);
    } else {
      input.removeAttribute('aria-describedby');
    }
    return ok;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var a = check(form.elements.nume, 'Scrieți numele, ca să știu pe cine caut.');
    var b = check(form.elements.telefon, 'Scrieți un număr de telefon la care vă pot suna.');
    if (!a || !b) { (a ? form.elements.telefon : form.elements.nume).focus(); return; }

    btn.disabled = true;
    btn.textContent = 'Se trimite…';
    status.hidden = true;

    fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      .then(function (r) {
        if (!r.ok) throw new Error(r.status);
        form.reset();
        if (src) form.elements.sursa.value = 'diagnostic-' + src.replace(/[^a-z0-9_-]/gi, '').slice(0, 40);
        show('ok', 'Am primit cererea. Vă sun în aceeași zi lucrătoare ca să stabilim ziua diagnosticului.');
      })
      .catch(function () {
        show('err', 'Cererea nu a plecat. Verificați conexiunea și încercați din nou, sau sunați direct la 0727 819 906.');
      })
      .then(function () {
        btn.disabled = false;
        btn.innerHTML = btnHtml;
        status.focus && status.setAttribute('tabindex', '-1');
        status.focus();
      });
  });
})();
