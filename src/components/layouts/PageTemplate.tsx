import Head from "next/head";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageTemplateProps {
  children: React.ReactElement;
  title: string;
}

const PageTemplate = ({ children, title }: PageTemplateProps) => {
  return (
    <>
      <Head>
        <title>{title ? title : "まめブロ|ゼロイチ好きのよりどころ"}</title>
      </Head>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
      <style jsx global>
        {`
          html,
          body {
            background: #f5f5f5;
            overflow-x: hidden;
            padding: 0 !important;
          }
          #__next {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          main {
            flex: 1;
          }
        `}
      </style>
    </>
  );
};

export default PageTemplate;
