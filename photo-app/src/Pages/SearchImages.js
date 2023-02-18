import React, { useState, useEffect } from "react";
import { Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./SearchImages.css";
import SearchText from "../Components/SearchText";

const SearchImages = () => {
  const [imageData, setImageData] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [searchFlag, setSearchFlag] = useState(false);

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchFlag(true);
  };

  const onChangeHandler = (e) => {
    setTextInput(e.target.value);
    console.log(textInput);
  };

  useEffect(() => {
    if (textInput) {
      let url = `http://localhost:3002/searchImage?title=${textInput}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setImageData(data);
        })
        .catch((e) => {
          console.error(`An error occurred: ${e}`);
        });
      setSearchFlag(false);
    }
  }, [searchFlag]);

  return (
    <div>
      <h1>Search Image</h1>
      <SearchText
        onSearchHandler={searchHandler}
        onChangeHandler={onChangeHandler}
      />
      <section className="images-container">
        <Card.Group id="card-group" centered>
          {imageData.map((photo, index) => {
            return (
              <Card key={index}>
                <Image src={photo.imageUrl} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{photo.name}</Card.Header>
                  <Card.Description>{photo.description}</Card.Description>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      </section>
    </div>
  );
};

export default SearchImages;
