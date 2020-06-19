import { useEffect, useState } from "react";

export default () => {
  const [location, setLocation] = useState<Geolocation | null>(null);
  const [error, setError] = useState(false);

  const handleSuccess = (position: any): void => {
    setLocation(position);
  };

  const handleError = (): void => {
    setError(true);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError(true);
    } else {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }
  });

  return { location, error };
};
