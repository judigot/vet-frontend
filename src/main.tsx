import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloPetApp from '@/HelloPetApp';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('There was an error rendering React app.');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelloPetApp />
  </React.StrictMode>,
);
