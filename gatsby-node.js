const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const projectTemplate = path.resolve(`src/templates/project.js`);
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              draft
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    // result.data.allMarkdownRemark.edges
    //   .filter(({ node }) => node.frontmatter.path.includes('blog'))
    //   .forEach(({ node }) => {
    //     createPage({
    //       path: node.frontmatter.path,
    //       component: blogPostTemplate,
    //       slug: node.fields.slug,
    //       context: {},
    //     });
    //   });
    // result.data.allMarkdownRemark.edges
    //   .filter(({ node }) => node.frontmatter.path.includes('projects'))
    //   .forEach(({ node }) => {
    //     createPage({
    //       path: node.frontmatter.path,
    //       component: projectTemplate,
    //       slug: node.fields.slug,
    //       context: {},
    //     });
    //   });
  });
};

/* Allows named imports */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
