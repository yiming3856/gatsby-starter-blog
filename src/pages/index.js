import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />

      {/* 美观分隔线：中间有文字，两侧线条自动拉伸对齐正文 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          margin: "3rem 0",
        }}
      >
        <hr
          style={{
            flex: 1,
            border: "none",
            borderTop: "1px solid #ccc",
          }}
        />
        <span
          style={{
            padding: "0 1rem",
            color: "#666",
            fontSize: "1rem",
            whiteSpace: "nowrap",
          }}
        >
          📝 最新文章
        </span>
        <hr
          style={{
            flex: 1,
            border: "none",
            borderTop: "1px solid #ccc",
          }}
        />
      </div>

      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <Seo title="Notink - 我想慢慢写一些东西" useTemplate={false} />
)

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
---

✅ 效果就是你想要的那种：介绍 → 中间带「📝 最新文章」分隔线 → 文章列表，看起来有节奏、有重点。

如果你还想要：
- 把这条线提取为组件
- 支持暗色模式自动适配颜色
- 增加过渡动画（比如 fade in）

随时告诉我，我可以继续帮你优化 💪
