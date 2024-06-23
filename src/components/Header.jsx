import React from 'react';
import useNetworkStatus from '../hooks/useNetworkStatus';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const isOnline = useNetworkStatus();

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl">MyIndiaa</h1>
        {!isOnline && (
          <div className="flex justify-end px-4 py-2 text-sm text-white bg-red-500 rounded-md">
            <div className="flex items-center space-x-1">
              <ExclamationTriangleIcon className="w-5 h-5 mr-1" />
              <p className="text-sm">You are offline</p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
