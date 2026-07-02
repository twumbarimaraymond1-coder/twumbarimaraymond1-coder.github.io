// Highlight the current page in the nav based on filename
(function () {
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (!href) return;
    var file = href.split('#')[0];
    a.classList.toggle('active', file === here);
  });
})();

// Mobile hamburger menu (button injected here so the markup stays clean)
(function () {
  var inner = document.querySelector('.nav-inner');
  var links = document.querySelector('.nav-links');
  if (!inner || !links) return;
  var btn = document.createElement('button');
  btn.className = 'nav-toggle';
  btn.setAttribute('aria-label', 'Open menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = '<span></span><span></span><span></span>';
  btn.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  // Close the menu after choosing a link
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
  inner.appendChild(btn);
})();
