module.exports = {
  siteMetadata: {
    title: 'Gatsby Theme Amsterdam',
    description:
      'A Gatsby theme for artists, photographers and other creative folks.',
    url: 'https://amsterdam.netlify.com',
    author: 'Ryan Wiemer',
    intro:
      'A Gatsby theme for artists, photographers and other creative folks.',
    menuLinks: [
      {
        name: 'Gatsby Theme Amsterdam',
        slug: '/',
      },
      {
        name: 'About',
        slug: '/about/',
      },
      {
        name: 'Docs',
        slug: '/docs/',
      },
      {
        name: 'CMS',
        slug: '/cms/',
      },
      {
        name: 'FAQ',
        slug: '/faq/',
      },
    ],
    footerLinks: [
      {
        name: '@ryanwiemer',
        url: 'https://twitter.com/ryanwiemer',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/ryanwiemer/gatsby-theme-amsterdam',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Theme Amsterdam`,
        short_name: `Amsterdam`,
        background_color: `#f5f0eb`,
        theme_color: `#f5f0eb`,
        start_url: `/`,
        display: `standalone`,
        icon: require.resolve('./src/images/favicon.png'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `documentation`,
        name: `documentation`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS || 'UA-XXXXXXXX-X',
        head: true,
        pageTransitionDelay: 350,
      },
    },
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {
        postsPerPage: 6,
      },
    },
  ],
}
