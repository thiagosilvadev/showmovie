import React from "react";

const Button = ({ href, children, extraClass, ...props }) => {
  const styles = `bg-purple transition hover:bg-light focus:bg-light border-2 border-purple hover:border-light focus:border-light inline-block px-8 py-2 rounded-full font-normal text-base text-white ${extraClass}`;

  if (!href) {
    return (
      <button className={styles} {...props}>
        {children}
      </button>
    );
  } else {
    <a className={styles} {...props} href={href}>
      {children}
    </a>;
  }
};

export default Button;
