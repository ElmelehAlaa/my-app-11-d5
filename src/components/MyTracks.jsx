import { Link } from "react-router-dom";

const MyTracks = ({ artistFetched, singleAlbum }) => {
  return (
    <>
      {artistFetched && (
        <div className="col-3 text-center" key={artistFetched.id}>
          <Link to={`/album/${artistFetched.album.id}`}>
            <img className="img-fluid " src={`${artistFetched.album.cover_medium}`} alt="1" />
          </Link>
          <p>
            <Link to={`/album/${artistFetched.album.id}`}>
              Album:
              {artistFetched.album.title}
            </Link>{" "}
            <br />
            <Link to={`/artist/${artistFetched.artist.id}`}>Artist: {artistFetched.artist.name}</Link>
          </p>
        </div>
      )}
    </>
  );
};
export default MyTracks;
