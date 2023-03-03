import { EDIT_BOOK_BY_ID } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_BOOK_BY_ID:
            return action.payload;

        default:
            return state;
    }
}

export default reducer;