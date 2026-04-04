import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      
      {/* Navegación Responsiva */}
      <nav className="p-6 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-4">
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-400 cursor-pointer">GDA.</h1>
        </Link>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
          <Link href="#proyectos" className="hover:text-blue-400 transition">Proyectos</Link>
          <Link href="/precios" className="hover:text-blue-400 transition font-semibold">Servicios y Precios</Link>
          <Link href="#contacto" className="hover:text-blue-400 transition">Contacto</Link>
        </div>
      </nav>

      {/* Header Responsivo */}
      <header className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-4">Hola, soy <span className="text-blue-500">Gamaliel</span></h2>
        <p className="text-xl text-gray-400 max-w-2xl px-2">Desarrollador enfocado en crear soluciones digitales elegantes y funcionales. Bienvenido a mi rincón en la web.</p>
        
        {/* Botones arreglados para celular */}
        <div className="mt-8 flex flex-col sm:flex-row w-full sm:w-auto gap-4 px-4">
          <Link href="#proyectos" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition w-full sm:w-auto text-center">
            Ver Proyectos
          </Link>
          <a href="TU_LINK_A_CV.pdf" target="_blank" rel="noopener noreferrer" className="border border-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition w-full sm:w-auto text-center">
            Descargar CV
          </a>
        </div>
      </header>

      {/* Proyectos */}
      <section id="proyectos" className="py-20 max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 border-b-2 border-blue-500 inline-block">Proyectos Destacados</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition">
            <h4 className="text-xl font-bold mb-2">Nombre del Proyecto</h4>
            <p className="text-gray-400 mb-4">Una breve descripción de lo que hace y qué tecnologías usaste (ej. React, Node.js).</p>
            <a href="#" className="text-blue-400 font-semibold hover:underline">Ver Código →</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="py-20 text-center bg-gray-800 px-4">
        <h3 className="text-3xl font-bold mb-4">¿Hablamos?</h3>
        <p className="text-gray-400 mb-8">Estoy disponible para nuevos retos y colaboraciones.</p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/tu-usuario" className="text-2xl hover:text-blue-500 italic">GitHub</a>
          <a href="mailto:tu@correo.com" className="text-2xl hover:text-blue-500 italic">Email</a>
        </div>
      </footer>
    </div>
  );
}