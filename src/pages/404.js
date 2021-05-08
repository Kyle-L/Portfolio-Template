import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFound = ({location}) => {
  return (
    <Layout location={location}>
      <SEO title="Not Found" />
      <div className="content">
      <h2><span className="accent"><b>//</b></span> 404</h2>
      </div>
    </Layout>
  );
};

NotFound.propTypes = {
  location: PropTypes.any,
};

export default NotFound;
