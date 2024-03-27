import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Pages/Home";
import ErrorPage from "./Components/ErrorPage";
import BookDetails from "./Pages/ListedBooks";
import ListedBooks from "./Pages/ListedBooks";
import DetailsBB from "./Pages/DetailsBB";
import PagesToRead from "./Pages/PagesToRead";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://im-sanny.github.io/fake-data/data.json"),
      },
      {
        path: "/detailsBB/:bookId",
        element:<DetailsBB></DetailsBB>,
        loader: () => fetch("https://im-sanny.github.io/fake-data/data.json"),
      },
      {
        path:"/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("https://im-sanny.github.io/fake-data/data.json"),
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
