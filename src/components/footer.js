import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styles from '../styles/footer.module.css';

/**
 * 
 * @returns 
 */
const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              facebook
              twitter
              instagram
              youtube
              linkedin
              github
              email
            }
          }
        }
      }
    `,
  );

  return (
    <footer className={styles.footer}>
      <h2>Let&apos;s Connect</h2>
      <p>Feel free to reach out for collaborations or just a friendly hello!</p>
      <a href={`mailto:${site.siteMetadata.social.email}`}>
        {site.siteMetadata.social.email}
      </a>
      <ul className={styles.navigation}>
        {site.siteMetadata.social.facebook && (
          <li className={styles.icon}>
            <a aria-label="Facebook" href={site.siteMetadata.social.facebook}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
        )}

        {site.siteMetadata.social.twitter && (
          <li className={styles.icon}>
            <a aria-label="Twitter" href={site.siteMetadata.social.twitter}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        )}

        {site.siteMetadata.social.instagram && (
          <li className={styles.icon}>
            <a aria-label="Instagram" href={site.siteMetadata.social.instagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        )}

        {site.siteMetadata.social.youtube && (
          <li className={styles.icon}>
            <a aria-label="Youtube" href={site.siteMetadata.social.youtube}>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
        )}

        {site.siteMetadata.social.linkedin && (
          <li className={styles.icon}>
            <a aria-label="LinkedIn" href={site.siteMetadata.social.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        )}

        {site.siteMetadata.social.github && (
          <li className={styles.icon}>
            <a aria-label="Github" href={site.siteMetadata.social.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        )}
      </ul>
    </footer>
  );
};

export default Footer;
