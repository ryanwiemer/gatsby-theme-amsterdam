# Gatsby Theme Amsterdam

<p>
  <a href="https://github.com/ryanwiemer/gatsby-theme-amsterdam/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Gatsby Theme Amsterdam is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.com/package/gatsby-theme-amsterdam">
    <img src="https://img.shields.io/npm/v/gatsby-theme-amsterdam.svg" alt="Current npm package version." />
  </a>
  <a href="https://npmcharts.com/compare/gatsby-theme-amsterdam?minimal=true">
    <img src="https://img.shields.io/npm/dm/gatsby-theme-amsterdam.svg" alt="Downloads per month on npm." />
  </a>
  <a href="https://npmcharts.com/compare/gatsby-theme-amsterdam?minimal=true">
    <img src="https://img.shields.io/npm/dt/gatsby-theme-amsterdam.svg" alt="Total downloads on npm." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://twitter.com/intent/follow?screen_name=ryanwiemer">
      <img src="https://img.shields.io/twitter/follow/ryanwiemer.svg?label=Follow%20@ryanwiemer" alt="Follow @ryanwiemer" />
    </a>
</p>

A Gatsby theme for artists, photographers and other creative folks.

[Demo Website](https://amsterdam.netlify.com/)

## Features

- Minimal responsive design
- Optional page transitions
- Multiple grid options to display posts
- Customizable theme colors and typography with Theme UI
- MDX support
- SEO friendly component
- Mobile menu
- Optional scroll progress indicator
- Emotion using styled-components syntax
- Tags
- Pagination
- Offline support

## Installation

### Use [Gatsby Starter Amsterdam](https://github.com/ryanwiemer/gatsby-starter-amsterdam)

This will generate a new site pre-configured to use Gatsby Theme Amsterdam.

```sh
gatsby new your-themed-site https://github.com/ryanwiemer/gatsby-starter-amsterdam
```

### Manually Add To Your Site

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

#### Example Usage

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

Gatsby Theme Amsterdam utilizes [Theme UI](https://theme-ui.com/). In order to customize the theme styling you must create a theme file and then override the default `amsterdamTheme` values. If you're familiar with Styled Components or Emotion it's the same as adapting the theme you pass to `ThemeProvider`.

All default values can be viewed [here](https://github.com/ryanwiemer/gatsby-theme-amsterdam/blob/master/theme/src/gatsby-plugin-theme-ui/index.js).

```javascript
// src/gatsby-plugin-theme-ui/index.js

import amsterdamTheme from 'gatsby-theme-amsterdam/src/gatsby-plugin-theme-ui'

export default {
  ...amsterdamTheme,
  colors: {
    ...amsterdamTheme.colors,
    background: '#ffea00',
  },
}
```

### Writing Content

Posts are written in markdown format `.md` and placed in the `content` directory at the root of the site unless a different `contentPath` is defined in the theme options. There are four front matter variables used in the theme which are shown below.

```markdown
---
title: Hello World
date: 2019-07-06
cover: cover.jpg
tags: [greeting, blog]
---
```
