// app/page.jsx
'use client';

import { motion } from 'framer-motion';
import Servicios from './servicios/page';
import Nosotros from './nosotros/page';
import Avance from './avance/page';
import Pregunta from './pregunta/page';
import Contacto from './contacto/page';
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id='Inicio' className="relative h-screen overflow-hidden">
        {/* Video de fondo */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://img.freepik.com/foto-gratis/elaboracion-plan-negocios-grupo-jovenes-autonomos-oficina-conversando-sonriendo_146671-13590.jpg?t=st=1770678417~exp=1770682017~hmac=2fc9d360558458e1798908a50a28aa8d91d302fd52b41c2e1fd776ca7ff88a43&w=1060"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-4991-large.mp4" type="video/mp4" />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* Contenido principal */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 lg:h-3/4 flex flex-col lg:flex-row items-center justify-center lg:justify-start px-4 lg:px-12 py-8 lg:py-16">

          {/* Texto principal */}
          <div className="max-w-xl sm:max-w-2xl text-center lg:text-left text-white mb-8 lg:mb-0 lg:self-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg md:text-xl mb-4 text-gray-200"
            >
              Transformamos tu gestión operativa
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 lg:mb-8"
            >
              Control total{' '}
              <motion.span
                className="text-default-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                en tiempo real
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
            >
              La plataforma SaaS definitiva para gestión de personal en campo. 
              Geolocalización, evidencia fotográfica y reportes automáticos en una sola solución.
            </motion.p>

            {/* Botones de acción */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href='#Pregunta' className="group cursor-pointer inline-flex items-center gap-3 px-6 py-4 bg-default-500 hover:bg-default-600 text-white font-semibold rounded-lg transition-all duration-300 hover:gap-4 hover:shadow-lg hover:shadow-default-500/25">
                <span className="text-lg">Analizar mi empresa gratis</span>
                <IoIosArrowForward className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
              </a>
              
              <button className="group cursor-pointer inline-flex items-center gap-3 px-6 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:gap-4">
                <span className="text-lg">Ver cómo funciona en 2 minutos</span>
              </button>
            </motion.div>
          </div>


        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <div className="flex flex-col items-center">
            <span className="text-white/70 text-sm mb-2">Desplázate para descubrir</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
            </motion.div>
          </div>
        </motion.div>
      </section>
      <Pregunta/>
      <Servicios />
      <Avance />
      {/*<Contacto/>*/}
    </main>
  );
}