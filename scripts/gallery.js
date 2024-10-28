const imageOverlay = document.getElementById('imageOverlay');
const enlargedImg = document.getElementById('enlargedImg');
const closeOverlay = document.getElementById('closeOverlay');

function openOverlay(src) {
  enlargedImg.src = src;
  imageOverlay.style.display = 'flex';
}

function closeOverlayFunc() {
  imageOverlay.style.display = 'none';
  enlargedImg.src = '';
}

document.querySelectorAll('.galleryItem').forEach(item => {
  item.addEventListener('click', () => {
    openOverlay(item.src);
  });
});

closeOverlay.addEventListener('click', closeOverlayFunc);
imageOverlay.addEventListener('click', (e) => {
  if (e.target === imageOverlay) {
    closeOverlayFunc();
  }
});
