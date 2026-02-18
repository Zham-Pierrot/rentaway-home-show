import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import interiorImage from "@/assets/interior-living.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="la-villa" className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-sans font-medium mb-3">
            Sobre la Propiedad
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
            Una Obra Maestra del Diseño Moderno
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed mb-6">
            Ubicada frente al océano con vistas impresionantes, Casa del Mar es
            más que una casa de vacaciones — es un refugio privado diseñado para
            quienes aprecian las cosas más finas de la vida. Con ventanales de
            piso a techo, la brisa marina se convierte en parte de cada espacio.
          </p>
          <p className="text-muted-foreground font-sans leading-relaxed mb-8">
            Cada detalle ha sido cuidadosamente curado para tu máximo confort,
            desde los acabados importados hasta la cocina equipada con lo último
            en tecnología.
          </p>
          <div className="flex gap-12">
            <div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-foreground">5</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans mt-1">
                Recámaras
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-foreground">6</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans mt-1">
                Baños
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-foreground">450</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans mt-1">
                m² const.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="overflow-hidden rounded-lg"
        >
          <img
            src={interiorImage}
            alt="Interior de la villa con vista al mar"
            className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
