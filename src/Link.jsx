import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", href);
    const nvEvent = new PopStateEvent("popstate");
    window.dispatchEvent(nvEvent);
  };
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
