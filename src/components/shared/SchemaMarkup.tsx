'use client';

import React from 'react';

// Define a base interface for any schema type
interface BaseSchema {
  '@context': string;
  '@type': string;
  [key: string]: any; // Allow for other properties
}

interface SchemaMarkupProps {
  schema: BaseSchema | BaseSchema[];
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ schema }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;