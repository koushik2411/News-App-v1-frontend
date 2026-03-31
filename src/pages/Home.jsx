import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import NewsCard from "../components/NewsCard";
import { fetchNews } from "../services/api";

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadNews = async (query = "india") => {
    try {
      setLoading(true);

      const res = await fetchNews(query);
      setNews(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className=" p-2 bg-gray-200 dark:bg-gray-800 dark:text-gray-100">
          <SearchBar onSearch={loadNews} />

          <div className=" mt-4 flex flex-col gap-2.5 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-4">
            {news?.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
