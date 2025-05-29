import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsList from "./components/NewsList";
import NewsDetail from "./components/NewsDetail";
import CategoryFilter from "./components/CategoryFilter";
import { fetchNewsByCategory } from "./Api";

function Home() {
  const [category, setCategory] = useState("general");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNewsByCategory(category).then(setArticles);
  }, [category]);

  return (
    <div>
      <CategoryFilter category={category} setCategory={setCategory} />
      <NewsList articles={articles} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:index" element={<NewsDetail />} />
      </Routes>
    </Router>
  );
}

