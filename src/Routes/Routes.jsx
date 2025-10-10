import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { lazy, Suspense } from "react";
import { PacmanLoader } from "react-spinners";

const Home = lazy(() => import("../Pages/Home/Home"));
const Apps = lazy(() => import("../Pages/Apps/Apps"));
const Installation = lazy(() => import("../Pages/Installation/Installation"));
const AppDetails = lazy(() => import("../Pages/AppDetails/AppDetails"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        loader: async () => {
          const res = await fetch("/HomeApps.json");
          return res.json();
        },
        Component: () => (
          <Suspense
            fallback={
              <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                <PacmanLoader color="#632ee3" size={50} />
              </div>
            }
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/apps",
        loader: async () => {
          const res = await fetch("/HomeApps.json");
          return res.json();
        },
        Component: () => (
          <Suspense
            fallback={
              <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                <PacmanLoader color="#632ee3" size={50} />
              </div>
            }
          >
            <Apps />
          </Suspense>
        ),
      },
      {
        path: "/installation",
        loader: async () => {
          const res = await fetch("/HomeApps.json");
          return res.json();
        },
        Component: () => (
          <Suspense
            fallback={
              <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                <PacmanLoader color="#632ee3" size={50} />
              </div>
            }
          >
            <Installation />
          </Suspense>
        ),
      },
      {
        path: "/AppDetails/:id",
        loader: async () => {
          const res = await fetch("/HomeApps.json");
          return res.json();
        },
        Component: () => (
          <Suspense
            fallback={
              <div className="flex items-center justify-center">
                <PacmanLoader color="#632ee3" size={50} />
              </div>
            }
          >
            <AppDetails />
          </Suspense>
        ),
      },
    ],
  },
]);
