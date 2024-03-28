import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Pages/Home";
import ErrorPage from "./Components/ErrorPage";
import ListedBooks from "./Pages/ListedBooks";
import DetailsBB from "./Pages/DetailsBB";
import PagesToRead from "./Pages/PagesToRead";
import ReadBooks from "./Components/ReadBooks";
import Wishlist from "./Components/Wishlist";
import Blog from "./Pages/Blog";
import AboutUS from "./Pages/AboutUS"

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
        element: <DetailsBB></DetailsBB>,
        loader: () => fetch("https://im-sanny.github.io/fake-data/data.json"),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("https://im-sanny.github.io/fake-data/data.json"),
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: () =>
              fetch("https://im-sanny.github.io/fake-data/data.json"),
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
            loader: () =>
              fetch("https://im-sanny.github.io/fake-data/data.json"),
          },
        ],
      },
      {
        path: "pagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/blog",
          element: <Blog></Blog>,
          loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7")
      },
      {
        path: "/aboutUs",
        element: <AboutUS></AboutUS>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
