import React from "react"
import Layout from "../components/layout.js"
import { graphql } from "gatsby"
import { Segment, Grid } from 'semantic-ui-react'
import { MDXRenderer } from "gatsby-plugin-mdx"

export default ({ data: {mdx} }) => {
  return (
    <Layout>
      <Grid padded textAlign="left">
        <Segment padded='very'>
          <div>
            <h1>{mdx.frontmatter.title}</h1>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </div>
        </Segment>
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
