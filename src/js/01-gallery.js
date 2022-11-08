// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// console.log(galleryItems);


const galleryListEl = document.querySelector(".gallery");

const addItemGallery = galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__item" 
href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>`
);

galleryListEl.insertAdjacentHTML('beforeend', addItemGallery.join(''));

new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250, });