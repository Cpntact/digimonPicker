import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/Root";
import ListShadow from "./routes/ListShadow";
import ErrorPage from "./routes/ErrorPage";
import InfoPage from "./routes/InfoPage";
import ScorePage from "./routes/ScorePage";

import {ThemeProvider} from "./providers/useTheme";
import ToastProvider  from "./providers/ToastProvider";
import ModelProvider from "./providers/ModelProvider";

import "./index.css";

import { loader as infoLoader } from "./routes/InfoPage";
import { loader as listLoader } from "./routes/ListShadow";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
        {
          path: '/list/shadow',
          element: <ListShadow />,
          loader: listLoader,
        },
        {
          path:'/info/:digimon',
          element: <InfoPage />,
          loader: infoLoader,
        },
        {
          path: '/list/score',
          element: <ScorePage />,
        }
      ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ToastProvider />
      <ThemeProvider>
        <ModelProvider />
        <RouterProvider router={router} />
      </ThemeProvider>
  </React.StrictMode>
);