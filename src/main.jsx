import * as React from "react";
import * as ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Layout from "./pages/Layout/Layout"
import LetterList from "./pages/LetterList/LetterList"
import ErrorBoundary from "./pages/ErrorBoundary/ErrorBoundary"

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <LetterList />,
      },
      {
        path: "letters",
        element: <LetterList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

