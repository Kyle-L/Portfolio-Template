import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Post = ({ location, data }) => {
  const postData = data.contentfulPost;

  return (
    <Layout location={location}>
      <SEO title={postData.title} />
      <div className="content">
        <h2>{postData.title}</h2>
        <hr />
      </div>
      <div className="content">
        <div
          dangerouslySetInnerHTML={{
            __html: postData.body.childMarkdownRemark.html,
          }}
        />
      </div>
    </Layout>
  );
};

Post.propTypes = {
  location: PropTypes.any,
};

export const pageQuery = graphql`
  query postQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      description { 
        description 
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default Post;
