export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const GET_ARTIST = "GET_ARTIST";
export const GET_QUERY = "GET_QUERY";

export const addToFavoritesAction = (songSelected) => ({ type: ADD_TO_FAVORITES, payload: songSelected });
export const removeFromFavoritesAction = (songSelected) => ({ type: REMOVE_FROM_FAVORITES, payload: songSelected });
export const getQuery = (queryArtist) => ({ type: GET_QUERY, payload: queryArtist });
export const getArtist = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + getState().query.content);
      if (resp.ok) {
        let fetchedArtist = await resp.json();
        dispatch({ type: GET_ARTIST, payload: fetchedArtist });
      } else {
        console.log("error");
        alert("Errore nel reperimento dei dati ");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
