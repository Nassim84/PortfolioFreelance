import { ImageResponse } from 'next/og'

// Favicon "NB" aux couleurs du site.
export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 999,
          background: '#17211c',
          color: '#d7f36b',
          fontSize: 28,
          fontWeight: 700,
        }}
      >
        NB
      </div>
    ),
    size,
  )
}
