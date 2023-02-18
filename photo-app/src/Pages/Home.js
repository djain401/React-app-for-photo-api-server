import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
const Home = () => {
  return (
    <div>
      <Menu color="blue" widths={3} size="massive">
        <Menu.Item as={Link} name="Home" to="/" />

        <Menu.Item as={Link} name="Search Image" to="/searchImage" />

        <Menu.Item as={Link} name="Random Image" to="/randomImage" />
      </Menu>
      <h1>Photo App</h1>
      <p>
        Search Image - Display 10 images from Unsplash API based on user input
        in the search field.
      </p>

      <p> Random Image - Display a random Image from Unsplash API.</p>
    </div>
  );
};

export default Home;
