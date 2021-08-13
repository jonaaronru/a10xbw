import { graphql, Link } from "gatsby"

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
