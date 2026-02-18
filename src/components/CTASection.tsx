import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aerialImage from "@/assets/aerial-view.jpg";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contacto" className="relative overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[400px]">
        <div
          className="flex flex-col justify-center px-8 md:px-16 py-16"
          style={{ background: "var(--cta-gradient)" }}
          ref={ref}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground leading-tight mb-4"
          >
            ¿Listo para tu escapada?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary-foreground/80 font-sans mb-8 max-w-md"
          >
            Asegura tus fechas para la próxima temporada. La disponibilidad es
            limitada para este retiro exclusivo frente al mar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-card text-foreground rounded-md font-sans font-medium hover:bg-card/90 transition-colors"
            >
              Reservar Ahora
            </a>
            <a
              href="mailto:info@casadelmar.com"
              className="px-6 py-3 border border-primary-foreground/40 text-primary-foreground rounded-md font-sans font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Contactar Concierge
            </a>
          </motion.div>
        </div>
        <div
          className="hidden md:block bg-cover bg-center min-h-[300px]"
          style={{ backgroundImage: `url(${aerialImage})` }}
        />
      </div>
    </section>
  );
};

export default CTASection;
