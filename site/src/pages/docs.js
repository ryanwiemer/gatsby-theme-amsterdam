import React from 'react'
import Container from 'gatsby-theme-amsterdam/src/components/Container'
import Content from 'gatsby-theme-amsterdam/src/components/Content'
import SEO from 'gatsby-theme-amsterdam/src/components/SEO'

const DocsPage = ({ data }) => {
  return (
    <Container>
      <SEO
        title="Docs"
        description="Documentation for Gatsby Theme Amsterdam"
      />
      <Content>
        <h1>Docs</h1>
        <h3>Gatsby Theme Amsterdam</h3>
        <p>
          A Gatsby theme for artists, photographers and other creative folks.
        </p>
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
        <h2>Installation</h2>
        <h3>
          Use{' '}
          <a
            href="https://github.com/ryanwiemer/gatsby-starter-amsterdam"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby Starter Amsterdam
          </a>
        </h3>
        <p>
          This will generate a new site pre-configured to use Gatsby Theme
          Amsterdam.
        </p>
        <div className="gatsby-highlight" data-language="text">
          <pre className="language-text">
            <code className="language-text">
              gatsby new your-themed-site
              https://github.com/ryanwiemer/gatsby-starter-amsterdam
            </code>
          </pre>
        </div>
        <h3>Manually Add To Your Site</h3>
        <ol>
          <li>Install the theme</li>
          <div className="gatsby-highlight" data-language="text">
            <pre className="language-text">
              <code className="language-text">
                npm install --save gatsby-theme-amsterdam
              </code>
            </pre>
          </div>
          <p>or</p>
          <div className="gatsby-highlight" data-language="text">
            <pre className="language-text">
              <code className="language-text">
                yarn add gatsby-theme-amsterdam
              </code>
            </pre>
          </div>
          <li>
            Add the theme to your <code>gatsby-config.js</code>
          </li>
          <div className="gatsby-highlight" data-language="javascript">
            <pre className="language-javascript">
              <code className="language-javascript">
                <span className="token comment">{'//'} gatsby-config.js</span>
                <br />
                module<span className="token punctuation">.</span>exports{' '}
                <span className="token operator">=</span>{' '}
                <span className="token punctuation">&#123;</span>
                <br />
                {'  '}plugins<span className="token punctuation">:</span>{' '}
                <span className="token punctuation">[</span>
                <br />
                {'    '}
                <span className="token punctuation">&#123;</span>
                <br />
                {'      '}resolve<span className="token punctuation">:</span>{' '}
                <span className="token template-string">
                  <span className="token string">'gatsby-theme-amsterdam'</span>
                </span>
                <span className="token punctuation">,</span>
                <br />
                {'      '}options<span className="token punctuation">:</span>{' '}
                <span className="token punctuation">&#123;</span>
                <br />
                {'        '}
                <span className="token comment">
                  {'//'} See theme options section for more information
                </span>
                <br />
                {'      '}
                <span className="token punctuation">&#125;</span>
                <span className="token punctuation">,</span>
                <br />
                {'    '}
                <span className="token punctuation">&#125;</span>
                <span className="token punctuation">,</span>
                <br />
                {'  '}
                <span className="token punctuation">]</span>
                <span className="token punctuation">,</span>
                <br />
                <span className="token punctuation">&#125;</span>
              </code>
            </pre>
          </div>
        </ol>
        <h2>Usage</h2>
        <h3>Theme Options</h3>
        <table>
          <thead>
            <tr>
              <th>Key</th>
              <th align="left">Default Value</th>
              <th align="left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>basePath</code>
              </td>
              <td>
                <code>/</code>
              </td>
              <td>Root URL for all posts.</td>
            </tr>
            <tr>
              <td>
                <code>contentPath</code>
              </td>
              <td align="left">
                <code>/content</code>
              </td>
              <td align="left">
                Location of markdown files used for the posts.
              </td>
            </tr>
            <tr>
              <td>
                <code>transitions</code>
              </td>
              <td align="left">
                <code>true</code>
              </td>
              <td align="left">
                Include simple page transitions powered with{' '}
                <a
                  href="https://github.com/framer/motion"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  framer-motion
                </a>
                .
              </td>
            </tr>
            <tr>
              <td>
                <code>iconPath</code>
              </td>
              <td align="left">
                <code>default icon</code>
              </td>
              <td align="left">
                Path to the icon to be used for the favicon and web manifest.
                For example <code>'src/images/favicon.png'</code>. For best
                results provide a 512x512 square.
              </td>
            </tr>
            <tr>
              <td>
                <code>grid</code>
              </td>
              <td align="left">
                <code>basic</code>
              </td>
              <td align="left">
                Determines the type of grid used on the posts and tag templates.
                Two available options: <code>basic</code> and <code>list</code>.
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Example Usage</h3>
        <div className="gatsby-highlight" data-language="javascript">
          <pre className="language-javascript">
            <code className="language-javascript">
              <span className="token comment">{'//'} gatsby-config.js</span>
              <br />
              module<span className="token punctuation">.</span>exports{' '}
              <span className="token operator">=</span>{' '}
              <span className="token punctuation">&#123;</span>
              <br />
              {'  '}plugins<span className="token punctuation">:</span>{' '}
              <span className="token punctuation">[</span>
              <br />
              {'    '}
              <span className="token punctuation">&#123;</span>
              <br />
              {'      '}resolve<span className="token punctuation">:</span>{' '}
              <span className="token template-string">
                <span className="token string">'gatsby-theme-amsterdam'</span>
              </span>
              <span className="token punctuation">,</span>
              <br />
              {'      '}options<span className="token punctuation">:</span>{' '}
              <span className="token punctuation">&#123;</span>
              <br />
              {'      '}
              <span className="token comment">
                {'//'} basePath defaults to '/'
              </span>
              <br />
              {'      '}basePath<span className="token punctuation">:</span>{' '}
              <span className="token template-string">
                <span className="token string">'/photography'</span>
              </span>
              <span className="token punctuation">,</span>
              <br />
              {'      '}
              <span className="token comment">
                {'//'} the path to your icon file'
              </span>
              <br />
              {'      '}iconPath<span className="token punctuation">:</span>{' '}
              <span className="token template-string">
                <span className="token string">'src/images/favicon.png'</span>
              </span>
              <span className="token punctuation">,</span>
              <br />
              {'      '}
              <span className="token comment">
                {'//'} grid defaults to 'basic'
              </span>
              <br />
              {'      '}grid<span className="token punctuation">:</span>{' '}
              <span className="token template-string">
                <span className="token string">'list'</span>
              </span>
              <br />
              {'      '}
              <span className="token punctuation">&#125;</span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}
              <span className="token punctuation">&#125;</span>
              <span className="token punctuation">,</span>
              <br />
              {'  '}
              <span className="token punctuation">]</span>
              <span className="token punctuation">,</span>
              <br />
              <span className="token punctuation">&#125;</span>
            </code>
          </pre>
        </div>
        <h3>Additional Configuration</h3>
        <p>
          In addition to the theme options, there are a handful of items you can
          customize via the <code>siteMetadata</code> object in your site's{' '}
          <code>gatsby-config.js</code>.
        </p>
        <div className="gatsby-highlight" data-language="javascript">
          <pre className="language-javascript">
            <code className="language-javascript">
              <span className="token comment">{'//'} gatsby-config.js</span>
              <br />
              module<span className="token punctuation">.</span>exports{' '}
              <span className="token operator">=</span>{' '}
              <span className="token punctuation">&#123;</span>
              <br />
              {'  '}siteMetadata<span className="token punctuation">:</span>{' '}
              <span className="token punctuation">&#123;</span>
              <br />
              {'    '}
              <span className="token comment">
                {'//'} Used for the site title and SEO
              </span>
              <br />
              {'    '}title<span className="token punctuation">:</span>{' '}
              <span className="token template-string">
                <span className="token string">'My Site Title'</span>
              </span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}
              <span className="token comment">{'//'} Used for SEO</span>
              <br />
              {'    '}description<span className="token punctuation">:</span>{' '}
              <span className="token template-string">
                <span className="token string">'My site description...'</span>
              </span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}
              <span className="token comment">
                {'//'} Used for SEO. Do not include a trailing slash
              </span>
              <br />
              {'    '}url<span className="token punctuation">:</span>{' '}
              <span className="token template-string">
                <span className="token string">'https://www.example.com'</span>
              </span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}
              <span className="token comment">{'//'} Used for SEO</span>
              <br />
              {'    '}author<span className="token punctuation">:</span>{' '}
              <span className="token template-string">
                <span className="token string">'John Doe'</span>
              </span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}
              <span className="token comment">
                {'//'} Used for an optional intro section at the top of the
                posts template
              </span>
              <br />
              {'    '}intro<span className="token punctuation">:</span>{' '}
              <span className="token string">
                'John Doe is a photographer....'
              </span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}
              <span className="token comment">
                {'//'} Used for the links in the menu
              </span>
              <br />
              {'    '}menuLinks<span className="token punctuation">:</span>{' '}
              <span className="token punctuation">[</span>
              <br />
              {'      '}
              <span className="token punctuation">&#123;</span>
              <br />
              {'        '}name<span className="token punctuation">:</span>{' '}
              <span className="token string">'Home'</span>
              <span className="token punctuation">,</span>
              <br />
              {'        '}slug<span className="token punctuation">:</span>{' '}
              <span className="token string">'/'</span>
              <span className="token punctuation">,</span>
              <br />
              {'      '}
              <span className="token punctuation">&#125;</span>
              <span className="token punctuation">,</span>
              <br />
              {'      '}
              <span className="token punctuation">&#123;</span>
              <br />
              {'        '}name<span className="token punctuation">:</span>{' '}
              <span className="token string">'About'</span>
              <span className="token punctuation">,</span>
              <br />
              {'        '}slug<span className="token punctuation">:</span>{' '}
              <span className="token string">'/about/'</span>
              <span className="token punctuation">,</span>
              <br />
              {'      '}
              <span className="token punctuation">&#125;</span>
              <span className="token punctuation">,</span>
              <br />
              {'      '}
              <span className="token punctuation">&#123;</span>
              <br />
              {'        '}name<span className="token punctuation">:</span>{' '}
              <span className="token string">'Contact'</span>
              <span className="token punctuation">,</span>
              <br />
              {'        '}slug<span className="token punctuation">:</span>{' '}
              <span className="token string">'/contact/'</span>
              <span className="token punctuation">,</span>
              <br />
              {'      '}
              <span className="token punctuation">&#125;</span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}
              <span className="token punctuation">]</span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}
              <span className="token comment">
                {'//'} Used for the links in the footer
              </span>
              <br />
              {'    '}footerLinks<span className="token punctuation">:</span>{' '}
              <span className="token punctuation">[</span>
              <br />
              {'      '}
              <span className="token punctuation">&#123;</span>
              <br />
              {'        '}name<span className="token punctuation">:</span>{' '}
              <span className="token string">'Dribbble'</span>
              <span className="token punctuation">,</span>
              <br />
              {'        '}url<span className="token punctuation">:</span>{' '}
              <span className="token string">
                'https://www.dribbble.com/johndoe'
              </span>
              <span className="token punctuation">,</span>
              <br />
              {'      '}
              <span className="token punctuation">&#125;</span>
              <span className="token punctuation">,</span>
              <br />
              {'      '}
              <span className="token punctuation">&#123;</span>
              <br />
              {'        '}name<span className="token punctuation">:</span>{' '}
              <span className="token string">'Instagram'</span>
              <span className="token punctuation">,</span>
              <br />
              {'        '}url<span className="token punctuation">:</span>{' '}
              <span className="token string">
                'https://www.instagram.com/johndoe'
              </span>
              <span className="token punctuation">,</span>
              <br />
              {'      '}
              <span className="token punctuation">}</span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}
              <span className="token punctuation">]</span>
              <span className="token punctuation">,</span>
              <br />
              {'  '}
              <span className="token punctuation">&#125;</span>
              <span className="token punctuation">,</span>
              <br />
              <span className="token punctuation">&#125;</span>
            </code>
          </pre>
        </div>
        <h3>Customization</h3>
        <p>
          Gatsby Theme Amsterdam uses{' '}
          <a
            href="https://github.com/styled-components/styled-components"
            target="_blank"
            rel="noopener noreferrer"
          >
            styled-components
          </a>{' '}
          and defines the theme related tokens in a file called{' '}
          <code>theme.js</code>. In order to change these values simply{' '}
          <a
            href="https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/"
            target="_blank"
            rel="noopener noreferrer"
          >
            shadow
          </a>{' '}
          the file and replace with your desired values. See the example below.
        </p>
        <div className="gatsby-highlight" data-language="markdown">
          <pre className="language-javascript">
            <code className="language-javascript">
              <span className="token comment">
                {'//'} Create a theme.js file located at
                'src/gatsby-theme-amsterdam/styles/theme.js'
              </span>
              <br />
              <span className="token keyword">export</span>{' '}
              <span className="token keyword">default</span>{' '}
              <span className="token punctuation">&#123;</span>
              <br />
              {'  '}colors<span className="token punctuation">:</span>{' '}
              <span className="token punctuation">&#123;</span>
              <br />
              {'    '}base<span className="token punctuation">:</span>{' '}
              <span className="token string">'#292929'</span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}secondary<span className="token punctuation">:</span>{' '}
              <span className="token string">'#686461'</span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}tertiary<span className="token punctuation">:</span>{' '}
              <span className="token string">'#958E8E'</span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}highlight<span className="token punctuation">:</span>{' '}
              <span className="token string">'#C29967'</span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}background<span className="token punctuation">:</span>{' '}
              <span className="token string">'#F5F0EB'</span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}border<span className="token punctuation">:</span>{' '}
              <span className="token string">'#DCD8D3'</span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}button<span className="token punctuation">:</span>{' '}
              <span className="token string">'#E9E4DF'</span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}text<span className="token punctuation">:</span>{' '}
              <span className="token string">'#292929'</span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}code<span className="token punctuation">:</span>{' '}
              <span className="token string">'#E9E5E0'</span>
              <span className="token punctuation">,</span>
              <br />
              {'  '}
              <span className="token punctuation">&#125;</span>
              <span className="token punctuation">,</span>
              <br />
              {'  '}fonts<span className="token punctuation">:</span>{' '}
              <span className="token punctuation">&#123;</span>
              <br />
              {'    '}body<span className="token punctuation">:</span>
              <span className="token string">
                <br />
                {'      '}'-apple-system, BlinkMacSystemFont, "Segoe UI",
                Roboto,
                <br />
                {'      '}Helvetica, Arial, sans-serif'
              </span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}heading<span className="token punctuation">:</span>
              <span className="token string">
                <br />
                {'      '}'-apple-system, BlinkMacSystemFont, "Segoe UI",
                Roboto,
                <br />
                {'      '}Helvetica, Arial, sans-serif'
              </span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}normalWeight<span className="token punctuation">:</span>{' '}
              <span className="token string">'400'</span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}boldWeight<span className="token punctuation">:</span>{' '}
              <span className="token string">'600'</span>
              <span className="token punctuation">,</span>
              <br />
              {'  '}
              <span className="token punctuation">&#125;</span>
              <span className="token punctuation">,</span>
              <br />
              {'  '}sizes<span className="token punctuation">:</span>{' '}
              <span className="token punctuation">&#123;</span>
              <br />
              {'    '}maxWidth<span className="token punctuation">:</span>{' '}
              <span className="token string">'1050px'</span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}maxWidthCentered
              <span className="token punctuation">:</span>{' '}
              <span className="token string">'800px'</span>
              <span className="token punctuation">,</span>
              <br />
              {'  '}
              <span className="token punctuation">&#125;</span>
              <span className="token punctuation">,</span>
              <br />
              {'  '}responsive<span className="token punctuation">:</span>{' '}
              <span className="token punctuation">&#123;</span>
              <br />
              {'    '}small<span className="token punctuation">:</span>{' '}
              <span className="token string">'35em'</span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}medium<span className="token punctuation">:</span>{' '}
              <span className="token string">'50em'</span>
              <span className="token punctuation">,</span>
              <br />
              {'    '}large<span className="token punctuation">:</span>{' '}
              <span className="token string">'70em'</span>
              <span className="token punctuation">,</span>
              <br />
              {'  '}
              <span className="token punctuation">&#125;</span>
              <span className="token punctuation">,</span>
              <br />
              <span className="token punctuation">&#125;</span>
            </code>
          </pre>
        </div>
        <h3>Writing Content</h3>
        <p>
          Posts are written in markdown format <code>.md</code> and placed in
          the <code>content</code> directory at the root of the site unless a
          different <code>contentPath</code> is defined in the theme options.
          There are four front matter variables used in the theme which are
          shown below.
        </p>
        <div className="gatsby-highlight" data-language="markdown">
          <pre className="language-markdown">
            <code className="language-markdown">
              <span className="token hr punctuation">---</span>
              <br />
              title: Hello World
              <br />
              date: 2019-07-06
              <br />
              cover: cover.jpg
              <br />
              tags: [greeting, blog]
              <br />
              <span className="token hr punctuation">---</span>
            </code>
          </pre>
        </div>
      </Content>
    </Container>
  )
}

export default DocsPage
