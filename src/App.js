import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Search from "./components/Search";
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoding] = useState(true);
  const [term, setTerm] = useState(" ");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoding(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto px-4">
      <Search steQuery={(query) => setTerm(query)} />
      {isLoading ? (
        <h1 className="text-6xl text-center ma-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image) => (
            <Card key={image.id} data={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
