import { useState, useEffect } from "react";

export default (): boolean => {
  const [online, setOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const setFromEvent = (status: boolean) => setOnline(status);

    window.addEventListener("online", () => setFromEvent(true));
    window.addEventListener("offline", () => setFromEvent(false));

    return () => {
      window.removeEventListener("online", () => setFromEvent(true));
      window.removeEventListener("offline", () => setFromEvent(false));
    };
  }, []);

  return online;
};
