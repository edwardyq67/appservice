'use client';

import { motion } from 'framer-motion';
import {
  FaBuilding,
  FaHospital,
  FaSchool,
  FaIndustry,
  FaShoppingCart,
  FaWarehouse,
  FaTruck,
  FaUsers
} from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { useEffect, useState } from 'react';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/free-mode';

function Page() {
  const sectores = [
    {
      id: 1,
      icon: <FaBuilding />,
      title: "Empresas de Servicios Generales",
      description: "Limpieza, mantenimiento, seguridad y servicios de soporte técnico en múltiples ubicaciones.",
      empresas: ["Limpieza industrial", "Mantenimiento preventivo", "Servicios de jardinería", "Control de plagas"]
    },
    {
      id: 2,
      icon: <FaHospital />,
      title: "Sector Salud",
      description: "Hospitales, clínicas y centros médicos que requieren control de personal sanitario y técnico.",
      empresas: ["Hospitales públicos/privados", "Clínicas especializadas", "Laboratorios médicos", "Ambulancias"]
    },
    {
      id: 3,
      icon: <FaSchool />,
      title: "Educación y Universidades",
      description: "Control de personal docente, administrativo y de mantenimiento en campus educativos.",
      empresas: ["Universidades", "Colegios privados", "Institutos técnicos", "Centros de capacitación"]
    },
    {
      id: 4,
      icon: <FaIndustry />,
      title: "Manufactura y Producción",
      description: "Supervisión de operarios, técnicos de mantenimiento y personal de producción en planta.",
      empresas: ["Fábricas", "Plantas de producción", "Talleres industriales", "Centros de ensamblaje"]
    },
    {
      id: 5,
      icon: <FaShoppingCart />,
      title: "Retail y Comercio",
      description: "Gestión de equipos de merchandising, promotores y personal de mantenimiento en tiendas.",
      empresas: ["Cadenas de retail", "Supermercados", "Centros comerciales", "Tiendas por departamento"]
    },
    {
      id: 6,
      icon: <FaWarehouse />,
      title: "Logística y Almacenes",
      description: "Control de operarios de almacén, personal de picking y equipos de distribución.",
      empresas: ["Centros logísticos", "Almacenes frigoríficos", "Centros de distribución", "Cross-docking"]
    }
  ];

  const beneficios = [
    {
      titulo: "Reducción de costos operativos",
      porcentaje: "30-40%",
      descripcion: "Disminución en tiempos muertos y optimización de rutas"
    },
    {
      titulo: "Aumento de productividad",
      porcentaje: "25-35%",
      descripcion: "Mayor eficiencia en la ejecución de tareas"
    },
    {
      titulo: "Mejora en cumplimiento",
      porcentaje: "95-99%",
      descripcion: "Tareas completadas según especificaciones"
    },
    {
      titulo: "Reducción de papelería",
      porcentaje: "100%",
      descripcion: "Procesos 100% digitalizados sin documentos físicos"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
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
    <section id='Sector' className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Encabezado - Cambiado a whileInView */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <motion.span
            variants={headerVariants}
            className="inline-block text-default-500 font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Sectores Clave
          </motion.span>

          <motion.h2
            variants={headerVariants}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Ideal para empresas con personal en campo
          </motion.h2>

          <motion.p
            variants={headerVariants}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            AppServis está diseñado específicamente para organizaciones que gestionan equipos en múltiples ubicaciones
            y necesitan control total sobre sus operaciones en tiempo real.
          </motion.p>
        </motion.div>

        {/* Carrusel de sectores con Swiper */}
        <div className="mb-20 relative">
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={24}
            slidesPerView={3.5} // Muestra 3 slides completos + 0.5 del cuarto
            freeMode={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            speed={800}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1.2, // Móvil: 1 slide + asomo del siguiente
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2.3, // Tablet: 2 slides + asomo del tercero
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.5, // Desktop: 3 slides + medio slide del cuarto
                spaceBetween: 24,
              },
            }}
            className="!px-4 !pb-8"
          >
            {sectores.map((sector, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer bg-white  rounded-2xl p-8 shadow-lg transition-all duration-300 border border-gray-100 h-[32em] md:h-[30em]"
                >
                  {/* Icono con animación */}
                  <div className="mb-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ delay: 0.1 + (index * 0.05), duration: 0.4 }}
                      className="inline-flex items-center justify-center w-14 h-14 bg-default-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300"
                    >
                      <div className="text-2xl text-white">
                        {sector.icon}
                      </div>
                    </motion.div>
                  </div>

                  {/* Contenido */}
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ delay: 0.2 + (index * 0.05) }}
                      className="text-xl font-bold text-gray-900 mb-3 group-hover:text-default-600 transition-colors duration-300"
                    >
                      {sector.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ delay: 0.3 + (index * 0.05) }}
                      className="text-gray-600 mb-4"
                    >
                      {sector.description}
                    </motion.p>

                    {/* Lista de empresas */}
                    <div className="space-y-2">
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ delay: 0.4 + (index * 0.05) }}
                        className="text-sm font-semibold text-gray-700"
                      >
                        Aplica para:
                      </motion.p>
                      <ul className="space-y-1">
                        {sector.empresas.map((empresa, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ delay: 0.5 + (index * 0.05) + (idx * 0.1) }}
                            className="flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-default-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">{empresa}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Borde decorativo */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-default-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Efecto de desvanecimiento en el borde derecho para indicar más contenido */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10 hidden lg:block" />

          {/* Indicador de desplazamiento */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-4"
          >
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <FaUsers className="w-4 h-4" />
              <span>Desliza para ver más sectores →</span>
            </div>
          </motion.div>
        </div>

        {/* Sección de beneficios - Cambiado a whileInView */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-default-50 to-white rounded-3xl p-8 md:p-12 shadow-xl mb-12"
        >
          <div className="text-center mb-10">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
            >
              Beneficios medibles para tu empresa
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Las empresas que implementan AppServis experimentan mejoras significativas en sus indicadores clave
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white cursor-pointer rounded-2xl p-6 text-center shadow-lg"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: index * 0.1
                  }}
                  className="text-3xl md:text-4xl font-bold text-default-500 mb-2"
                >
                  {beneficio.porcentaje}
                </motion.div>
                <motion.h4
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="text-lg font-bold text-gray-900 mb-2"
                >
                  {beneficio.titulo}
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                  className="text-gray-600 text-sm"
                >
                  {beneficio.descripcion}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA - Cambiado a whileInView */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-bold text-gray-900 mb-6"
            >
              ¿Tu empresa tiene personal en campo?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 mb-8 max-w-2xl"
            >
              Descubre cómo AppServis puede transformar la gestión de tus operaciones
              y darte el control total que necesitas.
            </motion.p>
            <motion.a href='#Pregunta'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-default-500 hover:bg-default-600 text-white font-semibold rounded-lg transition-all duration-300 hover:gap-4 hover:shadow-lg hover:shadow-default-500/25 text-lg"
            >
              <span>Solicitar análisis personalizado</span>
              <FaUsers className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Page;