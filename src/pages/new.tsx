import React, { useState } from 'react';
import { Article } from '../types/ArticleTypes';
import { generateArticle, saveArticle } from '../services/ArticleService';

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
  saveArticle(article);
};

const NewPage: React.FunctionComponent = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  return (
    <>
      <input type="text" onChange={e => setTitle(e.target.value)} />
      <textarea onChange={e => setBody(e.target.value)} />
      <button onClick={e => save(title, body)}>야호</button>
    </>
  );
};

export default NewPage;
