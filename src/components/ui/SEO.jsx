import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Mehza SmartTech Solutions | Smart Hygiene Technology',
  description = 'Empowering schools, offices & public spaces with sanitary pad vending machines and smart digital panels. Making hygiene accessible everywhere.',
  keywords = 'smart hygiene solutions, sanitary pad vending machine, hygiene technology, smart panels, schools offices public spaces',
  ogImage = '/og-image.jpg',
  canonical,
}) => {
  const fullTitle = title.includes('Mehza') ? title : `${title} | Mehza SmartTech Solutions`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
};

export default SEO;
