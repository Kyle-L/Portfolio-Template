import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useContext} from 'react';
import {Animated} from 'react-animated-css';
import {ThemeContext} from 'styled-components';
import {GlobalStyles} from '../styles/global';
import Container from './container';
import Footer from './footer';
import Header from './header';

/**
 * Defines the generic layout for the entire website.
 * This includes the header, footer, and how the body content is organized.
 */
const Layout = ({children, location}) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <GlobalStyles theme={theme} />
      <Container className="center">
        <Header location={location} />
        <hr />
        <Animated animationIn="fadeIn" animationOut="fadeOut">
          <main>{children}</main>
        </Animated>
      </Container>
      <hr />
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.any
}

export default Layout;
