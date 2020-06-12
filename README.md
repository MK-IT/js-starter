<p align="center">
  <a href="https://mkit.io">
    <img alt="Bundle" src="https://www.svgrepo.com/show/1692/package-cube-box-for-delivery.svg" width="60" />
  </a>
</p>
<h1 align="center">
  JS Starter
</h1>

**WIP experiment branch for React component library starter.**

## Planned features
- [x] EditorConfig
- [x] Git and `.gitignore`
- [x] `README.md` (stub), `ROADMAP.md`, `LICENSE`
- [x] Prettier
- [x] Husky
- [x] Commitlint, Changelog, and Standard Version
- [x] Standard CSS imports like `import './style.css'`
- [x] CSS modules like `import styles from 'MyComponent.module.css'... className={styles.myStyle}`
- [x] Webpack for bundling (production builds)
- [x] React incl. demo component 
- [ ] WIP: Typescript
  - [x] Sourcemaps
  - [x] Type definitions incl. for CSS
  - [ ] `PropTypes` vs TS type or interface definition
  - [ ] Autocomplete for good DX
- [ ] ESLint   
- [ ] Stylelint
- [ ] Jest
  - [ ] Unit tests
  - [ ] Snapshot tests
  - [ ] `package.json` scripts to run, watch, debug, and report on coverage 
- [ ] Storybook
- [ ] Build
  - [ ] Ensure minimal package footprint (size)
  - [ ] Ensure correct dependencies, dev deps, and peer deps
- [ ] New `README.md`

## Known issues
- [ ] Extending or changing the exported component's style classes is not possible without `!important`
- [ ] `clsx` type definition cannot be resolved 


## Notes on the required steps for the setup
- Edit `package.json`
  - [ ] `name`
  - [ ] `description`
  - [ ] `keywords`
  - [ ] `main`
  - [ ] `files` to exclude generated bundle analyzer report
  - [ ] `homepage`
  - [ ] `repository:url`
  - [ ] `bugs:url`

