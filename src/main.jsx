import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import ErrorPage from "./routes/ErrorPage";
import Root from "./routes/Root";
import ListShadow from "./routes/ListShadow";
import "./index.css";
import {ThemeProvider} from "./providers/useTheme";
import ToastProvider  from "./providers/ToastProvider";
import ModelProvider from "./providers/ModelProvider";

import {loader as infoLoader } from "./routes/InfoPage";
import InfoPage from "./routes/InfoPage";
import {action as rootAction} from './routes/Root'
import { loader as rootLoader } from "./routes/Root";
import { loader as shadowLoader } from "./routes/ListShadow"

const queryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
        {
          path: '/list/shadow',
          element: <ListShadow />,
          loader: shadowLoader,
        },
        {
          path:'/info/:digimon',
          element: <InfoPage />,
          loader: infoLoader,
        }
      ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ToastProvider />
      <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ModelProvider />
        <RouterProvider router={router} />
      </ThemeProvider>
      </QueryClientProvider>
  </React.StrictMode>
);