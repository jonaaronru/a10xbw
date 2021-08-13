import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import ReactTimeAgo from "react-time-ago"

function IndexPage({ data: { allGraphCmsPost } }) {
  return (
    <Layout>
      <Seo title="Blog" />

      <div className="divide-y divide-gray-200">
        <div className="pt-6 pb-4 space-y-2">
          <h1 className="">Latest posts</h1>
        </div>

        <ul>
          {allGraphCmsPost.nodes.map(post => {
            return (
              <li key={post.id} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-sm leading-6 text-gray-500">
                      <ReactTimeAgo
                        date={post.date}
                        locale="en-US"
                        timeStyle="twitter"
                      />
                    </dd>
                  </dl>
                  <div className="space-y-4 xl:col-span-3">
                    <div className="space-y-6">
                      <h2 className="tracking-normal">
                        <Link
                          to={`/posts/${post.slug}`}
                          className="text-gray-900"
                        >
                          {post.title}
                        </Link>
                      </h2>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export const indexPageQuery = graphql`
  {
    allGraphCmsPost(filter:{ locale: { eq: en } }, sort: { fields: date, order: DESC }) {
      nodes {
        id
        date
        slug
        title
      }
    }
  }
`

export default IndexPage
