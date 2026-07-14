// FCL Empresarial — bilingual dictionary (ES default, EN toggle)
// Each key matches a data-i18n="KEY" attribute in the PHP templates.
// Values are set via innerHTML, so inline tags (<em>, <strong>) are allowed.

export const DEFAULT_LANG = "es";
export const STORAGE_KEY = "fcl-lang";

export const translations = {
  es: {
    // Header
    "nav.cost": "El Costo",
    "nav.method": "Metodología",
    "nav.packages": "Paquetes",
    "header.cta": "Agendar diagnóstico",

    // Hero
    "hero.eyebrow": "Consultoría de Personas y Cultura · Bay Area",
    "hero.title": "Tu mejor talento se está marchando. ¿Sabes por qué?",
    "hero.lead": "Muchas empresas invierten mucho en contratar, pero casi nada en mantener a su gente comprometida, reconocida y con sentido de pertenencia. FCL Empresarial construye los sistemas de cultura que hacen que tu equipo quiera quedarse.",
    "hero.cta1": "Agenda tu diagnóstico de cultura gratuito",
    "hero.cta2": "Cómo funciona",
    "hero.trust": "Llamada de 20 minutos · Sin compromiso · Sin venta",

    // Cost of doing nothing
    "cost.eyebrow": "El costo de no hacer nada",
    "cost.title": "La rotación no es solo un problema de personas. Es un problema de rentabilidad.",
    "cost.p1": "Reemplazar a un solo colaborador cuesta entre el <strong>50 % y el 200 % de su salario anual</strong>. Para una empresa de 50 personas con 30 % de rotación, son cientos de miles perdidos cada año: en reclutamiento, capacitación, productividad y conocimiento que se va por la puerta.",
    "cost.p2": "Pero el costo real no es financiero. Es el equipo que deja de confiar en el liderazgo. La cultura que se erosiona en silencio. Los mejores que empiezan a actualizar su currículum porque ven que todos se van.",
    "stat.src": "Promedio de la industria",
    "stat1.num": "50 a 200<em>%</em>",
    "stat1.label": "Costo de reemplazar a un colaborador, respecto a su salario anual.",
    "stat2.label": "Rotación anual promedio en empresas sin programas de cultura.",
    "stat3.label": "Colaboradores que dicen que el reconocimiento los haría quedarse más tiempo.",

    // Who we are
    "about.eyebrow": "Quiénes somos",
    "about.title": "Construimos empresas donde las personas quieren quedarse.",
    "about.p1": "FCL Empresarial es una consultoría de personas y cultura que ayuda a las organizaciones a fortalecer su cultura de trabajo, mejorar la experiencia del colaborador y construir entornos donde la gente se siente valorada, comprometida y orgullosa de pertenecer.",
    "about.p2": "No organizamos fiestas de cumpleaños. Diseñamos sistemas intencionales y estructurados de reconocimiento, integración, comunicación y desarrollo, para que tus líderes no tengan que hacerlo. Somos tu aliado externo de cultura: diseñamos, ejecutamos y medimos. Tú te enfocas en tu negocio.",

    // Methodology
    "method.eyebrow": "La metodología",
    "method.title": "Nuestro enfoque de 5 pilares para construir una cultura que retiene.",
    "p1.title": "Reconocer",
    "p1.principle": "Las personas necesitan sentirse vistas",
    "p1.desc": "Cumpleaños, aniversarios laborales, empleado destacado y reconocimiento entre compañeros.",
    "p2.title": "Escuchar",
    "p2.principle": "Las personas necesitan sentirse escuchadas",
    "p2.desc": "Encuestas de clima, encuestas de satisfacción y entrevistas de permanencia.",
    "p3.title": "Conectar",
    "p3.principle": "Las personas necesitan pertenecer",
    "p3.desc": "Eventos, actividades de integración y comunicación interna.",
    "p4.title": "Desarrollar",
    "p4.principle": "Las personas necesitan crecer",
    "p4.desc": "Planes de desarrollo, reconocimiento de logros y programas de mentoría.",
    "p5.title": "Inspirar",
    "p5.principle": "Las personas necesitan propósito",
    "p5.desc": "Valores, cultura, historias de éxito y comunicación de liderazgo.",

    // Packages
    "packages.eyebrow": "Paquetes",
    "packages.title": "Un plan para cada etapa de crecimiento.",
    "pkg.cta": "Agenda tu diagnóstico",
    "pkg.starter.size": "10 a 30 empleados",
    "pkg.starter.f1": "Calendario anual de reconocimiento",
    "pkg.starter.f2": "Reconocimiento de cumpleaños y aniversarios",
    "pkg.starter.f3": "Reconocimiento mensual destacado",
    "pkg.starter.f4": "Comunicación interna básica",
    "pkg.starter.goal": "Objetivo: Que los colaboradores se sientan vistos.",
    "pkg.growth.badge": "Más popular",
    "pkg.growth.size": "30 a 75 empleados",
    "pkg.growth.f1": "Todo lo de Starter",
    "pkg.growth.f2": "Encuestas trimestrales de compromiso",
    "pkg.growth.f3": "Programas estructurados de reconocimiento",
    "pkg.growth.f4": "Eventos trimestrales de equipo",
    "pkg.growth.f5": "Reportes para gerencia",
    "pkg.growth.goal": "Objetivo: Aumentar compromiso y pertenencia.",
    "pkg.exc.size": "75+ empleados",
    "pkg.exc.f1": "Todo lo de Growth",
    "pkg.exc.f2": "Diagnóstico cultural completo y estrategia anual",
    "pkg.exc.f3": "Diseño de programa de onboarding",
    "pkg.exc.f4": "Programas de bienestar",
    "pkg.exc.f5": "Métricas de clima y reportes ejecutivos",
    "pkg.exc.goal": "Objetivo: Construir una cultura de alto desempeño.",

    // How it works
    "how.eyebrow": "Cómo funciona",
    "how.title": "Empezar toma 20 minutos.",
    "how.s1.title": "Agenda tu diagnóstico gratuito",
    "how.s1.desc": "Agenda una llamada de 20 minutos. Exploramos aspectos clave de la experiencia de tus colaboradores para identificar fortalezas, oportunidades y áreas de mejora.",
    "how.s2.title": "Recibe tu reporte de cultura",
    "how.s2.desc": "Te entregamos una evaluación clara de dónde está tu cultura, con recomendaciones prácticas que puedes aplicar de inmediato.",
    "how.s3.title": "Elige tu plan",
    "how.s3.desc": "Selecciona el paquete que se ajuste al tamaño y etapa de tu empresa. Nosotros nos encargamos de todo: del diseño a la ejecución y la medición.",
    "how.s4.title": "Nosotros ejecutamos. Tú te enfocas en tu negocio",
    "how.s4.desc": "Nuestro equipo diseña, organiza y da seguimiento a cada programa. Tú no planeas, coordinas ni gestionas nada. Menos carga administrativa. Más compromiso. Mayor retención de talento.",

    // Quote
    "quote.text": "La cultura existe en todas las empresas. La diferencia es que algunas la gestionan intencionalmente, y otras la dejan al azar.",
    "quote.sub": "Si logras retener a <em>una</em> persona clave un año más, el programa prácticamente se paga solo.",

    // Final CTA
    "close.title": "Tu equipo es tu ventaja competitiva. Asegurémonos de que lo sepan.",
    "close.p": "Agenda tu diagnóstico de cultura gratuito de 20 minutos. Sin compromiso. Sin presentación de venta. Solo una conversación sobre tu equipo y cómo construir un lugar del que no quieran irse.",
    "close.cta": "Agenda tu diagnóstico gratuito",
    "close.callus": "Llámanos:",
    "close.note": "El calendario de reservas (Calendly) se integra aquí.",

    // Footer
    "footer.tagline": "Valoramos personas. Fortalecemos empresas.",
    "footer.division": "División de Personas y Cultura"
  },

  en: {
    // Header
    "nav.cost": "The Cost",
    "nav.method": "Methodology",
    "nav.packages": "Packages",
    "header.cta": "Book Diagnostic",

    // Hero
    "hero.eyebrow": "People & Culture Consulting · Bay Area",
    "hero.title": "Your best employees are leaving. Do you know why?",
    "hero.lead": "Most companies invest heavily in hiring but almost nothing in keeping people engaged, recognized, and committed. FCL Empresarial builds the culture systems that make your team want to stay.",
    "hero.cta1": "Book Your Free Culture Diagnostic",
    "hero.cta2": "See how it works",
    "hero.trust": "20-minute call · No commitment · No pitch",

    // Cost of doing nothing
    "cost.eyebrow": "The cost of doing nothing",
    "cost.title": "Turnover isn't just a people problem. It's a profit problem.",
    "cost.p1": "Replacing a single employee costs <strong>50 to 200% of their annual salary</strong>. For a company of 50 people with 30% turnover, that's hundreds of thousands lost every year: in recruiting, training, lost productivity, and institutional knowledge that walks out the door.",
    "cost.p2": "But the real cost isn't financial. It's the team that stops trusting leadership. The culture that erodes quietly. The best people who start updating their resumes because they see everyone else leaving.",
    "stat.src": "Industry average",
    "stat1.num": "50 to 200<em>%</em>",
    "stat1.label": "Cost to replace one employee, relative to annual salary.",
    "stat2.label": "Average annual turnover for companies without culture programs.",
    "stat3.label": "Employees who say recognition would make them stay longer.",

    // Who we are
    "about.eyebrow": "Who we are",
    "about.title": "We build companies where people want to stay.",
    "about.p1": "FCL Empresarial is a people & culture consultancy that helps organizations strengthen their workplace culture, improve the employee experience, and build environments where people feel valued, engaged, and proud to belong.",
    "about.p2": "We don't plan birthday parties. We design intentional, structured systems for recognition, onboarding, communication, and employee development, so your leaders don't have to. We act as your external culture partner: we design, execute, and measure. You focus on running your business.",

    // Methodology
    "method.eyebrow": "The methodology",
    "method.title": "Our 5-pillar approach to building culture that retains.",
    "p1.title": "Recognize",
    "p1.principle": "People need to feel seen",
    "p1.desc": "Birthday programs, work anniversaries, employee of the month, and peer-to-peer recognition.",
    "p2.title": "Listen",
    "p2.principle": "People need to feel heard",
    "p2.desc": "Climate surveys, satisfaction surveys, and stay interviews.",
    "p3.title": "Connect",
    "p3.principle": "People need to belong",
    "p3.desc": "Team events, integration activities, and internal communication.",
    "p4.title": "Develop",
    "p4.principle": "People need to grow",
    "p4.desc": "Development plans, achievement recognition, and mentorship programs.",
    "p5.title": "Inspire",
    "p5.principle": "People need purpose",
    "p5.desc": "Values, culture, success stories, and leadership communication.",

    // Packages
    "packages.eyebrow": "Packages",
    "packages.title": "A plan for every stage of growth.",
    "pkg.cta": "Book Your Diagnostic",
    "pkg.starter.size": "10 to 30 employees",
    "pkg.starter.f1": "Annual recognition calendar",
    "pkg.starter.f2": "Birthday & anniversary recognition",
    "pkg.starter.f3": "Monthly employee spotlight",
    "pkg.starter.f4": "Basic internal communication",
    "pkg.starter.goal": "Goal: Make employees feel seen.",
    "pkg.growth.badge": "Most Popular",
    "pkg.growth.size": "30 to 75 employees",
    "pkg.growth.f1": "Everything in Starter",
    "pkg.growth.f2": "Quarterly engagement surveys",
    "pkg.growth.f3": "Structured recognition programs",
    "pkg.growth.f4": "Quarterly team events",
    "pkg.growth.f5": "Management reports",
    "pkg.growth.goal": "Goal: Increase engagement & belonging.",
    "pkg.exc.size": "75+ employees",
    "pkg.exc.f1": "Everything in Growth",
    "pkg.exc.f2": "Full cultural diagnostic & annual strategy",
    "pkg.exc.f3": "Onboarding program design",
    "pkg.exc.f4": "Wellness programs",
    "pkg.exc.f5": "Climate metrics & executive reporting",
    "pkg.exc.goal": "Goal: Build a high-performance culture.",

    // How it works
    "how.eyebrow": "How it works",
    "how.title": "Getting started takes 20 minutes.",
    "how.s1.title": "Book your free diagnostic",
    "how.s1.desc": "Schedule a 20-minute call. We'll explore key aspects of your employee experience to identify strengths, opportunities, and areas to improve.",
    "how.s2.title": "Receive your culture report",
    "how.s2.desc": "We deliver a clear assessment of where your culture stands, with practical recommendations you can act on immediately.",
    "how.s3.title": "Choose your plan",
    "how.s3.desc": "Select the package that fits your company's size and stage. We handle everything from design to execution to measurement.",
    "how.s4.title": "We execute. You focus on your business",
    "how.s4.desc": "Our team designs, organizes, and tracks every program. You don't plan, coordinate, or manage anything. Less admin. More commitment. Greater talent retention.",

    // Quote
    "quote.text": "Culture exists in every company. The difference is that some manage it intentionally, and others leave it to chance.",
    "quote.sub": "If you could retain just <em>one</em> key employee for one more year, this program pays for itself.",

    // Final CTA
    "close.title": "Your team is your competitive advantage. Let's make sure they know it.",
    "close.p": "Book your free 20-minute culture diagnostic. No commitment. No pitch. Just a conversation about your team and how to build a workplace they don't want to leave.",
    "close.cta": "Book Your Free Diagnostic",
    "close.callus": "Call us:",
    "close.note": "Booking calendar (Calendly) embeds right here.",

    // Footer
    "footer.tagline": "We value people. We strengthen companies.",
    "footer.division": "People & Culture Division"
  }
};

export function applyLang(lang) {
  const dict = translations[lang] || translations[DEFAULT_LANG];
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
  try { window.dispatchEvent(new CustomEvent("fcl:langchange", { detail: lang })); } catch (e) {}
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
}

export function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
  } catch (e) {}
  return DEFAULT_LANG;
}