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
        posts: allGraphCmsPost(
          sort: { fields: date, order: ASC }
          filter: { locale: { eq: en } }
        ) {
          edges {
            page: node {
              id
              remoteId
              date
              slug
              coverImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 1920
                      aspectRatio: 3.2
                      quality: 75
                      placeholder: DOMINANT_COLOR
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
              localizations {
                locale
                title
                content {
                  markdownNode {
                    childMdx {
                      body
                    }
                  }
                  html
                }
                coverImage {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 1920
                        aspectRatio: 3.2
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
        }
      }
    `
  )

  if (data.errors) throw data.errors

  data.posts.edges.forEach(({ page }) => {
    createPage({
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        id: page.id,
        page,
      },
      path: `/blog/${page.slug}`,
    })
  })
}

// exports.createResolvers = ({ createResolvers }) => {
//   const resolvers = {
//     GraphCMS_Post: {
//       coverImage: {
//         resolve: (source, args, context, info) => {
//           // console.log("СОУРС", source)
//           // console.log("АРГС",args)
//           // console.log("КОНТЕКСТ",context)
//           // console.log("ИНФО",info)
//           return source.localizations.find(x => x.locale === "en").coverImage
//           // return context.nodeModel.getNodeById({id: enAssetNode})
//         }
//       }
//       // coverImage: {
//       //   // args: {
//       //   //   locale: {
//       //   //     type: 'GraphCMS_Locale!',
//       //   //     defaultValue: 'en',
//       //   //   },
//       //   // },

//       //   // resolve: async ({ remoteTypeName, remoteId }, args, context, _) => {
//       //   //   const toGatsbyId = (remoteId) => Object.values(remoteId).join(`:`)
          
//       //   //  // Find the `en` node for this `Asset` entry
//       //   //   const enAssetNode = context.nodeModel.getNodeById({
//       //   //     id: toGatsbyId({ remoteTypeName, remoteId, locale: args.locale }),
//       //   //   })

//       //   //  // Map over the related images on the `en` node to build an array of ids
//       //   //   // const imageGatsbyIds = enAssetNode.images.map(
//       //   //   //   (remoteImageIdFields) => toGatsbyId(remoteImageIdFields)
//       //   //   // )
          
//       //   //   // Lookup localised nodes for `images`
//       //   //   // return context.nodeModel.getNodesByIds({ ids: imageGatsbyIds })
//       //   //   return context.nodeModel.getNodeById({id: enAssetNode})
//       //   // },
//       // },
//     },
//   }

//   createResolvers(resolvers)
// }

// exports.createResolvers = ({ createResolvers }) => {
//   const resolvers = {
//     GraphCMS_Post: {
//       formattedDate: {
//         type: "String",
//         resolve: source => {
//           const date = new Date(source.date)

//           return new Intl.DateTimeFormat("en-US", {
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//           }).format(date)
//         },
//       },
//     },
//   }

//   createResolvers(resolvers)
// }
