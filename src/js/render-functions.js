import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createImageCardMarkup(image) {
  return `
        <li class="gallery-item">
            <a href="${image.largeImageURL}" class="gallery-link" alt="${image.tags}">
                <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-image">
            </a>
            <div class="info-box">
                <p class="info-item"><b>Likes</b> ${image.likes}</p>
                <p class="info-item"><b>Views</b> ${image.views}</p>
                <p class="info-item"><b>Comments</b> ${image.comments}</p>
                <p class="info-item"><b>Downloads</b> ${image.downloads}</p>
            </div>
        </li>
    `;
}

export function createGallery(images) {
  const markup = images.map(createImageCardMarkup).join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  if (loaderEl) {
    loaderEl.classList.remove('is-hidden');
  }
}

export function hideLoader() {
  if (loaderEl) {
    loaderEl.classList.add('is-hidden');
  }
}
