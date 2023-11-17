import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '?key=39890797-00190d6beecffd2ffd1001b1e&';

export const fetchImg = async (searctWords, page, state) => {
  //обрізаємо id
  const cutSearchWords = searctWords.slice(searctWords.indexOf('/') + 1);
  //якщо робити перевірку тут, то далі в Арр ломається код, бо не отримує обʼєкт, на який очікує
  //if (!cutSearchWords) {
  //   return;
  //  }
  // робимо запит
  const response = await axios.get(
    `${KEY}q=${cutSearchWords}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
  );
  return response.data;
};
