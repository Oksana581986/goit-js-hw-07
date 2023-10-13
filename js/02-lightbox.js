import { galleryItems } from './gallery-items.js';
const galleryList = document.querySelector('.gallery');

function createGalleryItem(item) {
    const li = document.createElement('li');
    li.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;

    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.preview;
    image.alt = item.description;

    link.appendChild(image);
    li.appendChild(link);

    return li;
}
galleryItems.forEach(item => {
    galleryList.appendChild(createGalleryItem(item));
});

const lightbox = new SimpleLightbox('.gallery__item a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    disableScroll: false,
    history: false,
});

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') {
        lightbox.prev();
    } else if (e.key === 'ArrowRight') {
        lightbox.next();
    }
});