import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-3">
            Casa del Mar
          </h3>
          <p className="text-sm leading-relaxed font-sans">
            Lujo sin igual frente al mar. Tu refugio privado para una experiencia
            inolvidable.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-primary-foreground mb-3 text-sm uppercase tracking-wider">
            Explorar
          </h4>
          <ul className="space-y-2 text-sm font-sans">
            <li><a href="#la-villa" className="hover:text-primary-foreground transition-colors">La Villa</a></li>
            <li><a href="#amenidades" className="hover:text-primary-foreground transition-colors">Amenidades</a></li>
            <li><a href="#galería" className="hover:text-primary-foreground transition-colors">Galería</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-primary-foreground mb-3 text-sm uppercase tracking-wider">
            Contacto
          </h4>
          <ul className="space-y-3 text-sm font-sans">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Costa del Sol, México</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <span>+52 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              <span>info@casadelmar.com</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-primary-foreground mb-3 text-sm uppercase tracking-wider">
            Newsletter
          </h4>
          <p className="text-sm font-sans mb-3">
            Recibe ofertas exclusivas y actualizaciones de temporada.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-3 py-2 text-sm bg-primary-foreground/10 border border-primary-foreground/20 rounded-l-md text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent"
            />
            <button className="px-4 py-2 bg-primary text-primary-foreground text-sm rounded-r-md hover:bg-primary/80 transition-colors">
              →
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-primary-foreground/10 text-center text-xs font-sans text-primary-foreground/40">
        © 2026 Casa del Mar. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
