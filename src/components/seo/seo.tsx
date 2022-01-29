import React from "react";
import { Helmet } from "react-helmet";
import apiEndPoint from "../../config/apiEndPoint";

interface ISeoProps {
  title: string;
  description: string;
  keywards: string;
  robots: "index" | "follow" | "index,follow";
  imagePath: string;
  type: "article" | "website";
  slug: string;
}

export default function Seo({ title, description, keywards, robots, imagePath, type, slug }: ISeoProps): JSX.Element {
  const hostLink = "https://www.semicolons.dev/posts/";
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
      <meta property="og:type" content={type} />
      <meta property="og:url" content={hostLink + slug} />
      <meta property="og:image" content={apiEndPoint + "/" + imagePath} />
      <meta property="og:image:width" content="150" />
      <meta property="og:image:width" content="50" />

      {/* Additional OG */}
      {/* ===================================================================== */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="KOLABS - Révélateurs de talents" />

      {/* <!-- HTML Meta Tags --> */}
      <title>KOLABS - Révélateurs de talents</title>
      <meta
        name="description"
        content="KOLABS c'est une entreprise s'adapte à vos besoins et vous permet de trouver les champions de l'IT. KOLABS est votre partenaire pour acquérir rapidement et durablement de nouveaux talents."
      />
      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={hostLink + slug} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} - Semicolons`} />
      <meta
        property="og:description"
        content="KOLABS c'est une entreprise s'adapte à vos besoins et vous permet de trouver les champions de l'IT. KOLABS est votre partenaire pour acquérir rapidement et durablement de nouveaux talents."
      />
      <meta property="og:image" content={apiEndPoint + "/" + imagePath} />
      <meta property="og:image:width" content="150" />
      <meta property="og:image:width" content="50" />
      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={domain} />
      <meta property="twitter:url" content={hostLink + slug} />
      <meta name="twitter:title" content={`${title} - Semicolons`} />
      <meta
        name="twitter:description"
        content="KOLABS c'est une entreprise s'adapte à vos besoins et vous permet de trouver les champions de l'IT. KOLABS est votre partenaire pour acquérir rapidement et durablement de nouveaux talents."
      />
      <meta name="twitter:image" content={apiEndPoint + "/" + imagePath} />
      <meta name="og:image:width" content="150" />
      <meta name="og:image:width" content="50" />
    </Helmet>
  );
}
