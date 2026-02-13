'use client';

import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';

function Page() {
  return (
    <section id='Pregunta' className="relative min-h-screen bg-white overflow-hidden flex items-center">
      {/* Fondo con efectos */}
      <div className="absolute inset-0 z-0">
        {/* Imagen de fondo con zoom lento */}
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 opacity-20"
        >
          <Image
            src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg"
            alt="Fondo universo"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Capas de overlay dinámicas - modo claro */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-white/90" />
        <div className="absolute inset-0 bg-white/40" />
        
        {/* Degradados animados - modo claro */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white/50 to-transparent" 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent" 
        />

        {/* Efectos de luz - modo claro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-default-500/5 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Texto izquierda */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-gray-900 space-y-6"
          >
            {/* Badge/Burbuja de beneficio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-default-500/10 backdrop-blur-sm rounded-full text-sm font-medium border border-default-500/20 text-default-700">
                🚀 Análisis gratuito y sin compromiso
              </span>
            </motion.div>

            {/* Título principal */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
            >
              Descubre cómo{' '}
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="text-default-600 relative inline-block"
              >
                AppService
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-1 bg-default-500/50 rounded-full"
                />
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
              className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed"
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
              className="space-y-3"
            >
              <label className="text-sm font-medium text-gray-700 block">
                Describe tu empresa <span className="text-default-600">*</span>
              </label>
              <textarea 
                placeholder="Ejemplo: Somos una empresa de mantenimiento industrial con 25 técnicos que trabajan en diferentes plantas"
                className="w-full px-6 py-5 bg-white border border-gray-200 rounded-xl 
                         text-gray-900 placeholder-gray-400 focus:outline-none focus:border-default-500 
                         focus:ring-2 focus:ring-default-500/20 transition-all duration-300
                         resize-none h-32 shadow-sm"
              />
            </motion.div>

            {/* Botón */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.8 }}
            >
              <button className="group relative inline-flex items-center gap-3 px-8 py-5 bg-default-500 
                               hover:bg-default-600 text-white font-semibold rounded-xl cursor-pointer 
                               transition-all duration-300 hover:gap-5 hover:shadow-2xl 
                               hover:shadow-default-500/30 overflow-hidden">
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
              </button>
            </motion.div>
          </motion.div>

          {/* Imagen derecha con animación */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 relative"
          >
            <div className="relative h-[500px] w-full">
              {/* Círculos decorativos detrás de la imagen - modo claro */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
                className="absolute -top-10 -left-10 w-64 h-64 bg-default-500/10 rounded-full blur-3xl"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 1, duration: 0.8, type: "spring" }}
                className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
              />
              
              {/* Imagen principal con flotación */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative h-full w-full"
              >
                <Image
                  src="/mascota/ia mascota.png"
                  alt="Asistente virtual"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>
            </div>

            {/* Badge flotante - modo claro */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute -bottom-5 -left-5 bg-gradient-to-r from-default-600 to-blue-600 
                       text-white px-6 py-3 rounded-2xl shadow-2xl"
            >
              <p className="font-bold text-lg">+15 empresas</p>
              <p className="text-sm opacity-90">ya optimizaron su operación</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Page