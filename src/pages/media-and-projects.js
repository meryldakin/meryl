import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const MediaAndProjects = ({data}) => (
  <Layout>
    <div>
        <h1>
          Things I build:
        </h1>
        
        <h1>
          Things I talk about:
        </h1>
      </div>
  </Layout>
)

export default MediaAndProjects
