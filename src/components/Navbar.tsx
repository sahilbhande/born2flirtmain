import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS, LINKS } from "@/lib/constants";
import { Menu, X, ExternalLink } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold gradient-text">
          💜 Born2Flirt
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg px-4 py-2 rounded-lg text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center gap-1.5"
          >
            Join Server <ExternalLink size={14} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container py-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-2 transition-colors hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg px-4 py-2.5 rounded-lg text-sm font-semibold text-primary-foreground text-center"
            >
              Join Server
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
