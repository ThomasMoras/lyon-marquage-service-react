import {
  Outlet,
  NavLink,
  Link,
  useLoaderData,
  Form,
  redirect,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import ResponsiveAppBar from "../components/Navbar";

export default function Root() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <ResponsiveAppBar />
      {/* <header>
        <Link className="site-logo" to="/">
          Lyon Marquage Service
        </Link>
        <nav>
          <NavLink to="home">Accueil</NavLink>
          <NavLink to="serigraphie">Serigraphie</NavLink>
        </nav>
      </header> */}
      {/* 
      <div id="sidebar">
        <h1>Root</h1>
        <nav>
          <ul>
            <li key="home">
              <NavLink to="home">Home</NavLink>
            </li>
            <li key="serigraphie">
              <NavLink to="serigraphie">Sérigraphie</NavLink>
            </li>
            <li key="broderie">
              <NavLink to="broderie">Broderie</NavLink>
            </li>
            <li key="enseigne">
              <NavLink to="enseigne">Enseignes</NavLink>
            </li>
          </ul>
        </nav>
      </div> */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
