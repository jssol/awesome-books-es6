import setTime from './modules/time.js';
import { displayBooks, addBook } from './modules/content.js';

const bookList = document.querySelector('.book_list');
const addBtn = document.querySelector('.add_book_btn');
const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');
let books = [
  {
    author: 'ipsum',
    title: 'Testyy',
  },
  {
    author: 'lorem',
    title: 'Testeroo',
  },
];

setTime();
setInterval(setTime, 1000);

addBtn.addEventListener('click', () => {
  if (titleInput.value && authorInput.value) {
    addBook(titleInput.value, authorInput.value);
    titleInput.value = '';
    authorInput.value = '';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('bookStore')) {
    books = JSON.parse(localStorage.getItem('bookStore'));
    displayBooks();
  } else if (books) {
    displayBooks();
  }
});