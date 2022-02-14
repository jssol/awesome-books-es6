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

const setLocalStore = (books) => {
  localStorage.setItem('bookStore', JSON.stringify(books));
};

const removeBook = (index) => {
  books.splice(index, 1);
  setLocalStore(books);
};

export const displayBooks = () => {
  bookList.innerHTML = '';
  books.forEach((book, index) => {
    const li = document.createElement('li');
    const article = document.createElement('article');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const button = document.createElement('button');

    title.className = 'book_title';
    title.textContent = book.title;
    author.className = 'book_author';
    author.textContent = book.author;
    button.className = 'remove_book_btn';
    button.textContent = 'Remove';

    article.append(title, author, button);
    li.className = 'book';
    li.appendChild(article);

    bookList.appendChild(li);

    button.addEventListener('click', () => {
      removeBook(index);
      displayBooks();
    });
  });
};

export const addBook = (title, author) => {
  const book = {
    author,
    title,
  };
  books.push(book);
  displayBooks();
  setLocalStore(books);
};
