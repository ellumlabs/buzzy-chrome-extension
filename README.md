# Buzzy Chrome Extension 

Buzzy chrome extension.

## Getting started

To get started, first install the npm dependencies:

```bash
yarn install
```

Bundle the extension:

```bash
yarn run build 
```

Alternativly, bundle the extension with interactive watch mode:

```bash
yarn run watch 
```

## Plugin Flow
- SignUp/Login
  - email + password or Google Auth authentication
- Home
  - Feed
    - "New Buzzy +" button, allows you to make a new Buzzy on a site, with message and tag people
    - list of cards that show the tag you were tagged in, shows you the link to site, the status and allows you to comment and see comments about this buzzy
  - Tags
  - Organizations

## TODO
  - add lint
  - add prettier
  - "New Buzzy +" on click design
