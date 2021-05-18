import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Page = ({ location, data }) => {
  const pageData = data.contentfulPage;

  return (
    <Layout location={location}>
      <SEO title={pageData.title} />
      <div className="content">
        <h2>{pageData.title}</h2>
        <hr />
      </div>
      {pageData.body && <div className="content">
        <div
          dangerouslySetInnerHTML={{
            __html: pageData.body.childMarkdownRemark.html,
          }}
        />
        {pageData.posts && <hr />}
      </div>}
      {pageData.posts && <div className="content">
        <Row class="row mt-3">
          {pageData.posts.map(post => {
            return (
              <Col sm={4}>
                <Card>
                  <Card.Body>
                    <Card.Title><Link to={`/entry/${post.slug}`}>{post.title}</Link></Card.Title>
                    <Card.Text>{post.description.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>}
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
      description { description }
      body {
        childMarkdownRemark {
          html
        }
      }
      posts {
        title
        slug
        description {
          description
        }
      }
    }
  }
`;

export default Page;
