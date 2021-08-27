import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { injectIntl, Link } from "gatsby-plugin-react-intl"
import ReactTimeAgo from "react-time-ago"

import Layout from "../components/layout"
import Seo from "../components/seo"

function IndexPage({ intl, data: { allGraphCmsPost } }) {
  return (
    <Layout>
      <Seo title="Blog" />

      <div className="divide-y divide-gray-200">
        <div className="pt-6 pb-4 space-y-2">
          <h1 className="">{intl.formatMessage({ id: "posts" })}</h1>
        </div>

        <ul className="xl:grid xl:grid-cols-3">
          {allGraphCmsPost.nodes.map(post => {
            if (post.locale === intl.locale) {
              return (
                <li key={post.id} className="py-4">
                  <article className="space-y-2 xl:space-y-0 xl:items-baseline">
                    {post.coverImage && (
                      <GatsbyImage
                        image={
                          post.coverImage.localFile.childImageSharp
                            .gatsbyImageData
                        }
                        alt={post.title}
                      />
                    )}

                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-sm leading-6 text-gray-500">
                        <ReactTimeAgo
                          date={post.date}
                          locale={intl.locale}
                          timeStyle="twitter"
                        />
                      </dd>
                    </dl>
                    <div className="space-y-4 xl:col-span-3">
                      <div className="space-y-6">
                        <h2 className="tracking-normal">
                          <Link
                            to={`/blog/${post.slug}`}
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
            }
          })}
        </ul>
      </div>
    </Layout>
  )
}

export const indexPageQuery = graphql`
  query GraphCmsPosts($locale: GraphCMS_Locale) {
    allGraphCmsPost(
      filter: { locale: { eq: $locale } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        id
        date
        slug
        title
        locale
        coverImage {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 320
                quality: 75
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`

export default injectIntl(IndexPage)
