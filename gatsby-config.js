module.exports = {
  siteMetadata: {
    title: 'Atomic Circle',
    alternateName: 'Atomiccircle',
    description:
      'A site we built together during a full-day Frontend Masters Gatsby workshop!',
    logo: '/logo.svg',
    url: 'https://atomiccircle.com',
    socials: {
      instagram: 'https://www.instagram.com/atomic.circle/',
      facebook: 'https://www.facebook.com/circleatomic',
      twitter: 'https://twitter.com/CircleAtomic'
    },
    siteUrl: 'https://atomiccircle.com'
  },
  // remove pathprefix after deploying to atomiccircle
  pathPrefix: '/AtomicCircle-WebApp',
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-MD8M9QD',
        includeInDevelopment: false,
        routeChangeEventName: 'atomiccircle-route-change'
      }
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: 'UA-126130467-1',
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: true,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Delays sending pageview hits on route update (in milliseconds)
    //     pageTransitionDelay: 0
    //   }
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Atomic Circle`,
        short_name: `Atomic Circle`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#dc143c`,
        display: `standalone`,
        icon: `static/mobileIcon.png`
        // Include this after deploying this to atomiccircle and check if the app is installable
        // icon_options: {
        //   purpose: `maskable`
        // }
      }
    },
    'gatsby-plugin-remove-console',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-remark-reading-time',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.jsx')
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
        plugins: [{ resolve: 'gatsby-remark-images' }]
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Noto Sans SC`
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images'
      }
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'atomic.circle'
      }
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static'
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/', `/blog/*`, '/about/', '/404/'],
        workboxConfig: {
          globPatterns: ['**/*']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://atomiccircle.com',
        sitemap: 'https://atomiccircle.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ]
};
