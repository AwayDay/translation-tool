import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { TestDataSet } from "./testDataSet";
import SectionNode from "./SectionNode";

const test = TestDataSet;

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Home" />
    <main className="flex flex-col my-5">
      <section className="flex flex-col mx-auto my-5">
        <section className="flex-1 break-words">
          <h1>{test.title.original}</h1>
        </section>
        <section className="flex-1 break-words">
          <h1>{test.title.translated}</h1>
        </section>
      </section>
      {test.body.sections.map(section => (
        <SectionNode section={section} key={section.id} />
      ))}
    </main>
  </Layout>
)

export default IndexPage
