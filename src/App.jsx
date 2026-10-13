import { useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown,
  Code2, Layers3, Menu, MessageCircle, MonitorSmartphone, Workflow, X,
  Sparkles, Boxes, Gauge, ShieldCheck
} from 'lucide-react';

const WHATSAPP = 'https://wa.me/573134373474';
const EMAIL = 'mailto:contacto@desweb.cloud';

const services = [
  {
    number: '01',
    icon: Workflow,
    title: 'Automatización inteligente',
    text: 'Conecta tus herramientas, elimina tareas repetitivas y recupera tiempo para lo que sí mueve tu negocio.',
    tags: ['Make', 'Zapier', 'Integraciones']
  },
  {
    number: '02',
    icon: MonitorSmartphone,
    title: 'Web que convierte',
    text: 'Experiencias digitales rápidas, claras y preparadas para convertir visitas en conversaciones comerciales.',
    tags: ['Diseño web', 'WordPress', 'SEO']
  },
  {
    number: '03',
    icon: Code2,
    title: 'Software a tu medida',
    text: 'Aplicaciones y plataformas pensadas alrededor de tus procesos, tus equipos y tus objetivos.',
    tags: ['React', 'PHP', 'Python']
  },
  {
    number: '04',
    icon: Layers3,
    title: 'Aplicaciones de negocio',
    text: 'Digitaliza operaciones con soluciones prácticas, desde herramientas internas hasta productos escalables.',
    tags: ['Low-code', 'Glide', 'Dashboards']
  }
];

const products = [
  {
    label: 'PRODUCTO EN DESARROLLO',
    name: 'CMMS',
    title: 'Mantenimiento bajo control.',
    description: 'Una experiencia digital para organizar activos, tareas de mantenimiento y operación en un solo lugar.',
    type: 'Gestión de mantenimiento',
    className: 'product-cmms',
    mark: 'cm',
    status: 'En construcción'
  },
  {
    label: 'SOLUCIONES A MEDIDA',
    name: 'Desweb Labs',
    title: 'De un reto real a una herramienta útil.',
    description: 'Creamos soluciones digitales que nacen de necesidades concretas y evolucionan junto a tu negocio.',
    type: 'Software personalizado',
    className: 'product-labs',
    mark: 'dw',
    status: 'Hablemos de tu idea'
  }
];

const faqs = [
  ['¿Cómo es el proceso para iniciar un proyecto?', 'Empezamos por entender el objetivo, el proceso actual y el resultado que necesitas. Después proponemos alcance, etapas y una ruta de trabajo clara.'],
  ['¿Trabajan con empresas pequeñas y medianas?', 'Sí. Diseñamos la solución de acuerdo con el tamaño, la operación y la etapa de crecimiento de cada negocio.'],
  ['¿Pueden conectar herramientas que ya utilizamos?', 'Podemos evaluar tus herramientas actuales y definir integraciones o automatizaciones según sus posibilidades técnicas y tus necesidades.'],
  ['¿Cómo solicito una cotización?', 'Cuéntanos qué quieres mejorar y qué resultado esperas. Podemos conversar por WhatsApp o por correo para definir los siguientes pasos.']
];

function Brand({ light = false }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#inicio" aria-label="Desweb, inicio">
    <span className="brand-symbol"><span /><span /><span /></span>
    <span>desweb<span className="brand-dot">.</span></span>
  </a>;
}

function SectionEyebrow({ children, light = false }) {
  return <div className={`eyebrow ${light ? 'eyebrow-light' : ''}`}><span className="eyebrow-dot" />{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <button className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`main-nav ${menuOpen ? 'main-nav-open' : ''}`} aria-label="Navegación principal">
            <a href="#soluciones" onClick={closeMenu}>Soluciones</a>
            <a href="#productos" onClick={closeMenu}>Productos</a>
            <a href="#nosotros" onClick={closeMenu}>Nosotros</a>
            <a href="#preguntas" onClick={closeMenu}>FAQ</a>
            <a className="nav-cta" href="#contacto" onClick={closeMenu}>Hablemos <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid-lines" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <SectionEyebrow light>TECNOLOGÍA CON PROPÓSITO</SectionEyebrow>
              <h1>Tu próximo nivel<br />empieza con <span>una mejor</span><br /><span className="hero-highlight">solución.</span></h1>
              <p className="hero-description">Diseñamos software, automatizaciones y experiencias digitales para que tu negocio avance con menos fricción y más posibilidades.</p>
              <div className="hero-actions">
                <a className="button button-lime" href="#contacto">Hablemos de tu proyecto <ArrowUpRight size={18} /></a>
                <a className="text-link text-link-light" href="#productos">Explorar productos <ArrowDownRight size={17} /></a>
              </div>
              <div className="hero-proof">
                <div className="proof-orbit"><span /><span /><span /></div>
                <p><strong>Ideas claras. Tecnología útil.</strong><br /><span>Soluciones pensadas para tu operación real.</span></p>
              </div>
            </div>

            <div className="hero-visual" aria-label="Ilustración abstracta de soluciones digitales">
              <div className="visual-glow" />
              <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
              <div className="visual-node node-top"><Sparkles size={17} /><span>Ideas</span></div>
              <div className="visual-node node-right"><Workflow size={17} /><span>Procesos</span></div>
              <div className="visual-node node-bottom"><Gauge size={17} /><span>Resultados</span></div>
              <div className="core-card">
                <div className="core-card-top"><span className="core-mini-logo">d.</span><span className="live-pill"><i /> ENFOCADOS EN TI</span></div>
                <div className="core-glyph"><span /><span /><span /><span /></div>
                <div className="core-card-bottom"><strong>Desweb</strong><span>Digital, con intención.</span></div>
              </div>
              <div className="floating-chip chip-one"><span className="chip-icon chip-green"><Check size={14} /></span><span><b>Menos tareas</b><small>Más enfoque</small></span></div>
              <div className="floating-chip chip-two"><span className="chip-icon chip-purple"><Boxes size={15} /></span><span><b>Todo conectado</b><small>Mejor flujo de trabajo</small></span></div>
              <div className="visual-caption">TECNOLOGÍA · ESTRATEGIA · EVOLUCIÓN</div>
            </div>
          </div>
          <div className="container hero-bottom"><span>CONSTRUIMOS LO QUE SIGUE</span><div className="scroll-line" /><a href="#soluciones">Descubre cómo <ArrowDownRight size={15} /></a></div>
        </section>

        <section className="intro-section section-pad" id="nosotros">
          <div className="container intro-layout">
            <SectionEyebrow>QUIÉNES SOMOS</SectionEyebrow>
            <div className="intro-content">
              <h2>La tecnología debe adaptarse a tu negocio. <span>No al revés.</span></h2>
              <div className="intro-bottom">
                <p>En Desweb convertimos retos cotidianos en soluciones digitales claras. Combinamos estrategia, diseño y desarrollo para simplificar procesos y ayudarte a crecer con bases más sólidas.</p>
                <a className="round-link" href="#contacto" aria-label="Conoce cómo podemos ayudarte"><ArrowUpRight size={21} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section section-pad" id="soluciones">
          <div className="container">
            <div className="section-heading">
              <div><SectionEyebrow>QUÉ HACEMOS</SectionEyebrow><h2>Soluciones para<br /><span>seguir avanzando.</span></h2></div>
              <p>Elegimos la tecnología según el problema que necesitas resolver, no al contrario.</p>
            </div>
            <div className="services-grid">
              {services.map(({ number, icon: Icon, title, text, tags }) => (
                <article className="service-card" key={number}>
                  <div className="service-top"><span className="service-number">{number}</span><span className="service-icon"><Icon size={21} strokeWidth={1.7} /></span></div>
                  <h3>{title}</h3><p>{text}</p>
                  <div className="service-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <a href="#contacto" className="service-arrow" aria-label={`Consultar por ${title}`}><ArrowUpRight size={19} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="products-section section-pad" id="productos">
          <div className="container">
            <div className="section-heading products-heading">
              <div><SectionEyebrow light>PRODUCTOS Y EXPERIMENTOS</SectionEyebrow><h2>Software que nace<br />de <span>necesidades reales.</span></h2></div>
              <p>Además de crear para nuestros clientes, exploramos productos propios que convierten procesos complejos en experiencias más simples.</p>
            </div>
            <div className="products-grid">
              {products.map((product, i) => (
                <article className={`product-card ${product.className}`} key={product.name}>
                  <div className="product-art">
                    <div className="product-art-grid" />
                    <div className="product-art-label"><span>{product.label}</span><ArrowUpRight size={16} /></div>
                    {i === 0 ? <div className="cmms-window">
                      <div className="window-bar"><span /><span /><span /><b>CMMS / Overview</b></div>
                      <div className="window-body"><div className="window-sidebar"><i /><i /><i /><i /></div><div className="window-content"><div className="window-title">Panel operativo <span>•••</span></div><div className="metric-row"><div><small>Activos</small><b>--</b></div><div><small>Órdenes</small><b>--</b></div></div><div className="chart-lines"><span /><span /><span /><span /><span /><span /><span /><span /></div><div className="task-line"><i /><span /><b /></div><div className="task-line"><i /><span /><b /></div></div></div>
                    </div> : <div className="labs-orb"><div className="labs-orb-inner"><span>dw</span></div><i className="orb-dot orb-dot-a" /><i className="orb-dot orb-dot-b" /><i className="orb-dot orb-dot-c" /></div>}
                    <span className="product-watermark">{product.mark}</span>
                  </div>
                  <div className="product-info"><div className="product-type">{product.type}<span>{product.status}</span></div><h3>{product.name}</h3><h4>{product.title}</h4><p>{product.description}</p><a href="#contacto" className="product-link">Conocer más <ArrowRight size={16} /></a></div>
                </article>
              ))}
            </div>
            <p className="products-note"><ShieldCheck size={16} /> Los productos se presentan según su estado actual. Consulta con nosotros para conocer disponibilidad y próximos pasos.</p>
          </div>
        </section>

        <section className="approach-section section-pad">
          <div className="container approach-layout">
            <div className="approach-copy"><SectionEyebrow>UNA FORMA DE TRABAJAR</SectionEyebrow><h2>Menos complejidad.<br /><span>Más claridad.</span></h2><p>No necesitas sumar herramientas por sumar. Necesitas una solución que encaje con tu equipo y te ayude a trabajar mejor.</p><a className="button button-dark" href="#contacto">Cuéntanos tu reto <ArrowUpRight size={17} /></a></div>
            <div className="approach-steps">
              <div className="approach-step"><span>01</span><div><h3>Entendemos</h3><p>Escuchamos tu objetivo, mapeamos el proceso y encontramos dónde está la oportunidad.</p></div><MessageCircle size={20} /></div>
              <div className="approach-step"><span>02</span><div><h3>Diseñamos</h3><p>Definimos una solución realista, priorizando lo que aporta valor desde el inicio.</p></div><Layers3 size={20} /></div>
              <div className="approach-step"><span>03</span><div><h3>Construimos y mejoramos</h3><p>Desarrollamos, validamos contigo y dejamos espacio para evolucionar.</p></div><Gauge size={20} /></div>
            </div>
          </div>
        </section>

        <section className="faq-section section-pad" id="preguntas">
          <div className="container faq-layout">
            <div><SectionEyebrow>PREGUNTAS FRECUENTES</SectionEyebrow><h2>Antes de empezar,<br /><span>hablemos claro.</span></h2><p>¿Tienes otra pregunta? Estamos a un mensaje de distancia.</p><a href={WHATSAPP} target="_blank" rel="noreferrer" className="text-link">Pregúntanos por WhatsApp <ArrowUpRight size={16} /></a></div>
            <div className="faq-list">{faqs.map(([question, answer], i) => <div className={`faq-item ${openFaq === i ? 'faq-open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{question}</span><ChevronDown size={19} /></button>{openFaq === i && <p>{answer}</p>}</div>)}</div>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="container contact-panel">
            <div className="contact-orb contact-orb-one" /><div className="contact-orb contact-orb-two" />
            <SectionEyebrow light>EL SIGUIENTE PASO ES UNA CONVERSACIÓN</SectionEyebrow>
            <h2>¿Qué te gustaría<br /><span>hacer posible?</span></h2>
            <p>Cuéntanos qué quieres mejorar. Juntos podemos encontrar una forma más inteligente de hacerlo.</p>
            <div className="contact-actions"><a className="button button-lime" href={WHATSAPP} target="_blank" rel="noreferrer">Hablemos por WhatsApp <ArrowUpRight size={18} /></a><a className="button button-outline" href={EMAIL}>Escríbenos un correo <ArrowUpRight size={18} /></a></div>
            <div className="contact-foot"><span>DESWEB · SOLUCIONES DIGITALES</span><span>Colombia · Trabajamos contigo donde estés</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top"><Brand /><p>Ideas claras. Tecnología útil.<br />Soluciones digitales para avanzar.</p><a href="#inicio" className="back-top">Volver arriba <ArrowUpRight size={15} /></a></div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Desweb. Todos los derechos reservados.</span><div><a href="mailto:contacto@desweb.cloud">contacto@desweb.cloud</a><a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a></div></div>
      </footer>
    </>
  );
}

export default App;