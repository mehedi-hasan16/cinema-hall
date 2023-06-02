import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import MovieDetails from './components/MovieDetails/MovieDetails.jsx';
import BookMovieForm from './components/BookMovieForm/BookMovieForm.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    loader: ()=> fetch('https://api.tvmaze.com/search/shows?q=all')
  },
  {
    path:'/details/:id',
    element: <MovieDetails></MovieDetails>,
    loader: ({params})=>fetch(`https://api.tvmaze.com/shows/${params.id}`)
  },
  {
    path:'/bookMovie',
    element: <BookMovieForm></BookMovieForm>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
