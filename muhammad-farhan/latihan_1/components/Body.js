import React from 'react';
import Article from './Article.js';

const articles = [
  { id: 1, title: 'Action', content: 'Film Bertema Action' },
  { id: 2, title: 'Romance', content: 'Film Bertema Romansa' },
  { id: 3, title: 'Gore', content: 'Film Bertema Sadis' },
];

function Body() {
  return (
    <main>
      {articles.map(article => (
        <Article key={article.id} title={article.title} content={article.content} />
      ))}
    </main>
  );
}

export default Body;
