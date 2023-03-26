import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryItemsImages = galleryItems.map(({ original, preview, description }) => {
   return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join('');
gallery.innerHTML = galleryItemsImages;
gallery.addEventListener('click', onGalleryImagesClick);
window.addEventListener('keydown', onEscapePress);

let image;
function onGalleryImagesClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  };
  
  image = basicLightbox.create(`
    <img src="${evt.target.dataset.source}", alt="${evt.target.alt}" >
    
`)
  image.show()
}
  

function onEscapePress(evt) {
    console.log(evt)
    if (evt.code == 'Escape') {
      image.close();
    }
}