import { motion } from "framer-motion";
import heroImage from "@/assets/hero-villa.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-sans font-medium"
        >
          Propiedad Exclusiva
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground leading-tight mb-6"
        >
          Casa de Zham
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-primary-foreground/80 mb-8 font-sans font-light max-w-xl mx-auto"
        >
          Vive el lujo frente al mar. Una villa moderna donde el diseño
          contemporáneo se encuentra con la tranquilidad del océano.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#galería"
            className="px-8 py-3 bg-card text-foreground rounded-md font-sans font-medium hover:bg-card/90 transition-colors"
          >
            Ver Galería
          </a>
          <a
            href="#contacto"
            className="px-8 py-3 border border-primary-foreground/40 text-primary-foreground rounded-md font-sans font-medium hover:bg-primary-foreground/10 transition-colors"
          >
            Consultar Disponibilidad
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
