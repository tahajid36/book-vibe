import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import BookDetails from "../Components/BookDetails/BookDetails";
import ReadList from "../Components/ReadList/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader:()=> fetch('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json').then(res=> res.json()),
        path: '/',
        Component: Home,
      },
      {
        path: '/about',
        Component: About
      },
      {
        path: '/bookDetails/:id',
        loader:()=> fetch('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json').then(res=> res.json()),
        Component: BookDetails
      },
      {
        path: 'readList',
        loader:()=> fetch('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json').then(res=> res.json()),
        Component: ReadList
      }

    ],
  },
]);
