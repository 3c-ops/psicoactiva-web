import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { whatsappUrl } from '../lib/site-config';

const Img=({src,alt,className='',priority=false}:{src:string,alt:string,className?:string,priority?:boolean})=><Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className={className} priority={priority}/>;

export default function Home(){return <main>
 <Header/>
 <section id="inicio" className="hero">
  <Img src="/images/salaespera.png" alt="Sala de espera de PsicoActiva" priority/>
  <div className="hero-shade"/><div className="hero-copy"><p className="hero-brand">PsicoActiva <span>Centro Boutique de Salud Mental</span></p><h1>Atención en salud mental,<br/>de una forma única en la región.</h1><p className="hero-sub">Medicina en Salud Mental <b>·</b> Acompañamiento Clínico Especializado</p><div className="actions"><a className="button light" href={whatsappUrl}>Quiero agendar</a><a className="text-link light-link" href="#nosotros">Conocer PsicoActiva <span>↓</span></a></div></div>
 </section>

 <section id="nosotros" className="intro wrap"><Reveal><p className="eyebrow">NUESTRA MIRADA</p><h2>Elegir PsicoActiva es elegir<br/>una forma de cuidar.</h2><p className="lead">Un lugar donde el trabajo interdisciplinario, la atención personalizada y la excelencia clínica orientan la manera en que comprendemos, intervenimos y acompañamos cada proceso terapéutico.</p></Reveal></section>

 <section className="clinical split"><div className="photo tall"><Img src="/images/box1.png" alt="Box clínico de PsicoActiva"/></div><Reveal className="clinical-copy"><p className="eyebrow">EXCELENCIA CLÍNICA</p><h2>Nuestra forma de<br/>entender la clínica.</h2><p className="statement">No creemos que las personas deban adaptarse al tratamiento.</p><p>Creemos que cada intervención debe construirse a partir de una comprensión profunda de la historia, el contexto y las necesidades de cada persona.</p><p>La calidad de una intervención clínica depende de la formación, la experiencia y el criterio profesional de quienes la realizan.</p><p>Por eso reunimos un equipo de profesionales especializados que comparte una misma forma de ejercer la clínica: con excelencia, colaboración y un profundo respeto por cada proceso terapéutico.</p></Reveal></section>

 <section id="especialidades" className="areas wrap"><Reveal><p className="eyebrow">ÁREAS DE ATENCIÓN</p><h2>Atención especializada para<br/>cada etapa de la vida.</h2></Reveal><div className="area-grid"><article><div className="photo area-photo"><Img src="/images/box2.png" alt="Espacio de atención clínica"/></div><p className="number">01</p><h3>Niños y adolescentes</h3><ul><li>Psicología Clínica</li><li>Psicopedagogía</li><li>Acompañamiento interdisciplinario</li></ul></article><article><div className="photo area-photo"><Img src="/images/box3.png" alt="Sala de atención de PsicoActiva"/></div><p className="number">02</p><h3>Adultos</h3><ul><li>Psicología Clínica</li><li>Medicina en Salud Mental</li><li>Evaluación y acompañamiento especializado</li></ul></article></div></section>

 <section className="space"><div className="wrap space-heading"><Reveal><p className="eyebrow">EL ESPACIO</p><h2>Un entorno pensado<br/>para cuidar.</h2><p className="lead small">El espacio también forma parte de la experiencia terapéutica. PsicoActiva cuenta con box clínicos, espacios interiores y áreas al aire libre que permiten desarrollar procesos de atención en un entorno tranquilo, privado y conectado con la naturaleza.</p></Reveal></div><div className="gallery"><div className="photo gallery-main"><Img src="/images/salaespera.png" alt="Jardín y terraza de PsicoActiva"/></div><div className="photo gallery-side"><Img src="/images/box1.png" alt="Interior cálido de un box clínico"/></div><div className="photo gallery-low"><Img src="/images/box2.png" alt="Box clínico de PsicoActiva"/></div></div></section>



 <section id="colegios" className="schools"><Reveal><p className="eyebrow">PSICOACTIVA · COLEGIOS</p><h2>Una alianza clínica para acompañar<br/>a las comunidades educativas.</h2><p>PsicoActiva desarrolla una propuesta de colaboración con establecimientos educacionales orientada a fortalecer el acompañamiento de estudiantes y familias mediante orientación clínica, coordinación interdisciplinaria y una red de apoyo especializada.</p><a className="button outline" href="#colegios">Conocer propuesta para colegios</a></Reveal></section>

 <section id="contacto" className="closing"><span id="whatsapp-pendiente" className="anchor-target" aria-hidden="true"/><div className="photo closing-photo"><Img src="/images/box3.png" alt="Espacio interior de PsicoActiva"/></div><div className="closing-copy"><p className="eyebrow">PASO HONDO · QUILPUÉ</p><h2>Elegir PsicoActiva es elegir una forma de cuidar.</h2><p>Centro Boutique de Salud Mental en Paso Hondo, Quilpué.<br/>Entorno tranquilo con conexión hacia Viña del Mar y Concón.</p><a className="button" href={whatsappUrl}>Agendar una hora</a><div className="contact"><p><span>Dirección</span>[Dirección por confirmar]</p><p><span>Teléfono</span>[Teléfono por confirmar]</p><p><span>Correo</span>[Correo por confirmar]</p><p><span>Instagram</span>[@usuario por confirmar]</p></div></div></section>
 <Footer/>
 </main>}
