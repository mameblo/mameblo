// 全てのページで一度は読み込まれる可能性がある基幹ページ
import "../styles/globals.css";
import "nprogress/nprogress.css";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";
import Footer from "../components/layouts/Footer";
import HamburgerMenu from "../components/layouts/HamburgerMenu";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
