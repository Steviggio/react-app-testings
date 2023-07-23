import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FetchInfo from './components/FetchInfo/Fetch-info';
// import App from './App';
import Root from './Routes/Root';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import AddingCountry from './components/AddCountry/AddCountry';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: <FetchInfo />,
  },
  {
    path: "/Country",
    element: <Layout />,
    children: <AddingCountry />
  }
]);

ReactDOM.render(
  <RouterProvider router={router}>
    <React.StrictMode>
      <Routes>
        {router}
      </Routes>
    </React.StrictMode>
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
