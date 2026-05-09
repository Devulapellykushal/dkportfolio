import { Helmet } from "react-helmet-async";
import { absoluteCanonical, type PageSeoMeta } from "@/seo/pageSeo";
import { seoConfig } from "@/seo/seoConfig";

interface SEOHeadProps {
  config: PageSeoMeta;
}

export function SEOHead({ config }: SEOHeadProps) {
  const canonical = absoluteCanonical(config.canonicalPath);
  const title = config.title || seoConfig.defaultTitle;
  const description = config.description || seoConfig.defaultDescription;
  const keywords = config.keywords?.join(", ") ?? "";
  const ogType = config.ogType ?? "website";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={seoConfig.author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:image" content={seoConfig.defaultOgImage} />
      <meta property="og:locale" content={seoConfig.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={seoConfig.defaultOgImage} />
    </Helmet>
  );
}
