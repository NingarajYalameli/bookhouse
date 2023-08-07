import { useEffect } from "react";
//This is a custom hook
export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - BookHouse`;
  }, [title]);
  return null;
};
