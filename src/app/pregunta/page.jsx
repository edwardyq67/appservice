'use client';

import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';

function Page() {
  return (
    <section id='Pregunta' className="relative min-h-screen bg-white overflow-hidden flex items-center py-12 md:py-20">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col  lg:flex-row items-center justify-between gap-8 lg:gap-16">

          {/* Texto izquierda - PRIMERO en orden */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-gray-900 space-y-4 md:space-y-6"
          >
            {/* Badge/Burbuja de beneficio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-default-500/10 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium border border-default-500/20 text-default-700">
                🚀 Análisis gratuito y sin compromiso
              </span>
            </motion.div>

            {/* Título principal */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
            >
              Descubre cómo{' '}
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="text-default-500 relative inline-block"
              >
                AppService
              </motion.span>{' '}
              <br className="hidden lg:block" />
              optimiza tu operación
            </motion.h2>

            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.6 }}
              className="text-base md:text-lg lg:text-xl text-gray-600 max-w-xl leading-relaxed"
            >
              Cuéntanos a qué se dedica tu empresa y descubre cómo digitalizar
              tu gestión en campo y oficina de manera sencilla y efectiva.
            </motion.p>

            {/* Textarea mejorado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.7 }}
              className="space-y-2 md:space-y-3"
            >
              <label className="text-xs md:text-sm font-medium text-gray-700 block">
                Describe tu empresa <span className="text-default-600">*</span>
              </label>
              <textarea
                placeholder="Ejemplo: Somos una empresa de mantenimiento industrial con 25 técnicos que trabajan en diferentes plantas"
                className="w-full px-4 md:px-6 py-3 md:py-5 bg-white border border-gray-200 rounded-xl 
                         text-gray-900 placeholder-gray-400 focus:outline-none focus:border-default-500 
                         focus:ring-2 focus:ring-default-500/20 transition-all duration-300
                         resize-none h-24 md:h-32 shadow-sm text-sm md:text-base"
              />
            </motion.div>

            {/* Botón */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.8 }}
            >
              <button className="group relative inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-5 bg-default-500 
                               hover:bg-default-600 text-white font-semibold rounded-xl cursor-pointer 
                               transition-all duration-300 hover:gap-3 md:hover:gap-5 hover:shadow-2xl 
                               hover:shadow-default-500/30 overflow-hidden w-full sm:w-auto justify-center">
                <motion.span
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <span className="text-base md:text-lg relative z-10">Analizar mi empresa gratis</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                >
                  <IoIosArrowForward className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
                </motion.div>
              </button>
            </motion.div>
          </motion.div>

          {/* Imagen derecha con animación - SEGUNDO en orden */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 relative"
          >
            <div className="relative w-full flex  md:justify-end items-center ">
              {/* Círculos decorativos detrás de la imagen - modo claro */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
                className="absolute -top-5 md:-top-10 -left-5 md:-left-10 w-32 md:w-64 h-32 md:h-64 bg-default-500/10 rounded-full blur-3xl"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 1, duration: 0.8, type: "spring" }}
                className="absolute -bottom-5 md:-bottom-10 -right-5 md:-right-10 w-32 md:w-64 h-32 md:h-64 bg-blue-500/10 rounded-full blur-3xl"
              />

              {/* Imagen principal con flotación usando img normal */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]"
              >
                <img
                  src="https://smartfrost.s3.us-east-1.amazonaws.com/planos+3d/FONBIEPOL+3D+PISO+1.png"
                  alt="Asistente virtual"
                  className="w-full h-full object-contain drop-shadow-2xl"
                  loading="eager"
                />
              </motion.div>
            </div>
            {/* Badge flotante - modo claro */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              animate={{
                y: [0, -8, 0],
                opacity: 1,
                scale: 1
              }}
              transition={{
                // Transición combinada
                type: "spring",
                delay: 1.2,
                y: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                  delay: 1.5
                }
              }}
              className="absolute -bottom-2 md:-bottom-5 -left-2 md:left-25 bg-default-500 
           text-white px-3 md:px-6 py-1.5 md:py-3 rounded-xl md:rounded-2xl shadow-2xl"
            >
              <p className="font-bold text-sm md:text-lg">+15 empresas</p>
              <p className="text-xs md:text-sm opacity-90 hidden md:block">ya optimizaron su operación</p>
              <p className="text-xs md:text-sm opacity-90 block md:hidden">ya lo usan</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Page