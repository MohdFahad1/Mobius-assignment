import React from "react";

const Button = ({ children, className = "", arrow = false, to, onClick }) => {
  const classes =
    `px-4 py-2 rounded-full cursor-pointer inline-flex items-center ${className}`.trim();

  const content = (
    <>
      {children}
      {arrow && <span className="ml-1">→</span>}
    </>
  );

  if (to) {
    return (
      <a href={to} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
