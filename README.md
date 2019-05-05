# Roadmate

This is a WIP node package to help developers get off the ground with projects

## The idea

Getting started with a project requires a bunch of decision making about tooling, folder structure, and deployment followed with a bunch of configuration to get it all to work. It would be nice to have a single package that makes some sensible decisions for you. Obviously each project is unique, so these decisions would need to be both well documented and easily configured or replaced.

### Pre-configured

Some things that can be pre-configured:

- Build process
  - HTML templating
  - CSS build
  - Javascript build
  - Media asset management
- Linting
- Testing

### Packages

Off the top of my head I'm thinking it will come bundled with:

- `webpack`
- `webpack-dev-server`
- `handlebars`
- `node-sass`
- `lazysizes`
- `favicons`
- `jest`
- `eslint`
- `stylelint`

### Configurability

It's important that everything can be overwritten. I'm thinking of hiding all processes behind custom CLI commands. Something like `roadmate build`, `roadmate lint`, etc. This means processes can be used as needed. I'm also thinking it will detect project configurations in the root folder, where things can be overwritten. Lint configs, webpack config, etc.
