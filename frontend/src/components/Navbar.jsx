import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { School } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-3 bg-background border-b shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-primary hover:opacity-80 flex items-center gap-1.5"
        >
          <School />
          Quizzard
        </Link>
        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
