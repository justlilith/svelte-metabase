# Svelte-Metabase

Embed Metabase dashboards in your Svelte/Kit project.

[![Node.js Package](https://github.com/justlilith/svelte-metabase/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/justlilith/svelte-metabase/actions/workflows/npm-publish.yml)

## Features

- Dashboard embedding (guest mode)
- View mode

### Planned

- Dashboard embedding (with SSO)
- Full app embedding

## Usage

Import the component:

```js
import { Metabase } from "svelte-metabase";
import type { MetabaseConfig } from "svelte-metabase";
```

Define a config object for passage as a prop into the Metabase component.

Your instance URL should not end with a trailing slash.

Downloads are enabled by default (only Pro and Enterprise plans allow disabling downloads), as is the dashboard title.

`initial-parameters` is a JSON string of parameter values (a dictionary of keys mapped to value arrays). Example: `'{"category":["Gizmo"]}'`.

The default theme preset is dark.

`isGuest` defaults to true (guest embeddings require this).

```ts
type MetabaseConfig = {
    downloads?: boolean
    initialParameters: string
    instanceUrl: string
    isGuest?: boolean
    theme?: {
        preset: "dark" | "light"
    },
    title?: boolean
}

/* example */

const config: MetabaseConfig = {
    instanceUrl: "http:localhost:3000",
    theme: {
        preset: "dark"
    }
}
```

Get an embed token programmatically and pass it with the config as props:

```sv
{#if token}
    <Metabase {config} {token}></Metabase>
{/if}
```

## Developing

Install dependencies with `npm install` (or `pnpm install` or `yarn`), then start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To build the library:

```sh
npm pack
```

To create a production version of your showcase app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

## Publishing

```sh
npm publish
```
