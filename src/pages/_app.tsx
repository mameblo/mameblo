// 全てのページで一度は読み込まれる可能性がある基幹ページ
import "../styles/globals.css";
import "nprogress/nprogress.css";
import Script from "next/script";
import * as gtag from "../lib/gtag";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import NextNprogress from "nextjs-progressbar";
import Footer from "../components/layouts/Footer";
import HamburgerMenu from "../components/layouts/HamburgerMenu";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_MEASUREMENT_ID}');
          `,
        }}
      />
      <NextNprogress
        color="aqua"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <HamburgerMenu />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
