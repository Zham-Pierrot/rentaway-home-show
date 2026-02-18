import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["La Villa", "Amenidades", "Galería", "Reseñas"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-foreground/10 backdrop-blur-md">
      <span className="font-serif text-xl font-semibold text-primary-foreground tracking-wide">
        Casa del Mar
      </span>
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
            className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors tracking-wide"
          >
            {item}
          </a>
        ))}
        <a
          href="#contacto"
          className="px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Reservar
        </a>
      </div>
      <button
        className="md:hidden text-primary-foreground"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-foreground/95 backdrop-blur-lg p-6 flex flex-col gap-4 md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md text-center"
            onClick={() => setOpen(false)}
          >
            Reservar
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
