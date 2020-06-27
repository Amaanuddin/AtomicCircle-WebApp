import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const About = () => (
  <>
    <SEO
      title="About"
      description="about-us"
      keywords={['blog', 'travel', 'atomiccircle', 'about-us', 'hyderabad']}
    />
    <Layout>
      <h1>About Me</h1>
      <p>This is my personal website.</p>
      <Link to="/">&larr; Back to home</Link>
    </Layout>
  </>
);

export default About;
