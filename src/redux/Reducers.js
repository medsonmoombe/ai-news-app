

const FETCH_RESULTS = 'ai-news-app/Reducers';

const fetchResult = (payload) => ({
  type: FETCH_RESULTS,
  payload,
});

const initialState = [];
const reducerResult = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESULTS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export { fetchResult, reducerResult };