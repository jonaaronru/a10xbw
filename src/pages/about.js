import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


import { ArrowSmRightIcon } from '@heroicons/react/outline'

const SecondPage = () => (
  <Layout>
    <Seo title="About" />

    <h1>it's about</h1>
    <Link
        to="/"
        className="inline-flex py-3 text-blue-600 hover:underline hover:cursor-pointer"
      >
        Go back to homepage
        <ArrowSmRightIcon className="h-6 w-6 text-blue-500"/>
      </Link>
  </Layout>
)

export default SecondPage
