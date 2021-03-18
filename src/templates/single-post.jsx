// import React from 'react'
// import {graphql} from 'gatsby'
// import { BLOCKS } from "@contentful/rich-text-types"
// import { renderRichText } from "gatsby-source-contentful/rich-text"
// import Img from 'gatsby-image'

// import Layout from "../components/layout";
// import SEO from "../components/seo";

// export default ({data}) => {
//     const {page} = data
//     return (
//         <Layout>
//             <SEO
//             keywords={""}
//             title={page.title}
//             />
//             <div className="blog max-w-screen-xl mx-auto px-6 md:px-8 mb-10 md:mb-20 lg:mb-28">
//                 {page.content && renderRichText(page.content, options)}
//             </div>
//         </Layout>
//     )
// }

// const options = {
//     renderNode: {
//       [BLOCKS.EMBEDDED_ASSET]: node => {
//         const {
//             localFile: { childImageSharp },
//           title,
//         } = node.data.target

//         return <Img fluid={childImageSharp.fluid} alt={title} />
//       },
//     },
//   }

// export const query = graphql`
//     query($id: String!) {
        
//     }
// `