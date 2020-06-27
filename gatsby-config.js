module.exports = {
  siteMetadata: {
    title: 'Atomic Circle',
    description:
      'A site we built together during a full-day Frontend Masters Gatsby workshop!',
    logo: '/logo.svg',
    url: 'https://atomiccircle.com',
    socials: {
      instagram: 'https://www.instagram.com/atomic.circle/',
      facebook: 'https://www.facebook.com/circleatomic',
      twitter: 'https://twitter.com/CircleAtomic',
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Atomic Circle`,
        short_name: `Atomic Circle`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#dc143c`,
        display: `standalone`,
        icon: `static/mobileIcon.png`,
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-remark-reading-time',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.jsx'),
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
        plugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'atomic.circle',
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/', `/blog/*`, '/about/', '/404/'],
        workboxConfig: {
          globPatterns: ['**/*'],
        },
      },
    },
  ],
};
