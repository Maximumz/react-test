import React, { useEffect, useState } from 'react';
interface postData {
  id: number,
  body: string,
  title: string,
  userId: number
}

// Fix this component so it properly fetches data and handles loading state.
const FetchData = () => {
  const [data, setData] = useState<postData | null>(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to Fetch Data'); // Handle HTTP errors.
        }
        return response.json();
      })
      .then((result) => {
        //console.log(result);
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        // Set error message.
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <p>Error: {error}</p>; // Display error message
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>Data:</h3>
      <p>{data ? data.title : 'No data available'}</p>
    </div>
  );
};

export default FetchData;
