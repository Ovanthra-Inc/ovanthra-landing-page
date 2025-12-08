'use client';

import { ReactNode } from 'react';

export interface JsonLd {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

interface JsonLdComponentProps {
  data: JsonLd | JsonLd[];
}

/**
 * Component to render JSON-LD schema in head
 * Used for SEO structured data
 */
export function JsonLdScript({ data }: JsonLdComponentProps): ReactNode {
  const jsonLdArray = Array.isArray(data) ? data : [data];

  return jsonLdArray.map((schema, index) => {
    const scriptContent = JSON.stringify(schema);
    return (
      <script
        key={`jsonld-${index}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: scriptContent }}
      />
    );
  });
}
