# README

This package will contain all our react components modularized so that we can reuse across several of our front end applications.

### Installation

```bash
npm i pretty-ui
```

### NPM LINK for development

For development, you will want to `npm link` to your local project:

```bash
cd pretty-ui
npm link

# cd into the project you will be using your new component
# ie. cd sc-agent-portal
npm link pretty-ui

# Error: Invalid hook call when using Material UI components
cd <APP_PATH>/node_modules/react && npm link
cd <APP_PATH>/node_modules/react-dom && npm link
cd pretty-ui
npm link react
npm link react-dom
```

### Folder Structure

- dist
- src
  - components
  - pages

### How to Guide

#### Adding a new component

**Todo: Add steps here**

### Contribution guidelines

- Writing tests
- Code review
- Other guidelines

### Todo

- [ ] Integrate Docker
- [x] Integrate CSS/SCSS Modules
- [ ] Integrate Webpack Bundle Analyzer

### Who do I talk to?

- Repo owner or admin
- Other community or team contact

### Resources

- [Publishing Typescript Modules](https://blog.logrocket.com/publishing-node-modules-typescript-es-modules/)
- [The complete guide to publishing a React package to npm](https://blog.logrocket.com/the-complete-guide-to-publishing-a-react-package-to-npm/)
- [Creating a React Component Library using Rollup, Typescript, Sass and Storybook](https://blog.harveydelaney.com/creating-your-own-react-component-library/)
- [Bundle Libraries With SCSS and CSS Modules Using Rollup](https://florian.ec/blog/rollup-scss-css-modules/)
  = [React hooks in react library giving Invalid hook call error](https://www.thetopsites.net/article/58123833.shtml)
