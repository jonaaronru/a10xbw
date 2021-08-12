import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


// import { ArrowSmRightIcon } from '@heroicons/react/outline'

const SecondPage = () => (
  <Layout>
    <Seo title="About" />

    <h1>it's about</h1>
    <Link to="/" className="text-blue-500 hover:text-blue-600">
              &larr; Back to the homepage
    </Link>
  </Layout>
)

export default SecondPage
