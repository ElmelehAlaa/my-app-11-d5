export const ADD_TO_SELECTED = "ADD_TO_SELECTED";

export const GET_ARTIST = "GET_ARTIST";
export const GET_QUERY = "GET_QUERY";

export const addToFavoritesAction = (songSelected) => ({ type: ADD_TO_SELECTED, payload: songSelected });

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
