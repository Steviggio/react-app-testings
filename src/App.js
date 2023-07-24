import React from 'react';
// import AddingCountry from './components/AddCountry/AddCountry'; // Assure-toi d'importer correctement AddingCountry
// import Layout from './Layout/Layout';
import { createBrowserRouter, RouterProvider, Routes, Router, Route, useLoaderData, Form, useActionData } from 'react-router-dom';

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
    </Routes>
  )
}

// Form's elements
function AddingCountry() {
  const errors = useActionData();
  return (
    <>
      <Form method='post' action='http://localhost:8000/country'>
        <input type='text' name='country' placeholder='Name of the country' />
        <input type='text' name='language' placeholder='Language' />
        <input type='text' name='capital' placeholder='Capital' />
        <button type='submit'>Create</button>
      </Form>
    </>
  );
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