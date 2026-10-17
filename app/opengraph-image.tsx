import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

// Vignette affichée quand le lien du site est partagé (LinkedIn, WhatsApp, Slack…).
export const alt = site.title
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#17211c',
          color: '#f7f7f2',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 999,
              background: '#d7f36b',
              color: '#17211c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            NB
          </div>
          <div style={{ display: 'flex', fontSize: 30, fontWeight: 700 }}>
            {site.name}
            <span style={{ color: 'rgba(255,255,255,.4)' }}>.dev</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -3 }}>
            Développeur Full Stack freelance à Avignon
          </div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 32, color: 'rgba(255,255,255,.65)' }}>
            Sites vitrines · Applications métier · Refonte & maintenance
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 26 }}>
          <span style={{ color: '#d7f36b' }}>nbfullstack.fr</span>
          <span style={{ color: 'rgba(255,255,255,.5)' }}>Next.js · React · Symfony · .NET</span>
        </div>
      </div>
    ),
    size,
  )
}
