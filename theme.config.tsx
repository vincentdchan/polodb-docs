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
      </Head>
    </>
  ),
  project: {
    link: "https://github.com/PoloDB/PoloDB",
  },
  chat: {
    link: "https://discord.gg/NmGQyVx6hH",
  },
  docsRepositoryBase: "https://github.com/PoloDB/PoloDB-docs",
  footer: {
    text: `Copyright © ${new Date().getFullYear()} Vincent Chen`,
  },
  navbar: {
    extraContent: <GAScript />,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – PoloDB",
    };
  },
};

export default config;
