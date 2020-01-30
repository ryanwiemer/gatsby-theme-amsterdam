---
title: Docs
description: Docs description
---

## Gatsby Theme Amsterdam

A Gatsby theme for artists, photographers and other creative folks.

<p>
  <iframe
    title="github"
    src="https://ghbtns.com/github-btn.html?user=ryanwiemer&repo=gatsby-theme-amsterdam&type=star&count=true&size=large"
    frameBorder="0"
    scrolling="0"
    width="160px"
    height="30px"
  ></iframe>
</p>

## Installation

### Use [Gatsby Starter Amsterdam](https://github.com/ryanwiemer/gatsby-starter-amsterdam)

This will generate a new site pre-configured to use Gatsby Theme Amsterdam.

```shell
gatsby new your-themed-site https://github.com/ryanwiemer/gatsby-starter-amsterdam
```

### Manually Add To Your Site

1. Install the theme

```shell
npm install --save gatsby-theme-amsterdam
```

or

```shell
yarn add gatsby-theme-amsterdam
```

2. Add the theme to your `gatsby-config.js`

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {
        // See theme options section for more information
      },
    },
  ],
}
```

## Usage

### Theme Options

| Key                 | Default Value | Description                                                                                                                                      |
| ------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `basePath`          | `/`           | Root URL for all posts.                                                                                                                          |
| `contentPath`       | `/content`    | Location of markdown files used for the posts.                                                                                                   |  |
| `transitions`       | `true`        | Include simple page transitions powered with [framer-motion](https://github.com/framer/motion)                                                   |
| `iconPath`          | default icon  | Path to the icon to be used for the favicon and web manifest. For example `'src/images/favicon.png'`. For best results provide a 512x512 square. |
| `postsPerPage`      | `6`           | Determines the number of posts shown on each page. This effects both the posts and tag template.                                                 |
| `grid`              | `basic`       | Determines the type of grid used on the posts and tag templates. Two available options: `basic` and `list`.                                      |
| `progressIndicator` | `true`        | Include a progress indicator on the post template.                                                                                               |
| `colorToggle`       | `true`        | Include a button in the menu to toggle the color modes.                                                                                          |

### Example Usage

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {
        // basePath defaults to '/'
        basePath: '/photography',
        // the path to your icon file
        iconPath: 'src/images/favicon.png',
        // grid defaults to 'basic'
        grid: 'list',
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
    title: 'My Site Title',
    // Used for SEO
    description: 'My site description...',
    // Used for SEO. Do not include a trailing slash
    url: 'https://www.example.com',
    // Used for SEO. Must be the full URL for the default image
    image: 'https://www.example.com/og-image.jpg',
    // Used for SEO
    author: 'John Doe',
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

Gatsby Theme Amsterdam uses [Theme UI](https://theme-ui.com/) and [Emotion](https://emotion.sh/docs/introduction) using the styled-components syntax. In order to change these values simply [shadow](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/) the file and replace with your desired values. See the example below.

```javascript
// Create an index.js file located at 'src/gatsby-theme-amsterdam/src/gatsby-plugin-theme-ui/index.js'
export default {
  colors: {
    base: '#292929',
    secondary: '#686461',
    tertiary: '#958E8E',
    highlight: '#C29967',
    background: '#F5F0EB',
    border: '#DCD8D3',
    button: '#E9E4DF',
    text: '#292929',
    code: '#E9E5E0',
    modes: {
      dark: {
        base: '#292929',
        secondary: '#888888',
        tertiary: '#555555',
        highlight: '#C29967',
        background: '#0a0a0a',
        border: '#333333',
        button: '#101010',
        text: '#ffffff',
        code: '#292929',
      },
    },
  },
  fonts: {
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    normalWeight: '400',
    boldWeight: '600',
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

```none
---
title: Hello World
date: 2019-07-06
cover: cover.jpg
tags: [greeting, blog]
---
```
