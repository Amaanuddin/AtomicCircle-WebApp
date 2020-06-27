import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Navigation from './common/Navigation';
import SocialIcon from './socialIcon';

export const navData = [
  {
    link: '/',
    title: 'Home',
  },
  {
    link: '/about/',
    title: 'About',
  },
  {
    link: '/contact/',
    title: 'Contact',
  },
];

const Header = ({ site, isHome }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "Image.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2560, webpQuality: 90) {
            srcWebp
          }
        }
      }
    }
  `);

  return (
    <header
      className="site-head"
      id="sticky_header"
      style={{
        background: isHome
          ? `linear-gradient(to bottom, transparent, 80%, black), url(${image.sharp.fluid.srcWebp}) center fixed`
          : 'black',
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        <div className="site-mast">
          <div className="site-mast-left">
            <Link to="/">
              {site.logo && (
                <img className="site-logo" src={site.logo} alt={site.title} />
              )}
            </Link>
          </div>
          <div className="site-mast-right">
            {site.socials && <SocialIcon socials={site.socials}></SocialIcon>}
            {/* <a
                    className="site-nav-item"
                    href={`https://feedly.com/i/subscription/feed/${site.url}/rss/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="site-nav-icon"
                      src="/images/icons/rss.svg"
                      alt="RSS Feed"
                    />
                  </a> */}
          </div>
        </div>
        {isHome ? (
          <div className="site-banner">
            <h1 className="site-banner-title">{site.title}</h1>
            <p className="site-banner-desc">{site.description}</p>
          </div>
        ) : null}
        <nav className="site-nav">
          <div className="site-nav-left">
            {/* The navigation items as setup in Ghost */}

            <Navigation data={navData} navClass="site-nav-item" />
          </div>
          <div className="site-nav-right">
            <Link className="site-nav-button" to="/about">
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
