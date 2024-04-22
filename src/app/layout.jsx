import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import TheHeader from "./components/TheHeader";
import styles from "./page.module.css";
import { Providers } from "./components/Providers";
// import styles from "./global.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata = {
  title: "Hotel search",
  description: "Search for a hotel in a country or city",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body>
        <Providers>
          <TheHeader />
          <main className={styles.main}>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
