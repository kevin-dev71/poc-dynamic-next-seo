import React from 'react';
import Head from 'next/head';

export interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
}

const Meta: React.FC<MetaProps> = ({
  title,
  image = undefined,
  canonical = 'https://misite.com',
  description = 'My description',
}) => {
  const urlLink = 'https://misite.com';
  const compoundTitle = title ? `mi site | ${title}` : 'mi site';
  const twitterTitle = title ? `mi site | ${title}` : 'mi site';

  const compoundDescription = description;
  const currentYear = new Date().getFullYear();

  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover"
      />
      <meta name="organization" content="site" />
      <meta name="encoding" charSet="utf-8" />
      <meta
        name="application-name"
        lang="es"
        content="site, proof of concept dynamic meta tags"
      />
      {<meta name="description" content={compoundDescription} />}
      {image && <meta name="image" content={image} />}
      <title>{compoundTitle}</title>
      <meta name="title" content={compoundTitle} />
      <meta name="keywords" content="site, poc, dynamic, meta, tags" />
      <meta name="language" content="es" />
      <meta name="robots" content="index, follow" />

      {/* LINKS */}
      {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={canonical} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlLink} />
      <meta property="og:title" content={compoundTitle} />
      <meta property="og:description" content={compoundDescription} />

      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:secure_url" content={image} />}

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sitepay" />
      <meta property="twitter:url" content={urlLink} />
      <meta property="twitter:title" content={twitterTitle} />
      <meta property="twitter:description" content={compoundDescription} />
      {image && <meta property="twitter:image" content={image} />}
      {image && <meta name="twitter:image:src" content={image} />}

      <meta
        name="copyright"
        content={`&copy; site ${currentYear} Todos los derechos reservados.`}
      />
    </Head>
  );
};
export default Meta;
