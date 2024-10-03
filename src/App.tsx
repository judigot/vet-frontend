import React, { useEffect } from 'react';

interface IData {
  message: string;
}

function App() {
  const [data, setData] = React.useState<IData | undefined>(undefined);

  useEffect(() => {
    
  }, []);

  return (
    <div style={{ zoom: '500%', textAlign: 'center' }}>
      Hello, Pet!
    </div>
  );
}

export default App;
