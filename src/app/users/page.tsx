import React, { useEffect, useState } from 'react';

export function Page() {
  const [data, setData] = useState(null);

  async function fetching() {
    try {
      const fetchData = await fetch('http://localhost:3000/server');
      const Data = await fetchData.json();
      setData(Data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div>
      <h1>Page</h1>
      <pre>{data ? JSON.stringify(data, null, 2) : 'Loading...'}</pre>
    </div>
  );
}
