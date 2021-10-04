import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"

import { injectIntl, Link } from "gatsby-plugin-react-intl"
import Language from "./launguage"

const Header = ({ intl, siteTitle }) => (
  <header className="header sticky top-0 z-50 flex justify-between p-3 bg-blackout text-white">
    <div>
      <h1>
        <Link to="/">{intl.formatMessage({ id: "title" })}</Link>
      </h1>
    </div>
    <div>
      <Language />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default injectIntl(Header)
