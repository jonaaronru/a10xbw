/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-react-intl"

import Header from "./header"

// DATE
import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en"
import ru from "javascript-time-ago/locale/ru"
TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

const Layout = ({ intl, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="m-3">{children}</main>
      <footer className="mx-3 py-3 border-t border-indigo-50">
        © {new Date().getFullYear()}, {intl.formatMessage({ id: "title" })}
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)
