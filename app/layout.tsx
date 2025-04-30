import "../src/index.css"

export const metadata = {
  title: "Group18 FDS",
  description: "Financial Dashboard System",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
