import { EDIT_BOOK_BY_ID } from "./actionTypes";

export const editBookByIdAction = (id) => {
    return {
        type: EDIT_BOOK_BY_ID,
        payload: id,
    };
};