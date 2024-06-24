import { useState, useEffect } from 'react';

const useNetworkStatus = (
  interval = 5000,
  pingUrl = 'https://www.google.com'
) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    const intervalId = setInterval(() => {
      fetch(pingUrl, { method: 'HEAD', mode: 'no-cors' })
        .then(() => setIsOnline(true))
        .catch(() => setIsOnline(false));
    }, interval);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
      clearInterval(intervalId);
    };
  }, [interval, pingUrl]);

  return isOnline;
};

export default useNetworkStatus;
