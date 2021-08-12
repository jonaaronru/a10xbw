import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { ArrowSmRightIcon } from '@heroicons/react/outline'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    
    <div>
      <Link
        to="/about/"
        className="inline-flex py-3 text-blue-600 hover:underline hover:cursor-pointer"
      >
        About
        <ArrowSmRightIcon className="h-6 w-6 text-blue-500"/>
      </Link>
    </div>

    <div>
      <p className="flex items-center text-black text-sm font-medium">
        <StaticImage
          src="../images/profile-3.jpg"
          alt="alex"
          formats={["AUTO", "WEBP", "AVIF"]}
          width={36}
          quality={50}
          className="w-8 h-8 rounded-full overflow-hidden mr-2 bg-gray-100"
        />
        Made by Alex Tatianovich
      </p>
    </div>
  </Layout>
)

export default IndexPage
