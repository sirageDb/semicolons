import React from "react";
import { Helmet } from "react-helmet";
import apiEndPoint from "../../config/apiEndPoint";

interface ISeoProps {
  title: string;
  description: string;
  keywards: string;
  robots: "index" | "follow" | "index,follow" | "noindex";
  imagePath: string;
  ogType: "article" | "website";
  path: string;
}

export default function Seo({ title, description, keywards, robots, imagePath, ogType, path }: ISeoProps): JSX.Element {
  const domain = "https://www.semicolons.dev/";

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name={"title"} content={title} />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"></meta>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywards} />
      <meta name="author" content="sirage Al dbiyat" />
      <meta name="copyright" content="sirage Al dbiyat" />
      <meta name="robots" content={robots} />

      {/* OG */}
      <html prefix="og: https://www.semicolons.dev/"></html>
      {/* ===================================================================== */}
      <meta property="og:title" content={`${title} - Semicolons`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={`https://www.semicolons.dev/${path}`} />
      <meta property="og:image" content={apiEndPoint + "/" + imagePath} />
      <meta property="og:image:width" content="150" />
      <meta property="og:image:width" content="50" />

      {/* Additional OG */}
      {/* ===================================================================== */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={`https://www.semicolons.dev/${path}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={`${title} - Semicolons`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={apiEndPoint + "/" + imagePath} />
      <meta property="og:image:width" content="150" />
      <meta property="og:image:width" content="50" />
      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={domain} />
      <meta property="twitter:url" content={`https://www.semicolons.dev/${path}`} />
      <meta name="twitter:title" content={`${title} - Semicolons`} />
      <meta
        name="twitter:description"
        content={description}/>
      <meta name="twitter:image" content={apiEndPoint + "/" + imagePath} />
      <meta name="og:image:width" content="150" />
      <meta name="og:image:width" content="50" />
    </Helmet>
  );
}
