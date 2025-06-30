import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1
        className="main-heading"
        style={{ fontSize: "24px", margin: "20px 0", fontWeight: "bold" }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link
        className="header-link-home"
        to="/"
        style={{ fontSize: "20px", fontWeight: "bold", textDecoration: "none" }}
      >
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
