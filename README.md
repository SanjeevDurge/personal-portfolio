<p align="center">
  <img src="/public/favicon.svg" width="50" alt="Logo" />
</p>
<h1 align="center">Sanjeev Durge — Personal Portfolio</h1>

[![Site preview](/public/site-preview-sd.png)](https://github.com/SanjeevDurge/portfolio)

Data science portfolio showcasing projects in ML, AI, and MLOps. Built with [Remix](https://remix.run/), [Three.js](https://threejs.org/), and [Framer Motion](https://www.framer.com/motion/). Deployed on [Vercel](https://vercel.com).

## Install and run

Use **Node.js 18+** (or 20+ recommended). Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

The app runs at `http://localhost:7777` by default.

## Build

```bash
npm run build
```

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Set the **Framework Preset** to **Remix**.
4. Optional: add an environment variable `SESSION_SECRET` (any long random string) for theme cookies.

Update `app/config.json` (`url`) and `public/sitemap.xml` with your production URL after the first deploy.

## Component library (Storybook)

```bash
npx storybook dev -p 6006
```

(Storybook dependencies are not included in the default `package.json`; add `@storybook/*` packages if you need this workflow.)

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE).

## Credits

Site structure and visual design are adapted from an open-source Remix portfolio template. Customized content, projects, and deployment configuration are by Sanjeev Durge.
