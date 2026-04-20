import './globals.css'

export const metadata = {
  title: 'Fraud Shield v3.5',
  description: 'M-Pesa Fraud Detection Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
