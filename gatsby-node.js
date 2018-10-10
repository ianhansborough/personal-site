/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const expDetailTemplate = path.resolve('src/templates/exp-detail.js')

  return graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              type
            }
          }
        }
      }
    }
  `).then(result => {
    console.log(result)
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    console.log(result.data.allMarkdownRemark)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      console.log(node)
      switch (node.frontmatter.type) {
        case 'exp':
          createPage({
            path: node.frontmatter.path,
            component: expDetailTemplate,
            context: {},
          })
          break

        default:
          break
      }
    })
  })
}
