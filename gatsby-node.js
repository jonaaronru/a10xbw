/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(
    `
      {
        posts: allGraphCmsPost(sort: { fields: date, order: ASC }) {
          edges {
            nextPost: next {
              slug
              title
            }
            page: node {
              id
              content {
                html
              }
              date: formattedDate
              slug
              title
            }
            previousPost: previous {
              slug
              title
            }
          }
        }
      }
    `
  )

  if (data.errors) throw data.errors

  data.posts.edges.forEach(({ nextPost, page, previousPost }) => {
    createPage({
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        id: page.id,
        page,
        previousPost,
        nextPost,
      },
      path: `/posts/${page.slug}`,
    })
  })
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    GraphCMS_Post: {
      formattedDate: {
        type: "String",
        resolve: source => {
          const date = new Date(source.date)

          return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(date)
        },
      },
    },
  }

  createResolvers(resolvers)
}
