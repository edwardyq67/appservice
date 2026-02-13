'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { CiPlay1 } from "react-icons/ci";
import { motion } from 'framer-motion';
import { FiCoffee } from "react-icons/fi";
import { LuPen } from "react-icons/lu";
import { FaTasks } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function Page() {
  const swiperRef = useRef(null);
  const Marca = [
    'https://ruizarch-react.vercel.app/img/partners/2.png',
    'https://ruizarch-react.vercel.app/img/partners/4.png',
    'https://ruizarch-react.vercel.app/img/partners/5.png',
    'https://ruizarch-react.vercel.app/img/partners/6.png',
    'https://ruizarch-react.vercel.app/img/partners/2.png',
    'https://ruizarch-react.vercel.app/img/partners/4.png',
    'https://ruizarch-react.vercel.app/img/partners/5.png',
    'https://ruizarch-react.vercel.app/img/partners/6.png'
  ];

  const servicios = [
    { icon: <LuPen />, title: "Geolocalización", delay: 0 },
    { icon: <FiCoffee />, title: "Evidencia Digital", delay: 0.1 },
    { icon: <FaTasks />, title: "Reportes Automáticos", delay: 0.2 }
  ];

  return (
    <section id='Nosotros' className="py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Carrusel de marcas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div
            className="relative"
            onMouseEnter={() => {
              if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.autoplay.stop();
              }
            }}
            onMouseLeave={() => {
              if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.autoplay.start();
              }
            }}
          >
            <Swiper
              ref={swiperRef}
              modules={[Autoplay, FreeMode]}
              spaceBetween={30}
              slidesPerView={2}
              freeMode={true}
              grabCursor={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              speed={1000}
              breakpoints={{
                640: { slidesPerView: 3, spaceBetween: 40 },
                768: { slidesPerView: 4, spaceBetween: 50 },
                1024: { slidesPerView: 5, spaceBetween: 60 },
                1280: { slidesPerView: 6, spaceBetween: 70 },
              }}
              className="partner-swiper"
            >
              {Marca.map((logo, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center h-32 md:h-40 p-4 rounded-xl group"
                  >
                    <img
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      className="h-16 md:h-20 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
                      loading="lazy"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </div>
        </motion.div>

        {/* Sección About */}
        <div className="space-y-20">
          {/* Primera fila */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <img
                src="https://ruizarch-react.vercel.app/img/photo/2.jpg"
                alt="AppServis Dashboard"
                className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay para efecto hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Contenido */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-6"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="inline-block text-default-500 font-semibold text-sm uppercase tracking-wider"
              >
                ¿Qué es AppServis?
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
              >
                Gestión inteligente de actividades
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="text-gray-600 text-lg leading-relaxed"
              >
                AppServis es una plataforma SaaS de gestión inteligente de actividades en campo y oficina que permite controlar, supervisar y auditar operaciones operativas mediante geolocalización, evidencia fotográfica, control de tiempos, rutas y reportes automáticos, todo desde una sola aplicación.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <button className="cursor-pointer group inline-flex items-center gap-3 px-5 py-3 bg-default-500 hover:bg-default-600 text-white font-semibold rounded-lg transition-all duration-300 hover:gap-4 hover:shadow-lg hover:shadow-default-500/25">
                  <span className="text-lg">Ver video demostrativo</span>
                  <CiPlay1 className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Segunda fila - Ruizarch Purpose */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Contenido izquierda */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6 order-2 lg:order-1"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="inline-block text-default-500 font-semibold text-sm uppercase tracking-wider"
              >
                Plataforma integral
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
              >
                Solución completa para gestión operativa
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <button className="cursor-pointer group inline-flex items-center gap-3 px-5 py-3 border-2 border-default-500 text-default-500 hover:bg-default-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:gap-4">
                  <span className="text-lg">Solicitar demostración</span>
                  <IoIosArrowForward className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                </button>
              </motion.div>
            </motion.div>

            {/* Contenido derecha */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-8 order-1 lg:order-2"
            >
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 text-lg leading-relaxed"
              >
                AppServis es un software integral diseñado para empresas que operan con personal en campo (limpieza, mantenimiento, supervisión, operaciones técnicas, servicios generales, etc.) y necesitan trazabilidad total de sus actividades.
              </motion.p>

              <div className="flex flex-col sm:flex-row justify-between gap-6">
                {servicios.map((servicio, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + servicio.delay }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:bg-default-50 transition-all duration-300 group cursor-pointer"
                  >
                    <motion.div
                      className="text-3xl text-default-500 mb-4 transition-transform duration-100"
                      whileHover={{ rotate: 5 }}
                    >
                      {servicio.icon}
                    </motion.div>
                    <span className="font-semibold text-gray-900 group-hover:text-default-600 transition-colors">
                      {servicio.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;