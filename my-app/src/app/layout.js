import './globals.css';
import Header from '../components/Header';
import ThemeProvider from '../components/ThemeProvider';
import FancyCursor from '../components/FancyCursor';
import { SoundProvider } from '@/components/SoundProvider';



export const metadata = {
  title: 'My Personal Site',
  description: 'Created with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SoundProvider>
          <main className="relative w-full max-w-[1920px] px-8 md:px-16 lg:px-32 mx-auto overflow-hidden">
            <FancyCursor/>
            <Header/>
            <div >
              {children}              
            </div>
          </main>
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

