import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';

const SEO = props => {
  const data = useSiteMetadata();
  return <RederSEO data={data} {...props} />;
};

const RederSEO = props => {
  const { data: seo, title, description, image, url, keywords } = props;
  const metaKeywords = keywords || [
    'atomic circle',
    'blog',
    'travel',
    'stories',
    'friends',
    'atomiccircle'
  ];
  return (
    <Helmet
      title={seo.title}
      meta={[
        { name: 'description', content: description || seo.description },
        { property: 'og:title', content: title || seo.title },
        { property: 'og:description', content: description || seo.description },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: image },
        { property: 'og:url', content: url || seo.url }
      ].concat({
        name: 'keywords',
        content: metaKeywords.join(', ')
      })}
    />
  );
};

export default SEO;
