import { useEffect } from "react";

const useScrollAnimation = (selector, animationClass) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
          } else {
            entry.target.classList.remove(animationClass); // reset when out of view
          }
        });
      },
      { threshold: 0.2 } // trigger when 20% of element is visible
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector, animationClass]);
};

export default useScrollAnimation;
