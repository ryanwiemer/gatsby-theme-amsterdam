# Gatsby Theme Amsterdam

A Gatsby theme for artists, photographers and other creative folks.

## Installation

### Use Gatsby Theme Amsterdam Starter

This will generate a new site pre-configured to use Gatsby Theme Amsterdam.

```sh
gatsby new your-themed-site https://github.com/ryanwiemer/gatsby-starter-amsterdam
```

### Manually add To Your Site

1. Install the theme

```sh
npm install --save gatsby-theme-amsterdam
```

or

```sh
yarn add gatsby-theme-amsterdam
```

2. Add the theme to your `gatsby-config.js`

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-amsterdam`,
      options: {
        // See theme options section for more information
      },
    },
  ],
}
```

## Usage

### Theme options

| Key           | Default Value | Description                                                                                                                                      |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `basePath`    | `/`           | Root URL for all posts. posts                                                                                                                    |
| `contentPath` | `/content`    | Location of markdown files used for the posts.                                                                                                   |  |
| `transitions` | `true`        | Include simple page transitions powered with [framer-motion](https://github.com/framer/motion)                                                   |
| `iconPath`    | default icon  | Path to the icon to be used for the favicon and web manifest. For example `'src/images/favicon.png'`. For best results provide a 512x512 square. |
| `grid`        | `basic`       | Determines the type of grid used on the posts and tag templates. Two available options: `basic` and `organic`.                                   |

#### Example Usage

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-amsterdam`,
      options: {
        // basePath defaults to `/`
        basePath: `/photography`,
        // the path to your icon file
        iconPath: `.src/icon/favicon.png`,
        // grid defaults to `basic`
        grid: `organic`,
      },
    },
  ],
}
```

### Additional Configuration

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.js`.

```javascript
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `My Site Title`,
    // Used for SEO
    description: `My site description...`,
    // Used for an optional intro section at the top of the posts template
    intro: 'John Doe is a photographer....',
    // Used for the links in the menu
    menuLinks: [
      {
        name: 'Home',
        slug: '/',
      },
      {
        name: 'About',
        slug: '/about/',
      },
      {
        name: 'Contact',
        slug: '/contact/',
      },
    ],
    // Used for the links in the footer
    footerLinks: [
      {
        name: 'Dribbble',
        url: 'https://www.dribbble.com/johndoe',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/johndoe',
      },
    ],
  },
}
```

### Customization

Gatsby Theme Amsterdam uses [styled-components](https://github.com/styled-components/styled-components) and defines the theme related tokens in a file called `theme.js`. In order to change these values simply [shadow](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/) the file and replace with your desired values. See the example below.

```javascript
// Create a theme.js file located at 'src/gatsby-theme-amsterdam/styles/theme.js'
export default {
  colors: {
    base: '#292929',
    secondary: '#8b8682',
    highlight: '#C29967',
    background: '#f5f0eb',
    border: '#dcd8d3',
    button: '#dcd8d3',
    text: '#292929',
    code: '#e9e5e0',
  },
  fonts: {
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    normalWeight: '400',
    boldWeight: '500',
  },
  sizes: {
    maxWidth: '1050px',
    maxWidthCentered: '800px',
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em',
  },
}
```

### Writing Content

Posts are written in markdown format `.md` and placed in the `content` directory at the root of the site unless a different `contentPath` is defined in the theme options. There are four front matter variables used in the theme which are shown below.

```markdown
---
title: Hello World
date: '2019-07-06'
cover: 'cover.jpg'
tags: ['greeting', 'blog']
---
```
