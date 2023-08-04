import React, { useEffect, useState } from "react";
import "./GetACountry.scss";

export default function GetACountry() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/countries")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('An error occurred during the request');
        setLoading(false); // Set loading to false in case of error too
      });
  }, []);

  const handleSelectChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <>
      {loading ? (
        <div className="waiting-message">Loading...</div> // Show a loading message or spinner while data is loading
      ) : (
        <div>
          <label>
            <select value={selectedCountry} onChange={handleSelectChange}>
              <option value="">Select a country</option>
              {data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          {selectedCountry && <p>You selected: {selectedCountry} </p>}
          {selectedCountry && <p>Here is the json table {selectedCountry} </p>}
        </div>
      )}
    </>
  );
}
