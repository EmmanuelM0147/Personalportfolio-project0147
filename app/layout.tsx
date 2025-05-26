import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

export const metadata: Metadata = {
  title: 'Emmanuel Okeowo | Full-Stack Developer',
  description: 'Building exceptional web & mobile experiences with MERN stack',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://emmanuel-portfolio.vercel.app',
    title: 'Emmanuel Okeowo | Full-Stack Developer',
    description: 'Building exceptional web & mobile experiences with MERN stack',
    siteName: 'Emmanuel Okeowo Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emmanuel Okeowo | Full-Stack Developer',
    description: 'Building exceptional web & mobile experiences with MERN stack',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}