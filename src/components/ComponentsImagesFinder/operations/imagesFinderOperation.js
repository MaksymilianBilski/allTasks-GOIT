import axios from 'axios';

const API_KEY = '30839127-8a41b37b8b94b94b2633e44b5';
const imagesFind = axios.create({ baseURL: 'https://pixabay.com/api/' });

export const fetchImages = async query => {
  const response = await imagesFind.get(
    `?key=${API_KEY}&q=${query}&image_type=photo&per_page=12`
  );
  return response.data;
};
