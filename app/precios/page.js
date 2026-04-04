"use client";
import Link from 'next/link';

export default function Precios() {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      {/* Navbar Simple */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto border-b border-gray-800">
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-400 cursor-pointer">← Volver al inicio</h1>
        </Link>
      </nav>

      <header className="py-16 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Planes y <span className="text-blue-500">Soluciones</span></h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Sistemas y presencia digital para tu negocio. Tú enfócate en tu negocio, yo me encargo de la tecnología.</p>
      </header>

      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Plan 1: Inicial (Presencia) */}
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 flex flex-col relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-2">Plan Inicial</h3>
            <p className="text-gray-400 mb-6 text-sm">Ideal para locales nuevos que necesitan aparecer en el mapa rápidamente.</p>
            
            <div className="mb-6 pb-6 border-b border-gray-700">
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Inversión Inicial</p>
              <p className="text-3xl font-extrabold">$1,500 <span className="text-base font-normal">MXN</span></p>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Mantenimiento Mensual</p>
              <p className="text-4xl font-extrabold text-blue-400">$300 <span className="text-lg font-normal">MXN/mes</span></p>
            </div>

            <ul className="mb-8 space-y-3 flex-1 text-gray-300">
              <li className="flex gap-2">✓ <span>Página web responsiva (Landing Page)</span></li>
              <li className="flex gap-2">✓ <span>Dominio y Hosting incluidos</span></li>
              <li className="flex gap-2">✓ <span>Optimización en Google Maps</span></li>
              <li className="flex gap-2">✓ <span>1 actualización de contenido al mes</span></li>
            </ul>
            <a href="mailto:tu@correo.com" className="block text-center border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-full font-bold transition">Solicitar Plan</a>
          </div>

          {/* Plan 2: Profesional (Destacado) */}
          <div className="bg-gradient-to-b from-blue-900 to-gray-800 p-8 rounded-2xl border-2 border-blue-500 flex flex-col transform md:-translate-y-4 shadow-2xl shadow-blue-900/50 relative">
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-bl-xl">Más Popular</div>
            
            <h3 className="text-2xl font-bold mb-2 mt-2">Plan Profesional</h3>
            <p className="text-gray-300 mb-6 text-sm">Página web + Sistema administrativo para operar tu local sin descapitalizarte.</p>
            
            <div className="mb-6 pb-6 border-b border-gray-700/50">
              <p className="text-sm text-blue-300 uppercase tracking-widest font-bold mb-1">Inversión Inicial</p>
              <p className="text-3xl font-extrabold">$0 <span className="text-base font-normal">MXN</span> <span className="text-sm text-blue-300 ml-2 font-medium">(Instalación Gratis)</span></p>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-blue-300 uppercase tracking-widest font-bold mb-1">Mantenimiento Mensual</p>
              <p className="text-4xl font-extrabold text-white">$650 <span className="text-lg font-normal">MXN/mes</span></p>
            </div>

            <ul className="mb-8 space-y-3 flex-1 text-gray-200">
              <li className="flex gap-2 text-blue-300 font-semibold">✓ Todo lo del Plan Inicial, además:</li>
              <li className="flex gap-2">✓ <span>Panel Administrativo Privado</span></li>
              <li className="flex gap-2">✓ <span>Sistema de registro de clientes/socios</span></li>
              <li className="flex gap-2">✓ <span>Control de mensualidades o asistencias</span></li>
              <li className="flex gap-2">✓ <span>Hasta 3 actualizaciones de contenido al mes</span></li>
            </ul>
            <a href="mailto:tu@correo.com" className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold transition">Me Interesa</a>
          </div>

          {/* Plan 3: Empresarial */}
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 flex flex-col relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-2">Plan Empresarial</h3>
            <p className="text-gray-400 mb-6 text-sm">Desarrollo a la medida para negocios establecidos con necesidades específicas.</p>
            
            <div className="mb-6 pb-6 border-b border-gray-700">
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Desarrollo Inicial</p>
              <p className="text-3xl font-extrabold">Desde $5,000 <span className="text-base font-normal">MXN</span></p>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Mantenimiento Mensual</p>
              <p className="text-4xl font-extrabold text-purple-400">$900 <span className="text-lg font-normal">MXN/mes</span></p>
            </div>

            <ul className="mb-8 space-y-3 flex-1 text-gray-300">
              <li className="flex gap-2 text-purple-400 font-semibold">✓ Todo lo del Plan Profesional, además:</li>
              <li className="flex gap-2">✓ <span>Arquitectura de Base de Datos personalizada</span></li>
              <li className="flex gap-2">✓ <span>Múltiples usuarios y permisos</span></li>
              <li className="flex gap-2">✓ <span>Automatización de WhatsApp / Correos</span></li>
              <li className="flex gap-2">✓ <span>Soporte técnico prioritario</span></li>
            </ul>
            <a href="mailto:tu@correo.com" className="block text-center border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-full font-bold transition">Cotizar Sistema</a>
          </div>

        </div>
      </section>
    </div>
  );
}