import React from "react";
import Link from "next/link";
import Script from "next/script";

export default function () {
  return (
    <div>
      Hello <Link href="/docs">docs</Link>
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
    </div>
  );
}
