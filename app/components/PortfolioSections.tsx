"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen w-full flex relative overflow-hidden border-b border-black/10 ">
      <div className="w-[60px] md:w-[200px] flex items-center justify-center border-r border-black/20 bg-black/5 pt-10 md:pt-20">
        <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.9, x: 0 }}
            transition={{ duration: 0.8 }}
            className="vertical-text text-6xl md:text-[12rem] font-display text-black tracking-tighter"
        >
          PORTFÓLIO
        </motion.h1>
      </div>
      
      <div className="flex-1 flex flex-col justify-center p-6 md:p-32 relative shadow-[inset_0_0_100px_rgba(255,0,0,0.05)]">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="z-10"
        >
          <div className="mb-8 pl-2">
            <span className="font-display text-xl md:text-2xl tracking-[1em] opacity-30 italic">ARQUITETURA E URBANISMO</span>
          </div>
          <h2 className="text-[8rem] md:text-[16rem] leading-none font-display mb-12 text-black">
            Erica Fabian
          </h2>
          <div className="flex items-center gap-10">
            <div className="h-px w-20 bg-black opacity-20 hidden md:block" />
            <p className="text-xl md:text-3xl font-light tracking-[0.5em] opacity-40 font-display">
                PORTFÓLIO &apos;26
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function SummarySection() {
  const items = [
    { num: "01", text: "Sobre mim", id: "about" },
    { num: "02", text: "Formação / Experiências", id: "skills" },
    { num: "03", text: "Ateliê do Artista", id: "project-1" },
    { num: "04", text: "Em breve", id: "footer" },
  ]

  return (
    <section id="summary" className="min-h-screen w-full flex relative overflow-hidden border-b border-black/10">
      <div className="w-[60px] md:w-[200px] flex items-center justify-center border-r border-black/20 bg-black/5">
        <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.9, x: 0 }}
            transition={{ duration: 0.8 }}
            className="vertical-text text-6xl md:text-[14rem] font-display text-black tracking-tighter"
        >
          SUMÁRIO
        </motion.h2>
      </div>
      
      <div className="flex-1 flex flex-col justify-center px-6 md:px-48 py-20">
        <div className="space-y-8 md:space-y-12">
          {items.map((item, i) => (
            <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-start gap-6 md:gap-10 cursor-pointer overflow-hidden"
            >
              <span className="text-3xl md:text-7xl font-display mt-2 opacity-30 group-hover:opacity-100 transition-opacity duration-300">{item.num}</span>
              <p className="text-xl md:text-5xl whitespace-pre-line font-light py-2 border-l-2 border-black/5 pl-6 md:pl-10 group-hover:pl-10 md:group-hover:pl-16 transition-all duration-500 ease-out group-hover:border-black/20 uppercase tracking-widest font-display">
                <a href={`#${item.id}`}>{item.text}</a>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen w-full flex flex-col md:flex-row relative overflow-hidden border-b border-black/10 bg-[#e0e0e0]/20 pt-20">
      <div className="w-full md:w-[35%] flex flex-col justify-center p-8 md:p-32 border-b md:border-b-0 md:border-r border-black/20">
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-2"
        >
            <h2 className="text-6xl md:text-[10rem] leading-tight font-script text-black mb-4">
                Erica Fabian
            </h2>
            <div className="mt-6 md:mt-12 text-lg md:text-2xl font-light space-y-4 opacity-100">
                <p className="font-bold border-l-4 border-black pl-4 uppercase font-display tracking-widest">Estudante de<br/>Arquitetura e Urbanismo</p>
                <div className="pt-4 md:pt-8 text-md md:text-lg space-y-2 opacity-70">
                    <p>Rua T-50, 962 Setor Bueno 📍</p>
                    <p className="underline truncate">ericafabian@hotmail.com ✉️</p>
                    <p>(62) 99251-6899 📞</p>
                </div>
            </div>
        </motion.div>
      </div>
      
      <div className="flex-1 flex flex-col p-8 md:p-32 justify-center">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start">
            <motion.div 
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="w-full lg:w-1/3 max-w-sm aspect-4/5 bg-white relative overflow-hidden shadow-2xl group border-8 border-white"
            >
                 <img src="/erica.png" alt="Erica Fabian" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s]" />
                 <div className="absolute inset-0 bg-black/5" />
            </motion.div>
            <div className="flex-1">
                <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-[7rem] font-display mb-6 md:mb-10 border-b-2 border-black/10 pb-4 md:pb-6 leading-tight"
                >
                    SOBRE MIM
                </motion.h3>
                <div className="text-lg md:text-2xl leading-relaxed space-y-4 md:space-y-8 font-light text-justify opacity-90">
                    <p>
                        Sou, Erica Livia Fabian, estudante de Arquitetura e Urbanismo pela Pontifícia Universidade Católica de Goiás (PUC Goiás), atualmente no 6º semestre.
                    </p>
                    <p>
                        Possuo formação em Odontologia, com atuação profissional por 20 anos na especialidade de Ortodontia, em consultório particular e em diversas clínicas na cidade de Goiânia, adquirindo sólida experiência em gestão, organização, responsabilidade técnica e relacionamento profissional.
                    </p>
                    <p>
                        Busco integrar em um escritório de arquitetura, onde possa aprender, aprimorar e colaborar de forma mútua em diferentes áreas do conhecimento técnico e artístico, agregando não apenas minha formação acadêmica em andamento, mas também minha ampla experiência profissional.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export function SkillsSection() {
    return (
        <section id="skills" className="min-h-screen w-full flex flex-col md:flex-row relative overflow-hidden border-b border-black/10">
      
          
          <div className="flex-1 flex flex-col p-8 md:p-32 bg-white/10 justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-10 md:gap-y-16">
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-4 md:space-y-6">
                    <h3 className="text-4xl md:text-6xl font-display border-b border-black/20 pb-2">FORMAÇÃO</h3>
                    <div className="space-y-4 md:space-y-8 font-light text-lg md:text-xl">
                        <div>
                            <p className="font-bold">Pontifícia Univ. Católica de Goiás</p>
                            <p className="opacity-70 italic text-md md:text-lg">Arquitetura e Urbanismo | 2023 - Presente</p>
                        </div>
                        <div>
                            <p className="font-bold">Univ. de Ribeirão Preto (UNAERP)</p>
                            <p className="opacity-70 italic text-md md:text-lg">Odontologia | 2000 - 2003</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="space-y-4 md:space-y-6">
                    <h3 className="text-4xl md:text-6xl font-display border-b border-black/20 pb-2">EXPERIÊNCIA </h3>
                    <div className="space-y-4 md:space-y-8 font-light text-lg md:text-xl">
                        <div>
                            <p className="font-bold">Consultório Particular</p>
                            <p className="opacity-70 italic text-md md:text-lg">Gestão e Ortodontia | 20 Anos</p>
                        </div>
                        <div>
                            <p className="font-bold">Casa das Lixas (Librás)</p>
                            <p className="opacity-70 italic text-md md:text-lg">Admin / Marketing | 2022 - Presente</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="space-y-4 md:space-y-6">
                    <h3 className="text-4xl md:text-6xl font-display border-b border-black/20 pb-2">SOFTWARE</h3>
                    <div className="space-y-4 md:space-y-6 md:pr-10">
                        <div className="space-y-2">
                            <div className="flex justify-between items-end">
                                <span className="font-bold text-md md:text-lg">REVIT</span>
                                <span className="text-xs border border-black/20 px-2">80%</span>
                            </div>
                            <div className="h-2 w-full bg-black/5"><div className="h-full bg-black w-[80%]"></div></div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-end">
                                <span className="font-bold text-md md:text-lg">AUTOCAD</span>
                                <span className="text-xs border border-black/20 px-2">70%</span>
                            </div>
                            <div className="h-2 w-full bg-black/5"><div className="h-full bg-black w-[70%]"></div></div>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="space-y-4 md:space-y-6">
                    <h3 className="text-4xl md:text-6xl font-display border-b border-black/20 pb-2">IDIOMAS</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 uppercase font-display text-lg md:text-xl tracking-wider">
                        <div className="bg-black text-white p-3 flex justify-between items-center group">
                            <span>Inglês</span>
                            <span className="text-xs opacity-60">C1 / Avançado</span>
                        </div>
                        <div className="border border-black/20 p-3 flex justify-between items-center group">
                            <span>Francês</span>
                            <span className="text-xs text-black/50">A2 / Básico</span>
                        </div>
                        <div className="bg-black/5 p-3 flex justify-between items-center underline">
                            <span>Português</span>
                            <span className="text-xs">Nativo</span>
                        </div>
                    </div>
                </motion.div>
            </div>
          </div>
        </section>
      )
}

const Placeholder = ({ label, variant = "default", className = "" }: { label: string, variant?: "default" | "technical" | "3d", className?: string }) => (
    <div className={`relative group overflow-hidden border border-black/10 flex items-center justify-center transition-all duration-700 bg-[#f8f8f8] h-full w-full ${className}`}>
        {variant === 'technical' && (
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        )}
        <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="w-full h-full border border-black/3 flex items-center justify-center relative">
                 <span className="font-display text-[10px] tracking-[0.4em] uppercase opacity-20 text-center px-4">{label}</span>
                 <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black/10" />
                 <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-black/10" />
                 <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-black/10" />
                 <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black/10" />
            </div>
        </div>
        <div className="absolute bottom-3 left-3 bg-black text-white px-3 py-1 font-display text-[8px] md:text-[10px] tracking-widest uppercase opacity-80 translate-y-2 group-hover:translate-y-0 transition-transform">
            {label}
        </div>
    </div>
)

export function ProjectSection({ title, subtitle, index }: { title: string, subtitle: string, index: number }) {
    return (
        <section id={`project-${index}`} className="min-h-screen w-full flex flex-col relative overflow-hidden border-b border-black/10">
          <div className="p-8 md:p-32 flex flex-col md:flex-row justify-between items-start md:items-end bg-black/5 gap-6">
            <div>
                <motion.h2 initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="text-6xl md:text-[11rem] font-display leading-tight">{title}</motion.h2>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mt-4 md:mt-8">
                    <motion.h3 initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 0.6 }} transition={{ delay: 0.2 }} className="text-2xl md:text-6xl font-display tracking-widest">{subtitle}</motion.h3>
                    {index === 1 && (
                        <Link href="/projeto/1" className="bg-black text-white px-6 md:px-8 py-2 md:py-3 font-display text-lg md:text-2xl tracking-widest hover:bg-black/80 transition-all flex items-center gap-4 group">
                            VER PROJETO COMPLETO 
                            <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </Link>
                    )}
                </div>
            </div>
            <div className="text-left md:text-right">
                <span className="text-lg md:text-2xl font-display opacity-30">PROJETO DE ARQUITETURA / {index}</span>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col lg:flex-row p-6 md:p-20 pb-20 md:pb-32 gap-6 md:gap-16 items-stretch">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="lg:flex-2 bg-white relative overflow-hidden shadow-2xl group border border-black/5 aspect-square md:aspect-video lg:aspect-auto"
            >
                <Placeholder label="Perspectiva Isométrica" variant="3d" className="h-full" />
                <div className="absolute top-6 left-6 bg-black text-white px-5 py-2 font-display text-sm tracking-widest uppercase">PROJETO {index}</div>
            </motion.div>
            <div className="lg:flex-1 flex flex-col gap-6 md:gap-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex-1 bg-white relative shadow-xl overflow-hidden group border border-black/5 min-h-[400px]"
                >
                    <Placeholder label="Planta Baixa" variant="technical" className="h-full" />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex-1 bg-white relative shadow-xl overflow-hidden group border border-black/5 min-h-[400px]"
                >
                    <Placeholder label="Vistas / Cortes" variant="technical" className="h-full" />
                </motion.div>
            </div>
          </div>
        </section>
    )
}

export function FooterSection() {
    return (
        <footer id="footer" className="w-full bg-black text-white min-h-[70vh] flex flex-col justify-between p-10 md:p-32">
            <div className="w-full border-t border-white/20 pt-20 mb-20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-6">
                        <h2 className="text-7xl md:text-[12rem] font-display leading-[0.7] tracking-tighter uppercase font-black italic">CONTATO</h2>
                        <div className="font-display text-xl md:text-3xl opacity-40 uppercase space-y-2">
                             <p>GOIÂNIA, GOIÁS</p>
                             <p>BRASIL - @2026</p>
                        </div>
                    </motion.div>
                    
                    <div className="flex flex-col gap-8 md:gap-12 font-display text-2xl md:text-5xl uppercase tracking-widest text-right">
                        <motion.a whileHover={{ x: -20 }} href="mailto:ericafabian@hotmail.com" className="opacity-60 hover:opacity-100 transition-all border-b border-white/10 pb-2">E-mail</motion.a>
                        <motion.a whileHover={{ x: -20 }} href="https://wa.me/5562992516899" target="_blank" className="opacity-60 hover:opacity-100 transition-all border-b border-white/10 pb-2">WhatsApp</motion.a>
                        <motion.a whileHover={{ x: -20 }} href="https://instagram.com" target="_blank" className="opacity-60 hover:opacity-100 transition-all border-b border-white/10 pb-2">Instagram</motion.a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5 pt-10 opacity-30 font-display text-xs md:text-sm tracking-[0.5em] uppercase">
                <p><span className="font-script text-2xl tracking-normal">Erica Fabian</span> / ARQUITETURA E URBANISMO</p>
                <div className="h-px w-20 bg-white/40 hidden md:block" />
                <p>TODOS OS DIREITOS RESERVADOS</p>
            </div>
        </footer>
    )
}
