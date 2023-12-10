// pages/amadeus.js
import { useEffect, useState } from 'react';

const AmadeusPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://bayescape-goghlabs-projects.vercel.app/amadeus')
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error(error));
  }, []); // <- Added closing brace here

  return (
    <div>
      <h1>Amadeus Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default AmadeusPage;
