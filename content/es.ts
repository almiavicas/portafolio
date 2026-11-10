// Spanish site copy. Must match the shape of the English copy (content/en.ts).
import type { Dictionary } from './en'

const es: Dictionary = {
  meta: {
    title: 'Avila Systems — Ingeniería de Software e IA',
    description:
      'Avila Systems es un socio de ingeniería de software e IA para empresas de EE. UU. Encontramos la solución correcta y luego la diseñamos, construimos y operamos en producción.',
  },
  nav: {
    services: 'Servicios',
    process: 'Proceso',
    work: 'Proyectos',
    about: 'Nosotros',
    faq: 'Preguntas',
    cta: 'Agendar llamada',
    menu: 'Abrir o cerrar el menú de navegación',
    switchLabel: 'View in English',
    switchShort: 'EN',
  },
  hero: {
    eyebrow: 'Estudio de ingeniería de software e IA',
    line1: 'La solución correcta,',
    line2: 'llevada a producción.',
    sub: 'Trabajamos con empresas de EE. UU. para descubrir dónde la tecnología realmente impulsa el negocio, y luego la diseñamos, construimos y operamos: desde productos con IA hasta plataformas que ya superaron su código.',
    primary: 'Agendar llamada',
    secondary: 'Ver proyectos',
    badge: 'Remoto desde Venezuela · En horario laboral de EE. UU.',
    scroll: 'Desliza',
  },
  stats: [
    { value: 25, suffix: '×', label: 'Crecimiento en capacidad de eventos para un cliente de ticketing, de 1K a 25K asistentes' },
    { value: 5, suffix: '+', label: 'Años llevando software a producción en web, backend y móvil' },
    { value: 5, suffix: '', label: 'Plataformas entregadas en eventos, edtech, staffing y seguros' },
    { text: 'Diario', label: 'Despliegues a producción en proyectos activos' },
  ],
  problems: {
    eyebrow: 'Dónde entramos',
    title: 'Dos conversaciones que tenemos a menudo',
    items: [
      {
        quote: '“Sabemos que la IA podría cambiar nuestro producto. Pero no sabemos dónde rinde, ni cómo lanzarla de forma confiable.”',
        body: 'Identificamos dónde la IA crea valor real para tus usuarios y tus márgenes, y la construimos con las evaluaciones y la observabilidad que la mantienen confiable en producción.',
        proof: 'Construimos un simulador de aula con IA y un tutor personalizado con IA',
      },
      {
        quote: '“Nuestra plataforma nos trajo hasta aquí, pero no nos llevará a la siguiente etapa.”',
        body: 'Modernizamos, optimizamos o reemplazamos los sistemas que frenan al negocio, sin detener el negocio mientras lo hacemos.',
        proof: 'Llevamos una plataforma de ticketing de eventos de 1K a 25K asistentes',
      },
    ],
  },
  services: {
    eyebrow: 'Servicios',
    title: 'Qué construimos',
    sub: 'Un solo socio, desde la primera sesión en la pizarra hasta el panel de producción.',
    items: [
      {
        icon: 'ai',
        title: 'Ingeniería de productos con IA',
        body: 'Funcionalidades con LLM, experiencias de voz y agentes que funcionan en producción, no solo en una demo.',
        points: ['OpenAI, Anthropic y Gemini', 'Voz en tiempo real', 'RAG y recuperación', 'Evaluaciones y observabilidad'],
      },
      {
        icon: 'modernize',
        title: 'Modernización de plataformas',
        body: 'Reemplazamos sistemas heredados o reconstruimos las partes de tu código que te frenan, de forma segura e incremental.',
        points: ['Arquitectura y migraciones', 'Rendimiento y escala', 'Infraestructura en la nube', 'AWS · GCP · Docker · Terraform'],
      },
      {
        icon: 'code',
        title: 'Software a la medida',
        body: 'Productos full-stack en web, backend y móvil, hechos por ingenieros que despliegan a producción todos los días.',
        points: ['Next.js y React', 'Django, FastAPI y Node', 'Postgres y Supabase', 'Apps móviles'],
      },
      {
        icon: 'flow',
        title: 'Automatización y herramientas internas',
        body: 'Elimina el trabajo manual de tus operaciones con pipelines de datos, agentes de IA, CRMs y paneles internos.',
        points: ['Agentes y flujos con IA', 'Pipelines de datos (Airflow)', 'CRMs y back-office', 'Integraciones'],
      },
    ],
  },
  process: {
    eyebrow: 'Cómo trabajamos',
    title: 'Del problema a producción',
    sub: 'Contratos mensuales que pueden durar desde un solo mes hasta una relación a largo plazo.',
    steps: [
      { title: 'Descubrir', body: 'Entendemos tu negocio, tus usuarios y el problema detrás del pedido, y encontramos dónde la tecnología realmente rinde.' },
      { title: 'Proponer', body: 'Recibes un plan concreto: arquitectura, compromisos, hitos y lo que no construiríamos.' },
      { title: 'Construir', body: 'Entregamos en incrementos pequeños y listos para producción, a menudo a diario, para que veas avances cada semana.' },
      { title: 'Evolucionar', body: 'Medimos, iteramos y mantenemos, y sumamos ingenieros y diseñadores cuando el alcance crece.' },
    ],
  },
  work: {
    eyebrow: 'Proyectos destacados',
    title: 'Sistemas funcionando en producción',
    sub: 'Los nombres de los clientes se mantienen confidenciales. Con gusto te mostramos cualquiera en una llamada.',
    outcomeLabel: 'Resultado',
    cases: [
      {
        key: 'ticketing',
        industry: 'Eventos en vivo · Ticketing',
        title: 'Plataforma de ticketing para eventos',
        summary: 'Un nuevo sistema multiplataforma que reemplazó el stack heredado de una empresa líder de ticketing en Latinoamérica, desde la venta hasta el acceso en la puerta.',
        outcome: 'Sus eventos más grandes pasaron de 1K a 25K asistentes, y el cliente volvió por más trabajo.',
        stack: ['Django', 'Postgres', 'Docker', 'AWS'],
      },
      {
        key: 'classroom',
        industry: 'Edtech · IA de voz',
        title: 'Simulador de aula con IA',
        summary: 'Docentes ensayan clases reales frente a un aula de estudiantes de IA que escuchan, reaccionan y responden a su voz en tiempo real.',
        outcome: 'Una herramienta que no existía: una nueva categoría de producto para el mercado edtech.',
        stack: ['Next.js', 'Node.js', 'Supabase', 'OpenAI', 'Anthropic', 'Deepgram', 'Langfuse', 'PostHog'],
      },
      {
        key: 'tutor',
        industry: 'Edtech · LLM',
        title: 'Tutor personalizado con IA',
        summary: 'Una plataforma de aprendizaje donde una guía con IA se adapta a cada estudiante, con evaluaciones y observabilidad que mantienen sus respuestas confiables.',
        outcome: 'Una nueva forma de personalizar la experiencia de aprendizaje de cada estudiante.',
        stack: ['Next.js', 'FastAPI', 'Supabase', 'Anthropic', 'Langfuse', 'PostHog'],
      },
      {
        key: 'workforce',
        industry: 'Staffing',
        title: 'Plataforma de control de asistencia',
        summary: 'Registro de entradas y salidas para el personal de una empresa de staffing, con un solo lugar para ver quién está en turno.',
        outcome: '',
        stack: [],
      },
      {
        key: 'crm',
        industry: 'Seguros · Construcción',
        title: 'CRM para call center',
        summary: 'Un CRM hecho para call centers en EE. UU. que atienden a agencias de seguros del sector construcción.',
        outcome: '',
        stack: [],
      },
    ],
  },
  stack: {
    label: 'Herramientas con las que trabajamos',
  },
  founder: {
    eyebrow: 'Fundador',
    title: 'Ingeniería senior, de la misma persona que responde tu correo',
    name: 'Alvaro Avila',
    role: 'Fundador e Ingeniero Principal',
    bio: [
      'Soy ingeniero en computación (Universidad Simón Bolívar) y en los últimos años he pasado por ingeniería de datos, desarrollo full-stack y liderazgo de equipos de producto. Hoy me enfoco donde esos mundos se unen: IA y software que tienen que funcionar en producción, no solo en una demo.',
      'Avila Systems es la forma en que trabajo directamente con clientes. Hablas con el ingeniero que diseña y construye tu sistema, y cuando un proyecto necesita más manos, sumo a una red de confianza de desarrolladores y diseñadores.',
    ],
    linkedin: 'Conecta en LinkedIn',
    timeline: [
      { date: '2022 — Presente', title: 'Ingeniero de Software e IA · Moonshot Partners', body: 'Líder técnico e ingeniero en productos con IA, incluidas plataformas edtech con voz y funcionalidades LLM.' },
      { date: '2022 — 2024', title: 'Líder de Ingeniería · MdTicket', body: 'Diseñé y lideré el sistema multiplataforma que reemplazó el stack heredado de la empresa.' },
      { date: '2022', title: 'Ponente · Comunidad de Airflow', body: 'Charla para la comunidad de Apache Airflow.' },
      { date: '2021', title: 'Ingeniero de Datos · Code for Venezuela  ·  Desarrollador Fullstack · Cobuild Lab', body: 'Pipelines en Airflow, calidad de datos y trabajo con RAG; aplicaciones con React y backends serverless.' },
    ],
  },
  agencies: {
    eyebrow: 'Para agencias y estudios',
    title: 'Tu socio de ingeniería senior, bajo tu marca',
    body: 'Las agencias nos integran en proyectos de sus clientes cuando necesitan a alguien que defina, construya y despliegue sin supervisión constante. Trabajamos dentro de tu proceso y tus herramientas, y la relación con tu cliente sigue siendo tuya.',
    cta: 'Trabajemos juntos',
  },
  faq: {
    eyebrow: 'Preguntas',
    title: 'Preguntas frecuentes',
    items: [
      { q: '¿Cómo funcionan los contratos?', a: 'Trabajamos con contratos mensuales. Algunos clientes necesitan un solo mes para destrabar un proyecto, y otros nos mantienen como su socio de ingeniería a largo plazo. Definimos el precio juntos en la primera llamada, según lo que necesites.' },
      { q: 'Todavía no sabemos exactamente qué necesitamos. ¿Es un problema?', a: 'No. Normalmente ahí es donde empezamos. La etapa de descubrimiento existe para convertir “creemos que la IA podría ayudar” o “nuestro sistema nos frena” en un plan concreto y priorizado.' },
      { q: '¿Dónde están ubicados? ¿La zona horaria será un problema?', a: 'Trabajamos de forma remota desde Venezuela, con horario que coincide con el horario laboral de EE. UU. Trabajamos en inglés y en español.' },
      { q: '¿Pueden crecer más allá de un ingeniero?', a: 'Sí. Avila Systems es liderado por su fundador y, para alcances más grandes, armamos un equipo de desarrolladores y diseñadores de confianza con quienes ya hemos trabajado.' },
      { q: '¿Trabajan con agencias?', a: 'Sí. Las agencias son algunos de nuestros mejores socios. Podemos trabajar bajo tu marca como tu equipo de ingeniería senior.' },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: '¿Tienes un problema que vale la pena resolver?',
    body: 'Cuéntanos qué quieres lograr. La primera conversación es sobre tu problema, no un discurso de ventas.',
    cta: 'Escríbenos',
    subject: 'Consulta de proyecto',
  },
  footer: {
    tagline: 'Socio de ingeniería de software e IA para empresas de EE. UU.',
    rights: 'Todos los derechos reservados.',
  },
}

export default es
