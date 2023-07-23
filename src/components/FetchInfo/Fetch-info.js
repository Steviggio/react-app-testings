// A component reaching a backend database with a fetch function
import React, { useEffect, useState } from "react";

function FetchInfo() {
  const [data, setData] = useState([]);
// Fetching the datas from my the configured backend route
  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('An error as occurred during the gathering process of the datas'));
  }, []);

  // const info = 'Voici des infos récupérées'
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.country}</li>
        ))}
      </ul>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.language}</li>
        ))}
      </ul>
    </div>
  )
}

export default FetchInfo;