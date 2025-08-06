// src/components/shared/SchemaMarkup.tsx
import React from 'react';

// Define the structure of the schema prop
interface SchemaMarkupProps {
  schema: object;
}

/**
 * A component to inject JSON-LD schema markup into the page head.
 * This is critical for SEO and AI search optimization, providing a machine-readable
 * description of the page's content.
 * @param schema A valid JSON-LD schema object.
 */
const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ schema }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
