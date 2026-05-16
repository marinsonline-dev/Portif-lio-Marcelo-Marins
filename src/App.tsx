import { useState, useEffect, FC } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Terminal, 
  Menu, 
  X, 
  ArrowUpRight, 
  Code2, 
  Layers, 
  Cpu, 
  Globe 
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "SmArt Ink - Studio Data",
    category: "Data Architecture / SQL",
    description: "Desenvolvimento e estruturação de projetos de banco de dados, aplicando conceitos de modelagem relacional e boas práticas de arquitetura.",
    image: "https://images.unsplash.com/photo-1544380903-5861180ee4df?auto=format&fit=crop&q=80&w=800",
    tags: ["SQL", "Relational Modeling", "Architecture"],
    github: null
  },
  {
    id: 2,
    title: "BCS - Business Checkup System",
    category: "Data Analysis / Python",
    description: "Sistema autoral para análise de indicadores empresariais e geração de diagnósticos estruturados para saúde financeira.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Indicators", "Business Intelligence"],
    github: null
  },
  {
    id: 3,
    title: "Data Pipelines & Automation",
    category: "Data Engineering",
    description: "Pipeline de dados financeiros end-to-end com AWS S3, PostgreSQL e Metabase Dashboard. Cotações diárias de AAPL, GOOGL, MSFT, AMZN e META.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "AWS", "PostgreSQL", "ETL", "Docker"],
    github: "https://github.com/marinsonline-dev/finance-data-pipeline"
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-graphite-950/90 backdrop-blur-xl py-4 border-b border-graphite-800' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter flex items-center gap-3"
        >
          <div className="w-8 h-8 bg-white rounded-none flex items-center justify-center text-graphite-950 text-sm font-black italic">M</div>
          MARCELO<span className="text-graphite-600 italic"> MARINS.</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-graphite-500">
          {['Projetos', 'Guia', 'Sobre', 'Contato'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ color: '#fff' }}
              className="hover:text-white transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
            </motion.a>
          ))}
          <div className="h-4 w-px bg-graphite-800" />
          <motion.button
            whileHover={{ backgroundColor: '#fff', color: '#000' }}
            className="border border-white text-white px-6 py-2 rounded-none text-[9px] font-black uppercase tracking-widest transition-colors"
          >
            VAMOS CONVERSAR
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8 text-3xl font-display uppercase font-bold"
          >
            {['Projetos', 'Sobre', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-32 pb-20 bg-graphite-950">
      <div className="max-w-7xl w-full z-10 text-left">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-0 py-1.5 text-[10px] uppercase tracking-[0.5em] mb-12 font-black text-graphite-500"
        >
          <span className="w-2 h-2 bg-[#00c9c3]" />
          Disponível para Projetos
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10vw] md:text-[7vw] lg:text-[66.52px] max-w-[703px] leading-[0.8] font-display font-black tracking-[-0.05em] uppercase mb-20 italic"
        >
          D<span className="text-[#00c9c3]">A</span>TA <br />
          <span className="text-stroke hover:text-[#00c9c3] transition-all duration-1000 cursor-default">ENGINEER</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border border-graphite-800 bg-graphite-900">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-3 aspect-square border-r border-graphite-800 overflow-hidden"
          >
            <img 
              src="/input_file_0.png" 
              alt="Marcelo Marins" 
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
              style={{ filter: "none" }}
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="md:col-span-6 p-12 flex flex-col justify-center border-r border-graphite-800 bg-graphite-900"
          >
            <p className="text-2xl md:text-3xl text-white font-display font-bold leading-[1.1] tracking-tighter mb-6">
              Sou Marcelo Marins. Transformo dados complexos em soluções de engenharia escaláveis.
            </p>
            <p className="text-graphite-500 text-xs font-bold uppercase tracking-[0.3em] leading-relaxed">
              Based in Brazil. Specialized in SQL and Python Architecture.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="md:col-span-3 p-12 flex flex-col justify-end gap-2 bg-[#00c9c3] text-black group hover:bg-[#00e0da] transition-colors cursor-pointer"
          >
            <div className="text-6xl font-black italic tracking-tighter">SQL</div>
            <div className="text-[10px] uppercase font-black tracking-[0.4em]">Expert</div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 flex flex-wrap gap-0 border border-[#00c9c3]"
        >
          <button id="cta-projects" className="bg-[#00c9c3] text-black px-12 py-6 font-black text-xs tracking-widest uppercase flex items-center gap-4 group transition-all border-r border-black hover:bg-[#00e0da]">
            VIEW INDEX
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          <button id="cta-contact" className="bg-transparent text-white px-12 py-6 font-black text-xs tracking-widest uppercase hover:bg-[#00c9c3] hover:text-black transition-all">
            GET IN TOUCH
          </button>
        </motion.div>
      </div>
    </section>
  );
};

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  github: string | null;
}

const ProjectCard: FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      id={`project-${project.id}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.2 }}
      className="group flex flex-col h-full border-r border-b border-graphite-800 bg-graphite-900 hover:bg-graphite-950 transition-colors"
    >
      <div className="relative aspect-[4/3] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-all duration-700"
        />
        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight size={24} className="text-white" />
        </div>
      </div>
      
      <div className="p-10 flex flex-col flex-1 border-t border-graphite-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-1.5 bg-white" />
          <span className="text-[9px] uppercase font-black tracking-[0.3em] text-graphite-500">{project.category}</span>
        </div>
        <h3 className="text-3xl font-display font-black tracking-tighter uppercase mb-6 leading-none italic">{project.title}</h3>
        <p className="text-graphite-400 text-[11px] font-bold uppercase tracking-wider leading-relaxed mb-auto opacity-70 group-hover:opacity-100 transition-opacity">{project.description}</p>
        
        <div className="flex flex-wrap gap-3 mt-10">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-[8px] font-black uppercase tracking-[0.2em] text-white border border-graphite-700 px-2 py-1">
              {tag}
            </span>
          ))}
        </div>

        {/* Botão GitHub — aparece só quando há link */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center gap-3 border border-[#00c9c3] text-[#00c9c3] px-6 py-3 text-[9px] font-black uppercase tracking-[0.3em] hover:bg-[#00c9c3] hover:text-black transition-all duration-300 w-fit"
          >
            <Github size={14} />
            Ver no GitHub
            <ArrowUpRight size={12} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const GithubInfo = () => {
  return (
    <section id="guia" className="py-32 px-6 border-b border-graphite-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.8em] text-graphite-500 font-black mb-6 block">Resources</span>
          <h2 className="text-6xl font-display font-black tracking-tighter uppercase leading-[0.8] italic">Deploy <br/>Guide.</h2>
        </div>

        <div className="grid grid-cols-12 gap-0 border border-graphite-800">
          {/* Main Info Card */}
          <div className="col-span-12 lg:col-span-7 p-12 flex flex-col justify-between relative overflow-hidden bg-white text-black min-h-[450px]">
            <div className="relative z-10">
              <h2 className="text-5xl lg:text-7xl font-display font-black mb-8 leading-[0.8] tracking-tighter uppercase italic">Host on <br/>GitHub Pages</h2>
              <p className="text-black/70 max-w-md mb-12 text-xs font-bold uppercase tracking-widest leading-loose">Hospedagem estática profissional, segura e performática. Domínio personalizado incluso.</p>
              
              <div className="flex flex-wrap gap-0 border border-black w-fit">
                <button className="bg-black text-white px-10 py-5 font-black text-[10px] hover:bg-neutral-800 transition-colors uppercase tracking-[0.3em]">
                  DOCUMENTATION
                </button>
                <div className="px-8 py-5 flex items-center gap-4 border-l border-black">
                  <div className="w-2 h-2 bg-green-500" />
                  <span className="text-[10px] uppercase font-black tracking-widest">Live Status</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 flex flex-col">
            {/* Domain Card */}
            <div className="p-12 border-l border-b border-graphite-800 bg-graphite-900 group">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-white" />
                <span className="text-[10px] uppercase font-black tracking-[0.5em] text-graphite-500">Domain</span>
              </div>
              <h3 className="text-3xl font-display font-black italic tracking-tighter text-white uppercase">user.github.io</h3>
              <p className="text-[10px] font-bold text-graphite-500 mt-6 uppercase tracking-widest">Subdomínio profissional atrelado ao seu perfil.</p>
            </div>

            {/* Steps Card */}
            <div className="p-12 border-l border-graphite-800 bg-graphite-900 flex-1">
              <div className="space-y-10">
                {[
                  { s: "01", t: "Initialize", d: "Criar repositório público" },
                  { s: "02", t: "Structure", d: "Subir arquivos estáticos" },
                  { s: "03", t: "Activate", d: "Ativar GitHub Pages" }
                ].map(step => (
                  <div key={step.s} className="flex gap-8 group">
                    <div className="text-4xl font-display font-black italic text-graphite-700 group-hover:text-white transition-colors leading-none">
                      {step.s}
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-white mb-2">{step.t}</p>
                      <p className="text-[9px] text-graphite-500 uppercase tracking-[0.2em]">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const stacks = [
    { name: "Linguagens", icon: <Terminal />, items: ["Python", "SQL", "JavaScript", "TypeScript"] },
    { name: "Dados", icon: <Layers />, items: ["Modelagem Relacional", "Arquitetura", "ETL", "BI"] },
    { name: "Ambiente", icon: <Cpu />, items: ["Git", "Docker", "Linux", "Analytics"] },
    { name: "Ensino", icon: <Globe />, items: ["ADS", "Certificação SQL", "Continuous Learning"] },
  ];

  return (
    <section id="sobre" className="py-32 px-6 bg-graphite-950 border-y border-graphite-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20 items-top">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="text-[10px] uppercase tracking-[0.8em] text-graphite-500 font-black mb-8 block">Sobre Mim</span>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase mb-12 leading-[0.8] italic">
              Swiss <br /> Precision.
            </h2>
            <div className="space-y-10 text-graphite-400 text-[11px] font-bold uppercase tracking-widest leading-loose max-w-md">
              <p>
                Minha jornada começou com a curiosidade de entender como os dados percorrem sistemas e se transformou em um compromisso sólido com SQL, Python e arquitetura de soluções orientadas a dados. No Studio SmArt Ink, atuei no desenvolvimento e estruturação de projetos de banco de dados, aplicando conceitos de modelagem relacional e boas práticas de arquitetura.
              </p>
              <p>
                Paralelamente, desenvolvo o BCS (Business Checkup System), um projeto autoral voltado a empreendedores para análise de indicadores e diagnósticos estruturados. Acredito que a combinação entre domínio técnico e mentalidade investigativa é fundamental para solucionar desafios complexos.
              </p>
              <p>
                Atualmente curso ADS e busco oportunidades para expandir minha expertise em ambientes de alta performance.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-0 border-t border-l border-graphite-800">
            {stacks.map((stack, i) => (
              <motion.div
                key={stack.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 border-r border-b border-graphite-800 bg-graphite-900 hover:bg-white hover:text-black transition-all duration-500 group"
              >
                <div className="mb-10 text-white group-hover:text-black transition-colors">
                  {stack.icon}
                </div>
                <h4 className="text-2xl font-black mb-8 font-display tracking-tighter uppercase italic">{stack.name}</h4>
                <ul className="flex flex-wrap gap-3 text-[9px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100">
                  {stack.items.map(item => (
                    <li key={item} className="whitespace-nowrap px-3 py-1 border border-graphite-700 group-hover:border-black">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="py-20 px-6 bg-graphite-950">
      <div className="max-w-7xl mx-auto border-4 border-white p-12 md:p-24 text-center group hover:bg-white transition-all duration-700">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-[12vw] font-display font-black tracking-[-0.05em] uppercase leading-[0.75] mb-12 text-white group-hover:text-black italic transition-colors">
            LET'S <br /> BUILD.
          </h2>
          <div className="bg-white group-hover:bg-graphite-950 h-1 w-20 mx-auto mb-12 transition-colors" />
          <a 
            href="mailto:marinsonline@gmail.com" 
            className="block text-2xl md:text-5xl font-display font-black uppercase tracking-tighter text-white group-hover:text-graphite-950 transition-all hover:opacity-50"
          >
            marinsonline@gmail.com
          </a>
        </motion.div>

        <div className="max-w-7xl mx-auto mt-20 flex justify-center gap-16 text-graphite-500 uppercase tracking-[0.5em] text-[10px] font-black group-hover:text-black transition-colors">
          <a href="https://github.com/marinsonline-dev" target="_blank" rel="noopener noreferrer" className="hover:text-black md:hover:text-white border-b border-transparent hover:border-black md:hover:border-white transition-all pb-1">GitHub</a>
          <a href="https://www.linkedin.com/in/marcelo-marins-94925a369" target="_blank" rel="noopener noreferrer" className="hover:text-black md:hover:text-white border-b border-transparent hover:border-black md:hover:border-white transition-all pb-1">LinkedIn</a>
          <a href="#" className="hover:text-black md:hover:text-white border-b border-transparent hover:border-black md:hover:border-white transition-all pb-1">Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="font-sans antialiased text-neutral-100 bg-graphite-950">
      <Navbar />
      <main>
        <Hero />
        
        <section id="projetos" className="py-32 px-6 border-b border-graphite-800">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 flex justify-between items-end border-l-4 border-white pl-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.5em] text-graphite-500 font-mono mb-6 block">Portfolio.2026</span>
                <h2 className="text-6xl md:text-[10vw] font-display font-bold tracking-tighter uppercase leading-[0.75]">Selected <br/>Works</h2>
              </div>
              <div className="hidden md:block text-right">
                <p className="text-graphite-500 text-[10px] max-w-[200px] font-black uppercase tracking-[0.3em] leading-relaxed">Where data engineering meets swiss precision.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-graphite-800">
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>

        <GithubInfo />
        <TechStack />
        <Contact />
      </main>

      <footer className="py-20 border-t border-graphite-800 px-6 bg-graphite-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 text-graphite-500 text-[9px] font-black uppercase tracking-[0.4em]">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 bg-white rounded-none" />
            © MMXXVI MARCELO MARINS. SWISS DATA GRID.
          </div>
          <div className="flex gap-12">
            {['Privacy', 'GitHub', 'LinkedIn', 'Instagram'].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
