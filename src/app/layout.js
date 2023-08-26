import "./globals.css";
import React from "react";

export const metadata = {
  //Metadata can be defined by exporting a metadata object
  //or generateMetadata function in a layout.js or page.js file.
  //Good to know: You should not manually add <head> tags such as <title> and <meta> to root layouts.
  //Instead, you should use the Metadata API which automatically handles
  //advanced requirements such as streaming and de-duplicating <head> elements.

  title: "Juanfer Dev",
  description: "Juanfer Dev Webpage",
};

export default function RootLayout({ children }) {
  //The top-most layout is called the Root Layout.
  //This required layout is shared across all pages in an application.
  //Root layouts must contain html and body tags.

  return (
    <>
      <html lang="en">
        <body style={{margin:0}}>{children}</body>
      </html>
    </>
  );
}
