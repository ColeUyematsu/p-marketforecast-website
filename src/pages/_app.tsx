// src/pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar'; // Import the Navbar component

// Import Geist fonts (ensure these are correctly set up in your project)
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    // Apply font variables to the root element for global access
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <Navbar /> {/* Render the Navbar */}
      {/* Add top padding to the main content area equal to the navbar height (h-16 = 4rem) */}
      {/* You might need slightly more padding depending on exact content/borders */}
      <main className="pt-16"> {/* Adjust padding top if needed */}
        <Component {...pageProps} /> {/* Render the current page content */}
      </main>
    </div>
  );
}