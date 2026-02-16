// Base de conocimiento con ejemplos de entrenamiento
export const rubrosDatabase = [
  {
    rubro: "Empresas de Servicios Generales",
    keywords: ["limpieza", "mantenimiento", "seguridad", "jardinería", "facilities"],
    problemas: [
      "control de personal en múltiples sedes",
      "reportes de incidencias en tiempo real",
      "seguimiento de órdenes de trabajo",
      "supervisión de calidad de servicio"
    ],
    soluciones: [
      "Formularios digitales para checklists diarios",
      "App para reporte de incidencias con fotos",
      "Sistema de órdenes de trabajo con seguimiento",
      "Encuestas de satisfacción post-servicio"
    ],
    ejemploRespuesta: "Para empresas de servicios generales, App Service ofrece formularios dinámicos que permiten a tu personal registrar checklists de limpieza, reportar incidencias con fotos en tiempo real y dar seguimiento a órdenes de trabajo. Todo desde cualquier dispositivo, con reportes automáticos para supervisión."
  },
  {
    rubro: "Sector Salud",
    keywords: ["clínica", "hospital", "consultorio", "pacientes", "médicos"],
    problemas: [
      "gestión de historias clínicas",
      "agendamiento de citas",
      "seguimiento de pacientes",
      "control de inventario médico"
    ],
    soluciones: [
      "Formularios para historias clínicas digitales",
      "Sistema de reserva de citas online",
      "Encuestas de seguimiento post-consulta",
      "Checklists para control de insumos"
    ],
    ejemploRespuesta: "En el sector salud, App Service te permite digitalizar tus historias clínicas con formularios personalizados, automatizar el agendamiento de citas y hacer seguimiento a tus pacientes mediante encuestas automáticas. Todo con total seguridad y cumplimiento de normativas de datos sensibles."
  },
  
  {
    rubro: "Educación y Universidades",
    keywords: ["colegio", "escuela", "universidad", "estudiantes", "profesores"],
    problemas: [
      "procesos de matrícula manuales",
      "comunicación con padres",
      "seguimiento académico",
      "evaluaciones y calificaciones"
    ],
    soluciones: [
      "Formularios de inscripción online",
      "Sistema de comunicados y autorizaciones",
      "Registro digital de calificaciones",
      "Encuestas de satisfacción educativa"
    ],
    ejemploRespuesta: "Para instituciones educativas, App Service simplifica las matrículas con formularios online, permite una comunicación fluida con padres mediante autorizaciones digitales y centraliza el registro de calificaciones. Todo accesible desde cualquier dispositivo, reduciendo papeleo y mejorando la experiencia."
  },  {
    rubro: "Venta de Alimentos y Comercio Minorista",
    keywords: [
      "frutas", "verduras", "alimentos", "comida", "mercado", 
      "vendedor", "puesto", "minorista", "tienda de barrio",
      "frutería", "verdulería", "abarrotes", "víveres"
    ],
    problemas: [
      "control de inventario de productos perecibles",
      "seguimiento de pedidos y entregas",
      "registro de ventas diarias",
      "gestión de clientes frecuentes",
      "control de mermas y productos vencidos"
    ],
    soluciones: [
      "Formularios para inventario con alertas de caducidad",
      "App para registro de pedidos con fotos de productos",
      "Sistema de ventas diarias con reportes automáticos",
      "Base de datos de clientes y programa de fidelización",
      "Checklists de calidad de productos"
    ],
    ejemploRespuesta: "Como vendedor de frutas, entiendo la importancia de ofrecer productos frescos y un buen servicio. App Service te ayuda a digitalizar tu negocio con formularios personalizados para controlar tu inventario, registrar tus ventas diarias y gestionar pedidos de clientes. Puedes crear un catálogo digital de tus frutas con fotos y precios actualizados, permitir pedidos por WhatsApp con confirmación automática y llevar un control de productos que están próximos a vencer para evitar mermas. También puedes implementar un programa de puntos para tus clientes frecuentes y enviarles promociones personalizadas. Todo esto desde tu celular, sin necesidad de ser experto en tecnología."
  },
  {
    rubro: "Manufactura y Producción",
    keywords: ["fábrica", "planta", "producción", "maquinaria", "operarios"],
    problemas: [
      "control de calidad en línea",
      "mantenimiento de maquinaria",
      "registro de producción",
      "seguridad industrial"
    ],
    soluciones: [
      "Checklists digitales de control de calidad",
      "Formularios para mantenimiento preventivo",
      "Registro de producción en tiempo real",
      "Reportes de incidentes de seguridad"
    ],
    ejemploRespuesta: "En manufactura, App Service optimiza tus operaciones con checklists digitales para control de calidad, formularios de mantenimiento preventivo y registro de producción en tiempo real. Tus operarios pueden reportar incidentes desde el piso de planta, mejorando la seguridad y eficiencia."
  },  {
    rubro: "Comercio en General",
    keywords: [
      "tienda", "comercio", "ventas", "negocio", "emprendimiento",
      "local", "pyme", "pequeño negocio"
    ],
    problemas: [
      "falta de control de inventario",
      "registro manual de ventas",
      "dificultad para hacer seguimiento a clientes",
      "pérdida de información en papel"
    ],
    soluciones: [
      "Sistema de inventario simple",
      "Registro digital de ventas",
      "Base de datos de clientes",
      "Formularios de pedidos online"
    ],
    ejemploRespuesta: "Para tu negocio, App Service ofrece soluciones simples y efectivas. Puedes empezar con un registro digital de tus ventas diarias, crear un catálogo de productos con fotos y precios, y llevar el control de tu inventario sin complicaciones. También puedes ofrecer a tus clientes la opción de hacer pedidos por WhatsApp de forma automatizada. Todo esto se adapta a tu ritmo y necesidades, sin importar el tamaño de tu negocio."
  },
  {
    rubro: "Retail y Comercio",
    keywords: ["tienda", "comercio", "ventas", "clientes", "inventario"],
    problemas: [
      "gestión de inventario",
      "encuestas de satisfacción",
      "programas de fidelización",
      "reportes de ventas"
    ],
    soluciones: [
      "Formularios para conteo de inventario",
      "Encuestas NPS post-compra",
      "Registro de clientes y preferencias",
      "Reportes de ventas diarias"
    ],
    ejemploRespuesta: "Para el sector retail, App Service te ayuda a conocer mejor a tus clientes con encuestas de satisfacción, optimizar tu inventario con formularios de conteo y fidelizar con programas de registro de clientes. Todo con dashboards en tiempo real para tomar mejores decisiones."
  },
  {
    rubro: "Logística y Transporte",
    keywords: ["transporte", "entregas", "flota", "conductores", "rutas"],
    problemas: [
      "seguimiento de entregas",
      "control de flota",
      "registro de incidencias en ruta",
      "documentación de envíos"
    ],
    soluciones: [
      "Formularios para registro de entregas",
      "Checklists de inspección de vehículos",
      "Reportes de incidencias con ubicación",
      "Digitalización de guías y documentos"
    ],
    ejemploRespuesta: "En logística, App Service digitaliza tus operaciones con formularios de registro de entregas, checklists de inspección de flota y reportes de incidencias con geolocalización. Tus conductores pueden documentar cada entrega desde su móvil, reduciendo errores y mejorando la trazabilidad."
  },
  {
    rubro: "Hotelería y Turismo",
    keywords: ["hotel", "turismo", "huéspedes", "reservas", "servicios"],
    problemas: [
      "gestión de reservas",
      "check-in/check-out eficiente",
      "solicitudes de huéspedes",
      "encuestas de experiencia"
    ],
    soluciones: [
      "Formularios de pre-registro online",
      "Sistema de solicitudes de servicio",
      "Encuestas de satisfacción post-estadía",
      "Checklists de limpieza de habitaciones"
    ],
    ejemploRespuesta: "Para hotelería, App Service mejora la experiencia de tus huéspedes con pre-registro online, solicitudes de servicio digitales y encuestas post-estadía. Tu personal puede gestionar limpieza y mantenimiento con checklists desde dispositivos móviles, asegurando la calidad en cada habitación."
  },
  {
    rubro: "Construcción e Inmobiliaria",
    keywords: ["construcción", "inmobiliaria", "obras", "proyectos", "inmuebles"],
    problemas: [
      "seguimiento de avance de obra",
      "control de proveedores",
      "gestión de incidentes",
      "documentación de proyectos"
    ],
    soluciones: [
      "Formularios con fotos de avance",
      "Registro de materiales y proveedores",
      "Reportes de incidentes en obra",
      "Digitalización de planos y documentos"
    ],
    ejemploRespuesta: "En construcción e inmobiliaria, App Service facilita el seguimiento de obras con formularios que incluyen fotos de avance, control de materiales y registro de incidentes. Todo centralizado para que supervisores y clientes tengan visibilidad en tiempo real del progreso."
  },
  {
    rubro: "Tecnología y Software",
    keywords: ["software", "tecnología", "desarrollo", "TI", "sistemas"],
    problemas: [
      "gestión de proyectos",
      "soporte técnico",
      "reporte de bugs",
      "onboarding de clientes"
    ],
    soluciones: [
      "Formularios para tickets de soporte",
      "Sistema de reporte de bugs",
      "Checklists de onboarding",
      "Encuestas de satisfacción de software"
    ],
    ejemploRespuesta: "Para empresas de tecnología, App Service optimiza tu soporte con formularios de tickets, facilita el reporte de bugs con capturas y mejora el onboarding de clientes con checklists personalizados. Tus equipos pueden priorizar y dar seguimiento a cada solicitud eficientemente."
  },
  {
    rubro: "Servicios Financieros",
    keywords: ["finanzas", "bancos", "seguros", "asesoría", "inversiones"],
    problemas: [
      "captación de clientes",
      "evaluación de perfiles",
      "solicitudes de productos",
      "cumplimiento normativo"
    ],
    soluciones: [
      "Formularios KYC digitales",
      "Evaluaciones de perfil de riesgo",
      "Solicitudes de crédito online",
      "Declaraciones juradas digitales"
    ],
    ejemploRespuesta: "En servicios financieros, App Service agiliza la captación de clientes con formularios KYC digitales, evalúa perfiles de riesgo mediante cuestionarios inteligentes y gestiona solicitudes de crédito de manera eficiente. Todo con respaldo digital para cumplimiento normativo."
  }
];

// Función para buscar el rubro más cercano
export function encontrarRubro(query: string) {
  const queryLower = query.toLowerCase();
  
  // Buscar coincidencia exacta primero
  let exactMatch = rubrosDatabase.find(r => 
    r.rubro.toLowerCase() === queryLower
  );
  if (exactMatch) return exactMatch;
  
  // Buscar por keywords
  for (const rubro of rubrosDatabase) {
    if (rubro.keywords.some(k => queryLower.includes(k))) {
      return rubro;
    }
  }
  
  // Buscar coincidencia parcial en nombre
  const partialMatch = rubrosDatabase.find(r => 
    r.rubro.toLowerCase().includes(queryLower) || 
    queryLower.includes(r.rubro.toLowerCase().split(' ')[0])
  );
  
  return partialMatch || null;
}

// Función para generar prompt con ejemplos
export function generarPromptConEjemplos(rubroUsuario: string, necesidades?: string) {
  const rubroInfo = encontrarRubro(rubroUsuario);
  
  // Si encontramos el rubro, usar sus datos
  if (rubroInfo) {
    return `
Eres un asistente experto de "App Service", una plataforma que crea formularios dinámicos y aplicaciones web personalizadas.

BASADO EN ESTE EJEMPLO REAL PARA EL RUBRO "${rubroInfo.rubro}":
"${rubroInfo.ejemploRespuesta}"

AHORA, un cliente del rubro "${rubroUsuario}" ${necesidades ? `con estas necesidades: "${necesidades}"` : ''} quiere saber cómo App Service puede ayudarlo.

Genera una respuesta:
1. Usando el mismo tono profesional y entusiasta del ejemplo
2. Menciona soluciones específicas como: ${rubroInfo.soluciones.slice(0, 3).join(', ')}
3. Aborda problemas comunes como: ${rubroInfo.problemas.slice(0, 3).join(', ')}
4. Incluye un ejemplo concreto adaptado a su caso
5. Máximo 200 palabras

Responde en español, en primera persona (como App Service).
    `;
  }
  
  // Si no encontramos el rubro, usar prompt genérico
  return `
Eres un asistente experto de "App Service", una plataforma que crea formularios dinámicos y aplicaciones web personalizadas.

EJEMPLOS DE RESPUESTAS PARA DIFERENTES RUBROS:
${rubrosDatabase.slice(0, 3).map(r => 
  `RUBRO "${r.rubro}": "${r.ejemploRespuesta}"`
).join('\n\n')}

AHORA, un cliente del rubro "${rubroUsuario}" ${necesidades ? `con necesidades: "${necesidades}"` : ''} pregunta cómo App Service puede ayudarlo.

Genera una respuesta creativa pero basada en los ejemplos:
1. Identifica posibles necesidades de este rubro
2. Propón 2-3 soluciones concretas de formularios
3. Incluye un beneficio específico
4. Máximo 200 palabras

Responde en español, en primera persona.
  `;
}