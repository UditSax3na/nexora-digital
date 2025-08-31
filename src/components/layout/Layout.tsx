import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Nexora Digital - Digital Marketing Agency',
  description = 'Transform your business with Nexora Digital\'s expert digital marketing services. SEO, social media, PPC, and content marketing solutions.',
  keywords = 'digital marketing, SEO, social media marketing, PPC advertising, content marketing, brand strategy',
  canonicalUrl
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Nexora Digital" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nexora Digital" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Canonical URL */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nexora Digital",
            "description": "Expert digital marketing agency specializing in SEO, social media, and PPC advertising",
            "url": "https://nexoradigital.com",
            "logo": "https://nexoradigital.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service",
              "email": "hello@nexoradigital.com"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Digital Avenue",
              "addressLocality": "Tech City",
              "addressRegion": "TC",
              "postalCode": "12345",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://facebook.com/nexoradigital",
              "https://twitter.com/nexoradigital",
              "https://linkedin.com/company/nexoradigital"
            ]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;