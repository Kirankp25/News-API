

import React, { useState, useEffect } from 'react';
import './App.css';

const API_KEY = 'a508cd51cc1c4e68b737330667020e05';
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${API_KEY}`;

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <nav>
      <h1>Daily News</h1>
      </nav>
      <div className="articles">
        {articles.map(article => (
          <a href={article.url} key={article.publishedAt}>
                        <h2>{article.title}</h2>
            <img src={article.urlToImage} alt={article.title} />
            <p></p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
