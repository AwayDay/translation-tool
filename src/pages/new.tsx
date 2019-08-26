import React, { useState } from 'react';
import { Article } from '../types/ArticleTypes';
import { generateArticle, saveArticle } from '../services/ArticleService';
import Layout from '../components/layout';
import SEO from '../components/seo';

const processInput = (title: string, body: string): Article | null => {
  if (!title || !body) {
    alert('제대로 입력해라.');
    return null;
  }
  return generateArticle(title, body);
};

const save = (title: string, body: string): void => {
  const article = processInput(title, body);
  console.debug(article);
  if (!article) {
    return;
  }
  saveArticle(article)
    .then(article => {})
    .catch(message => {});
};

const NewPage: React.FunctionComponent = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  return (
    <Layout>
      <SEO title="New Article" />
      <section>
        <form className="flex flex-col">
          <label>
            Title
            <input
              type="text"
              className="block w-full border border-solid border-gray-900 rounded mb-3"
              onChange={e => setTitle(e.target.value)}
            />
          </label>
          <label>
            Body
            <textarea
              className="block w-full h-64 border border-solid border-gray-900 rounded mb-3"
              onChange={e => setBody(e.target.value)}
            />
          </label>
          <button
            className="bg-gray-300 rounded mb-3"
            onClick={e => save(title, body)}
          >
            save
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default NewPage;
