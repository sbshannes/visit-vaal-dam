/* Visit Vaal Dam - small, dependency-free site script.
   1. Mobile navigation toggle
   2. Footer year
   3. Enquiry form stub (until contact.php is wired up) */
(function () {
  'use strict';
  // 1. Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  // 2. Footer year
  var y = document.querySelector('[data-year]');
  if (y) { y.textContent = new Date().getFullYear(); }
  // 3. Enquiry form stub. When contact.php is ready, set data-form-live="true"
  //    on the <form> and this script will let the normal POST go through.
  var forms = document.querySelectorAll('form[data-form-live]');
  Array.prototype.forEach.call(forms, function (form) {
    form.addEventListener('submit', function (e) {
      if (form.getAttribute('data-form-live') === 'true') { return; }
      e.preventDefault();
      var status = form.querySelector('.form-status');
      if (status) {
        status.textContent = 'Thank you! This form is not connected yet, so nothing was sent. It will be switched on soon. In the meantime, please follow us on the social links below.';
        status.classList.add('show');
        status.focus();
      }
    });
  });
})();
