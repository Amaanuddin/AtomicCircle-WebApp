import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

import BackgroundImage from 'gatsby-background-image';

const PostPreview = ({ post }) => {
  const url = `blog/${post.slug}/`;

  return (
    <Link to={url} className="post-card">
      <header className="post-card-header">
        {post.image && (
          <BackgroundImage
            className="post-card-image"
            fluid={post.image.sharp.fluid}
          />
        )}
        {/* {post.tags && (
          <div className="post-card-tags">
            {' '}
            <Tags post={post} visibility="public" autolink={false} />
          </div>
        )} */}
        {post.featured && <span>Featured</span>}
        <h2 className="post-card-title">{post.title}</h2>
      </header>
      <section className="post-card-excerpt">{post.excerpt}</section>
      <footer className="post-card-footer">
        <div className="post-card-footer-left">
          <div className="post-card-avatar">
            {post.author.image ? (
              <Image
                className="author-profile-image"
                fluid={post.author.image.sharp.fluid}
                alt={post.author.name}
              />
            ) : (
              <img
                className="default-avatar"
                src="/images/icons/avatar.svg"
                alt={post.author.name}
              />
            )}
          </div>
          <span>{post.author.name}</span>
        </div>
        <div className="post-card-footer-right">
          <div>{post.readingTime}</div>
        </div>
      </footer>
    </Link>
  );
};

export default PostPreview;
