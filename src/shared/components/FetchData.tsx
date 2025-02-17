import React, { useEffect, useState } from 'react';

// Fix this component so it properly fetches data and handles loading state.
const FetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>Data:</h3>
      <p>{data.title}</p>
    </div>
  );
};

export default FetchData;
