import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    structuredData?: object;
}

export function SEO({
    title = 'Utu Culture - Traditional African Drummers, Dancers & Cultural Entertainment',
    description = 'Professional traditional African drummers and dancers for hire. Authentic cultural performances, dance workshops, wedding entertainment, and stage shows. Book Utu Culture for unforgettable events.',
    keywords = 'traditional drummers, african dancers, cultural entertainment, traditional dance performances, drumming workshops, wedding entertainment, event performers, cultural showcases, african music, traditional costumes, dance classes, cultural education, stage performances, community events',
    image = 'https://utuculture.com/og-image.jpg',
    url = 'https://utuculture.com/',
    type = 'website',
    structuredData,
}: SEOProps) {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Canonical URL */}
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
}
