import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import Insta from '../components/insta';
import SEO from '../components/seo';

export default () => {
  const posts = usePosts();
  return (
    <>
      <SEO />
      <Layout isHome={true}>
        <div className="container">
          <section className="post-feed">
            {posts.map(post => (
              // The tag below includes the markup for each post - components/common/PostCard.js
              <PostPreview key={post.slug} post={post} />
            ))}
          </section>
          {/* <Pagination pageContext={pageContext} /> */}
          <Insta />
        </div>
      </Layout>
    </>
  );
};
