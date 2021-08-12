import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"

import ReactTimeAgo from 'react-time-ago'

function IndexPage({ data: { allGraphCmsPost } }) {
  return (
    <Layout>
    <Seo title="Blog" />

    <div className="divide-y divide-gray-200">
      <div className="pt-6 pb-4 space-y-2">
        <h1 className="">
          Latest posts
        </h1>
      </div>

      <ul className="divide-y divide-gray-200">
        {allGraphCmsPost.nodes.map((post) => {
          return (
            <li key={post.id} className="py-8">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 text-gray-500">
                    <ReactTimeAgo date={post.date} locale="en-US" timeStyle="twitter"/>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <h2 className="text-2xl tracking-normal">
                      <Link
                        to={`/posts/${post.slug}`}
                        className="text-gray-900"
                      >
                        {post.title}
                      </Link>
                    </h2>
                  </div>
                  <div className="text-base leading-6 font-medium">
                    <Link
                      to={`/posts/${post.slug}`}
                      className="text-blue-500 hover:text-blue-600"
                      aria-label={`Read "${post.title}"`}
                    >
                      Read more &rarr;
                    </Link>
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
    allGraphCmsPost(sort: { fields: date, order: DESC }) {
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