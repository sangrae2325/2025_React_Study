import React from "react";

const categories = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

export default function CategoryFilter({ category, setCategory }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          style={{
            marginRight: "10px",
            backgroundColor: category === cat ? "skyblue" : "white",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
