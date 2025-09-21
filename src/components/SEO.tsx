import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEO = ({ title, description, keywords, canonical, ogImage }: SEOProps) => {
  const siteUrl = 'https://www.uetmardan.edu.pk';
  const defaultImage = '/UET-logo.webp';
  
  return (
    <Helmet>
      <title>{title ? `${title} | UET Mardan` : 'UET Mardan - University of Engineering and Technology'}</title>
      <meta name="description" content={description || "University of Engineering and Technology Mardan offers excellence in engineering education, research, and innovation in Pakistan."} />
      <meta name="keywords" content={keywords || "UET Mardan, engineering university, technology education, Pakistan engineering, admissions, QEC"} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical || siteUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title || 'UET Mardan'} />
      <meta property="og:description" content={description || "University of Engineering and Technology Mardan"} />
      <meta property="og:image" content={ogImage || `${siteUrl}${defaultImage}`} />
      <meta property="og:url" content={canonical || siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="UET Mardan" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || 'UET Mardan'} />
      <meta name="twitter:description" content={description || "University of Engineering and Technology Mardan"} />
      <meta name="twitter:image" content={ogImage || `${siteUrl}${defaultImage}`} />
    </Helmet>
  );
};

export default SEO;