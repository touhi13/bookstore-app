import { fetchBooksAction } from "../actions";

const fetchBooks = async (dispatch) => {
    const response = await fetch("http://localhost:9000/books");
    const books = await response.json();

    dispatch(fetchBooksAction(books));
};

export default fetchBooks;