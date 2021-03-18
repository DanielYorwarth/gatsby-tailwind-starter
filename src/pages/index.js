import React from "react";
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <StaticQuery  
    query={query}
    render={data => {
   
    return (
      <Layout>
        <SEO
          keywords={""}
          title="Home"
        />
        HOME
      </Layout>
    )
  }} />
)

export default IndexPage;

const query = graphql`
  query {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`