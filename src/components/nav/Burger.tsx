import "./Burger.scss";

interface BurgerProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

export default function Burger({ menuOpen, toggleMenu }: BurgerProps) {
  return (
    <button
      className={`burger ${menuOpen ? "open" : ""}`}
      onClick={toggleMenu}
      aria-label="Menu"
    >
      <span className="line line1"></span>
      <span className="line line2"></span>
      <span className="line line3"></span>
    </button>
  );
}
