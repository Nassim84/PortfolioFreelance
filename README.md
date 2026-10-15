# Portfolio – Nassim

Site portfolio d'un développeur full stack freelance, construit avec Next.js.

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- React 19
- Tailwind CSS 4
- shadcn/ui
- pnpm

## Démarrer

Prérequis : Node.js 22+ et [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev
```

Le site est ensuite disponible sur http://localhost:3000.

## Scripts

| Commande     | Description                                  |
| ------------ | -------------------------------------------- |
| `pnpm dev`   | Lance le serveur de développement            |
| `pnpm build` | Crée la version de production                |
| `pnpm start` | Sert la version de production (après build)  |

## Structure

- `app/` : pages et layout (contenu principal dans `app/page.tsx`)
- `components/` : composants UI
- `lib/` : utilitaires
- `public/` : images et fichiers statiques

## Déploiement

Le site est hébergé sur [Netlify](https://www.netlify.com/) : importer le dépôt GitHub dans Netlify, qui détecte Next.js automatiquement.
