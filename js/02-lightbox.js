import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery= document.querySelector('.gallery')
console.log(gallery);
const galleryItemsImages = galleryItems.map(({ original, preview, description }) => {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}).join('');
gallery.innerHTML = galleryItemsImages;

gallery.addEventListener('click', onGalleryImagesClick, { passive: false });
 
function onGalleryImagesClick(evt) {
   evt.preventDefault();
   if (evt.target.nodeName !== 'IMG') {
      return;
   }
   

    var lightbox = new SimpleLightbox('.gallery a', {
       /* options */
       captions: true,
       captionDelay: 250,
       captionSelector: 'img',
       captionTYpe: 'attr',
       captionsData:'alt',
       captionPosition: 'bottom',
       
});

}