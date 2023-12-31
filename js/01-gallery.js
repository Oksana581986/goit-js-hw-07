import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');
let isLightboxOpen = false;

function createGalleryItem(item) {
    const li = document.createElement('li');
    li.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;

    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.preview;
    image.setAttribute('data-source', item.original);
    image.alt = item.description;

    link.appendChild(image);
    li.appendChild(link);

    return li;
}

const galleryItem = galleryItems.map(item => createGalleryItem(item));

galleryList.append(...galleryItem);

galleryList.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('gallery__image')) {
        const source = e.target.getAttribute('data-source');
        const description = e.target.alt;

        const lightbox = basicLightbox.create(
            `<img src="${source}" alt="${description}" />`, 
            {
            onShow: (lightbox) => {
        isLightboxOpen = true;
            },
            onClose: (lightbox) => {
        isLightboxOpen = false;
            }
        }
    );

    lightbox.show();
}
});
