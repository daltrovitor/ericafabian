"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Header from "../../components/header"

const PlaceholderImage = ({ label, className = "", variant = "default" }: { label: string, className?: string, variant?: "default" | "technical" | "3d" | "model" }) => (
    <div className={`relative group overflow-hidden border border-black/10 transition-all duration-700 hover:shadow-2xl ${className} ${variant === 'technical' ? 'bg-white' : 'bg-[#f8f8f8]'}`}>
        {/* Architectural Grid Pattern (technical) */}
        {variant === 'technical' && (
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        )}
        
        {/* Sketchy UI lines (3d/model) */}
        {(variant === '3d' || variant === 'model') && (
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-10 left-0 w-full h-px bg-black/10 scale-x-[1.1]" />
                <div className="absolute top-0 left-10 h-full w-px bg-black/10 scale-y-[1.1]" />
            </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="w-full h-full border border-black/3 flex items-center justify-center relative">
                 <span className="font-display text-[10px] tracking-[0.4em] uppercase opacity-20 group-hover:opacity-40 transition-opacity text-center px-4">{label}</span>
                 {/* Crosshairs */}
                 <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black/10" />
                 <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-black/10" />
                 <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-black/10" />
                 <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black/10" />
            </div>
        </div>

        {/* Screenshot-style Label Badge */}
        <div className="absolute bottom-6 left-6 z-200">
            <div className="bg-[#444] text-white/90 px-3 py-1 text-[10px] font-display tracking-widest uppercase shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {label}
            </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
)

export default function ProjectDetail() {
  return (
    <div className="bg-white min-h-screen text-black font-body overflow-x-hidden selection:bg-black selection:text-white">
        <Header />
        
        {/* Navigation back */}
        <div className="fixed top-11 left-10 z-200">
            <Link href="/#project-1" className="font-display text-2xl tracking-[0.2em] hover:opacity-50 transition-opacity mix-blend-difference underline cursor-pointer">VOLTAR</Link>
        </div>

        {/* Hero Area */}
        <section className="min-h-[90vh] w-full flex flex-col justify-end p-10 md:p-32 relative border-b border-black/5 bg-[#fafafa]">
            <div className="absolute top-0 right-0 w-1/3 h-full border-l border-black/5 z-0"></div>
            <div className="absolute top-0 right-0 p-32 hidden md:block opacity-5">
                <span className="text-[20rem] font-display leading-none rotate-90 origin-top-right translate-x-1/2">01</span>
            </div>
            
            <div className="relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="font-display text-2xl opacity-30 tracking-[0.5em] mb-4 block">ATELIÊ DO ARTISTA</span>
                    <h1 className="text-[7rem] md:text-[14rem] font-display leading-[0.8] tracking-tighter uppercase break-words font-black">
                        PROJETO <span className="text-orange-900/10">01</span><br />
                        <span className="italic">MODERNISTA</span>
                    </h1>
                </motion.div>
                
                <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mt-20">
                    <div className="h-px w-32 bg-black"></div>
                    <div className="space-y-2">
                        <span className="font-display text-lg opacity-40 tracking-[0.3em] uppercase block">Localização / Goiânia, GO</span>
                        <span className="font-display text-lg opacity-40 tracking-[0.3em] uppercase block">Área / 120m²</span>
                    </div>
                </div>
            </div>
        </section>

        {/* content sections based on screenshots */}
        <div className="max-w-[2000px] mx-auto px-6 md:px-20 py-40 space-y-80">
            
            {/* Section 1: Planta */}
            <section className="space-y-16">
                <div className="flex flex-col md:flex-row justify-between items-end border-b border-black/10 pb-10">
                    <h2 className="text-8xl md:text-[12rem] font-display leading-none tracking-tighter uppercase opacity-10">Planta</h2>
                    <span className="font-display text-xl tracking-[0.5em] uppercase opacity-40 mb-4">Estudos Técnicos</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 min-h-[80vh]">
                    <div className="md:col-span-8 h-full">
                        <PlaceholderImage variant="3d" label="Perspectiva Isométrica Principal" className="h-full aspect-video md:aspect-auto" />
                    </div>
                    <div className="md:col-span-4 flex flex-col gap-10">
                        <PlaceholderImage variant="technical" label="Planta Térreo" className="flex-1 min-h-[300px]" />
                        <PlaceholderImage variant="technical" label="Planta Mezanino" className="flex-1 min-h-[300px]" />
                    </div>
                </div>
            </section>

            {/* Section 2: Fachada & Cortes */}
            <section className="space-y-40">
                <div className="space-y-16">
                    <div className="flex flex-col md:flex-row justify-between items-end border-b border-black/10 pb-10">
                        <h2 className="text-8xl md:text-[12rem] font-display leading-none tracking-tighter uppercase opacity-10">Fachada</h2>
                        <span className="font-display text-xl tracking-[0.5em] uppercase opacity-40 mb-4">Vistas Frontais e Posteriores</span>
                    </div>
                    
                    <div className="space-y-10">
                        {[
                            { label: "Vista Frontal Rua 88B", id: "VF1" },
                            { label: "Vista Posterior Bosque", id: "VP1" }
                        ].map((item) => (
                            <div key={item.id} className="grid grid-cols-2 gap-4 h-[300px] md:h-[500px]">
                                <PlaceholderImage variant="3d" label={`${item.label} (Color)`} className="bg-sky-50" />
                                <PlaceholderImage variant="technical" label={`${item.label} (White-box)`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-16">
                    <div className="flex flex-col md:flex-row justify-between items-end border-b border-black/10 pb-10">
                        <h2 className="text-8xl md:text-[12rem] font-display leading-none tracking-tighter uppercase opacity-10">Cortes</h2>
                        <span className="font-display text-xl tracking-[0.5em] uppercase opacity-40 mb-4">Seções Transversais</span>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-10">
                        {["Corte AA", "Corte BB", "Corte CC", "Corte DD", "Corte EE"].map((corte) => (
                            <div key={corte} className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[250px] md:h-[400px]">
                                <PlaceholderImage variant="3d" label={`${corte} (Color)`} className="bg-sky-50" />
                                <PlaceholderImage variant="technical" label={`${corte} (White-box)`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Maquete Digital */}
            <section className="space-y-16">
                <div className="flex flex-col md:flex-row justify-between items-end border-b border-black/10 pb-10">
                    <h2 className="text-8xl md:text-[12rem] font-display leading-none tracking-tighter uppercase opacity-10">Maquete Digital</h2>
                    <span className="font-display text-xl tracking-[0.5em] uppercase opacity-40 mb-4">Visualização 3D</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-[1200px]">
                    <div className="md:col-span-7 grid grid-rows-2 gap-8">
                        <PlaceholderImage variant="3d" label="Vista Frontal Principal" className="h-full" />
                        <PlaceholderImage variant="3d" label="Vista Lateral Leste" className="h-full" />
                    </div>
                    <div className="md:col-span-3 grid grid-rows-3 gap-8">
                        <PlaceholderImage variant="3d" label="Vista Posterior" className="h-full" />
                        <PlaceholderImage variant="3d" label="Vista Lateral" className="h-full" />
                        <PlaceholderImage variant="3d" label="Vista Lateral Oeste" className="h-full" />
                    </div>
                    <div className="md:col-span-2 h-full">
                        <PlaceholderImage variant="technical" label="Vista Superior" className="h-full" />
                    </div>
                </div>
            </section>

            {/* Section 4: Memorial & Detalhes */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                <div className="lg:col-span-4 space-y-10">
                    <h3 className="text-6xl font-display tracking-tighter uppercase border-b-2 border-black pb-4">Memorial de Projeto</h3>
                    <div className="space-y-8 text-xl font-light leading-relaxed opacity-70 text-justify">
                        <p>A proposta do projeto do Ateliê foi baseada nas preferências da Artista — usuária, com destaque do edifício no entorno e muito verde, entre outros.</p>
                        <p>Localizado em um ambiente residencial, pouco movimentado na Rua 88B no Setor Sul, Goiânia, Goiás. Bastante arborizado e calmo. Contendo dois acessos um no sentido Norte - pelo Cul-de-sac, Rua 88B, e outro no sentido Sul - pela área verde e Bosque da Amizade.</p>
                        <p>A proposta foi criar um projeto de linhas retas, com dois volumes de alturas diferentes, dando proporção de valor maior ao local de trabalho da artista, como conexão superior optou-se por &quot;paredes&quot; de vidro, com portas de vidro, para acesso ao jardim, pomar, ofurô.</p>
                    </div>
                </div>
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <PlaceholderImage label="Esquema de Materiais" className="aspect-square bg-green-50/30" />
                    <div className="grid grid-rows-2 gap-8">
                        <PlaceholderImage label="Detalhe Janela" className="h-full" />
                        <PlaceholderImage label="Integração Galeria" className="h-full" />
                    </div>
                </div>
            </section>

            {/* Section 5: Maquete Física */}
            <section className="space-y-16">
                 <div className="flex flex-col md:flex-row justify-between items-end border-b border-black/10 pb-10">
                    <h2 className="text-8xl md:text-[12rem] font-display leading-none tracking-tighter uppercase opacity-10">Maquete Física</h2>
                    <span className="font-display text-xl tracking-[0.5em] uppercase opacity-40 mb-4">Modelo Real</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 auto-rows-[300px] md:auto-rows-[400px]">
                    <PlaceholderImage variant="model" label="Vista Frontal" className="md:col-span-2 md:row-span-2" />
                    <PlaceholderImage variant="model" label="Vista Superior" />
                    <PlaceholderImage variant="model" label="Detalhes Modelo" />
                    <PlaceholderImage variant="model" label="Vista Posterior" className="md:col-span-2" />
                    <PlaceholderImage variant="model" label="Vista Lateral" />
                </div>
            </section>
        </div>

        {/* Footer Area */}
        <footer className="min-h-screen w-full flex flex-col items-center justify-center border-t border-black/10 bg-black text-white p-10 md:p-32 relative text-center">
             <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-8xl md:text-[15rem] font-display leading-none tracking-tighter mb-20 uppercase font-black italic"
             >
                OBRIGADA
             </motion.h2>
             
             <div className="flex flex-col md:flex-row gap-10 md:gap-20 font-display text-4xl opacity-50 uppercase tracking-[0.2em] mb-20">
                <a href="mailto:ericafabian@hotmail.com" className="hover:opacity-100 transition-opacity underline decoration-1 underline-offset-8">E-mail</a>
                <a href="https://wa.me/5562992516899" target="_blank" className="hover:opacity-100 transition-opacity underline decoration-1 underline-offset-8">WhatsApp</a>
             </div>

             <Link href="/#hero" className="text-xl font-display tracking-[0.5em] hover:tracking-[0.8em] transition-all border border-white/20 px-12 py-6 uppercase cursor-pointer">VOLTAR AO INÍCIO</Link>
             
             <div className="absolute bottom-10 inset-x-0 opacity-20 font-display text-sm tracking-[0.5em] uppercase">
                © {new Date().getFullYear()} ERICA FABIAN / PORTFÓLIO
             </div>
        </footer>
    </div>
  )
}
