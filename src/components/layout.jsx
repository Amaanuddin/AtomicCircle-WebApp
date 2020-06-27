import React from 'react';
import Header, { navData } from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';
import Navigation from './common/Navigation';
import { Link } from 'gatsby';

import '../styles/app.css';

const Layout = ({ isHome, children }) => {
  const site = useSiteMetadata();

  return (
    <div className="viewport">
      <div className="viewport-top">
        {/* The main header section on top of the screen */}
        <Header site={site} isHome={isHome} />

        <main className="site-main">
          {/* All the main content gets inserted here, index.js, post.js */}
          {children}
        </main>
      </div>

      <div className="viewport-bottom">
        {/* The footer at the very bottom of the screen */}
        <footer className="site-foot">
          <div className="site-foot-nav container">
            <div className="site-foot-nav-left">
              <Link to="/">{site.title}</Link> © 2019
            </div>
            <div className="site-foot-nav-right">
              <Navigation
                data={navData}
                navClass="site-foot-nav-item"
                noActive
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
