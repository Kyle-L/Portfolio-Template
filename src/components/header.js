import { graphql, Link, useStaticQuery } from 'gatsby';
import { useStyledDarkMode } from 'gatsby-styled-components-dark-mode';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styles from '../styles/header.module.css';
import Toggle from './toggler';

/**
 * Defines the site's header and navigation bar.
 * @param {*} param0 
 * @returns 
 */
const Header = ({location}) => {
  const { isDark } = useStyledDarkMode();

  const data = useStaticQuery(
    graphql`
      query{
        site {
          siteMetadata {
            title
            titleSubheading
          }
        }
        allContentfulPage {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `,
  );

  return (
    <div>
      <h1 className={styles.title}>{data.site.siteMetadata.title}</h1>
      <p className={styles.titleSubheading}>
        <i>{data.site.siteMetadata.titleSubheading}</i>
      </p>
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="transparent "
        variant={isDark ? 'dark' : 'light'}
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" activeKey={location.pathname}>
            {data.allContentfulPage.edges.map(({ node }) => {
              console.log(data.allContentfulPage.edges)
              return (
                <Nav.Link eventKey={`/${node.slug != '/' ? node.slug : ''}`} key={node.slug} as={Link} to={`/${node.slug != '/' ? node.slug : ''}`}>
                  {node.title}
                </Nav.Link>
              );
            })}
            <Toggle />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
