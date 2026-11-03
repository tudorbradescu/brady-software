// Sursa vizitei (QR EBH) + formularul Diagnostic. Fără dependențe.
(function () {
  var src = null;
  try {
    src = new URLSearchParams(location.search).get('utm_source');
    if (src) sessionStorage.setItem('bs_src', src);
    else src = sessionStorage.getItem('bs_src');
  } catch (e) {}
  if (src) src = src.replace(/[^a-z0-9_-]/gi, '').slice(0, 40);

  if (src === 'ebh') {
    var msg = encodeURIComponent('Bună ziua, ne-am cunoscut la EBH Sibiu. Aș vrea un Diagnostic de automatizare.');
    document.querySelectorAll('a[href^="https://wa.me/"]').forEach(function (a) {
      a.href = a.href.split('?')[0] + '?text=' + msg;
    });
    document.querySelectorAll('[data-ebh]').forEach(function (el) { el.hidden = false; });
  }

  var form = document.getElementById('dx-form');
  if (!form) return;
  var status = document.getElementById('dx-status');
  var btn = form.querySelector('button[type="submit"]');
  var btnHtml = btn.innerHTML;
  if (src) form.elements.sursa.value = 'diagnostic-' + src;

  function check(input, msg) {
    var old = input.parentNode.querySelector('.field-error');
    if (old) old.remove();
    var ok = input.value.trim().length > 0 && (input.type !== 'tel' || input.value.replace(/\D/g, '').length >= 6);
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

    var name = form.elements.nume.value.trim().split(/\s+/)[0];
    btn.disabled = true;
    btn.textContent = 'Se trimite…';
    status.className = 'form-status';
    status.textContent = '';

    fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      .then(function (r) {
        if (!r.ok) throw new Error(r.status);
        form.querySelectorAll('.field, button[type="submit"]').forEach(function (el) { el.hidden = true; });
        status.className = 'form-status ok';
        status.textContent = 'Am primit cererea, ' + name + '. Vă sun în aceeași zi lucrătoare ca să stabilim ziua diagnosticului.';
        status.focus();
      })
      .catch(function () {
        btn.disabled = false;
        btn.innerHTML = btnHtml;
        status.className = 'form-status err';
        status.textContent = 'Cererea nu a plecat. Verificați conexiunea și încercați din nou, sau sunați direct la 0727 819 906.';
        status.focus();
      });
  });
})();
