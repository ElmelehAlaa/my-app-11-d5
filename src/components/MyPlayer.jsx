import { useSelector } from "react-redux";

const MyPlayer = () => {
  const songSelected = useSelector((state) => state.selected.content);
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="col-lg-10 offset-lg-2 row">
        <div className="col-4 d-flex mt-3 px-4">
          {songSelected && (
            <div className="d-flex">
              <div>
                <img src={songSelected.album.cover_small} alt="" style={{ width: "50px" }} />
              </div>
              <div className="px-3">
                <p className="text-white m-0"> {songSelected.title_short} </p>
                <p className="text-white m-0"> {songSelected.artist.name} </p>
              </div>
            </div>
          )}
        </div>
        <div className="col-lg-6 col-md-4 col-12 - offset-3 offset-md-4 offset-lg-5 playerControls m-0 d-flex p-0">
          <div>
            <span className="px-4">
              <img src="assets/playerbuttons/Shuffle.png" alt="shuffle" />
            </span>
            <span className="px-4">
              <img src="assets/playerbuttons/Previous.png" alt="shuffle" />
            </span>
            <span className="px-4">
              <img src="assets/playerbuttons/Play.png" alt="shuffle" />
            </span>
            <span className="px-4">
              <img src="assets/playerbuttons/Next.png" alt="shuffle" />
            </span>
            <span className="px-4">
              <img src="assets/playerbuttons/Repeat.png" alt="shuffle" />
            </span>
          </div>
          <div className="row justify-content-center playBar py-3">
            <div className="col-8 col-md-6">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyPlayer;
