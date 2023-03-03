import { ADD_BOOK, DELETE_BOOK, FETCH_BOOKS, UPDATE_BOOK } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS:
            return action.payload;

        case ADD_BOOK:
            return [...state, action.payload];

        case UPDATE_BOOK:
            return state.map((book) => book.id === action.payload.id ? { ...book, ...action.payload } : book);

        case DELETE_BOOK:
            return state.filter((book) => book.id !== action.payload);

        default:
            return state;
    }
}

export default reducer;
