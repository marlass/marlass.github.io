import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <React.Fragment>
      <h2>Artykuły z tagiem: "dajsiepoznac2017"</h2>
      <div className="posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <article className="post" key={post.id}>
                <h1>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </h1>
                <div className="entry">
                  <p>{post.excerpt}</p>
                </div>
                <Link to={post.frontmatter.path} className="read-more">
                  Czytaj więcej
                </Link>
              </article>
            )
          })}
      </div>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query DajSiePoznacQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            path
          }
        }
      }
    }
  }
`
