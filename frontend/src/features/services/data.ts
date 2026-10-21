import {
  Compass,
  PenTool,
  Globe,
  MapPin,
  Mail,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

/**
 * Arquitectura de contenido de Mottoforma.
 * La voz sigue el modelo de un estudio (oferta nombrada, capacidades,
 * proceso y preguntas), con el alcance propio de Mottoforma.
 * Referencia de estructura: https://wearemarea.co/
 */

export type ServiceFAQ = {
  q: string;
  a: string;
};

export type Service = {
  slug: string;
  number: string;
  name: string; // Nombre comercial del servicio (oficial del brief)
  title: string; // Titular orientado a beneficio
  tagline: string; // Promesa en una línea
  benefit: string; // Resumen corto para tarjetas
  forWhom: string; // Cuándo elegir este servicio
  solves: string[]; // Problemas concretos que quita de encima
  includes: string[]; // Entregables tangibles (lo que el cliente recibe)
  outcome: string; // Qué cambia cuando termina el proyecto
  pastel: string;
  icon: LucideIcon;
  faqs: ServiceFAQ[];
};

/**
 * Señales de que un negocio necesita a Mottoforma (patrón NOVA: espejo inmediato del dolor).
 */
export const painSignals = [
  {
    symptom: "Te da pena compartir tu web — o directamente no tienes una y mandas todo por WhatsApp.",
    fix: "Diseño y desarrollo de sitios web",
    slug: "sitios-web",
  },
  {
    symptom: "Tu negocio es serio, pero tu logo y tus piezas parecen hechos cada día por una persona distinta.",
    fix: "Identidad visual y logotipos",
    slug: "identidad-visual",
  },
  {
    symptom: "Cuando te preguntan a qué te dedicas, das una explicación larga y aun así no queda claro por qué elegirte.",
    fix: "Estrategia y creación de marca",
    slug: "estrategia-marca",
  },
  {
    symptom: "Te buscan en Google y no apareces, o aparece información vieja, sin horarios ni forma rápida de escribirte.",
    fix: "Presencia empresarial en Google",
    slug: "presencia-google",
  },
  {
    symptom: "Sigues enviando presupuestos desde un correo @gmail.com o dependes de un tercero para tocar tu propio dominio.",
    fix: "Dominios, correos y soluciones digitales",
    slug: "soluciones-digitales",
  },
] as const;

/**
 * Las 3 rutas comerciales principales (patrón Vinto + ZOF + Prisma).
 * No son precios cerrados inventados: son alcances claros para que el cliente sepa dónde encaja.
 */
export type CommercialRoute = {
  id: string;
  badge: string;
  name: string;
  idealFor: string;
  promise: string;
  includes: string[];
  serviceSlugs: string[];
  featured?: boolean;
  cta: string;
};

export const commercialRoutes: CommercialRoute[] = [
  {
    id: "ruta-origen",
    badge: "Marca",
    name: "Dirección e identidad",
    idealFor: "Negocios que van a presentarse por primera vez o cuya imagen ya no sostiene lo que hacen.",
    promise:
      "De una idea dispersa a una marca con mensaje, logotipo y reglas visuales para usarse igual en cada punto de contacto.",
    includes: [
      "Sesión de descubrimiento y definición de mensaje comercial",
      "Logotipo principal, versiones y marca en blanco y negro",
      "Paleta de color y par tipográfico con licencia comercial",
      "Guía práctica de marca lista para usar y compartir",
      "Correo corporativo y dominio registrados a tu nombre",
    ],
    serviceSlugs: ["estrategia-marca", "identidad-visual", "soluciones-digitales"],
    cta: "Conversar sobre marca",
  },
  {
    id: "ruta-conversion",
    badge: "Web",
    name: "Sitio y presencia",
    idealFor: "Equipos que ya tienen marca y necesitan un sitio que explique el negocio y abra el contacto.",
    promise:
      "Un sitio claro, rápido y escrito para el negocio: ordena la oferta, responde dudas y deja un camino directo para escribirte.",
    includes: [
      "Estructura y redacción comercial de cada sección",
      "Diseño visual a medida (sin plantillas genéricas)",
      "Desarrollo adaptable a móvil, tableta y escritorio",
      "Formulario de contacto y botón directo a WhatsApp",
      "Ficha de Google y base de buscadores configuradas",
    ],
    serviceSlugs: ["sitios-web", "presencia-google"],
    cta: "Conversar sobre la web",
  },
  {
    id: "ruta-completa",
    badge: "Integral",
    name: "Marca y web, una sola pieza",
    idealFor: "Negocios que quieren resolver estrategia, identidad y presencia con un solo equipo.",
    promise:
      "Estrategia, identidad, sitio, dominio y ficha de Google pensados juntos, para que cada pieza diga lo mismo.",
    includes: [
      "Estrategia de marca y propuesta de valor escrita",
      "Identidad visual completa y guía de uso",
      "Sitio web a medida conectado con tu identidad",
      "Dominio, correos con tu marca y perfil de Google listos",
      "Capacitación de entrega y primer mes de acompañamiento",
    ],
    serviceSlugs: [
      "estrategia-marca",
      "identidad-visual",
      "sitios-web",
      "presencia-google",
      "soluciones-digitales",
      "acompanamiento",
    ],
    featured: true,
    cta: "Iniciar la ruta completa",
  },
];

export const services: Service[] = [
  {
    slug: "estrategia-marca",
    number: "01",
    name: "Estrategia y creación de marca",
    title: "Tu mensaje, claro antes de diseñar",
    tagline: "Definimos qué vendes, a quién y por qué deberían elegirte a ti.",
    benefit:
      "Ordenamos tu oferta y tu discurso para que tu negocio se entienda en segundos y dejes de improvisar cada vez que te presentas.",
    forWhom:
      "Negocios que están por nacer, o empresas que sienten que hacen muchas cosas pero nadie entiende del todo cuál es su especialidad.",
    solves: [
      "Explicaciones largas que no terminan de convencer al cliente.",
      "Precios que cuesta defender porque tu valor no se percibe.",
      "Redes, propuestas y web diciendo cosas distintas entre sí.",
    ],
    includes: [
      "Sesión de descubrimiento de negocio, cliente ideal y competencia",
      "Definición de propuesta de valor y argumentos de venta",
      "Personalidad, tono de voz y mensajes clave por servicio",
      "Orientación de nombre comercial (naming) si aún no lo tienes",
      "Documento base de estrategia que guía todo el diseño posterior",
    ],
    outcome:
      "Sales con un discurso claro que puedes usar en tu web, en una reunión comercial o en una propuesta.",
    pastel: "motto-fill-rose",
    icon: Compass,
    faqs: [
      {
        q: "¿Puedo contratar solo la estrategia si todavía no voy a hacer la web?",
        a: "Sí. El documento queda tuyo y sirve como base tanto si continúas con nosotros como si decides avanzar por etapas.",
      },
      {
        q: "¿Incluye el registro legal del nombre?",
        a: "Te ayudamos a crear opciones y a revisar que el dominio esté libre, pero el trámite de registro de marca ante la autoridad de tu país lo realiza un abogado o gestor marcario.",
      },
    ],
  },
  {
    slug: "identidad-visual",
    number: "02",
    name: "Identidad visual y diseño de logotipos",
    title: "Una marca que se reconoce a la primera",
    tagline: "Logo, colores, tipografías y reglas claras para verte profesional en cualquier formato.",
    benefit:
      "Creamos un sistema visual propio para que tu negocio transmita nivel y confianza antes de decir una sola palabra.",
    forWhom:
      "Emprendedores que salen al mercado o negocios cuyo logo actual se quedó viejo, no funciona en pequeño o no los representa.",
    solves: [
      "Un logo hecho de prisa que se ve borroso o genérico.",
      "Publicaciones y documentos donde cada pieza usa colores distintos.",
      "Perder oportunidades frente a competidores que simplemente se ven más serios.",
    ],
    includes: [
      "Logotipo principal y versiones (horizontal, reducida, icono, una tinta)",
      "Paleta de color con códigos para pantalla e impresión",
      "Selección de tipografías comerciales para títulos y lectura",
      "Estilo de piezas gráficas y ejemplos de aplicación real",
      "Manual de marca digital y archivos editables y listos para usar",
    ],
    outcome:
      "Tu negocio se ve coherente en tu web, tu firma de correo, tus redes y cualquier presentación.",
    pastel: "motto-fill-lilac",
    icon: PenTool,
    faqs: [
      {
        q: "¿Cuántas propuestas y ajustes incluye?",
        a: "Trabajamos sobre una dirección acordada contigo, presentamos la propuesta completa aplicada a casos reales y contamos con dos rondas de ajustes definidas desde el inicio.",
      },
      {
        q: "¿Qué archivos me entregan al final?",
        a: "Recibes los originales vectoriales y las versiones en alta resolución con fondo transparente, listos para web, redes o imprenta.",
      },
    ],
  },
  {
    slug: "sitios-web",
    number: "03",
    name: "Diseño y desarrollo de sitios web",
    title: "Una web pensada para que te escriban",
    tagline: "Rápida, clara en móvil y escrita para convertir visitas en conversaciones comerciales.",
    benefit:
      "Construimos tu casa digital a medida para explicar lo que haces, resolver objeciones y llevar al visitante directo al contacto.",
    forWhom:
      "Negocios sin página web, o empresas con un sitio lento, confuso o abandonado que hoy no les genera ni una consulta.",
    solves: [
      "Clientes potenciales que piden tu web y no tienes qué mostrar.",
      "Páginas bonitas pero mudas, donde nadie entiende qué vendes ni cómo contratarte.",
      "Sitios hechos con plantillas pesadas que cargan mal en el teléfono.",
    ],
    includes: [
      "Arquitectura de páginas y guía de textos con enfoque comercial",
      "Diseño visual a medida alineado a tu marca",
      "Desarrollo rápido y adaptable a móvil, tableta y escritorio",
      "Formulario de captación de clientes y enlace directo a WhatsApp",
      "Panel de administración para que puedas actualizar servicios, proyectos o artículos",
      "Configuración base para buscadores (títulos, descripciones, mapa del sitio)",
    ],
    outcome:
      "Tienes un enlace propio que puedes mandar con orgullo y que trabaja las 24 horas presentando tu negocio.",
    pastel: "motto-fill-sky",
    icon: Globe,
    faqs: [
      {
        q: "¿Voy a poder cambiar textos o proyectos sin depender de ustedes?",
        a: "Sí. Dejamos un panel administrativo claro para que edites tus servicios, casos de estudio, datos de contacto y publicaciones.",
      },
      {
        q: "¿Usan plantillas prefabricadas?",
        a: "No. Cada sitio se diseña y construye según la estructura y los objetivos comerciales de tu negocio.",
      },
    ],
  },
  {
    slug: "presencia-google",
    number: "04",
    name: "Presencia empresarial en Google",
    title: "Que te encuentren cuando te buscan",
    tagline: "Tu perfil de empresa y tu sitio preparados para aparecer con información clara y confiable.",
    benefit:
      "Dejamos lista tu ficha de empresa y la estructura de tu web para que quien busque tu negocio vea datos reales y sepa cómo contactarte.",
    forWhom:
      "Negocios locales, estudios profesionales, clínicas, comercios y empresas de servicios que dependen de que los encuentren en su ciudad o sector.",
    solves: [
      "Personas que buscan tu nombre en Google y no encuentran nada oficial.",
      "Fichas incompletas, duplicadas o con teléfonos y horarios desactualizados.",
      "Visitas que se van con la competencia porque tu perfil no inspira confianza.",
    ],
    includes: [
      "Creación o puesta a punto de tu Perfil de Empresa en Google",
      "Redacción comercial de servicios, descripción y categorías adecuadas",
      "Piezas gráficas con tu identidad para portada y perfil",
      "Conexión correcta entre tu ficha y tu sitio web",
      "Guía práctica para pedir reseñas reales a tus clientes y mantener el perfil activo",
    ],
    outcome:
      "Cuando alguien busca tu negocio o tu zona, ve una presencia cuidada con botón directo para llamarte, escribirte o llegar.",
    pastel: "motto-fill-mint",
    icon: MapPin,
    faqs: [
      {
        q: "¿Garantizan el primer lugar en Google?",
        a: "No, y desconfía de quien lo prometa. La posición depende de la competencia, la ubicación y las políticas de Google. Lo que sí garantizamos es dejar tu ficha y tu web bien estructuradas según las buenas prácticas oficiales.",
      },
      {
        q: "¿El perfil queda a mi nombre?",
        a: "Siempre. Se configura con tu cuenta como propietaria principal.",
      },
    ],
  },
  {
    slug: "soluciones-digitales",
    number: "05",
    name: "Dominios, correos y soluciones digitales",
    title: "Tu nombre y tu correo, bajo tu control",
    tagline: "Dejas el @gmail atrás y operas con tu propia marca, sin quedarte atado a terceros.",
    benefit:
      "Registramos tu dominio, configuramos tus cuentas de correo profesional y dejamos tus accesos documentados y a tu nombre.",
    forWhom:
      "Negocios que empiezan desde cero o empresas que no saben quién tiene las claves de su dominio y sus correos.",
    solves: [
      "Enviar cotizaciones desde un correo gratuito que resta seriedad.",
      "No saber cuándo vence tu dominio ni a nombre de quién está registrado.",
      "Perder correos importantes por una configuración incompleta.",
    ],
    includes: [
      "Búsqueda y registro de dominio a nombre de tu empresa",
      "Configuración de cuentas de correo con tu marca (ej. hola@tunegocio.com)",
      "Ajustes de entrega para que tus correos lleguen bien a la bandeja de entrada",
      "Firma de correo diseñada con tu identidad visual",
      "Documento de entrega con todas tus cuentas y accesos organizados",
    ],
    outcome:
      "Tu negocio se comunica con su propio nombre y tú eres el dueño real de todos tus activos digitales.",
    pastel: "motto-fill-lime",
    icon: Mail,
    faqs: [
      {
        q: "¿Quién paga la renovación anual del dominio y el correo?",
        a: "Se deja configurado directamente con tu medio de pago ante el proveedor, a costo oficial y sin recargos ocultos por nuestra parte.",
      },
    ],
  },
  {
    slug: "acompanamiento",
    number: "06",
    name: "Acompañamiento, soporte y crecimiento",
    title: "Un equipo contigo después del lanzamiento",
    tagline: "Tu negocio cambia; tu marca y tu web evolucionan con él sin tener que empezar de nuevo.",
    benefit:
      "No desaparecemos el día de la entrega: nos quedamos para resolver dudas, sumar nuevas páginas, ajustar mensajes y cuidar que todo siga funcionando.",
    forWhom:
      "Clientes que ya lanzaron su marca o su web y quieren un socio continuo sin contratar un equipo interno.",
    solves: [
      "Quedarte solo después de pagar una web y no tener a quién pedirle un cambio.",
      "Sitios que se quedan congelados mientras el negocio saca nuevos servicios.",
      "Pequeñas mejoras que se postergan meses por falta de tiempo o manos.",
    ],
    includes: [
      "Mantenimiento preventivo y revisión periódica del sitio",
      "Bolsa de horas o alcances mensuales para nuevos apartados, campañas o piezas",
      "Ajustes de textos y secciones según lo que vas aprendiendo de tus clientes",
      "Atención directa con las mismas personas que construyeron tu proyecto",
    ],
    outcome:
      "Tu presencia digital se mantiene viva, al día y alineada con las metas comerciales de cada etapa.",
    pastel: "motto-fill-peach",
    icon: HeartHandshake,
    faqs: [
      {
        q: "¿Es obligatorio pagar una iguala mensual para trabajar con ustedes?",
        a: "No. Puedes contratar un proyecto puntual y manejarlo tú mismo; el acompañamiento continuo es opcional para quien prefiere delegarlo.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const processSteps = [
  {
    title: "Descubrimiento",
    deliverable: "Contexto compartido",
    text: "Conocemos el negocio, a quién le habla, qué ya existe y qué debe resolver la marca o el sitio.",
  },
  {
    title: "Definición",
    deliverable: "Dirección y alcance",
    text: "Ordenamos los hallazgos y dejamos por escrito la estrategia, las prioridades y los entregables.",
  },
  {
    title: "Construcción",
    deliverable: "Piezas en revisión",
    text: "Convertimos esa dirección en identidad, web o presencia, con dos rondas de ajuste acotadas.",
  },
  {
    title: "Entrega",
    deliverable: "Activos a tu nombre",
    text: "Publicamos, entregamos archivos y accesos, y dejamos una base que el negocio puede seguir usando.",
  },
] as const;

/** Introducción del estudio: voz de “somos”, sin biografías ni cifras inventadas. */
export const studioIntro = {
  kicker: "Hola, somos Mottoforma.",
  role: "Estudio de marca y presencia digital",
  title: "Estrategia, identidad y tecnología en la misma mesa.",
  body: "Ayudamos a negocios y equipos a definir su dirección, construir una marca reconocible y dejar lista una presencia digital clara: sitio, Google, dominio y correo, pensados para usarse de verdad.",
} as const;

/** Tres ideas que organizan las decisiones del estudio. */
export const principles = [
  {
    number: "01",
    title: "Claridad primero",
    text: "Ordenamos el problema antes de diseñar la solución. Cada decisión parte del negocio, de las personas y del contexto en el que tiene que funcionar.",
  },
  {
    number: "02",
    title: "Decisiones conectadas",
    text: "No tratamos el logo, la web y Google como encargos sueltos. Si se construyen juntos, el mensaje, la forma y los canales dicen lo mismo.",
  },
  {
    number: "03",
    title: "Construcción con el cliente",
    text: "El conocimiento del negocio está de tu lado. Nosotros aportamos dirección, diseño y ejecución, y lo que queda al final está a tu nombre.",
  },
] as const;

export const commercialFaqs = [
  {
    q: "¿Puedo contratar un solo servicio?",
    a: "Sí. Una identidad, un sitio o la puesta a punto de Google pueden contratarse por separado, siempre que el alcance y los entregables queden definidos antes de empezar.",
  },
  {
    q: "¿Cómo se define la inversión?",
    a: "No publicamos un precio único porque cada proyecto cambia de alcance. Después de una conversación, enviamos una propuesta con etapas, cronograma e inversión.",
  },
  {
    q: "¿Cuánto dura un proyecto?",
    a: "Depende de lo que haya que construir. Un encargo concreto suele resolverse en semanas; una ruta de marca y web pide más tiempo. El calendario se acuerda antes de comenzar.",
  },
  {
    q: "¿Qué pasa con el dominio, los correos y los archivos?",
    a: "Quedan a nombre del negocio. Entregamos accesos, originales y una guía para que la operación no dependa de nosotros.",
  },
] as const;
