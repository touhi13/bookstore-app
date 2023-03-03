import { SEARCH_BOOK } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_BOOK:
            return action.payload

        default:
            return state;
    }
}

export default reducer;