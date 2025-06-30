import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const avatar = data.avatar?.childImageSharp?.fixed

  return (
    <div className="bio" style={{ display: "flex", alignItems: "center" }}>
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name}
          style={{
            marginRight: "0.5rem",
            borderRadius: "50%",
            minWidth: 50,
          }}
        />
      )}
      <p style={{ margin: 0 }}>
        Written by <strong>{author?.name}</strong> {author?.summary}
      </p>
    </div>
  )
}

export default Bio
