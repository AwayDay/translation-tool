import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Article } from '../types/ArticleTypes';
import { getArticles } from '../services/ArticleService';

const ListPage: React.FunctionComponent = () => {
  const init: Article[] = [];
  const [articles, useArticles] = useState(init);

  useEffect(() => {
    getArticles().then(articles => useArticles(articles));
  }, []);

  return (
    <main>
      {articles.map(a => (
        <>
        <Link to={`/translator`} state={{ articleId: a.id }}>
          {a.title.original}
        </Link>
        <br/>
        </>
      ))}
      <Link to={`/new`}>NEW</Link>
    </main>
  );
};

export default ListPage;
