import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  schemas: Array<Record<string, unknown>>;
}

export function StructuredData({ schemas }: StructuredDataProps) {
  if (!schemas.length) {
    return null;
  }

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
