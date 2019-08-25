import { Article, Paragraph, Sentence } from '../types/ArticleTypes';

import generateUuid from '../utils/uuid';
import { save } from '../repositories/ArticleStore';

const generateArticle = (title: string, body: string): Article => {
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
    id: generateUuid(),
    title: {
      original: title,
      translated: null,
    },
    body: {
      sections: paragraphs,
    },
  };
};

const saveArticle = (
  article: Article,
  callback?: (id: string) => void
): void => {
  save(article, callback);
};

export { generateArticle, saveArticle };
