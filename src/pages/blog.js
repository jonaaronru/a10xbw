import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { injectIntl, Link } from "gatsby-plugin-react-intl"
import ReactTimeAgo from "react-time-ago"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Masonry from "react-masonry-css"

function IndexPage({ intl, data: { allGraphCmsPost } }) {
  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Layout>
      <Seo title="Blog" />

      <div className="divide-y divide-gray-200">
        <div className="pt-6 pb-4 space-y-2">
          <h1 className="">{intl.formatMessage({ id: "posts" })}</h1>
        </div>
        <div className="mx-auto max-w-7xl">
        <Masonry
          breakpointCols={breakpoints}
          className="flex w-auto"
          columnClassName="my-masonry-grid_column"
        >
          {allGraphCmsPost.nodes.map(post => {
            if (post.locale === intl.locale) {
              return (
                <article key={post.id} className="py-12 space-y-2 xl:space-y-0 xl:items-baseline">

                  <Link to={`/blog/${post.slug}`}>
                  {post.coverImage ? (
                    <GatsbyImage
                      image={
                        post.coverImage.localFile.childImageSharp
                          .gatsbyImageData
                      }
                      alt={post.title}
                    />
                  ) : post.localizations.find(x => x.locale === "en") && (
                    <GatsbyImage
                      image={post.localizations.find(x => x.locale === "en").coverImage.localFile.childImageSharp.gatsbyImageData}
                      alt={post.title}
                    />
                  )}
                  </Link>

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
              )
            }
          })}
        </Masonry>
        </div>
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
        remoteId
        date
        slug
        title
        locale
        localizations{
          locale
          coverImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 640
                  quality: 75
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        coverImage {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 640
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
