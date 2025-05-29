// src/components/NewsList.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NewsList({ articles }) {
  const navigate = useNavigate();

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {articles.map((article, index) => (
        <li
          key={index}
          onClick={() => navigate(`/article/${index}`, { state: { article } })}
          style={{
            cursor: "pointer",
            borderBottom: "1px solid #ccc",
            padding: "10px 0",
          }}
        >
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </li>
      ))}
    </ul>
  );
}
