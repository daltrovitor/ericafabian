"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: "Início", href: "/#hero", label: "01" },
    { name: "Sobre", href: "/#about", label: "02" },
    { name: "Experiência", href: "/#skills", label: "03" },
    { name: "Portfólio", href: "/#summary", label: "04" },
  ]

  return (
    <>
      <header className="fixed top-10 right-10 z-200">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`font-display text-2xl tracking-[0.2em] hover:scale-105 transition-all mix-blend-difference uppercase cursor-pointer ${isOpen ? "text-white" : "text-black"}`}
        >
          {isOpen ? "FECHAR" : "MENU"}
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-150 bg-black/95 backdrop-blur-md text-white flex flex-col items-center justify-center"
          >
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="h-full w-full grid grid-cols-4 border-l border-white/20">
                    <div className="border-r border-white/20 h-full"></div>
                    <div className="border-r border-white/20 h-full"></div>
                    <div className="border-r border-white/20 h-full"></div>
                    <div className="border-r border-white/20 h-full"></div>
                </div>
            </div>

            <nav className="relative z-10 w-full max-w-7xl px-10">
              <div className="flex flex-col gap-4">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="group"
                  >
                    <Link 
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-baseline gap-10 hover:pl-20 transition-all duration-700 ease-out"
                    >
                      <span className="font-display text-2xl md:text-4xl opacity-20 group-hover:opacity-100 transition-opacity">{item.label}</span>
                      <span className="text-7xl md:text-[10rem] font-display uppercase leading-tight tracking-tighter group-hover:tracking-widest transition-all duration-500">
                        {item.name}
                      </span>
                    </Link>
                    <div className="h-px w-full bg-white/10 group-hover:bg-white/40 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </nav>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-10 left-10 md:left-20 flex items-center gap-4"
            >
              <span className="font-script text-5xl text-white opacity-80 whitespace-nowrap">Erica Fabian</span>
              <span className="font-display text-lg tracking-[0.3em] opacity-40 uppercase hidden md:block">/ PORTFÓLIO &apos;26</span>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-10 right-10 md:right-20 flex gap-10 font-display text-sm md:text-xl opacity-40 uppercase tracking-widest"
            >
              <a href="mailto:ericafabian@hotmail.com" className="hover:opacity-100 transition-opacity">E-MAIL</a>
              <a href="https://wa.me/5562992516899" target="_blank" className="hover:opacity-100 transition-opacity">WHATSAPP</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
