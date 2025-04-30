import { Inter } from "next/font/google"
import "../src/index.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Group18 FDS",
  description: "Financial Dashboard System",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
