import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Article } from '../types/ArticleTypes';
import { getArticles } from '../services/ArticleService';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ArticleLinks: React.FunctionComponent<{ articles: Article[] }> = ({
  articles,
}) => {
  return (
    <ul className="my-3">
      {articles.map(a => (
        <>
          <li className="bg-gray-300 hover:bg-blue-500 rounded p-2 mb-3">
            <Link to={`/translator`} state={{ articleId: a.id }}>
              {a.title.original}
            </Link>
          </li>
        </>
      ))}
    </ul>
  );
};

const ListPage: React.FunctionComponent = () => {
  const init: Article[] = [];
  const [articles, useArticles] = useState(init);

  useEffect(() => {
    getArticles().then(articles => useArticles(articles));
  }, []);

  return (
    <Layout>
      <SEO title="Article List" />
      <section>
        <h1>Article List</h1>
        <section>
          <ArticleLinks articles={articles} />
        </section>
        <section>
          <Link to={`/new`}>NEW</Link>
        </section>
      </section>
    </Layout>
  );
};

export default ListPage;
