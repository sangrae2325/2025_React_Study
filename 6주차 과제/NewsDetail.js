// src/components/NewsDetail.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NewsDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    return <p>기사를 찾을 수 없습니다.</p>;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <h2>{article.title}</h2>
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          style={{ maxWidth: "100%" }}
        />
      )}
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        원본 기사 보기
      </a>
    </div>
  );
}
