import React, { useState, useEffect } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { TestDataSet } from '../components/transrator/testDataSet';
import SectionNode from '../components/transrator/SectionNode';
import { getArticle } from '../services/ArticleService';

const test = TestDataSet;

const TranslatorPage: React.FunctionComponent<{
  location: { state: { articleId: string } };
}> = ({ location }) => {
  const [article, setArticle] = useState(test);
  useEffect(() => {
    console.log(location.state.articleId);
    getArticle(location.state.articleId).then(article => setArticle(article));
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <main className="flex flex-col my-5">
        <section className="flex flex-col mx-auto my-5">
          <section className="flex-1 break-words">
            <h1>{article.title.original}</h1>
          </section>
          <section className="flex-1 break-words">
            <h1>{article.title.translated}</h1>
          </section>
        </section>
        {article.body.sections.map(section => (
          <SectionNode section={section} key={section.id} />
        ))}
      </main>
    </Layout>
  );
};

export default TranslatorPage;
