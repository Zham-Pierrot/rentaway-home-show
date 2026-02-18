import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const TestimonialSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reseñas" className="py-20 md:py-28 bg-primary px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <Quote className="w-12 h-12 text-accent" />
        </motion.div>
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl font-serif italic text-primary-foreground leading-relaxed mb-8"
        >
          "Una experiencia inolvidable. La atención al detalle en la
          arquitectura y el servicio impecable hicieron de nuestra estancia algo
          verdaderamente mágico. Se sintió como nuestro propio paraíso privado."
        </motion.blockquote>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="font-sans font-semibold text-primary-foreground">
            María & Carlos Rodríguez
          </p>
          <p className="text-sm text-primary-foreground/60 font-sans mt-1">
            Estancia en Diciembre 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
