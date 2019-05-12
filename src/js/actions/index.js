import {
  ADD_ARTICLE,
  FOUND_BAD_WORD,
  CLEAR_BAD_WORD,
  DATA_LOADED
} from "../constants/action-types";

// Action Creators
export function addArticle(payload) {
  return {
    type: ADD_ARTICLE,
    payload
  };
}

export function foundBadWord() {
  return {
    type: FOUND_BAD_WORD
  };
}

export function clearBadWord() {
  return {
    type: CLEAR_BAD_WORD
  };
}

export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: DATA_LOADED,
          payload: json
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
