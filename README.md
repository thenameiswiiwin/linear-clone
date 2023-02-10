# Rebuilding Linear.app with Next JS 13, Tailwind CSS and TypeScript

[Show Case](https://linear-clone-tau.vercel.app/)

Rebuilding Linear.app with Next JS 13, Tailwind CSS, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Commitlint, PostCSS, Tailwind CSS.

### Features

- [Next.js](https://nextjs.org) for Static Site Generator
- Type checking [TypeScript](https://www.typescriptlang.org)
- Integrate with [Tailwind CSS](https://tailwindcss.com)
- Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- Easily construct component variants with [CVA](https://github.com/joe-bell/cva)
- Utility for constructing `classname` strings conditionally with [clsx](https://github.com/lukeed/clsx)
- Code Formatter with [Prettier](https://prettier.io)
- Husky for Git Hooks
- Lint-staged for running linters on Git staged files
- Lint git commit with Commitlint
- Write standard compliant commit messages with Commitizen
- Absolute Imports using `@` prefix

### Requirements

- Node.js 14+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone https://github.com/thenameiswiiwin/linear-clone.git.git
cd linear-clone
yarn
```

Then, you can run locally in development mode with live reload:

```shell
yarn dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```shell
.
├── README.md                       # README file
├── .husky                          # Husky configuration
├── public                          # Public assets folder
├── src
│   ├── app                         # Layouts components, error components, and loading components
│   ├── assets                      # Images and fonts
│   └── components                  # React components
│   └── lib                         # Utility functions
│   ├── pages                       # Next JS Pages
│   ├── styles                      # Styles folder
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Commit Message Format

The project enforces [Conventional Commits](https://www.conventionalcommits.org/) specification. This means that all your commit messages must be formatted according to the specification. To help you write commit messages, the project uses [Commitizen](https://github.com/commitizen/cz-cli), an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
yarn commit
```

One of the benefits of using Conventional Commits is that it allows us to automatically generate a `CHANGELOG` file. It also allows us to automatically determine the next version number based on the types of commits that are included in a release.

### Deploy to production

You can see the results locally in production mode with:

```shell
yarn build
yarn start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).
