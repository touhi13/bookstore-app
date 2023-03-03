import { updateBookAction } from "../actions";

export const updateBook = (bookId, book) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/books/${bookId}`, {
            method: "PUT",
            body: JSON.stringify(book),
            headers: {
                "Content-Type": "application/json ; charset=UTF-8",
            },
        });

        const updateBook = await response.json();
        dispatch(updateBookAction(updateBook));
    };
};