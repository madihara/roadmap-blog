import { Link, withAssetPrefix } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "../styles/index.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.container}>
    <div className={styles.header}>
      <Link to="/" className={`${styles.links} ${styles.title}`}>
        {siteTitle}
      </Link>
    </div>
    <div className={styles.header}>
      <Link to="/about" className={styles.links}>
        About
      </Link>
      <Link to="/blog" className={styles.links}>
        Blog
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
