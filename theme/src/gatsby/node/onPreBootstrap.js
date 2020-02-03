const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)

// Ensure that content directory exist at the site-level
module.exports = ({ store }, themeOptions) => {
  const { program } = store.getState()
  const contentPath = themeOptions.contentPath || `content`
  const dirs = [path.join(program.directory, contentPath)]
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}
