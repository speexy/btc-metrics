// src/components/Graph.tsx
import React from 'react';

interface GraphProps {
  src: string;
}

const Graph: React.FC<GraphProps> = ({ src }) => (
  <div style={{ width: '100%', marginBottom: '20px' }}>
    <iframe
      src={src}
      style={{ width: '100%', height: '600px', border: 'none' }}
      title="Graph"
    ></iframe>
  </div>
);

export default Graph;
