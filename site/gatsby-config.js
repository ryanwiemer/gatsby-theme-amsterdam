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
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {
        postsPerPage: 6,
        grid: 'basic',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: true,
        pageTransitionDelay: 350,
      },
    },
  ],
}
