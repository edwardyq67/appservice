'use client';

import { motion } from 'framer-motion';
import {
  FiUsers,
  FiImage,
  FiClock,
  FiMapPin,
  FiFileText,
  FiAlertCircle,
  FiClipboard,
  FiCamera,
  FiUserX
} from "react-icons/fi";
import { IoIosArrowForward } from 'react-icons/io';

function Page() {
  const funcionalidades = [
    {
      id: 1,
      icon: <FiMapPin />,
      title: "Falta de trazabilidad",
      description: "Dificultad para monitorear en tiempo real dónde y qué está haciendo el personal en campo."
    },
    {
      id: 2,
      icon: <FiImage />,
      title: "Evidencias dispersas",
      description: "Fotos y reportes variados llegan por WhatsApp, email o en papel, dificultando la auditoría."
    },
    {
      id: 3,
      icon: <FiClock />,
      title: "Reportes tardíos e inexactos",
      description: "Retraso en la entrega de reportes y errores humanos al completar formularios manualmente."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id='Funcionalidades' className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Encabezado - Animación al hacer scroll */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <motion.h2
            variants={headerVariants}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            El problema que enfrentan las empresas
          </motion.h2>

          <motion.p
            variants={headerVariants}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            Las empresas con equipos en campo se encuentran con desafíos comunes
            que afectan su productividad y control operativo.
          </motion.p>
        </motion.div>

        <div className="grid gap-8">
          {/* Cards de funcionalidades - Animación al hacer scroll */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {funcionalidades.map((funcionalidad, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative cursor-pointer"
              >
                {/* Card principal */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full border border-gray-100">
                  {/* Efecto de fondo al hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-default-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Ícono con número de fondo */}
                  <div className="relative">
                    {/* Ícono animado */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + (index * 0.1), duration: 0.4 }}
                      className="relative z-10 inline-flex items-center justify-center w-16 h-16 bg-default-500 rounded-xl mb-6 group-hover:bg-white group-hover:shadow-lg transition-all duration-300"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="text-2xl text-white group-hover:text-default-500 transition-colors duration-300">
                        {funcionalidad.icon}
                      </div>
                    </motion.div>
                  </div>

                  {/* Contenido */}
                  <div className="relative z-10">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                      className="text-xl font-bold text-gray-900 mb-3 group-hover:text-default-600 transition-colors duration-300"
                      whileHover={{ x: 3 }}
                    >
                      {funcionalidad.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + (index * 0.1) }}
                      className="text-gray-600 mb-6 text-sm leading-relaxed"
                    >
                      {funcionalidad.description}
                    </motion.p>
                  </div>

                  {/* Borde decorativo */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-default-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Sombra extendida al hover */}
                <div className="absolute inset-0 bg-default-200 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
              </motion.div>
            ))}
          </motion.div>

          {/* Pregunta y botón - Animación al hacer scroll */}
          <div className="w-full flex flex-col items-center justify-center mt-16 pt-8 border-t border-gray-200">
            {/* Pregunta */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center"
            >
              ¿Te identificas con <span className="text-default-500">estos problemas</span>?
            </motion.h3>

            {/* Botón de acción */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4 }}
            >
              <a href='#Pregunta' className="group relative inline-flex items-center gap-3 px-8 py-5 bg-default-500 
                     hover:bg-default-600 text-white font-semibold rounded-xl 
                     transition-all duration-300 hover:gap-5 hover:shadow-2xl 
                     hover:shadow-default-500/30 overflow-hidden cursor-pointer">
                <motion.span
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <span className="text-lg relative z-10">Analizar mi empresa gratis</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                >
                  <IoIosArrowForward className="w-5 h-5 relative z-10" />
                </motion.div>
              </a>
            </motion.div>

            {/* Texto adicional opcional */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-sm text-gray-500 mt-4"
            >
              🔒 Sin compromiso · Análisis personalizado · Respuesta en 24h
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;