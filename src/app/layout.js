import './globals.css'
import './styles/neon.css'
import './styles/neo-brutalism.css'
import './styles/frosted-glass.css'
import './styles/neumorphic.css'
import Script from 'next/script'

export const metadata = {
  title: "Rishi's Portfolio",
  description: 'A Next.js Portfolio — Full-Stack Developer, UI/UX Designer & Agentic AI Engineer',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

import SplashCursor from './components/SplashCursor'
import Silk from './components/Silk'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <Script src="https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js" strategy="afterInteractive" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var root = document.documentElement;
                  root.classList.remove('dark', 'neo', 'glass', 'neumorphic');

                  /* ── Migrate old 4-state values if present ── */
                  var mode  = localStorage.getItem('sysmon-theme');
                  var style = localStorage.getItem('sysmon-theme-style');

                  if (mode === 'neo-dark')  { style = 'neo'; mode = 'dark';  localStorage.setItem('sysmon-theme-style', 'neo'); localStorage.setItem('sysmon-theme', 'dark'); }
                  if (mode === 'neo-light') { style = 'neo'; mode = 'light'; localStorage.setItem('sysmon-theme-style', 'neo'); localStorage.setItem('sysmon-theme', 'light'); }
                  if (mode === 'neon-dark')  { mode = 'dark';  localStorage.setItem('sysmon-theme', 'dark'); }
                  if (mode === 'neon-light') { mode = 'light'; localStorage.setItem('sysmon-theme', 'light'); }

                  /* ── Apply style (neon vs neo vs glass vs neumorphic) ── */
                  if (style === 'neo') root.classList.add('neo');
                  if (style === 'glass') root.classList.add('glass');
                  if (style === 'neumorphic') root.classList.add('neumorphic');

                  /* ── Apply dark / light mode ── */
                  var systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
                  var isDark = mode === 'dark' || (!mode && !systemPrefersLight);
                  if (isDark) root.classList.add('dark');
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body>
        {/* SplashCursor — hidden in neo mode via CSS (.splash-cursor-wrapper) */}
        <div className="splash-cursor-wrapper">
          <SplashCursor />
        </div>
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

