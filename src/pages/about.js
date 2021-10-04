import * as React from "react"
// import { Link } from "gatsby"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-react-intl"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = ({ intl }) => (
  <Layout>
    <Seo title="About" />

    <h1><FormattedMessage id="about.title" /></h1>
    <Link to="/" className="text-blue-500 hover:text-blue-600">
      &larr; <FormattedMessage id="about.back" />
    </Link>
  </Layout>
)


export default injectIntl(SecondPage)
