// 全てのページで一度は読み込まれる可能性がある基幹ページ
import "../styles/globals.css";
import "nprogress/nprogress.css";
import { NextSeo } from "next-seo";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";
import Footer from "../components/layouts/Footer";
import HamburgerMenu from "../components/layouts/HamburgerMenu";

import { googleTagManagerId } from "../utils/gtm";
import GoogleTagManager, {
  GoogleTagManagerId,
} from "../components/layouts/GoogleTagManager";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManager
        googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
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
