import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import logoCivil from "@/assets/logo_civil_blue-removebg-preview.png"; // ✅ Import your logo

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  category?: string;
  keywords?: string[];
  isBlogPost?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "CivilTech",
  description = "CivilTech: Experts in environmental and civil engineering consultancy specializing in DPR services for Storm Water Drains, Lakes, Tanks, and Drinking Water Supply across Karnataka.",
  type = "website",
  name = "CivilTech",
  imageUrl, // will default to logoCivil if not provided
  publishDate,
  modifiedDate,
  author = "CivilTech",
  category,
  keywords = [
    "environmental engineering",
    "civil engineering consultancy",
    "DPR preparation",
    "storm water drains",
    "lake rejuvenation",
    "water supply",
    "hydrology",
    "ecology",
    "landscape architecture",
    "Karnataka engineering consultants",
  ],
  isBlogPost = false,
}) => {
  const location = useLocation();
  const currentUrl = `https://civiltech.in${location.pathname}`;

  // Use provided image or fallback to logo
  const fallbackLogoUrl = `https://civiltech.in${logoCivil}`;
  const absoluteImageUrl = imageUrl
    ? imageUrl.startsWith("http")
      ? imageUrl
      : `https://civiltech.in${imageUrl}`
    : fallbackLogoUrl;

  // Combine keywords and category if any
  const keywordString = category
    ? [...keywords, category.toLowerCase()].join(", ")
    : keywords.join(", ");

  // ✅ Organization JSON-LD structured data
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CivilTech",
    url: "https://civiltech.in",
    logo: fallbackLogoUrl,
    description:
      "Environmental and Civil Engineering Consultants specializing in DPR services for water infrastructure and lake rejuvenation projects.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "civiltech.research@gmail.com",
      telephone: "+91-8792440658",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.linkedin.com/company/civiltech",
      "https://twitter.com/civiltech",
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      {/* Open Graph */}
      <meta property="og:type" content={isBlogPost ? "article" : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="CivilTech" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />

      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#007ACC" />
      <meta name="msapplication-TileColor" content="#007ACC" />

      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
