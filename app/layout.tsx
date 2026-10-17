import type { Metadata, Viewport } from 'next'
import { site } from '@/lib/site'
import './globals.css'

// Favicon, icône Apple et image d'aperçu sont générés par app/icon.tsx, app/apple-icon.tsx et app/opengraph-image.tsx.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    'développeur full stack Avignon',
    'développeur web freelance Avignon',
    'création site internet Avignon',
    'création site vitrine Vaucluse',
    'développeur Next.js freelance',
    'développeur React freelance',
    'développeur Symfony Avignon',
    'développeur ASP.NET freelance',
    'application web sur mesure',
    'refonte site internet',
    'freelance web Gard',
    'développeur web Bouches-du-Rhône',
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.businessName,
  applicationName: site.businessName,
  category: 'technology',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: `${site.name} — ${site.businessName}`,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

// Applique le thème (choix mémorisé, sinon réglage du système) avant l'affichage, pour éviter un flash.
const themeScript = `try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}`

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f7f2' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1512' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
