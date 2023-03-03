import { SEARCH_BOOK } from "./actionTypes";

export const bookSearchAction = (query) => {
    return {
      type: SEARCH_BOOK,
      payload: query
    };
  };