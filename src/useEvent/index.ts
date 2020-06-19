import { useEffect } from "react";

export default (type: string, handler: () => any): void => {
  useEffect(() => {
    window.addEventListener(type, handler);
    return () => {
      window.removeEventListener(type, handler);
    };
  });
};
