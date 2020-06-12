<p align="center">
  <a href="https://mkit.io">
    <img alt="Bundle" src="https://www.svgrepo.com/show/1692/package-cube-box-for-delivery.svg" width="60" />
  </a>
</p>
<h1 align="center">
  JS Starter
</h1>

Default starting point for any JS project regardless of purpose and technology.

The repository can be used just as a reference too.

_Feel free to [submit suggestions and bug reports](https://github.com/MK-IT/js-starter/issues)._

## 🚀 Getting Started

1.  **Clone the repository.**

    Use Git to create a new project.

    ```shell
    # clone the repository
    git clone https://github.com/MK-IT/js-starter hello-world
    ```

2.  **Setup.**

    Navigate into your new project and configure the defaults.

    ```shell
    # navigate to your project
    cd hello-world
    # initialize Git
    rm -rf .git && git init
    # install dependencies
    yarn
    ```
    
    _Note: You should edit all default values in `package.json` like `name`, `description`, `keywords`, `author`, etc._

3.  **Extend.**

    At this point you are ready to start adding technologies, frameworks, libraries, packages, etc.

    **⚠️ The pre-commit hook would try and fail to run script `yarn lint`. Either set up <a href="https://eslint.org/">ESLint</a> for your project or opt-out of this by removing `yarn lint` from `.huskyrc.js` and `package.json`.**

    _Note: Some tools may require a plugin for your IDE of choice. The repository comes with predefined recommended extensions for Visual Studio Code so just install them. If you're using a different IDE you should be able to easily find the alternatives._

    <details>
      <summary><b>EditorConfig</b></summary>
      <br>
      Feel free to adapt <a href="https://editorconfig.org/" target="_blank">EditorConfig</a> to your needs by editing <code>.editorconfig</code>.
    </details>

    <details>
      <summary><b>Prettier</b></summary>
      <br>
      <a href="https://prettier.io/" target="_blank">Prettier</a> code formatting style can be adapted to your needs by editing <code>.prettierrc.js</code>. The default setting is pretty straightforward.
    </details>

    <details>
      <summary><b>Git Hooks (Husky)</b></summary>
      <br>
      <a href="https://github.com/typicode/husky" target="_blank">Husky</a> provides an easy way to run tasks and scripts before or after any Git actions. It is configured to run two hooks before you commit your changes. <code>commit-msg</code> hook makes sure your commit messages comply to a standard convention (see "Versioning"). <code>pre-commit</code> hook runs two utility scripts to ensure consistent code format and style, i.e. <code>format</code> and <code>lint</code>.
    </details>

    <details>
      <summary><b>Versioning</b></summary>
      <br>
      <a href="https://github.com/conventional-changelog/standard-version" target="_blank">Standard Version</a> makes <a href="https://semver.org/">semver</a> versioning easy and generates <code>CHANGELOG.md</code> for your project automatically. In addition to that, <a href="https://commitlint.js.org/" target="_blank">Commitlint</a> ensures that your team adheres to a commit convention.
    </details>

## ⭐ Features

- [x] 🛠 **Recommended VSCode extensions**
- [x] ⚡️ **EditorConfig and Prettier**
- [x] 🚦 **Pre-commit hooks**
- [x] 🤝 **Commit message linting**
- [x] 🧗🏻‍♂️: **Built-in `semver` automation**

## 🧐 What's inside?

### 👷‍♂️ Available Scripts

```bash
# format code with Prettier
yarn format

# lint code with ESLint (either set up yourself or opt-out)
yarn lint

# bump version, git commit && git tag, changelog.md generation
yarn release
```

### 📂 Folder Structure

```bash
.
├── .vscode               # VSCode workspace config
│   ├── extensions.json
│   └── settings.json
├── src                      # Source code
│   └── index.js               # example file
├── .commitlintrc.js       # Commitlint
├── .editorconfig           # EditorConfig
├── .gitignore                # Ignored files by Git
├── .huskyrc.js              # Husky
├── .prettierrc.js           # Prettier
├── CHANGELOG.md
├── LICENSE
├── README.md
├── ROADMAP.md
├── package.json
└── yarn.lock
```
