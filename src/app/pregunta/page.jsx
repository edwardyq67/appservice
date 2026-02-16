'use client';

import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';

function Page() {
  const [rubro, setRubro] = useState('');
  const [necesidades, setNecesidades] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [cargando, setCargando] = useState(false);
  const [mostrarNecesidades, setMostrarNecesidades] = useState(false);
  const [sugerencias, setSugerencias] = useState([]);

  // Rubros predefinidos para sugerencias
  const rubrosPredefinidos = [
    'Empresas de Servicios Generales',
    'Sector Salud',
    'Educación y Universidades',
    'Manufactura y Producción',
    'Retail y Comercio',
    'Logística y Transporte',
    'Hotelería y Turismo',
    'Construcción e Inmobiliaria',
    'Tecnología y Software',
    'Servicios Financieros',
    'Venta de Alimentos',
    'Comercio Minorista'
  ];

  const buscarSugerencias = (texto) => {
    if (texto.length < 2) {
      setSugerencias([]);
      return;
    }
    
    const palabras = texto.toLowerCase();
    const sugerenciasEncontradas = rubrosPredefinidos.filter(rubro => 
      rubro.toLowerCase().includes(palabras)
    );
    
    setSugerencias(sugerenciasEncontradas.slice(0, 5));
  };

  const consultarIA = async () => {
    if (!rubro.trim()) return;
    
    setCargando(true);
    setRespuesta('');
    setSugerencias([]);
    
    try {
      const response = await fetch('/api/consultar-rubro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          rubro: rubro.trim(),
          necesidades: necesidades.trim() || undefined
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error en la consulta');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let texto = '';

      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
        
        texto += decoder.decode(value);
        setRespuesta(texto);
      }
    } catch (error) {
      console.error('Error:', error);
      setRespuesta('Lo siento, hubo un error al procesar tu consulta. Por favor intenta de nuevo.');
    } finally {
      setCargando(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      consultarIA();
    }
  };

  return (
    <section id='Pregunta' className="relative min-h-screen bg-white overflow-hidden flex items-center py-12 md:py-20">
      <div className="container mx-auto relative z-10 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">

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

            {/* Input mejorado con sugerencias */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.7 }}
              className="space-y-2 md:space-y-3"
            >
              <label className="text-xs md:text-sm font-medium text-gray-700 block">
                ¿A qué se dedica tu empresa? <span className="text-default-600">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 md:px-6 py-3 md:py-5 bg-white border border-gray-200 rounded-xl 
                           text-gray-900 placeholder-gray-400 focus:outline-none focus:border-default-500 
                           focus:ring-2 focus:ring-default-500/20 transition-all duration-300
                           shadow-sm text-sm md:text-base"
                  value={rubro}
                  onChange={(e) => {
                    setRubro(e.target.value);
                    buscarSugerencias(e.target.value);
                  }}
                  onKeyPress={handleKeyPress}
                  placeholder="Ej: Venta de frutas, Taller mecánico, Consultorio dental..."
                />
                
                {/* Sugerencias dropdown */}
                <AnimatePresence>
                  {sugerencias.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
                    >
                      {sugerencias.map((sug, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-gray-700 text-sm transition-colors"
                          onClick={() => {
                            setRubro(sug);
                            setSugerencias([]);
                          }}
                        >
                          {sug}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                ✨ Escribe cualquier rubro, incluso si no está en la lista
              </p>
            </motion.div>

            {/* Botón para necesidades específicas */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.75 }}
              onClick={() => setMostrarNecesidades(!mostrarNecesidades)}
              className="text-sm text-default-600 hover:text-default-700 font-medium"
            >
              {mostrarNecesidades ? '− Ocultar' : '+ Contar más sobre mi negocio (opcional)'}
            </motion.button>

            {/* Campo de necesidades (opcional) */}
            <AnimatePresence>
              {mostrarNecesidades && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                    Cuéntanos más sobre tus necesidades
                  </label>
                  <textarea
                    className="w-full px-4 md:px-6 py-3 md:py-5 bg-white border border-gray-200 rounded-xl 
                             text-gray-900 placeholder-gray-400 focus:outline-none focus:border-default-500 
                             focus:ring-2 focus:ring-default-500/20 transition-all duration-300
                             resize-none h-24 md:h-32 shadow-sm text-sm md:text-base"
                    value={necesidades}
                    onChange={(e) => setNecesidades(e.target.value)}
                    placeholder="Ej: Necesito gestionar pedidos, controlar inventario, digitalizar historias clínicas, etc."
                    rows={3}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Botón de consulta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.8 }}
            >
              <button
                onClick={consultarIA}
                disabled={cargando || !rubro.trim()}
                className="group relative inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-5 
                         bg-default-500 hover:bg-default-600 text-white font-semibold rounded-xl 
                         cursor-pointer transition-all duration-300 hover:gap-3 md:hover:gap-5 
                         hover:shadow-2xl hover:shadow-default-500/30 overflow-hidden 
                         w-full sm:w-auto justify-center disabled:bg-gray-400 disabled:cursor-not-allowed
                         disabled:hover:gap-2 disabled:hover:shadow-none"
              >
                <motion.span
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <span className="text-base md:text-lg relative z-10">
                  {cargando ? 'Analizando...' : 'Analizar mi empresa gratis'}
                </span>
                {!cargando && (
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                  >
                    <IoIosArrowForward className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
                  </motion.div>
                )}
              </button>
            </motion.div>

            {/* Área de respuesta */}
            <AnimatePresence>
              {respuesta && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-200"
                >
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                    <span className="w-1 h-6 bg-default-500 rounded-full"></span>
                    Soluciones para tu negocio:
                  </h3>
                  <div className="prose prose-blue max-w-none">
                    {respuesta.split('\n').map((paragraph, i) => (
                      <p key={i} className="mb-2 text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Imagen derecha con animación - SEGUNDO en orden */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 relative"
          >
            <div className="relative w-full flex md:justify-end items-center">
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

              {/* Imagen principal con flotación */}
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

            {/* Badge flotante */}
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
              <p className="text-xs md:text-sm opacity-90 hidden md:block">
                ya optimizaron su operación
              </p>
              <p className="text-xs md:text-sm opacity-90 block md:hidden">
                ya lo usan
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Page