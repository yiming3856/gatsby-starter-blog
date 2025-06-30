import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
          gatsbyImageData(width: 50, height: 50, layout: FIXED)
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const avatarImage = getImage(data.avatar.childImageSharp.gatsbyImageData)

  return (
    <div className="bio" style={{ display: "flex", alignItems: "center" }}>
      <GatsbyImage
        image={avatarImage}
        alt={author?.name}
        style={{ borderRadius: "50%", marginRight: "0.5rem", minWidth: 50 }}
      />
      <p style={{ margin: 0 }}>
        Written by <strong>{author?.name}</strong> {author?.summary}
      </p>
    </div>
  )
}

export default Bio
