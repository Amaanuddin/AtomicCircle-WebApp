import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          alternateName
          description
          logo
          url
          socials {
            instagram
            facebook
            twitter
          }
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
