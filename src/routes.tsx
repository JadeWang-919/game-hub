import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./pages/GameDetailPage";
import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { index: true, element: <Homepage></Homepage> },
      { path: "games/:id", element: <GameDetailPage></GameDetailPage> },
    ],
  },
]);

export default router;
