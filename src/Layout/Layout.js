import Footer from './Footer/Footer';
import Header from "./Header/Header";
import AddingCountry from '../components/AddCountry/AddCountry';
// import { Children } from 'react';

export default function Layout() {
  return (
    <>
      <Header />
      <main><AddingCountry /></main>
      <Footer />
    </>
  )
}