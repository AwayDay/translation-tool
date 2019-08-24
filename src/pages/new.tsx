import React, { useState } from 'react';
import { Article, Paragraph, Sentence } from '../types/ArticleTypes';

const uuid = (): string => {
  function s4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  );
};

const processInput = (title: string, body: string): Article | null => {
  if (!title || !body) {
    alert('제대로 입력해라.');
    return null;
  }
  const paragraphTexts = body.split(`\n`).filter(t => t.length > 0);
  const paragraphs = paragraphTexts.map(
    (text, index): Paragraph => {
      const sentenceText = text.split(/\. /);
      const sentences = sentenceText.map(
        (text, index): Sentence => ({
          id: index + ``,
          original: text,
          translated: null,
        })
      );
      return {
        id: index + ``,
        type: `paragraph`,
        sentences: sentences,
      };
    }
  );

  return {
    id: uuid(),
    title: {
      original: title,
      translated: null,
    },
    body: {
      sections: paragraphs,
    },
  };
};

const saveArticle = (title: string, body: string): void => {
  const article = processInput(title, body);
};

const NewPage: React.FunctionComponent = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  return (
    <>
      <input type="text" onChange={e => setTitle(e.target.value)} />
      <textarea onChange={e => setBody(e.target.value)} />
      <button onClick={e => saveArticle(title, body)}>야호</button>
    </>
  );
};

export default NewPage;
