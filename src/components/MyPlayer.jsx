const MyPlayer = () => {
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row">
        <div className="col-lg-10 offset-lg-2">
          <div className="row">
            <div>
              <p className="text-white px-5"> canzone</p>
            </div>

            <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
              <div className="row">
                <div>
                  <span>
                    <img src="assets/playerbuttons/Shuffle.png" alt="shuffle" />
                  </span>
                  <span>
                    <img src="assets/playerbuttons/Previous.png" alt="shuffle" />
                  </span>
                  <span>
                    <img src="assets/playerbuttons/Play.png" alt="shuffle" />
                  </span>
                  <span>
                    <img src="assets/playerbuttons/Next.png" alt="shuffle" />
                  </span>
                  <span>
                    <img src="assets/playerbuttons/Repeat.png" alt="shuffle" />
                  </span>
                </div>
              </div>
            </div>
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
