import React from "react"
import { navigate } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { injectIntl, Link, FormattedDate } from "gatsby-plugin-react-intl"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Author from "../components/author"

function BlogPostTemplate({ intl, pageContext: { page } }) {
  const locales = page.localizations.reduce((prev, curr) => {
    prev[curr.locale] = {
      title: curr.title,
      content: curr.content,
    }
    return prev
  }, {})
  // console.log(locales)

  if (!locales[intl.locale]) {
    // Если нет перевода, редирект на главную
    // navigate("/")
    return <div />
    return(
      <span>У этой статьи нет перевода:(</span>
    )
  }

  console.log(locales)

  return (
    <Layout>
      <Seo title={locales[intl.locale].title} />

      <article>
        <header className="pt-6 lg:pb-10 text-center">
          <div className="space-y-1">
            <dl className="space-y-10">
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base leading-6 text-gray-500">
                  <time dateTime={page.date}>
                    <FormattedDate
                      year="numeric"
                      month="long"
                      day="2-digit"
                      value={page.date}
                    />
                  </time>
                </dd>
              </div>
            </dl>
            <div>
              <h1 className="text-5xl leading-9 text-gray-900 tracking-normal sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                {locales[intl.locale].title}
              </h1>
            </div>
          </div>
        </header>
        {page.coverImage && (
          <GatsbyImage
            image={page.coverImage.localFile.childImageSharp.gatsbyImageData}
            alt={page.title}
            className="-mx-3 w-screen h"
          />
        )}
        <section
          className="article-body"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{
            __html: locales[intl.locale].content.html,
          }}
        />
        <Author />

        <div
          className="divide-y lg:divide-y-0 divide-gray-200 lg:grid lg:grid-cols-4 lg:col-gap-6 pb-16 lg:pb-20"
          style={{ gridTemplateRows: "auto 1fr" }}
        >
          <footer className="text-sm leading-5 divide-y divide-gray-200 lg:col-start-1 lg:row-start-2">
            <div className="pt-8">
              <Link to="/blog" className="text-blue-500 hover:text-blue-600">
                &larr; Back to the blog
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </Layout>
  )
}

export default injectIntl(BlogPostTemplate)
