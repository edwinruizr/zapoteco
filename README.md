# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Start your site

Run the development server:

```bash
npm run start
```
The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/. Most changes are reflected live without having to restart the server.

## Translating
Copy the file to the i18n/es/docusaurus-plugin-content-docs/current/ folder:
For example say we are going to translate `docs/basics/alphabet.md`:
```bash 
cp docs/basics/basics.md i18n/es/docusaurus-plugin-content-docs/current/basics/basics.md
```
You would then translate `i18n/es/docusaurus-plugin-content-docs/current/alphabet/alphabet.md` in Spanish.

Start your site on the Spanish locale:

npm run start -- --locale es

Your localized site is accessible at http://localhost:3000/es/ and the Alphabet page is translated.

