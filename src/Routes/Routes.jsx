import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: async () => {
          const res = await fetch("/HomeApps.json");
          return res.json();
        },
        Component: Home,
      },
      {
        path: "/apps",
        loader: async () => {
          const res = await fetch("/HomeApps.json");
          return res.json();
        },
        Component: Apps,
      },
      {
        path: "/installation",
        loader: async () => {
          const res = await fetch("/HomeApps.json");
          return res.json();
        },
        Component: Installation,
      },
      {
        path: "/AppDetails/:id",
        loader: async () => {
          const res = await fetch("/HomeApps.json");
          return res.json();
        },
        Component: AppDetails,
      },
    ],
  },
]);
