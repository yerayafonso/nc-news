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
import PostComment from "./components/PostComment";
import Users from "./components/Users";
import SingleUser from "./components/SingleUser";
import { UserProvider } from "./context/User";

function App() {
  return (
    <UserProvider>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/articles/:article_id/comments" element={<Comments />} />
        <Route
          path="/articles/:article_id/comments/post"
          element={<PostComment />}
        />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:username" element={<SingleUser />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
