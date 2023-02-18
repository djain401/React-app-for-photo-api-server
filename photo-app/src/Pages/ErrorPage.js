import React, { useEffect, useState } from "react";

const ErrorPage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3002/*`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);
  return (
    <div>
      <h2>Page {message}</h2>
    </div>
  );
};

export default ErrorPage;
