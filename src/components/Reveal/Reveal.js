import React, { useEffect, useRef } from "react";

const Reveal = ({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  threshold = 0.15,
  ...rest
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      data-delay={delay || undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
