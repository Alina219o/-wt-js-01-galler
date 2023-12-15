import { galleryItems } from './gallery-items.js';
//const refs = {
//galleryListEl: document.querySelector('ul.gallery'),
//modalContainerEl: document.querySelector('div.lightbox'),
//lightboxOverlayEl: document.querySelector('div.lightbox__overlay'),
//modalImgEl: document.querySelector('img.lightbox__image'),
//modalCloseBtnEl: document.querySelector('[data-action="close-lightbox"]'),
};

const galleryMarkup = createGalleryMarkup(galleryItems);
refs.galleryListEl.insertAdjacentHTML('beforeend', galleryMarkup);
refs.galleryListEl.addEventListener('click', onGalleryItemClick);
refs.modalCloseBtnEl.addEventListener('click', closeModal);
refs.lightboxOverlayEl.addEventListener('click', closeModal); // 7.

function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({preview, original, description}) => {
            return `<li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
                    </a>
                </li>`;
        })
        .join('');
}
console.log(galleryItems);
