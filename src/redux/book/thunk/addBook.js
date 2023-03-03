import { addBookAction } from "../actions";

const addBook = (book) => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:9000/books", {
            method: "POST",
            body: JSON.stringify(book),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const bookItem = await response.json();

        dispatch(addBookAction(bookItem));
    };
};

export default addBook;