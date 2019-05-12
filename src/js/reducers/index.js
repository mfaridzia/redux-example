import {
  ADD_ARTICLE,
  FOUND_BAD_WORD,
  CLEAR_BAD_WORD,
  DATA_LOADED
} from "../constants/action-types";

// State di redux berada di Reducers
const initialState = {
  articles: [{ title: "Learn React", id: 1 }, { title: "Learn Redux", id: 2 }],
  badWordNotif: "",
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  } else if (action.type === FOUND_BAD_WORD) {
    return {
      ...state,
      badWordNotif: "Tidak boleh ada kata Money dan Spam!"
    };
  } else if (action.type === CLEAR_BAD_WORD) {
    return {
      ...state,
      badWordNotif: ""
    };
  } else if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
