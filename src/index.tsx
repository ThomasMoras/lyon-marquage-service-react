import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  Routes,
  Route,
  BrowserRouter,
  NavLink,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import ErrorPage from "./pages/error-page";
import Serigraphie from "./pages/serigraphie";
import Realisation from "./pages/realisation";
import Collection from "./pages/collection";
import Objets_Publicitaire from "./pages/objet_publicitaire";
import Enseigne from "./pages/enseigne";
import Broderie from "./pages/broderie";
import Root from "./pages/root";
import Contact from "./pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: homeLoader,
    // action: homeAction,
    children: [
      {
        path: "/home",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/serigraphie",
        element: <Serigraphie />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/broderie",
        element: <Broderie />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/enseigne",
        element: <Enseigne />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/objet-publicitaire",
        element: <Objets_Publicitaire />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/collections",
        element: <Collection />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/realisations",
        element: <Realisation />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
