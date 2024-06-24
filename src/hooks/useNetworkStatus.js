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
      const controller = new AbortController();
      const signal = controller.signal;

      setTimeout(() => controller.abort(), 2000);

      fetch(pingUrl, { method: 'HEAD', mode: 'no-cors', signal })
        .then(() => setIsOnline(true))
        .catch((error) => {
          if (error.name === 'AbortError') {
            setIsOnline(false);
          } else {
            setIsOnline(false);
          }
        });
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
