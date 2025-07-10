import React from 'react';
import { useParams } from 'react-router-dom';

function ZoneDetailPage() {
  const { zone } = useParams();

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4">Details for {zone}</h2>
      <p>This is a dedicated page for the {zone} time zone.</p>
      <a
        href={`https://www.google.com/search?q=Time+zone+in+${zone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Learn More
      </a>
    </div>
  );
}

export default ZoneDetailPage;
