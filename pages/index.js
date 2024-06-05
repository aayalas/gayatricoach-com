import Image from "next/image";
import { Inter } from "next/font/google";
import { useTranslations } from 'next-intl';
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ["latin"] });

export const Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
}

export default function Home({title}) {
  const t = useTranslations('Home');
  return (
    <>
      <Head>
        <title>{[ t('pageTitle'), title].join(' - ')}</title>
      </Head>
      <main>
        <Navigation />
        <Main />
        <Footer />
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../messages/${context.locale}.json`)).default
    }
  };
}