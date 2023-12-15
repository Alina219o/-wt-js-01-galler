import { galleryItems } from './gallery-items.js';
//const refs = {
  galleryListEl: document.querySelector('ul.gallery'),
  modalContainerEl: document.querySelector('div.lightbox'),
  lightboxOverlayEl: document.querySelector('div.lightbox__overlay'),
  modalImgEl: document.querySelector('img.lightbox__image'),
  modalCloseBtnEl: document.querySelector('[data-action="close-lightbox"]'),
};
// rendered items
function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

// create modal
// function onImgClick(e) {
//   e.preventDefault();
//   // if (e.target.nodeName !== "IMG") return;

//   const isItemImage = e.target.classList.contains('gallery__image');
//   if (!isItemImage) return;

//   const currentImgUrl = e.target.dataset.source;

//   const instance = basicLightbox.create(
//     `
// 		<img src="${currentImgUrl}" width="1280" height="auto"/>
//         `,
//     {
//       onShow: (instance) => {
//         window.addEventListener('keydown', onEscKeyPress);
//       },
//       onClose: (instance) => {
//         window.removeEventListener('keydown', onEscKeyPress);
//       },
//     }
//   );
//   instance.show();

//   function onEscKeyPress(e) {
//     const ESC_KEY_CODE = 'Escape';
//     const isEscKey = e.code === ESC_KEY_CODE;
//     if (!isEscKey) return;
//     instance.close();
//   }
// }

// ------- 2nd variant --------------------------------------------------------------------------------

const instance = basicLightbox.create(
  `
<img width="1280" height="auto" src="">`,
  {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  }
);

function onImgClick(e) {
  e.preventDefault();
  const datasetSource = e.target.dataset.source;
  if (!datasetSource) return;
  instance.element().querySelector('img').src = datasetSource;
  instance.show();
}

function onEscKeyPress(e) {
  if (e.code !== 'Escape') return;
  instance.close();
}
