import { combineReducers } from "redux";
import bookReducer from "./book/reducer";
import searchReducer from "./search/reducer";
import editBookReducer from "./editBook/reducer";

const rootReducer = combineReducers({
    books: bookReducer,
    search: searchReducer,
    editBook: editBookReducer,
});

export default rootReducer;