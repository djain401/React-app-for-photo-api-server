import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RandomImage from "../Pages/RandomImage";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import SearchImages from "../Pages/SearchImages";

import React from "react";

const PageRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchImage" element={<SearchImages />} />
        <Route path="/randomImage" element={<RandomImage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default PageRouter;
