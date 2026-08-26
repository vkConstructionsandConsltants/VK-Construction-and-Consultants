import type {Metadata} from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/common/WhatsAppFloat';

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "V K Construction & Consultants",
  "url": "https://vkconstructionandconsultants.com",
  "telephone": ["+919901620876", "+917892520876"],
  "email": "vkconstructionandconsultants@gmail.com",
  "description": "UDYAM Registered turnkey construction company in Mysore, Karnataka. Residential, commercial, interior, 3D elevation design, renovation, structural consultancy and PMC services.",
  "foundingDate": "2021",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "#4086, Ground Floor, Vijayanagara 4th Stage, 3rd Phase",
    "addressLocality": "Mysore",
    "addressRegion": "Karnataka",
    "postalCode": "570017",
    "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 12.3271, "longitude": 76.5828 },
  "areaServed": [
    {"@type": "City", "name": "Mysore"},
    {"@type": "State", "name": "Karnataka"}
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "09:00",
    "closes": "20:00"
  },
  "priceRange": "₹₹",
  "hasCredential": "UDYAM Registered — Government of India MSME Ministry",
  "founder": {
    "@type": "Person",
    "name": "Pradeep Kumar K C",
    "jobTitle": "Founder & Lead Civil Engineer",
    "hasCredential": ["BE Civil Engineering", "MTech Construction Technology and Management"]
  },
  "sameAs": [
    "https://www.instagram.com/vk.construction_consultants/",
    "https://wa.me/919901620876"
  ]
};

export const metadata: Metadata = {
  title: 'Best Construction Company in Mysore | VK Construction & Consultants',
  description: "VK Construction & Consultants — Mysore's trusted turnkey construction company since 2021. Residential, commercial, 3D elevation design, interior work & PMC. Starting ₹2,000/sqft. UDYAM Registered.",
  keywords: 'construction company in mysore, best construction company mysore, construction companies in mysore, turnkey construction mysore, construction company in karnataka',
  alternates: {
    canonical: 'https://vkconstructionandconsultants.com/',
  },
  openGraph: {
    title: 'Best Construction Company in Mysore | Build Smart, Build Strong',
    description: 'Turnkey construction experts in Mysore, Karnataka. Residential, commercial & interior projects. ₹2,000–₹2,400/sqft. UDYAM Registered. Free consultation.',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="keMeMZCN-uM93phl0-tyYOKsEVnMpX9oVO45yBQk5-M" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
