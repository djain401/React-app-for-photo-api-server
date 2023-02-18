import React, { useEffect, useState } from "react";
import { Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const RandomImage = () => {
  const [imageData, setImageData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3002/randomImage`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImageData(data);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);

  return (
    <div>
      <h1>Random Image</h1>
      <Card centered style={{ width: "50%" }}>
        <Image src={imageData?.imageUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{imageData?.name}</Card.Header>
          <Card.Description>{imageData?.description}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default RandomImage;
