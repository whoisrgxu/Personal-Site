import './globals.css';
import Header from '../components/Header';
import ThemeProvider from '../components/ThemeProvider';
import FancyCursor from '../components/FancyCursor';
import { SoundProvider } from '@/components/SoundProvider';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AOS from 'aos';

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
            {/* Floating icon column on the left */}
            <div
              data-aos="fade-up"
              className="hidden fixed bottom-4 left-4 z-50 md:flex flex-col gap-4 items-center" 
            >
              {/* Example icons — replace with real ones */}
              <a href="https://github.com/whoisrgxu" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
              <a href="mailto:roxu1927@outlook.com" target="_blank" rel="noopener noreferrer">
                <MailOutlineIcon/>
              </a>
              <a href="https://www.linkedin.com/in/rogerxuprofile/">
                <LinkedInIcon/>
              </a>
              {/* Vertical line */}
              <div className="w-1 h-50 mt-4 bg-black lg:opacity-60"></div>              
            </div>
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

