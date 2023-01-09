import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Head from "next/head";
import Script from "next/script";

function GAScript() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6BLWHTFTEP"
      ></Script>
      <Script>
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6BLWHTFTEP');
  `}
      </Script>
    </>
  );
}

const config: DocsThemeConfig = {
  logo: (
    <>
      <span>PoloDB</span>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <GAScript />
      </Head>
    </>
  ),
  project: {
    link: "https://github.com/vincentdchan/PoloDB",
  },
  chat: {
    link: "https://discord.gg/judXX373",
  },
  docsRepositoryBase: "https://github.com/vincentdchan/polodb-docs",
  footer: {
    text: `Copyright © ${new Date().getFullYear()} Vincent Chen`,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – PoloDB",
    };
  },
};

export default config;
