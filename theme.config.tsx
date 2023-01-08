import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>PoloDB</span>,
  project: {
    link: "https://github.com/vincentdchan/PoloDB",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/vincentdchan/polodb-docs",
  footer: {
    text: `Copyright © ${new Date().getFullYear()} Vincent Chen`,
  },
};

export default config;
