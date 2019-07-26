module.exports = {
  siteMetadata: {
    title: 'Gatsby Theme Amsterdam',
    author: 'Ryan Wiemer',
    description:
      'A Gatsby theme for artists, photographers and other creative folks.',
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
        grid: 'organic',
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
