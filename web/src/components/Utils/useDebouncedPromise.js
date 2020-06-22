import { useRef } from "react";

export default function useDebouncedPromise(fn, delay) {
  let timeoutRef = useRef(null);
  
  function handle(...params) {
    return new Promise((resolve, reject) => {
      if(timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(async() => {
        try {
          const response = await fn(...params);
          resolve(response);
          
        } catch (error) {
          reject(error);
        }

      }, delay);
    });
  }
  return handle;
}