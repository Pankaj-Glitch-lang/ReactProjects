import React from 'react';
import { useLocation } from 'react-router-dom';

const PublishPage = () => {
  const location = useLocation();
  const { components } = location.state;

  return (
    <div>
      <h1>Published Page</h1>
      <div>
        {components.map((component, index) => (
          <div key={index}>{component}</div>
        ))}
      </div>
    </div>
  );
};

export default PublishPage;
