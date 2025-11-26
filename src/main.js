import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const formEl = document.querySelector('.form');
const inputEl = formEl.elements['search-text'];

function showToast(message, color = 'red') {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
    backgroundColor: color,
  });
}

async function onFormSubmit(event) {
  event.preventDefault();

  const query = inputEl.value.trim();

  if (query === '') {
    showToast('Please enter a search query!', '#FFA000');
    return;
  }

  clearGallery();

  showLoader();

  try {
    const data = await getImagesByQuery(query);
    const images = data.hits;

    if (images.length === 0) {
      showToast(
        'Sorry, there are no images matching your search query. Please try again!',
        '#EF4040'
      );
    } else {
      createGallery(images);
    }
  } catch (error) {
    showToast('Something went wrong. Please try again later.', '#EF4040');
    console.error(error);
  } finally {
    hideLoader();

    formEl.reset();
  }
}

formEl.addEventListener('submit', onFormSubmit);
