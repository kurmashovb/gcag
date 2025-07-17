# Fusion Starter

A production-ready full-stack template combining **React** and **Express** with an integrated Vite setup. TailwindCSS is used for styling and **Vitest** for unit testing. The project ships with hot reloading and a simple Express API so you can start building right away.

## Tech Stack

- **React 18** + **TypeScript**
- **Express** server
- **TailwindCSS** for styling
- **Vite** for build tooling
- **Vitest** for tests

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server for both client and server |
| `npm run build` | Build the client and server for production |
| `npm start` | Run the production server after building |
| `npm test` | Execute the Vitest test suite |

## Local Development

Start the dev server (client + API on a single port):

```bash
npm run dev
```

After building, run the production server locally:

```bash
npm run build
npm start
```

The application will be available at `http://localhost:8080`.

## Deploying to Netlify

This repository is ready to deploy to Netlify. A basic `netlify.toml` is included and builds the client using `npm run build:client`.

Example workflow using the Netlify CLI:

```bash
npm install -g netlify-cli    # once
netlify login                 # authenticate
netlify deploy --build --prod # build and deploy
```

This will upload the `dist/spa` folder and run serverless functions from `netlify/functions`.
