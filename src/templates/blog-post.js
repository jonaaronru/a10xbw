import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Author from "../components/author"

function BlogPostTemplate({ pageContext: { nextPost, page, previousPost } }) {
  return (
    <Layout>
      <Seo title="Blog" />

      <article>
        <header className="pt-6 lg:pb-10">
          <div className="space-y-1">
            <dl className="space-y-10">
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base leading-6 text-gray-500">
                  <time dateTime={page.date}>{page.date}</time>
                </dd>
              </div>
            </dl>
            <div>
              <h1 className="text-3xl leading-9 text-gray-900 tracking-normal sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                {page.title}
              </h1>
            </div>
          </div>
        </header>
        <section
          className="article-body"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: page.content.html }}
        />
        <Author />

        <div
          className="divide-y lg:divide-y-0 divide-gray-200 lg:grid lg:grid-cols-4 lg:col-gap-6 pb-16 lg:pb-20"
          style={{ gridTemplateRows: "auto 1fr" }}
        >
          <footer className="text-sm leading-5 divide-y divide-gray-200 lg:col-start-1 lg:row-start-2">
            {(nextPost || previousPost) && (
              <div className="space-y-8 py-8">
                {nextPost && (
                  <div>
                    <h2 className="text-xs tracking-wide uppercase text-gray-500">
                      Next Post
                    </h2>
                    <div className="text-blue-500 hover:text-blue-600">
                      <Link to={`/posts/${nextPost.slug}`}>
                        {nextPost.title}
                      </Link>
                    </div>
                  </div>
                )}
                {previousPost && (
                  <div>
                    <h2 className="text-xs tracking-wide uppercase text-gray-500">
                      Previous Post
                    </h2>
                    <div className="text-blue-500 hover:text-blue-600">
                      <Link to={`/posts/${previousPost.slug}`}>
                        {previousPost.title}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
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

export default BlogPostTemplate
