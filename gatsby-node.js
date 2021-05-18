const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('./src/templates/page.js');
    const postTemplate = path.resolve('./src/templates/post.js');

    resolve(
      graphql(
        `
        {
          allContentfulPage {
            edges {
              node {
                slug
              }
            }
          }
          allContentfulPost {
            edges {
              node {
                slug
              }
            }
          }
        }            
        `,
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const pages = result.data.allContentfulPage.edges;
        pages.forEach((page) => {
          createPage({
            path: page.node.slug != '/' ? `/${page.node.slug}/` : '/',
            component: pageTemplate,
            context: {
              slug: page.node.slug,
            },
          });
        });

        const posts = result.data.allContentfulPost.edges;
        posts.forEach((post) => {
          createPage({
            path: `entry/${post.node.slug}/`,
            component: postTemplate,
            context: {
              slug: post.node.slug,
            },
          });
        });
      }),
    );
  });
};
