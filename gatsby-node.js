const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;

  return new Promise((resolve, reject) => {
    const photographTemplate = path.resolve('./src/templates/page.js');

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
              component: photographTemplate,
              context: {
                slug: page.node.slug,
              },
            });
          });
        }),
    );
  });
};
