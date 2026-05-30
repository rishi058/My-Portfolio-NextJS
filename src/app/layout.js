import './globals.css'
import './styles/neon.css'
import Script from 'next/script'

export const metadata = {
  title: "Rishi's Portfolio",
  description: 'A Next.js Portfolio',
}

import SplashCursor from './components/SplashCursor'
import Silk from './components/Silk'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
        <Script src="https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js" strategy="afterInteractive" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('sysmon-theme');
                  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
                  const initialTheme = stored === 'light' || (!stored && systemPrefersLight) ? 'light' : 'dark';
                  if (initialTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body>
        <SplashCursor />
        <div className="fixed inset-0 z-0 pointer-events-none silk-overlay">
          <Silk
            speed={3}
            scale={.5}
            color="#7B7481"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>
        {children}
      </body>
    </html>
  )
}
