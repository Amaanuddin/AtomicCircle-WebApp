import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import SEO from '../components/seo';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        image {
          sharp: childImageSharp {
            fluid {
              src: srcSetWebp
            }
          }
        }
      }
      body
      excerpt
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <>
    <SEO
      title={post.frontmatter.title}
      description={post.excerpt}
      image={post.frontmatter.image.sharp.fluid.src}
      keywords={['blog', 'travel', 'atomiccircle', 'test', 'hyderabad']}
    />
    <Layout>
      <div className="container">
        <article className="content">
          <h1 className="content-title">{post.frontmatter.title}</h1>

          {/* The main page content */}
          <section className="content-body">
            <p
              css={css`
                font-size: 18px;
              `}
            >
              Posted by {post.frontmatter.author}
            </p>
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>
        </article>
        <ReadLink to="/">&larr; Back to all posts</ReadLink>
      </div>
    </Layout>
  </>
);

export default PostTemplate;
