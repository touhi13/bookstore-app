import { editBookByIdAction } from "../actions";

const editBook = (id) => async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${id}`);
    const book = await response.json();
    dispatch(editBookByIdAction(book));
};

export default editBook;