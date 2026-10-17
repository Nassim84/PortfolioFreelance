import { ImageResponse } from 'next/og'

// Icône utilisée quand le site est ajouté à l'écran d'accueil d'un iPhone.
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#17211c',
          color: '#d7f36b',
          fontSize: 76,
          fontWeight: 700,
        }}
      >
        NB
      </div>
    ),
    size,
  )
}
