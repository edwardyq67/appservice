// components/Footer/Footer.jsx
"use client";
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiClock, FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { motion } from 'framer-motion';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '/#Inicio' },
    { name: 'Pregunta', href: '/#Pregunta' },
    { name: 'Funcionalidades', href: '/#Funcionalidades' },
    { name: 'Sector', href: '/#Sector' },
    { name: 'Política de Privacidad', href: '/privacidad' },
    { name: 'Términos y Condiciones', href: '/terminos' },
  ];

  const services = [
    { name: 'Consultoría Empresarial', href: '/servicios#consultoria' },
    { name: 'Inversiones', href: '/servicios#inversiones' },
    { name: 'Planificación Financiera', href: '/servicios#financiera' },
    { name: 'Asesoría Legal', href: '/servicios#legal' },
    { name: 'Desarrollo Corporativo', href: '/servicios#corporativo' },
  ];

  const socialLinks = [
    { icon: <FiFacebook />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <FiInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FiLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FiTwitter />, href: 'https://twitter.com', label: 'Twitter' },
  ];

  const contactInfo = [
    {
      icon: <FiMapPin />,
      text: 'Av. Principal 123, Lima, Perú',
      href: 'https://maps.google.com'
    },
    {
      icon: <FiPhone />,
      text: '+51 987 654 321',
      href: 'tel:+51987654321'
    },
    {
      icon: <FiMail />,
      text: 'info@inversionesbienestar.com',
      href: 'mailto:info@inversionesbienestar.com'
    },
    {
      icon: <FiClock />,
      text: 'Lun - Vie: 9:00 AM - 6:00 PM',
    }
  ];

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg">
                <div className="relative h-12 w-auto"> {/* Cambiado de h-8 w-8 a h-12 w-auto */}
                  <img
                    src="/logo/appservice_naranaja-removebg.png"
                    alt="Logo Inversiones Bienestar"
                    className="object-contain h-full w-full min-w-[120px]" /* Agregado min-w-[120px] */
                  />
                </div>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Especialistas en consultoría empresarial y estrategias de inversión
              que generan crecimiento sostenible y bienestar para nuestros clientes.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-default-600 rounded-full transition-colors duration-300"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-default-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">
              Nuestros Servicios
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-default-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">
              Contáctanos
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-default-400 mt-1">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : '_self'}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-400">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Inversiones Bienestar ZENG S.A.C. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacidad" className="text-gray-500 hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="text-gray-500 hover:text-white transition-colors">
              Términos de Servicio
            </Link>
            <span className="text-gray-500">|</span>
            <a
              href="https://wa.me/51987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 font-medium transition-colors"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>

      </div>
   <motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 1, type: "spring" }}
  className="fixed bottom-6 right-6 z-50"
>
  <a
    href="https://wa.me/51917835815?text=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20de%20AppServices"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 relative group"
  >
    <FaWhatsapp className="w-8 h-8 text-white" />

    {/* Mensaje flotante */}
    <span className="absolute right-20 bg-primary-500 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
      ¿Dudas? ¡Escríbenos!
    </span>

    {/* Badge de "Online" con parpadeo llamativo */}
    <span className="absolute -top-1 -right-1">
      <span className="relative flex h-4 w-4">
        {/* Círculo de onda expansiva (efecto radar) */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        {/* Círculo central fijo */}
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
      </span>
    </span>
  </a>
</motion.div>
    </footer>
  );
}