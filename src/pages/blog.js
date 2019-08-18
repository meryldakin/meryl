import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"


const Blog = ({data}) => (
  <Layout>
    <div>
        <h1>
          Blog
        </h1>
        <h4>{data.allMdx.totalCount} Posts</h4>
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.frontmatter.excerpt}</p>
          </div>
        ))}
      </div>
  </Layout>
)

export default Blog

export const query = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
            excerpt
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `
