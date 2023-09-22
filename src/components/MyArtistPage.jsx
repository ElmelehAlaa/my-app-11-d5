import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MyTracks from "./MyTracks";

const MyArtistPage = () => {
  const params = useParams();
  const [artistClicked, setArtistClicked] = useState(null);
  const artistFetched = useSelector((state) => state.artist.content);
  console.log(artistFetched);
  console.log(params);
  const getArtistClicked = async () => {
    try {
      const response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/" + params.IDArtist, {
        headers: {
          "X-RapidAPI-Key": "97bfe8c64dmsh1d550482516eb97p178bd4jsn8289c987dce8",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setArtistClicked(data);
        console.log(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getArtistClicked();
  }, []);

  return (
    <>
      <div className="col-12 col-md-9 offset-md-3 mainPage">
        {artistClicked && (
          <div className="row">
            <h2 className=" mt-5 text-white fs-1">{artistClicked.name}</h2>
            <div
              className="col-12  mt-5"
              style={{
                backgroundImage: "url(" + artistClicked.picture_xl + ")",
                height: "500px",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div id="followers"></div>
              <div className="d-flex justify-content-center" id="button-container">
                <button className="btn btn-success mr-2 mainButton d-none" id="playButton">
                  PLAY
                </button>
                <button className="btn btn-outline-light mainButton d-none" id="followButton">
                  FOLLOW
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="row mb-3">
          <div className="col-10  col-md-10 col-lg-10 p-0">
            <div className="mt-4 d-flex justify-content-start">
              <h2 className="text-white font-weight-bold">Tracks</h2>
            </div>
            <div className="pt-5 mb-5">
              <div className="row" id="apiLoaded">
                {artistFetched && <MyTracks artistFetched={artistFetched} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyArtistPage;
