import { NavLink } from "react-bootstrap";

const MyTopBar = () => {
  return (
    <div className="col-9  mainLinks d-none d-md-flex">
      <NavLink>TRENDING</NavLink>
      <NavLink>PODCAST</NavLink>
      <NavLink>MOODS AND GENRES</NavLink>
      <NavLink>NEW RELEASES</NavLink>
      <NavLink>DISCOVER</NavLink>
    </div>
  );
};
export default MyTopBar;
