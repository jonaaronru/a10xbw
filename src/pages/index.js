import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-react-intl"

const IndexPage = ({ intl }) => (
  <Layout>
    <Seo title={intl.formatMessage({ id: "hello" })} />
    <h1>
      <FormattedMessage id="hello" />
    </h1>

    <div className="inline-flex flex-col">
      <Link
        to="/about/"
        className="inline-flex mb-2 py-2 px-3 text-blue-500 bg-gray-100 rounded-sm hover:text-blue-600"
      >
        {intl.formatMessage({ id: "links.about" })} &rarr;
      </Link>
      <Link
        to="/blog/"
        className="inline-flex py-2 px-3 text-blue-500 bg-gray-100 rounded-sm hover:text-blue-600"
      >
        {intl.formatMessage({ id: "links.blog" })} &rarr;
      </Link>
    </div>
  </Layout>
)

export default injectIntl(IndexPage)
