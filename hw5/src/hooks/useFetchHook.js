import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!url) return;

    setIsLoading(true);
    setData(null);
    setError(null);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        console.log("Fetched result:", result);
        setData(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error.message);
        setError(error.message);
        setIsLoading(false);
      });
  }, [url]);

  return [data, error, isLoading];
}

export default useFetch;
