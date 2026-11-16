# Portfolio — Lucas de Amorim

Personal portfolio (EN/PT, dark/light) built with Next.js 16, React 19 and Tailwind 4.
All copy lives in `lib/i18n.ts`; components only render it.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Deploy on a VPS (Docker + Traefik)

`next.config.ts` uses `output: "standalone"`, so the image only carries the minimal
`server.js` and traced files. No port is published: the Traefik already running on
the VPS (docker provider, `exposedbydefault=false`, `letsencrypt` resolver) picks the
container up through the labels in `docker-compose.yml` and serves it over HTTPS.

On the VPS, with the domain's A record pointing to it:

```bash
git clone https://github.com/Luckyx128/portifolio.git && cd portifolio
echo "DOMAIN=seudominio.com.br" > .env
docker compose up -d --build
```

`DOMAIN` drives both the Traefik `Host()` rule and the build-time `SITE_URL`
(canonical URL, OpenGraph, `robots.txt`, `sitemap.xml`).

To ship updates after pushing to GitHub:

```bash
./deploy/update.sh
```
