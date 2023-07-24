import React from 'react';
import { Form } from 'react-router-dom';

export default function SeeCountries() {
  const [data, setData] = useState([]);
  // Fetching the datas from my the configured backend route
  useEffect(() => {
    fetch("http://localhost:8000/country", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('An error as occurred during the gathering process of the datas'));
  }, [])
  return (
    <div>
      <ul>
        {data.map((country) => {
          <li key={country.id}>{country.name}</li>
        })}
      </ul>
    </div>
  );
}
