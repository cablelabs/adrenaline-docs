# adrenaline-docs
Documentation site for Adrenaline project.

## Overview
This project's documentation is managed by [Docusaurus](https://docusaurus.io).
Refer to the docusaurus website for more detailed documentation on how to setup
the site.  The information below is an overview for getting started quickly.

## Folders
- **docs** - All documentation content, saved as markdown files.  The file structure
within this folder doesn't reflect how it's displayed.  The display is configured in
`/website/sidebars.json`.
- **website** - The website application.

### Website folder
- **siteConfig.js** - main config file
- **sidebars.json** - configure layout of sidebars
- **blog** - Blog entries saved as markdown files.
- **core** - Edit `Footer.js` to modify footer beyond configuration.
- **pages/en** - Edit `index.js` to modify landing page beyond configuration.  You can also add
custom pages that you can link to from the main navigation or elsewhere.  The main navigation
is configured in `siteConfig.js`.
- **static** - Put images and css here.

## Docs
Documentation content is saved as markdown files to the `/docs` folder.  The docs can link to each other,
or to external sites.  The docs sidebar layout is configured in `/website/sidebars.json`.  Configure
the `headerLinks` property in `/website/siteConfig.js` to provide navigation from the landing page
into the docs section of the site.  Navigation between docs pages is on the left.  Navigation within
one doc page is on the right.

### Doc Headers
Each documentation file that appears on the website needs a header.  A header
looks like the example below.

```
---
id: documentation
title: Documentation
sidebar_label: Documentation
---
```

## Serve website locally
You can either use Node.js or Docker to view the site locally.

### Node.js
```
cd website
npm install
npm start
```

### Docker (not working)
`docker-compose up`

## Publish to Github Pages
These commands will build the static documentation website and commit the changes
to the `gh-pages` branch, for hosting the website on [GitHub Pages](https://pages.github.com/).

```
cd website
npm install
npm run build
GIT_USER=github_username \
  USE_SSH=true \
  npm run publish-gh-pages
```

## Blogging
Docusaurus supports maintaining a blog as markdown files.  To enable blogging, add a `/website/blog` folder
in the `website` branch.  Also add `{blog: true, label: 'Blog'}` to the `headerLinks` array in `/website/siteConfig.js`.
A blog's filename must start with the date of publication, e.g. `2016-03-11-my-blog-post.md`.

## Blog file header:
```
---
title: Blog Title
author: Blog Author
authorURL: http://example.com/
---
```
