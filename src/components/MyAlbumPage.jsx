import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToFavoritesAction } from "../redux/action";

const MyAlbumPage = () => {
  const params = useParams();
  const [albumClicked, setAlbumClicked] = useState(null);

  console.log(params);
  const getAlbumClicked = async () => {
    try {
      const response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + params.albumID, {
        headers: {
          "X-RapidAPI-Key": "97bfe8c64dmsh1d550482516eb97p178bd4jsn8289c987dce8",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setAlbumClicked(data);
        console.log(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAlbumClicked();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dispatch = useDispatch();

  return (
    <Col xs={"9"} className="offset-2">
      {albumClicked && (
        <>
          <div className="mt-4 text-center">
            <img src={albumClicked.cover_medium} style={{ width: "200px" }} className="card-img " alt="Album" />
            <p className="album-title">{albumClicked.title}</p>
          </div>
          <div className="text-center">
            <p className="artist-name">{albumClicked.artist.name}</p>
          </div>
          <div className="mt-4 text-center">
            <button id="btnPlay" className="btn btn-success" type="button">
              Play
            </button>
          </div>
        </>
      )}
      {albumClicked &&
        albumClicked.tracks.data.map((singleTrack, i) => (
          <div
            key={i}
            className="py-3 trackHover"
            onClick={() => {
              dispatch(addToFavoritesAction(singleTrack));
            }}
          >
            <p className="card-title trackHover px-3" style={{ color: "white" }}>
              {singleTrack.title}
            </p>
            <small className="duration" style={{ color: "white" }}>
              {Math.floor(parseInt(singleTrack.duration) / 60)}:
              {parseInt(singleTrack.duration) % 60 < 10
                ? "0" + (parseInt(singleTrack.duration) % 60)
                : parseInt(singleTrack.duration) % 60}
            </small>
          </div>
        ))}
    </Col>
  );
};

export default MyAlbumPage;
