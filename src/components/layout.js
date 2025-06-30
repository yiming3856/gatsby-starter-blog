import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    // 首页标题（主标题）
    header = (
      <h1
        className="main-heading"
        style={{
          fontSize: "24px",
          margin: "20px 0",
          fontWeight: "bold",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    // 内页标题（变成导航式返回链接）
    header = (
      <div style={{ margin: "10px 0" }}>
        <Link
          to="/"
          style={{
            fontSize: "14px",
            color: "#888",
            textDecoration: "none",
          }}
        >
          ← 返回首页
        </Link>
      </div>
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
