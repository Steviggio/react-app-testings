import React from 'react';
// import AddingCountry from './components/AddCountry/AddCountry'; // Assure-toi d'importer correctement AddingCountry
// import Layout from './Layout/Layout';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import FetchInfo from './components/FetchInfo/Fetch-info';
import AddingCountry from './components/AddCountry/AddCountry';
import GetACountry from './components/GetACountry/GetACountry';

let router = createBrowserRouter([
  {
    path: '*', Component: Root
  },
])


export default function App() {
  return <RouterProvider router={router} />
}

function Root() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add-country' element={<AddingCountry />} />
      <Route path='/countries' element={<FetchInfo />} />
      <Route path="/get-a-country" element={<GetACountry />} />
    </Routes>
  )
}



function Home() {
  return (
    <>
      <main>
        <div><p>Voici le contenu principal de la page "Root" </p></div>
      </main>
    </>
  );
}