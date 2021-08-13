import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

// import { ArrowSmRightIcon } from '@heroicons/react/outline'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>

    <div>
      <Link
        to="/about/"
        className="inline-flex py-3 text-blue-500 hover:text-blue-600"
      >
        About &rarr;
      </Link>
      <Link
        to="/blog/"
        className="inline-flex py-3 text-blue-500 hover:text-blue-600"
      >
        Blog &rarr;
      </Link>
    </div>
  </Layout>
)

export default IndexPage
