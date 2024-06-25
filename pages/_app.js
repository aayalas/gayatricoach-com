import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@material-tailwind/react";
import { NextIntlClientProvider } from "next-intl";
import {useRouter} from 'next/router';

import {ThemeProvider as NextThemesProvider} from "next-themes";
import "../styles/globals.css";
import "@/styles/embla.css"

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
return (
  <NextUIProvider>
    <ThemeProvider>
      <NextIntlClientProvider
        locale={router.locale}
        timeZone="America"
        messages={pageProps.messages}
      >
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <Component {...pageProps} />
          </NextThemesProvider>
         
      </NextIntlClientProvider>
    </ThemeProvider>
  </NextUIProvider>
 );
}
