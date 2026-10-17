import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nassim Belalia — Développeur Full Stack à Avignon',
  description: 'Nassim Belalia, développeur full stack à Avignon. Sites vitrines, applications métier et maintenance web pour indépendants et petites entreprises.',
  keywords: ['développeur full stack Avignon', 'freelance React Avignon', 'création site web Vaucluse', 'Next.js freelance', 'développeur Symfony Avignon'],
  authors: [{ name: 'Nassim Belalia' }],
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
