import React from 'react';
// import { OutboundLink } from 'gatsby-plugin-google-analytics';

const SocialIcon = ({ socials }) => {
  return (
    <>
      {Object.keys(socials).map(social => {
        return (
          <a
            href={socials[social]}
            className="site-nav-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="site-nav-icon"
              src={`/icons/${social}.svg`}
              alt={social}
            />
          </a>
        );
      })}
    </>
  );
};

export default SocialIcon;
