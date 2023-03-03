import { ADD_BOOK, DELETE_BOOK, FETCH_BOOKS, UPDATE_BOOK } from "./actionTypes";

export const fetchBooksAction = (books) => {
    return {
        type: FETCH_BOOKS,
        payload: books,
    };
};

export const addBookAction = (book) => {
    return {
        type: ADD_BOOK,
        payload: book
    }
}
export const updateBookAction = (book) => {
    return {
        type: UPDATE_BOOK,
        payload: book
    }
}
export const deleteBookAction = (id) => {
    return {
        type: DELETE_BOOK,
        payload: id
    }
}
