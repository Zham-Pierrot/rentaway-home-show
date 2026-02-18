import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UtensilsCrossed, Waves, Wifi, HeadphonesIcon } from "lucide-react";

const amenities = [
  {
    icon: UtensilsCrossed,
    title: "Chef Privado",
    description: "Cocina gourmet preparada con ingredientes locales frescos para cada comida.",
  },
  {
    icon: Waves,
    title: "Piscina Infinita",
    description: "Piscina de borde infinito con vista panorámica al océano y zona de descanso.",
  },
  {
    icon: Wifi,
    title: "Internet de Alta Velocidad",
    description: "Conexión de fibra óptica dedicada para trabajo remoto y entretenimiento.",
  },
  {
    icon: HeadphonesIcon,
    title: "Concierge 24/7",
    description: "Servicio personalizado para reservas, transporte y cualquier necesidad.",
  },
];

const AmenitiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="amenidades" className="py-20 md:py-28 bg-secondary px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-[0.25em] text-primary font-sans font-medium mb-3"
        >
          Amenidades Premium
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-16"
        >
          Diseñada para tu Confort
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, i) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="bg-card rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                <amenity.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {amenity.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
