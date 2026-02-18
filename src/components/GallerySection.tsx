import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import poolView from "@/assets/pool-view.jpg";
import bedroom from "@/assets/interior-bedroom.jpg";
import bathroom from "@/assets/interior-bathroom.jpg";
import aerial from "@/assets/aerial-view.jpg";

const images = [
  { src: poolView, alt: "Piscina infinita con vista al mar", span: "md:col-span-2 md:row-span-2" },
  { src: bedroom, alt: "Recámara principal con vista al atardecer", span: "" },
  { src: bathroom, alt: "Baño principal con tina y vista al océano", span: "" },
  { src: aerial, alt: "Vista aérea de la propiedad", span: "md:col-span-2" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="galería" className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-sm uppercase tracking-[0.25em] text-primary font-sans font-medium mb-3"
            >
              La Galería
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground"
            >
              Descubre Casa del Mar
            </motion.h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className={`overflow-hidden rounded-lg ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover min-h-[200px] hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
