import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Providers } from "./providers";
import { SITE_NAME } from "@/constants/seo.constants";
import { StoreProvider } from "@/redux/provider";

const main = Montserrat({
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  subsets: ['cyrillic', 'latin'],
})

export const metadata = {
  tittle: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: 'Best fuel tracker app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={main.className}>
        <Providers>
          <StoreProvider>
            {children}
            <Toaster position='top-center' />
          </StoreProvider>
        </Providers>
      </body>
    </html>
  );
}
