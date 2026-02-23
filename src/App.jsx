import { React } from "react";

import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import ArticleList from "./components/ArticleList";
// import { useState } from "react";
import SingleArticle from "./components/SingleArticle";
import Comments from "./components/Comments";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/articles/:article_id/comments" element={<Comments />} />
      </Routes>
    </>
  );
}

export default App;
