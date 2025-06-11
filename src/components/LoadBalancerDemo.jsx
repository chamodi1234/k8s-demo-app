import React, { useEffect, useState } from 'react';

const LoadBalancerDemo = () => {
  const [hostname, setHostname] = useState('');

  useEffect(() => {
    fetch('/api/hostname')
      .then(res => res.text())
      .then(data => setHostname(data))
      .catch(() => setHostname('Failed to fetch pod info'));
  }, []);

  return (
    <div style={{ 
      textAlign: 'center', 
      marginTop: '50px', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <h1>Kubernetes Load Balancing Demo</h1>
      <p style={{ fontSize: '18px' }}>
        This page is served by:
      </p>
      <div style={{
        padding: '10px 20px',
        background: '#f0f0f0',
        display: 'inline-block',
        fontSize: '20px',
        borderRadius: '8px',
        fontWeight: 'bold'
      }}>
        {hostname}
      </div>
      <p style={{ marginTop: '20px', fontSize: '14px' }}>
        Refresh the page to simulate traffic reaching different pods.
      </p>
    </div>
  );
};

export default LoadBalancerDemo;
