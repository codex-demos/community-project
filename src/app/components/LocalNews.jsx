'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

export default function LocalNews() {
  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get(
          `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        setNews(response.data.articles);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error getting news', error);
        setLoading(false); // Set loading to false if there is an error
      }
    }

    fetchNews();
  }, []);

  return (
    <section>
      <h2 className="text-center">In the Know: Local News!</h2>
      {!isLoading ? (
        <div className="flex gap-5 flex-wrap justify-center">
          {news.map((item, index) => (
            <NewsCard key={index} article={item} />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
}
