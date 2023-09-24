import { useSelector } from "react-redux";

import MyTracks from "./MyTracks";

const MyMain = () => {
  //   const [randomRockArtist, setRandomRockArtist] = useState([]);
  //   const [randomPopArtist, setRandomPopArtist] = useState([]);
  //   const [randomHipHopArtist, setRandomHipHopArtist] = useState([]);
  const artistQuered = useSelector((state) => state.artist.content);

  //   let rockArtists = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];
  //   let popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];
  //   let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

  //   while (rockArtists.length < 4) {
  //     let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)];
  //     if (!randomRockArtist.includes(artist)) {
  //       setRandomRockArtist(artist);
  //     }
  //   }
  //   while (popArtists.length < 4) {
  //     let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)];
  //     if (!randomPopArtist.includes(artist)) {
  //       setRandomPopArtist(artist);
  //     }
  //   }
  //   while (hipHopArtists.length < 4) {
  //     let artist = hipHopArtists[Math.floor(Math.random() * rockArtists.length)];
  //     if (!randomHipHopArtist.includes(artist)) {
  //       setRandomHipHopArtist(artist);
  //     }
  //   }

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex"></div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="searchResults">
            <h2>Search Results</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {artistQuered.data &&
                artistQuered.data.map((singleAlbum) => <MyTracks key={singleAlbum.id} artistFetched={singleAlbum} />)}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            ></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            ></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMain;
