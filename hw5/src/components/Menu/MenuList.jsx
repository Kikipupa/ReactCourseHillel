import React from "react";
import MenuItem from "./MenuItem";
import useFetch from "../../hooks/useFetchHook";

export default function List() {
  const [data, error, isLoading] = useFetch(
    "https://react-fast-pizza-api.onrender.com/api/menu"
  );

  console.log("Data in List:", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(data);

  return data && data.length ? (
    <ul>
      {data.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ul>
  ) : (
    <div>No pizzas available</div>
  );
}
