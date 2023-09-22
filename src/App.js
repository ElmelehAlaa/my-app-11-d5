import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MySideBar from "./components/MySiderBar";
import MyPlayer from "./components/MyPlayer";
import MyTopBar from "./components/MyTopBar";
import { Container, Row } from "react-bootstrap";
import MyMain from "./components/MyMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyArtistPage from "./components/MyArtistPage";
import MyAlbumPage from "./components/MyAlbumPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container fluid>
          <Row>
            <MyTopBar />
            <MySideBar />
            <Routes>
              <Route path="/" element={<MyMain />} />
              <Route path="/artist/:IDArtist" element={<MyArtistPage />} />
              <Route path="/album/:albumID" element={<MyAlbumPage />} />
            </Routes>
            <MyPlayer />
          </Row>
        </Container>
        <MyPlayer />
      </BrowserRouter>
    </>
  );
}

export default App;
