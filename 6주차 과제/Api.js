import axios from "axios";

const API_KEY = "b4f92d1781524330b3200da83a8f2cd7";
const BASE_URL = "https://newsapi.org/v2";

export const fetchNewsByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country: "us",
        category,
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("뉴스를 불러오는 중 오류 발생:", error);
    return [];
  }
};
