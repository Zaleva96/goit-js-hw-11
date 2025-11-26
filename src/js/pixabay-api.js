import axios from 'axios';

const API_KEY = '53408779-ee8ac1d107b84f4a01a68d938';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  try {
    const response = await axios.get(BASE_URL, { params });

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images from Pixabay API.');
  }
}
