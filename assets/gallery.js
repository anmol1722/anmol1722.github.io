(function () {
  'use strict';

  var viewer = document.getElementById('screenshot-viewer');
  var links = Array.prototype.slice.call(document.querySelectorAll('[data-screenshot]'));
  // Original image links remain usable when JavaScript or dialog support is unavailable.
  if (!viewer || typeof viewer.showModal !== 'function' || !links.length) return;

  var title = document.getElementById('screenshot-viewer-title');
  var image = document.getElementById('screenshot-viewer-image');
  var caption = document.getElementById('screenshot-viewer-caption');
  var count = document.getElementById('screenshot-viewer-count');
  var original = document.getElementById('screenshot-viewer-original');
  var index = 0;
  var opener = null;

  function show(nextIndex) {
    index = (nextIndex + links.length) % links.length;
    var link = links[index];
    var figure = link.closest('figure');
    var sourceImage = link.querySelector('img');
    var titleNode = figure.querySelector('[data-screenshot-title], h3');
    var captionNode = figure.querySelector('[data-screenshot-caption]');
    title.textContent = titleNode ? titleNode.textContent : sourceImage.alt;
    caption.textContent = captionNode ? captionNode.textContent : '';
    image.alt = sourceImage.alt;
    image.width = Number(sourceImage.getAttribute('width'));
    image.height = Number(sourceImage.getAttribute('height'));
    image.src = link.href;
    original.href = link.href;
    count.textContent = (index + 1) + ' of ' + links.length;
  }

  links.forEach(function (link, position) {
    link.setAttribute('aria-haspopup', 'dialog');
    link.setAttribute('aria-controls', viewer.id);
    link.addEventListener('click', function (event) {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      opener = link;
      show(position);
      document.body.classList.add('screenshot-viewer-open');
      viewer.showModal();
    });
  });

  viewer.querySelector('[data-gallery-close]').addEventListener('click', function () { viewer.close(); });
  viewer.querySelector('[data-gallery-prev]').addEventListener('click', function () { show(index - 1); });
  viewer.querySelector('[data-gallery-next]').addEventListener('click', function () { show(index + 1); });
  viewer.addEventListener('keydown', function (event) {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      show(index + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  var backdropPress = false;
  function outsideDialog(event) {
    var bounds = viewer.getBoundingClientRect();
    return event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  }
  viewer.addEventListener('pointerdown', function (event) { backdropPress = outsideDialog(event); });
  viewer.addEventListener('click', function (event) {
    if (backdropPress && outsideDialog(event)) viewer.close();
    backdropPress = false;
  });
  viewer.addEventListener('close', function () {
    document.body.classList.remove('screenshot-viewer-open');
    if (opener) opener.focus({ preventScroll: true });
  });
})();
