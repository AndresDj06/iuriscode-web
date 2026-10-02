import type {
  Profile,
  Publication,
  Project,
  EventItem,
  BlogPost,
} from "@/types";

// ============================================================
// Profile Data
// ============================================================

export const profileData: Profile = {
  id: "1",
  fullName: "Frank Sebastian Mena Garcia",
  title: "Investigador Jurídico | Consultor LegalTech",
  bio: "Profesional enfocado en la convergencia entre el Derecho sustantivo y la innovación tecnológica. Construyendo el puente entre la complejidad normativa y la ejecución técnica.",
  bioExtended: `## En la intersección entre el Derecho, la Tecnología y el Futuro Digital.

> "El derecho no solo debe regular la tecnología; debe evolucionar a su mismo ritmo."

Soy un profesional enfocado en la convergencia entre el derecho sustantivo y la innovación tecnológica. Mi trayectoria nace de la convicción de que el marco legal tradicional requiere nuevas perspectivas para responder a los desafíos de la era digital, la inteligencia artificial y la transformación tecnológica de las organizaciones.

Como consultor en LegalTech, mi objetivo es tender un puente entre la complejidad normativa y la ejecución técnica. Me dedico a investigar, analizar y estructurar soluciones jurídicas para entornos digitales, ayudando a empresas, despachos y profesionales a navegar temas clave como:

- **Gobernanza y Regulación de Inteligencia Artificial.**
- **Protección de Datos Personales y Ciberseguridad Legal.**
- **Transformación Digital y Automatización de Procesos Jurídicos.**
- **Derecho Digital, Comercio Electrónico y Entornos Cloud.**

Actualmente, me encuentro en una fase activa de práctica, investigación aplicada y desarrollo de soluciones tecnológicas orientadas al sector legal, explorando cómo la inteligencia artificial y las metodologías ágiles de desarrollo (AI-Driven Development) pueden optimizar la entrega de servicios jurídicos de alto impacto.

Mi visión es democratizar y modernizar la práctica del derecho, transformando el cumplimiento normativo de un obstáculo operativo en una ventaja competitiva para los negocios.`,
  avatarUrl: "/images/profile.jpg",
  education: [
    {
      degree: "Derecho",
      institution: "Universidad Tecnológica del Chocó",
      year: "2020 – Presente",
      description:
        "Formación integral en ciencias jurídicas con énfasis en investigación, derecho digital y nuevas tecnologías aplicadas al ejercicio legal.",
    },
    {
      degree: "CS50: Introduction to Computer Science",
      institution: "Harvard University",
      year: "2024",
      description:
        "Fundamentos de ciencias de la computación, algoritmos, estructuras de datos y desarrollo de software. Formación complementaria que potencia la visión interdisciplinaria entre Derecho y Tecnología.",
    },
  ],
  experience: [
    {
      role: "Consultor LegalTech",
      organization: "IurisCode",
      period: "2024 – Presente",
      description:
        "Investigación aplicada y desarrollo de soluciones tecnológicas para el sector legal. Análisis de gobernanza de IA, protección de datos y transformación digital jurídica.",
    },
    {
      role: "Investigador Jurídico",
      organization: "Grupo de Investigación en Derecho y Tecnología",
      period: "2023 – Presente",
      description:
        "Producción académica en la intersección entre derecho, inteligencia artificial y regulación digital. Publicaciones, ponencias y participación en eventos científicos.",
    },
  ],
  skills: [
    {
      category: "Derecho y Regulación",
      items: [
        "Gobernanza de IA",
        "Protección de Datos (GDPR/LOPD)",
        "Ciberseguridad Legal",
        "Derecho Digital",
        "Comercio Electrónico",
        "Propiedad Intelectual Digital",
      ],
    },
    {
      category: "Tecnología e Innovación",
      items: [
        "Inteligencia Artificial Aplicada",
        "AI-Driven Development",
        "Automatización de Procesos",
        "Desarrollo Web",
        "Análisis de Datos",
        "Cloud Computing",
      ],
    },
    {
      category: "Investigación y Académico",
      items: [
        "Investigación Jurídica",
        "Escritura Académica",
        "Metodología de Investigación",
        "Ponencias y Conferencias",
        "Revisión de Literatura",
        "Publicación Científica",
      ],
    },
    {
      category: "Herramientas y Metodologías",
      items: [
        "Next.js / React",
        "TypeScript",
        "Python",
        "Supabase / PostgreSQL",
        "Git / GitHub",
        "Metodologías Ágiles",
      ],
    },
  ],
  researchInterests: [
    "Regulación de la Inteligencia Artificial",
    "Ética y Gobernanza de Algoritmos",
    "Protección de Datos en Entornos Digitales",
    "Transformación Digital del Sector Jurídico",
    "LegalTech e Innovación Jurídica",
    "Ciberseguridad y Marco Normativo",
    "Derechos Digitales y Ciudadanía Digital",
    "Automatización de Procesos Legales con IA",
  ],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/franksebasti%C3%A1nmena/",
    github: "https://github.com/FRANK1808K",
    email: "frankbt1808@gmail.com",
    whatsapp: "#",
  },
  createdAt: "2024-01-01",
  updatedAt: "2025-08-01",
};

// ============================================================
// Publications Data
// ============================================================

export const publicationsData: Publication[] = [
  {
    id: "pub-1",
    title:
      "Gobernanza Algorítmica: Desafíos Regulatorios de la Inteligencia Artificial en el Ordenamiento Jurídico Colombiano",
    slug: "gobernanza-algoritmica-desafios-regulatorios-ia",
    abstract:
      "Este artículo examina los vacíos normativos del ordenamiento jurídico colombiano frente a la implementación de sistemas de inteligencia artificial en la administración pública y el sector privado. Se propone un marco de gobernanza algorítmica basado en principios de transparencia, rendición de cuentas y protección de derechos fundamentales digitales.",
    content: `## Introducción

La irrupción de la inteligencia artificial en la vida cotidiana, la administración pública y el sector privado plantea interrogantes fundamentales sobre la capacidad de los ordenamientos jurídicos tradicionales para regular estas tecnologías de manera efectiva.

## Marco Teórico

El concepto de gobernanza algorítmica hace referencia al conjunto de principios, normas y mecanismos institucionales diseñados para supervisar, regular y garantizar la transparencia en el uso de sistemas automatizados de toma de decisiones.

## Análisis del Marco Jurídico Colombiano

Colombia ha avanzado en la regulación de la economía digital mediante instrumentos como la Ley 1581 de 2012 sobre protección de datos personales y el CONPES 3975 sobre transformación digital. Sin embargo, persisten vacíos significativos en relación con la gobernanza específica de sistemas de IA.

## Propuesta de Marco Regulatorio

Se propone un modelo de gobernanza algorítmica articulado en cuatro pilares fundamentales: transparencia algorítmica, evaluación de impacto, rendición de cuentas y participación ciudadana.

## Conclusiones

La regulación de la inteligencia artificial no puede abordarse exclusivamente desde una perspectiva técnica ni jurídica aislada, sino que requiere un enfoque interdisciplinario que integre el conocimiento jurídico, tecnológico y ético.`,
    type: "article",
    authors: ["Frank Sebastian Mena Garcia"],
    journalOrPublisher: "Revista de Derecho y Tecnología — Universidad Tecnológica del Chocó",
    publicationDate: "2025-03-15",
    externalUrl: undefined,
    pdfUrl: undefined,
    tags: ["Inteligencia Artificial", "Gobernanza", "Regulación", "Derecho Digital"],
    featured: true,
    published: true,
    createdAt: "2025-03-01",
    updatedAt: "2025-03-15",
  },
  {
    id: "pub-2",
    title:
      "Protección de Datos Personales en la Era de los Modelos de Lenguaje: Un Análisis desde el Derecho Comparado",
    slug: "proteccion-datos-modelos-lenguaje",
    abstract:
      "El presente trabajo analiza las implicaciones jurídicas del entrenamiento de modelos de lenguaje de gran escala (LLMs) con datos personales, comparando los enfoques regulatorios de la Unión Europea (GDPR), Estados Unidos y América Latina. Se identifican los principales desafíos en materia de consentimiento informado, derecho al olvido y portabilidad de datos en el contexto de sistemas de IA generativa.",
    content: `## Introducción

Los modelos de lenguaje de gran escala (LLMs) han transformado la interacción entre humanos y máquinas. Sin embargo, su entrenamiento depende de cantidades masivas de datos, muchos de los cuales contienen información personal.

## Problemática Jurídica

El uso de datos personales para entrenar modelos de IA plantea tensiones fundamentales con los principios de minimización de datos, limitación de finalidad y consentimiento informado.

## Análisis Comparado

### Unión Europea (GDPR)
El Reglamento General de Protección de Datos establece el marco más robusto, exigiendo bases legales específicas para el procesamiento de datos y reconociendo el derecho a la explicación de decisiones automatizadas.

### Estados Unidos
El enfoque sectorial estadounidense carece de una legislación federal comprehensiva, generando un mosaico regulatorio que dificulta la protección uniforme.

### América Latina
La región presenta avances significativos con legislaciones como la LGPD brasileña y la Ley 1581 colombiana, aunque con desafíos de implementación y enforcement.

## Conclusiones

Se requiere un enfoque global coordinado que reconozca las particularidades regionales pero establezca estándares mínimos universales de protección.`,
    type: "paper",
    authors: ["Frank Sebastian Mena Garcia"],
    journalOrPublisher: "Congreso Internacional de Derecho Digital",
    publicationDate: "2025-06-20",
    externalUrl: undefined,
    pdfUrl: undefined,
    tags: ["Protección de Datos", "LLMs", "GDPR", "Derecho Comparado", "IA Generativa"],
    featured: true,
    published: true,
    createdAt: "2025-06-01",
    updatedAt: "2025-06-20",
  },
  {
    id: "pub-3",
    title:
      "Automatización de Procesos Jurídicos mediante AI-Driven Development: Oportunidades y Límites Éticos",
    slug: "automatizacion-procesos-juridicos-aidd",
    abstract:
      "Esta investigación explora la aplicación de metodologías de desarrollo impulsadas por inteligencia artificial (AI-Driven Development) en la automatización de flujos de trabajo del sector jurídico. Se evalúan los beneficios operativos, los riesgos éticos y las implicaciones profesionales de delegar tareas legales a sistemas automatizados.",
    content: `## Introducción

La transformación digital del sector jurídico ha dejado de ser una posibilidad para convertirse en una necesidad competitiva.

## AI-Driven Development en el Contexto Legal

La metodología AIDD propone un paradigma donde la inteligencia artificial no solo asiste sino que co-crea soluciones tecnológicas, acelerando el desarrollo de herramientas legales especializadas.

## Casos de Uso

Se identifican cuatro áreas principales de aplicación: revisión automatizada de contratos, análisis predictivo de jurisprudencia, generación de documentos legales y gestión inteligente de casos.

## Consideraciones Éticas

La automatización legal plantea dilemas fundamentales sobre la responsabilidad profesional, la confidencialidad y la supervisión humana.

## Conclusiones

La automatización jurídica mediante AIDD es viable y beneficiosa, pero requiere marcos de gobernanza que garanticen la supervisión humana y la responsabilidad profesional.`,
    type: "article",
    authors: ["Frank Sebastian Mena Garcia"],
    journalOrPublisher: "Revista Innovación y Derecho",
    publicationDate: "2025-01-10",
    externalUrl: undefined,
    pdfUrl: undefined,
    tags: ["Automatización", "AI-Driven Development", "Ética", "LegalTech"],
    featured: false,
    published: true,
    createdAt: "2025-01-05",
    updatedAt: "2025-01-10",
  },
];

// ============================================================
// Projects Data
// ============================================================

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "IurisCode Platform",
    slug: "iuriscode-platform",
    description:
      "Plataforma web profesional de consultora LegalTech. Ecosistema digital que integra investigación jurídica, publicaciones académicas, blog especializado y herramientas de contacto profesional.",
    content: `## Descripción del Proyecto

IurisCode Platform es el ecosistema digital central de la consultora, diseñado con una arquitectura modular y escalable que permite evolucionar desde un portafolio profesional hacia una plataforma completa de servicios LegalTech.

## Stack Tecnológico

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS 4
- **Backend**: Supabase (PostgreSQL)
- **Deployment**: Vercel con CI/CD automático
- **Diseño**: Sistema de diseño custom con glassmorphism y micro-animaciones

## Características Principales

- Diseño dark mode premium con identidad visual única
- Renderizado híbrido (SSG + ISR) para máximo rendimiento y SEO
- Blog con categorías y sistema de filtrado
- Formulario de contacto con protección anti-spam
- Arquitectura preparada para autenticación, CMS y portal de clientes`,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Framer Motion",
      "Vercel",
    ],
    status: "in_progress",
    projectUrl: "https://iuriscode.vercel.app",
    repositoryUrl: "https://github.com/FRANK1808K/iuriscode-web",
    imageUrl: undefined,
    startDate: "2025-08-01",
    endDate: undefined,
    tags: ["Web Development", "LegalTech", "Open Source"],
    featured: true,
    published: true,
    createdAt: "2025-08-01",
    updatedAt: "2025-08-01",
  },
  {
    id: "proj-2",
    title: "LexAnalytica — Motor de Análisis Jurisprudencial con IA",
    slug: "lexanalytica-analisis-jurisprudencial",
    description:
      "Herramienta de análisis automatizado de jurisprudencia colombiana basada en procesamiento de lenguaje natural (NLP). Permite identificar tendencias, extractar ratios decidendi y generar resúmenes estructurados de decisiones judiciales.",
    content: `## Descripción del Proyecto

LexAnalytica es un prototipo de herramienta de análisis jurisprudencial que utiliza técnicas de procesamiento de lenguaje natural para automatizar la revisión y clasificación de decisiones judiciales colombianas.

## Problema que Resuelve

La revisión manual de jurisprudencia es una tarea que consume cientos de horas en despachos y firmas legales. LexAnalytica acelera este proceso mediante la extracción automática de información clave.

## Funcionalidades

- Extracción automática de ratios decidendi y obiter dicta
- Clasificación por materia, jurisdicción y tendencia
- Generación de resúmenes ejecutivos
- Identificación de líneas jurisprudenciales
- Dashboard de visualización de tendencias`,
    technologies: ["Python", "NLP", "FastAPI", "PostgreSQL", "React"],
    status: "planned",
    projectUrl: undefined,
    repositoryUrl: undefined,
    imageUrl: undefined,
    startDate: "2025-10-01",
    endDate: undefined,
    tags: ["Inteligencia Artificial", "NLP", "Jurisprudencia", "LegalTech"],
    featured: true,
    published: true,
    createdAt: "2025-08-01",
    updatedAt: "2025-08-01",
  },
  {
    id: "proj-3",
    title: "CompliBot — Asistente de Cumplimiento Normativo",
    slug: "complibot-asistente-cumplimiento",
    description:
      "Chatbot inteligente especializado en consultas de cumplimiento normativo para empresas. Utiliza RAG (Retrieval-Augmented Generation) para proporcionar respuestas contextualizadas basadas en la legislación vigente.",
    content: `## Descripción del Proyecto

CompliBot es un asistente virtual diseñado para ayudar a empresas y profesionales a resolver consultas de cumplimiento normativo de manera rápida y precisa, utilizando inteligencia artificial generativa combinada con bases de conocimiento jurídico actualizado.

## Enfoque Técnico

El sistema utiliza una arquitectura RAG que combina modelos de lenguaje con una base de datos vectorial de normativa actualizada, garantizando que las respuestas estén fundamentadas en la legislación vigente.

## Estado Actual

En fase de diseño conceptual y arquitectura. Se planea un MVP enfocado en normativa de protección de datos y ciberseguridad para el mercado colombiano.`,
    technologies: ["Python", "LangChain", "OpenAI", "Pinecone", "Next.js"],
    status: "planned",
    projectUrl: undefined,
    repositoryUrl: undefined,
    imageUrl: undefined,
    startDate: "2026-01-01",
    endDate: undefined,
    tags: ["IA Generativa", "RAG", "Compliance", "Chatbot"],
    featured: false,
    published: true,
    createdAt: "2025-08-01",
    updatedAt: "2025-08-01",
  },
];

// ============================================================
// Events Data
// ============================================================

export const eventsData: EventItem[] = [
  {
    id: "evt-1",
    title:
      "I Congreso Internacional de Derecho Digital e Inteligencia Artificial",
    slug: "congreso-derecho-digital-ia-2025",
    description:
      "Ponencia sobre los desafíos regulatorios de la inteligencia artificial generativa en América Latina. Análisis de los marcos normativos emergentes y propuestas de gobernanza algorítmica para la región.",
    type: "congress",
    role: "Ponente",
    location: "Bogotá, Colombia",
    eventDate: "2025-05-15",
    eventEndDate: "2025-05-17",
    externalUrl: undefined,
    imageUrl: undefined,
    tags: ["IA", "Regulación", "América Latina", "Gobernanza"],
    published: true,
    createdAt: "2025-04-01",
    updatedAt: "2025-05-17",
  },
  {
    id: "evt-2",
    title: "Seminario de Protección de Datos y Ciberseguridad Corporativa",
    slug: "seminario-proteccion-datos-ciberseguridad-2025",
    description:
      "Participación como panelista en el seminario sobre las implicaciones jurídicas de las brechas de seguridad informática y la responsabilidad corporativa en el tratamiento de datos personales.",
    type: "seminar",
    role: "Panelista",
    location: "Medellín, Colombia",
    eventDate: "2025-03-22",
    eventEndDate: "2025-03-22",
    externalUrl: undefined,
    imageUrl: undefined,
    tags: ["Ciberseguridad", "Protección de Datos", "Corporativo"],
    published: true,
    createdAt: "2025-03-01",
    updatedAt: "2025-03-22",
  },
  {
    id: "evt-3",
    title:
      "Workshop: Automatización Legal con Inteligencia Artificial — Del Concepto a la Práctica",
    slug: "workshop-automatizacion-legal-ia-2025",
    description:
      "Taller práctico sobre el uso de herramientas de IA para la automatización de tareas legales repetitivas: revisión de contratos, análisis de jurisprudencia y generación de documentos legales.",
    type: "workshop",
    role: "Facilitador",
    location: "Virtual",
    eventDate: "2025-07-10",
    eventEndDate: "2025-07-10",
    externalUrl: undefined,
    imageUrl: undefined,
    tags: ["Automatización", "IA", "LegalTech", "Workshop"],
    published: true,
    createdAt: "2025-06-15",
    updatedAt: "2025-07-10",
  },
  {
    id: "evt-4",
    title: "II Jornadas de Investigación en Derecho y Nuevas Tecnologías",
    slug: "jornadas-investigacion-derecho-tecnologia-2024",
    description:
      "Presentación de avances de investigación sobre la gobernanza algorítmica en el contexto colombiano. Diálogo interdisciplinario entre juristas, ingenieros y académicos sobre el futuro de la regulación tecnológica.",
    type: "conference",
    role: "Ponente",
    location: "Quibdó, Chocó, Colombia",
    eventDate: "2024-11-08",
    eventEndDate: "2024-11-09",
    externalUrl: undefined,
    imageUrl: undefined,
    tags: ["Investigación", "Derecho", "Tecnología", "Academia"],
    published: true,
    createdAt: "2024-10-01",
    updatedAt: "2024-11-09",
  },
];

// ============================================================
// Blog Posts Data
// ============================================================

export const blogPostsData: BlogPost[] = [
  {
    id: "blog-1",
    title: "¿Por qué el Derecho necesita aprender a programar?",
    slug: "derecho-necesita-aprender-programar",
    excerpt:
      "La brecha entre el conocimiento jurídico y la comprensión tecnológica no es solo un problema académico: es una vulnerabilidad sistémica que afecta la calidad de la regulación, la administración de justicia y la protección de derechos fundamentales en la era digital.",
    content: `## La brecha que nadie quiere ver

En un mundo donde los algoritmos determinan desde la aprobación de un crédito hasta la duración de una sentencia, los abogados que no comprenden la tecnología se convierten en reguladores ciegos de un mundo que no entienden.

## No se trata de escribir código

Cuando digo que el Derecho necesita aprender a programar, no me refiero a que cada abogado deba convertirse en ingeniero de software. Me refiero a que la profesión jurídica necesita desarrollar una **alfabetización tecnológica profunda** que le permita:

1. **Comprender** cómo funcionan los sistemas que pretende regular
2. **Evaluar** el impacto real de las tecnologías sobre los derechos fundamentales
3. **Diseñar** normativas que sean técnicamente implementables
4. **Colaborar** efectivamente con equipos técnicos multidisciplinarios

## El costo de la ignorancia tecnológica

Regulaciones como el GDPR, la AI Act europea o las leyes de protección de datos en América Latina demuestran que la calidad de la regulación mejora significativamente cuando los legisladores comprenden las tecnologías que pretenden regular.

## La oportunidad LegalTech

La convergencia entre Derecho y Tecnología no es una amenaza para la profesión jurídica: es su mayor oportunidad de transformación y relevancia en el siglo XXI.

## Conclusión

El futuro del Derecho no está en los códigos legales del siglo XIX, sino en la capacidad de construir puentes entre la tradición jurídica y la innovación tecnológica. Y ese puente comienza con la voluntad de aprender.`,
    coverImageUrl: undefined,
    category: "legaltech",
    tags: ["LegalTech", "Educación Legal", "Transformación Digital", "Opinión"],
    readingTimeMinutes: 6,
    featured: true,
    published: true,
    publishedAt: "2025-07-15",
    createdAt: "2025-07-10",
    updatedAt: "2025-07-15",
  },
  {
    id: "blog-2",
    title:
      "La AI Act Europea: Lecciones para América Latina",
    slug: "ai-act-europea-lecciones-america-latina",
    excerpt:
      "La Unión Europea ha marcado un precedente global con su Reglamento de Inteligencia Artificial. ¿Qué pueden aprender los países latinoamericanos de este enfoque regulatorio basado en riesgos?",
    content: `## Un precedente regulatorio histórico

En 2024, la Unión Europea aprobó la AI Act, convirtiéndose en la primera jurisdicción del mundo en establecer un marco regulatorio comprehensivo para la inteligencia artificial.

## El enfoque basado en riesgos

La AI Act clasifica los sistemas de IA en cuatro categorías de riesgo: inaceptable, alto, limitado y mínimo. Cada categoría conlleva obligaciones proporcionales para desarrolladores y usuarios.

## Implicaciones para América Latina

### Oportunidades
- Marco de referencia para diseñar regulaciones propias
- Estándares de interoperabilidad para comercio digital transatlántico
- Modelos de gobernanza algorítmica adaptables

### Desafíos
- Capacidad institucional limitada para enforcement
- Brecha tecnológica entre la región y Europa
- Riesgo de regulación prematura sin madurez del ecosistema

## Hacia un modelo latinoamericano

América Latina tiene la oportunidad de aprender de la experiencia europea sin replicar sus errores, diseñando marcos regulatorios que consideren las particularidades económicas, sociales e institucionales de la región.

## Conclusión

La regulación de la IA en América Latina no puede ser una copia del modelo europeo, pero tampoco puede ignorar las lecciones que este ofrece.`,
    coverImageUrl: undefined,
    category: "ai",
    tags: ["AI Act", "Regulación", "Unión Europea", "América Latina", "Gobernanza IA"],
    readingTimeMinutes: 8,
    featured: true,
    published: true,
    publishedAt: "2025-06-28",
    createdAt: "2025-06-20",
    updatedAt: "2025-06-28",
  },
];

// ============================================================
// Helper: Stats
// ============================================================

export const statsData = [
  { label: "Publicaciones", value: publicationsData.length.toString() + "+" },
  { label: "Proyectos", value: projectsData.length.toString() },
  { label: "Eventos", value: eventsData.length.toString() + "+" },
  { label: "Líneas de Investigación", value: profileData.researchInterests.length.toString() },
];
