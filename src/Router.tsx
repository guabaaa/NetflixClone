import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

const Home = React.lazy(() => import("./components/pages/Home"));
const Tv = React.lazy(() => import("./components/pages/Tv"));
const Movie = React.lazy(() => import("./components/pages/Movie"));
const Bookmark = React.lazy(() => import("./components/pages/Bookmark"));
const SearchResult = React.lazy(() => import("./components/pages/SearchResult"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/:pathnameId",
                element: <Home />,
            },
            {
                path: "tv",
                element: <Tv />,
            },
            {
                path: "/tv/:pathnameId",
                element: <Tv />,
            },
            {
                path: "movie",
                element: <Movie />,
            },
            {
                path: "/movie/:pathnameId",
                element: <Movie />,
            },
            {
                path: "bookmark",
                element: <Bookmark />,
            },
            {
                path: "/bookmark/:pathnameId",
                element: <Bookmark />,
            },
            {
                path: "search",
                element: <SearchResult />,
            },
            {
                path: "/search/:pathnameId",
                element: <SearchResult />,
            },
        ],
    },
]);

export default router;