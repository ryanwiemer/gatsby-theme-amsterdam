---
title: Netlify CMS
description: How to setup Netlify CMS with Gatsby Theme Amsterdam
cover: netlify-cms.jpg
---

![](netlify-cms.jpg)

## Background Information

**[Netlify CMS](https://www.netlifycms.org/)** is an open source content management system (cms) made for static site generators like Gatsby and uses a Git workflow approach. It provides a friendly user interface to allow non technical users to make content updates without needing to know Git or the command line.

## Example Setup

An example setup using Gatsby Theme Amsterdam and Netlify CMS can be found on the **[netlify-cms](https://github.com/ryanwiemer/gatsby-starter-amsterdam/tree/netlify-cms)** branch of **[Gatsby Starter Amsterdam](https://github.com/ryanwiemer/gatsby-starter-amsterdam)**. Note that you will still need to update the repo name in `config.yml` in order to authenticate and use Netlify CMS for your own repo or fork.

## Manually Add Support

_This assumes you already have Gatsby Theme Amsterdam installed._

1. Add [gatsby-plugin-netlify-cms](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-netlify-cms):

```
yarn add netlify-cms-app gatsby-plugin-netlify-cms
```

2. Add the plugin in `gatsby-config.js`

```javascript
// gatsby-config.js
plugins: [`gatsby-theme-amsterdam`, `gatsby-plugin-netlify-cms`]
```

3. Create a new file called `config.yml` and update the repo with your github username and the name of your repository.

```yaml
# static/admin/config.yml

backend:
  name: github
  repo: username/repo-name
media_folder: static/media
public_folder: /media
collections:
  - name: posts
    label: Posts
    label_singular: 'Post'
    folder: content
    path: '{{slug}}/index'
    media_folder: ''
    public_folder: ''
    create: true
    editor:
      preview: false
    fields:
      - label: Title
        name: title
        widget: string
      - label: 'Cover Image'
        name: 'cover'
        widget: 'image'
      - label: 'Date'
        name: 'date'
        widget: 'date'
      - label: 'Tags'
        name: 'tags'
        widget: 'list'
      - label: 'Body'
        name: 'body'
        widget: 'markdown'
```

4. Navigate to [http://localhost:8000/admin/](http://localhost:8000/admin/) if you are developing locally or [https://www.example.com/admin/](https://www.example.com/admin/) in order to authenticate and start enjoying Netlify CMS. 😀

---

## Questions

If you have any questions or want support for another CMS please [submit an issue](https://github.com/ryanwiemer/gatsby-theme-amsterdam/issues) on GitHub or send me a tweet on Twitter [@ryanwiemer](https://twitter.com/ryanwiemer).
