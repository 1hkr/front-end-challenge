export default function(state = null, action) {
  switch (action.type) {
  case 'FETCH_MOVIE':
      return [action.payload];
  default:
      return state;
  }
}