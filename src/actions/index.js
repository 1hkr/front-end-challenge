export function fetchMovie(query) {
  const promise = fetch(`https://sbot-fe-test.herokuapp.com/api/v1/movies?query=${query}`)
    .then(response => response.json());

  return {
    type: 'FETCH_MOVIE',
    payload: promise
  };
}

export function setActiveCity(activeCity) {
  return {
    type: 'SET_ACTIVE_CITY',
    payload: activeCity
  };
}
