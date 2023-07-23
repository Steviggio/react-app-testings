import Footer from './Footer/Footer';
import Header from "./Header/Header";
import { Children } from 'react';

export default function Layout() {

  return (
    <>
      <Header />
      <main>{Children}</main>
      <Footer />
    </>
  )
}