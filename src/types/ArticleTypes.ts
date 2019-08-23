interface Article {
  id: string;
  title: ArticleTitle;
  body: ArticleBody;
}

interface ArticleTitle {
  original: string;
  translated: string | null;
}

interface ArticleBody {
  sections: Section[];
}

type Section = Paragraph;

interface Paragraph {
  id: string;
  type: 'paragraph';
  sentences: Sentence[];
}

interface Sentence {
  id: string;
  original: string;
  translated: string | null;
}

export { Article, ArticleTitle, ArticleBody, Section, Paragraph, Sentence };
