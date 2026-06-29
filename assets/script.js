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
