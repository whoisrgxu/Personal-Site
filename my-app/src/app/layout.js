import './globals.css';
import Header from '../components/Header';
import ThemeProvider from '../components/ThemeProvider';
import FancyCursor from '../components/FancyCursor';


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
            <FancyCursor/>
            <Header/>
            <div >
              {children}              
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

