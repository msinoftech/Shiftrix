import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME } from "@/lib/config";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: `${APP_NAME} | shiftrix moved with precision`,
  description: "experience of more than 5 years, we make sure that the net revenues of our owner-operators and fleets increase by at least 20% every year by providing them with a good value load.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="Zv-wKTkeqSBusUhYGG8cO05gMKEVNWiz6ufDY51w5Y0" />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        {/* Google Tag Manager Script */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TNLSB643');
            `,
          }}
        />
        {/* Google Tag Manager (noscript) fallback */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TNLSB643" 
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          ></iframe>
        </noscript>

        <Header />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}