import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-blue-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-blue-300 focus:bg-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " md:px-6 md:py-4 px-4 py-3",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-xs",
    secondary:
      "inline-block rounded-full font-semibold uppercase -tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-2 disabled:cursor-not-allowed border-2 border-stone-300 md:px-6 md:py-3.5  px-4 py-2.5  hover:text-stone-800 focus:text-stone-800 text-sm ",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;