import {graphql} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Page = ({location, data}) => {
  const pageData = data.contentfulPage;

  return (
    <Layout location={location}>
      <SEO title={pageData.title} />
      <div className="content">
      <h2>{pageData.title}</h2>
        <hr />
      </div>
      <div className="content">
        <p>test</p>
      </div>
    </Layout>
  );
};

Page.propTypes = {
  location: PropTypes.any,
};

export const pageQuery = graphql`
  query pageQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      id
      title
    }
  }
`;

export default Page;
