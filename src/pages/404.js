import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFound = ({location}) => {
  return (
    <Layout location={location}>
      <SEO title="Not Found" />
      <div className="content">
      <h2>Error 404</h2>
      <p>Page not found</p>
      </div>
    </Layout>
  );
};

NotFound.propTypes = {
  location: PropTypes.any,
};

export default NotFound;
