import React, { useState, useEffect } from 'react';

const Data = () => {
  const [data, setData] = useState([]); 

  
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p className=' bg-gray-700 rounded p-3' >{item.description}</p>
            <p>Price: ${item.price}</p>
            <p>Category: {item.category}</p>
            <p>Rating: {item.rating}</p>
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default Data;
