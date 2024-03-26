import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Conversations from "../pages/conversation";
import Integrations from "../pages/integrations/Integrations";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "index", element: <Home /> },
      { path: "conversations", element: <Conversations /> },
      { path: "integrations", element: <Integrations /> },
    ],
  },
]);
