# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Start your site

Run the development server:

```bash
npm run start
```

The `npm run start` command builds your website locally and serves it through a development server, ready for you to 
view at <http://localhost:3000/zapoteco/>. Most changes are reflected live without having to restart the server.

## Linting

To lint the markdown docs run:

```bash
make lint
```

Will lint the markdown tables as well as run markdownlint

## Translating

Copy the file to the i18n/es/docusaurus-plugin-content-docs/current/ folder:
For example say we are going to translate `docs/basics/alphabet.md`:

```bash 
cp docs/basics/basics.md i18n/es/docusaurus-plugin-content-docs/current/basics/basics.md
```

You would then translate `i18n/es/docusaurus-plugin-content-docs/current/alphabet/alphabet.md` in Spanish.

Start your site on the Spanish locale:

```bash 
npm run start -- --locale es
```

Your localized site is accessible at <http://localhost:3000/zapoteco/es/> and the Alphabet page is translated.

To create spanish translations run the following:

```bash
make translate
```

this will update files in `i118n/es/` [more details](https://docusaurus.io/docs/cli#docusaurus-write-translations-sitedir)
