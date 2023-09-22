import { Link } from "react-router-dom";

const MyTracks = ({ artistFetched, singleAlbum }) => {
  return (
    <>
      {artistFetched ? (
        artistFetched.data.map((track) => (
          <div className="col-3 text-center" key={track.id}>
            <Link to={`/album/${track.album.id}`}>
              <img className="img-fluid " src={`${track.album.cover_medium}`} alt="1" />
            </Link>
            <p>
              <Link to={`/album/${track.album.id}`}>
                Album:
                {track.album.title}
              </Link>{" "}
              <br />
              <Link to={`/artist/${track.artist.id}`}>Artist: {track.artist.name}</Link>
            </p>
          </div>
        ))
      ) : (
        <div className="col text-center" key={singleAlbum.id}>
          <Link to={`/album/${singleAlbum.album.id}`}>
            <img className="img-fluid" src={`${singleAlbum.album.cover_medium}`} alt="1" />
          </Link>
          <p>
            <Link to={`/album/${singleAlbum.id}`}>
              Album:
              {singleAlbum.title}
            </Link>
            <Link to={`/artist/${singleAlbum.artist.id}`}>Artist: {singleAlbum.artist.name}</Link>
          </p>
        </div>
      )}
    </>
  );
};
export default MyTracks;
