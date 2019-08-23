import React, { useState, useEffect } from "react"
import { Paragraph, Sentence } from "../types/ArticleTypes"

const ParagraphNode: React.FunctionComponent<{ paragraph: Paragraph }> = ({
  paragraph,
}) => {
  const [paragraphStore, setParagraph] = useState(paragraph)

  const onSentenceHoverIn = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ): void => {
    const couple = document.querySelectorAll(
      `span[data-id='${e.currentTarget.dataset.id}']`
    )
    couple.forEach(node => node.classList.add(`bg-indigo-200`))
  }

  const onSentenceHoverOut = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ): void => {
    const couple = document.querySelectorAll(
      `span[data-id='${e.currentTarget.dataset.id}']`
    )
    couple.forEach(node => node.classList.remove(`bg-indigo-200`))
  }

  const onClickSentence = (sentence: Sentence): void => {
    const prev =
      typeof sentence.translated === `object` && !sentence.translated
        ? ``
        : sentence.translated
    let inputString = window.prompt(sentence.original, prev)
    if (typeof inputString === `object` && !inputString) {
      return
    }

    const tmp: Paragraph = {
      ...paragraphStore,
    }
    tmp.sentences = tmp.sentences.map(s =>
      s.id !== sentence.id ? s : { ...s, translated: inputString }
    )
    setParagraph(tmp)
  }

  return (
    <section className="flex flex-row my-5 leading-relaxed">
      <section className="flex-1 break-words mr-2">
        <p>
          {paragraphStore.sentences.map(sentence => (
            <span
              className={
                sentence.translated ? "py-1 mr-1" : "py-1 mr-1 text-red-700"
              }
              data-id={sentence.id}
              key={sentence.id}
              onMouseOver={e => onSentenceHoverIn(e)}
              onMouseLeave={e => onSentenceHoverOut(e)}
              onClick={e => onClickSentence(sentence)}
            >
              {sentence.original}
            </span>
          ))}
        </p>
      </section>
      <section className="flex-1 break-words ml-2">
        <p>
          {paragraphStore.sentences.map(sentence => (
            <span
              className={
                sentence.translated
                  ? "py-1 mr-1"
                  : "py-1 mr-1 font-light text-gray-500"
              }
              data-id={sentence.id}
              key={sentence.id}
            >
              {sentence.translated ? sentence.translated : sentence.original}
            </span>
          ))}
        </p>
      </section>
    </section>
  )
}

export default ParagraphNode
