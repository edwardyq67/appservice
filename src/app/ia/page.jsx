import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        {/* Imagen de fondo con opacidad */}
        <div className="absolute inset-0 opacity-90">
          <Image
            src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg"
            alt="Fondo universo"
            fill
            className="object-cover"
          />
        </div>

        {/* Degradado superior e inferior hacia blanco */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Texto izquierda */}
          <div className="flex-1 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Explora el <span className="text-blue-400">universo</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              Descubre los misterios del cosmos y adéntrate en un viaje
              fascinante a través de galaxias, estrellas y planetas.
            </p>
            <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300">
              Comenzar viaje
            </button>
          </div>

          {/* Imagen derecha */}
          <div className="flex-1 relative h-[400px] w-full">
            <Image
              src="/mascota/ia mascota.png"
              alt="Universo"
              fill
              className="object-contain rounded-lg"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default page