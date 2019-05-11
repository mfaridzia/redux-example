import {
  ADD_ARTICLE,
  FOUND_BAD_WORD,
  CLEAR_BAD_WORD
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
