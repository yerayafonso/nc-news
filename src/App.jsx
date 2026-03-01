import { React } from "react";

import "./App.css";
import Header from "./components/Header";

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
import Topics from "./components/Topics";
import ArticlesByTopic from "./components/ArticlesByTopic";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <UserProvider>
      <Header />

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
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topic" element={<ArticlesByTopic />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </UserProvider>
  );
}

export default App;
