import { useState, useEffect } from "react";
import "./Listing.scss";


export default function Listing() {
  const [country, setCountry] = useState([]);
  const [bio, setBio] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/countries")
      .then((response) => response.json())
      .then((data) => {
        setCountry(data);
      })
      .catch((error) => {
        console.error('An error occurred during the request');
      });
  }, []);

  return (
    <>
    </>
  )
}
