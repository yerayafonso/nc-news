import { React } from "react";

import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import { useState } from "react";

function App() {
  const [articleData, setArticleData] = useState([]);
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/articles"
          element={
            <ArticleList
              articleData={articleData}
              setArticleData={setArticleData}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
