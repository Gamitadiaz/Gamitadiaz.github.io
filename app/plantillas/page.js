import Link from 'next/link';

const PLANTILLAS = [
  {
    slug:        'dark-purple',
    nombre:      'Dark Purple',
    ideal:       'Gimnasios · Fitness · Tech',
    desc:        'Estilo espacial y tecnológico. Gradientes de azul a morado, perfecto para negocios de alto impacto.',
    bg:          'bg-black',
    border:      'border-purple-700',
    badge:       'bg-purple-600',
    preview:     '🟣',
    textColor:   'text-purple-400',
  },
  {
    slug:        'orange-industrial',
    nombre:      'Orange Industrial',
    ideal:       'Gimnasios · Talleres · Autos',
    desc:        'Agresivo e industrial. Naranja sobre negro, tipografía bold. Para negocios que hablan de fuerza.',
    bg:          'bg-zinc-900',
    border:      'border-orange-600',
    badge:       'bg-orange-600',
    preview:     '🟠',
    textColor:   'text-orange-400',
  },
  {
    slug:        'warm-wood',
    nombre:      'Warm Wood',
    ideal:       'Barberías · Cafés · Restaurantes',
    desc:        'Elegante y cálido. Tonos madera y crema con tipografía serif. Transmite tradición y confianza.',
    bg:          'bg-[#2a1f14]',
    border:      'border-[#8B5E3C]',
    badge:       'bg-[#8B5E3C]',
    preview:     '🟤',
    textColor:   'text-[#d4b896]',
  },
  {
    slug:        'clean-white',
    nombre:      'Clean White',
    ideal:       'Estéticas · Consultorios · Servicios',
    desc:        'Minimalista y profesional. Blanco y gris con tipografía refinada. Funciona para cualquier negocio.',
    bg:          'bg-gray-100',
    border:      'border-gray-300',
    badge:       'bg-gray-800',
    preview:     '⚪',
    textColor:   'text-gray-600',
  },
  {
    slug:        'bold-red',
    nombre:      'Bold Red',
    ideal:       'Taquerías · Comida rápida · Fondas',
    desc:        'Energético y apetitoso. Rojo intenso sobre negro oscuro, tipografía condensada. Llama la atención.',
    bg:          'bg-[#160d0d]',
    border:      'border-red-700',
    badge:       'bg-red-700',
    preview:     '🔴',
    textColor:   'text-red-400',
  },
];

export default function PlantillasIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">

      {/* Header */}
      <div className="border-b border-gray-800 px-6 py-8 text-center">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">GDA · Catálogo interno</p>
        <h1 className="text-3xl md:text-4xl font-black text-white">Plantillas disponibles</h1>
        <p className="text-gray-400 text-sm mt-2">Selecciona una para previsualizar. Solo edita el objeto <code className="bg-gray-800 px-1.5 py-0.5 rounded text-blue-400 text-xs">NEGOCIO</code> al inicio del archivo.</p>
      </div>

      {/* Grid */}
      <div className="max-w-4xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PLANTILLAS.map((p) => (
          <Link key={p.slug} href={`/plantillas/${p.slug}`}
            className={`group block rounded-xl border ${p.border} ${p.bg} overflow-hidden hover:scale-[1.02] transition-transform duration-200`}>

            {/* Preview color block */}
            <div className={`h-28 flex items-center justify-center text-5xl ${p.bg} border-b ${p.border}`}>
              {p.preview}
            </div>

            {/* Info */}
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className={`${p.badge} text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded`}>
                  {p.nombre}
                </span>
              </div>
              <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${p.textColor}`}>{p.ideal}</p>
              <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>

              <div className={`mt-4 text-xs font-bold uppercase tracking-widest ${p.textColor} group-hover:underline`}>
                Ver plantilla →
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 px-6 py-6 text-center">
        <p className="text-gray-600 text-xs">
          Para usar con un cliente: copia la carpeta, renómbrala y edita el objeto <code className="bg-gray-800 px-1 rounded text-blue-400">NEGOCIO</code> · GDA
        </p>
      </div>
    </div>
  );
}