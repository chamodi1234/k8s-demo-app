import React from 'react';

const MonitoringLiveDemo = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg space-y-6">
      <h3 className="text-2xl font-bold mb-4">Kubernetes Monitoring Demo</h3>

      {/* Video Section */}
      <div className="bg-gray-800 p-4 rounded-md">
        <video controls className="w-full rounded-md">
          <source src="src/assets/configuration.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default MonitoringLiveDemo;