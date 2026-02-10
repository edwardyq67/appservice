'use client';

import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaCamera, FaChartLine, FaClock, FaRoute, FaMobileAlt, FaDesktop, FaClipboardCheck } from "react-icons/fa";

function Page() {
  const funcionalidades = [
    {
      id: 1,
      icon: <FaMapMarkedAlt />,
      title: "Geolocalización en tiempo real",
      description: "Control preciso de ubicación GPS de todo tu personal en campo con actualizaciones en tiempo real."
    },
    {
      id: 2,
      icon: <FaCamera />,
      title: "Evidencia fotográfica",
      description: "Captura de fotos automáticas con marca de tiempo y ubicación para validar actividades realizadas."
    },
    {
      id: 3,
      icon: <FaClock />,
      title: "Control de tiempos",
      description: "Registro automático de hora de inicio y fin de cada actividad con tiempos de respuesta."
    },
    {
      id: 4,
      icon: <FaRoute />,
      title: "Optimización de rutas",
      description: "Planificación inteligente de rutas para maximizar la eficiencia del personal en campo."
    },
    {
      id: 5,
      icon: <FaChartLine />,
      title: "Reportes automáticos",
      description: "Generación instantánea de reportes de productividad, cumplimiento y tiempos de servicio."
    },
    {
      id: 6,
      icon: <FaClipboardCheck />,
      title: "Gestión Kanban",
      description: "Panel visual interactivo para seguimiento de tareas, proyectos y estados de actividad."
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
        {/* Encabezado - Animación inmediata */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <motion.span
            variants={headerVariants}
            className="inline-block text-default-500 font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Funcionalidades
          </motion.span>

          <motion.h2
            variants={headerVariants}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Todo lo que necesitas en una sola plataforma
          </motion.h2>

          <motion.p
            variants={headerVariants}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            AppServis combina las herramientas más avanzadas para la gestión de personal en campo y oficina, 
            ofreciendo control total y visibilidad en tiempo real de todas tus operaciones.
          </motion.p>
        </motion.div>

        {/* Cards de funcionalidades - Animación inmediata */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
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
                  {/* Número grande transparente como marca de agua */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="absolute -right-4 -top-4 text-[120px] md:text-[150px] font-black text-default-100 select-none pointer-events-none z-0"
                  >
                    {funcionalidad.id}
                  </motion.span>

                  {/* Ícono animado */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
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
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-default-600 transition-colors duration-300"
                    whileHover={{ x: 3 }}
                  >
                    {funcionalidad.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
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

      </div>
    </section>
  );
}

export default Page;