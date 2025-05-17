import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
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
            <div class="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500 opacity-25 blur-3xl pointer-events-none z-0"></div>
            <Header />
            <div >
              {children}              
            </div>
            <About />
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

