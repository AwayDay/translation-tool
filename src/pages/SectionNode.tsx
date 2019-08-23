import React from "react"
import { Section } from "../types/ArticleTypes";
import ParagraphNode from "./ParagraphNode";

const SectionNode: React.FunctionComponent<{ section: Section }> = ({
  section,
}) => {
  if (section.type === `paragraph`) {
    return <ParagraphNode paragraph={section} />
  } else {
    return null
  }
};

export default SectionNode;