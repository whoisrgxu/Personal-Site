import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ThemeProvider from '../components/ThemeProvider';

export const metadata = {
  title: 'My Personal Site',
  description: 'Created with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <main className="MainLayout">
            <Header />
            <div>{children}</div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

