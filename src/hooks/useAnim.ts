import { RefObject, useEffect } from "react";

const useAnim = (
  observableElementRef: RefObject<HTMLElement>,
  style: string
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observableElementRef.current?.classList.add(style);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    if (observableElementRef.current) {
      observer.observe(observableElementRef.current);
    }
    return () => {
      if (observableElementRef.current) {
        observer.unobserve(observableElementRef.current);
      }
    };
  }, []);
};

export default useAnim;
