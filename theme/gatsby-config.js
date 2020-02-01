module.exports = options => {
  const { contentPath } = options

  return {
    siteMetadata: {
      title: 'Gatsby Theme Amsterdam',
      description: '',
      image: '',
      url: '',
      author: '',
      intro: '',
      menuLinks: [
        {
          name: 'Gatsby Theme Amsterdam',
          slug: '/',
        },
      ],
    },
    plugins: [
      {
        resolve: 'gatsby-plugin-page-creator',
        options: {
          path: `${__dirname}/src/pages`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: contentPath || `content`,
          name: contentPath || `content`,
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            `gatsby-remark-prismjs`,
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1000,
                linkImagesToOriginal: false,
                withWebp: true,
              },
            },
          ],
        },
      },
      `gatsby-plugin-theme-ui`,
      `gatsby-plugin-emotion`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-offline`,
    ].filter(Boolean),
  }
}
