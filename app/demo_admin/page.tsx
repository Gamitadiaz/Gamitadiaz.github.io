"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase_config';
import Link from 'next/link';

export default function DemoAdminPremium() {
  const router = useRouter();
  const [authLoading, setAuthLoading] = useState(true);
  const [vistaActual, setVistaActual] = useState('socios');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/demo_admin/login');
      } else {
        setAuthLoading(false);
      }
    };
    checkUser();
  }, [router]);

  const [clientes] = useState([
    { id: 1, nombre: "Carlos Mendoza", plan: "Mensualidad", estado: "Activo", vencimiento: "2026-05-15" },
    { id: 2, nombre: "Lucía Fernández", plan: "Anualidad", estado: "Vencido", vencimiento: "2026-04-01" },
    { id: 3, nombre: "Roberto Gómez", plan: "Estudiante", estado: "Activo", vencimiento: "2026-04-20" },
  ]);

  if (authLoading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-900 text-white">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="font-bold tracking-widest uppercase">Cargando Sistema...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100 font-sans text-gray-900 overflow-hidden relative">
      
      {/* SIDEBAR RESPONSIVO */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:relative lg:translate-x-0
      `}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-800">
          <div className="flex items-center">
            <svg className="w-8 h-8 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            <span className="text-xl font-black uppercase">Panel<span className="text-blue-500">Pro</span></span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          {['socios', 'reportes', 'configuracion'].map((item) => (
            <button 
              key={item}
              onClick={() => { setVistaActual(item); setIsSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold capitalize transition ${vistaActual === item ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800'}`}
            >
              {item === 'socios' && '👥 Socios'}
              {item === 'reportes' && '📊 Reportes'}
              {item === 'configuracion' && '⚙️ Config'}
            </button>
          ))}
          <button 
            onClick={async () => { await supabase.auth.signOut(); router.push('/demo_admin/login'); }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-red-400 hover:bg-red-900/20 mt-10 transition"
          >
            🚪 Cerrar Sesión
          </button>
        </nav>
      </aside>

      {/* OVERLAY PARA MÓVIL */}
      {isSidebarOpen && (
        <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/50 z-40 lg:hidden shadow-backdrop"></div>
      )}

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* HEADER CON HAMBURGUESA */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-4 lg:px-8 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <h2 className="text-lg lg:text-xl font-bold text-gray-700 capitalize">{vistaActual}</h2>
          </div>
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
        </header>

        {/* ÁREA DE SCROLL */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          
          {/* === VISTA 1: SOCIOS === */}
          {vistaActual === 'socios' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border border-gray-100">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Ingresos</p>
                  <p className="text-2xl lg:text-3xl font-black">$12,450</p>
                </div>
                <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border border-gray-100">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Activos</p>
                  <p className="text-2xl lg:text-3xl font-black">142</p>
                </div>
                <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border border-gray-100 sm:col-span-2 lg:col-span-1">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Vencidos</p>
                  <p className="text-2xl lg:text-3xl font-black text-red-500">8</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-bold">Lista de Socios</h3>
                  <button className="bg-blue-600 text-white text-xs lg:text-sm px-4 py-2 rounded-lg font-bold shadow-lg shadow-blue-600/20">
                    + Nuevo
                  </button>
                </div>
                
                <div className="md:hidden divide-y divide-gray-100">
                  {clientes.map(c => (
                    <div key={c.id} className="p-4 space-y-2">
                      <div className="flex justify-between items-start">
                        <p className="font-bold">{c.nombre}</p>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${c.estado === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{c.estado}</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Plan: {c.plan}</span>
                        <span>Vence: {c.vencimiento}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 text-xs text-gray-400 uppercase">
                      <tr>
                        <th className="px-6 py-4">Socio</th>
                        <th className="px-6 py-4">Estado</th>
                        <th className="px-6 py-4">Vencimiento</th>
                        <th className="px-6 py-4"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                      {clientes.map(c => (
                        <tr key={c.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-bold">{c.nombre}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${c.estado === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{c.estado}</span>
                          </td>
                          <td className="px-6 py-4 text-gray-500">{c.vencimiento}</td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-blue-600 font-bold hover:underline">Ver</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* === VISTA 2: REPORTES === */}
          {vistaActual === 'reportes' && (
            <div className="animate-fade-in space-y-6">
              <div className="bg-white p-4 lg:p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-6">Proyección de Ingresos 2026</h3>
                <div className="h-64 flex items-end justify-between gap-2 border-b-2 border-l-2 border-gray-100 p-2 lg:p-4">
                  <div className="w-full flex flex-col items-center gap-2 group">
                    <div className="w-1/2 bg-blue-200 h-[40%] rounded-t-sm group-hover:bg-blue-300 transition relative">
                       <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-500 opacity-0 group-hover:opacity-100 transition">$8.5k</span>
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-gray-500">Ene</span>
                  </div>
                  <div className="w-full flex flex-col items-center gap-2 group">
                    <div className="w-1/2 bg-blue-300 h-[55%] rounded-t-sm group-hover:bg-blue-400 transition relative">
                       <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-500 opacity-0 group-hover:opacity-100 transition">$9.2k</span>
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-gray-500">Feb</span>
                  </div>
                  <div className="w-full flex flex-col items-center gap-2 group">
                    <div className="w-1/2 bg-blue-400 h-[70%] rounded-t-sm group-hover:bg-blue-500 transition relative">
                       <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-500 opacity-0 group-hover:opacity-100 transition">$11.1k</span>
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-gray-500">Mar</span>
                  </div>
                  <div className="w-full flex flex-col items-center gap-2 group">
                    <div className="w-1/2 bg-blue-600 h-[90%] rounded-t-sm shadow-[0_0_15px_rgba(37,99,235,0.3)] relative">
                       <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-blue-600">$12.4k</span>
                    </div>
                    <span className="text-xs lg:text-sm font-black text-blue-600">Abr</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 lg:p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Últimas Transacciones</h3>
                <ul className="divide-y divide-gray-100">
                  <li className="py-3 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">↓</div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm lg:text-base">Mensualidad - Carlos Mendoza</p>
                        <p className="text-xs text-gray-500">Hace 2 horas</p>
                      </div>
                    </div>
                    <span className="font-bold text-gray-800 text-sm lg:text-base">+$590.00</span>
                  </li>
                  <li className="py-3 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">↓</div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm lg:text-base">Inscripción - Nuevo Socio</p>
                        <p className="text-xs text-gray-500">Hoy, 09:30 AM</p>
                      </div>
                    </div>
                    <span className="font-bold text-gray-800 text-sm lg:text-base">+$150.00</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* === VISTA 3: CONFIGURACIÓN === */}
          {vistaActual === 'configuracion' && (
            <div className="animate-fade-in space-y-6">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 lg:p-6 border-b border-gray-100 bg-gray-50/50">
                  <h3 className="text-lg font-bold text-gray-800">Automatizaciones Premium</h3>
                  <p className="text-sm text-gray-500">El sistema trabajará por ti cuando no estés.</p>
                </div>
                <div className="p-4 lg:p-6 space-y-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm lg:text-base">Avisos automáticos por WhatsApp</h4>
                      <p className="text-xs lg:text-sm text-gray-500">Envía un recordatorio 2 días antes del vencimiento.</p>
                    </div>
                    <button className="w-12 h-6 shrink-0 rounded-full bg-blue-600 relative transition cursor-pointer border-2 border-transparent">
                      <div className="w-5 h-5 bg-white rounded-full absolute right-0 top-0 shadow-sm"></div>
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-t border-gray-100 pt-6">
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm lg:text-base">Correo de Bienvenida</h4>
                      <p className="text-xs lg:text-sm text-gray-500">Se envía automáticamente al registrar un nuevo socio.</p>
                    </div>
                    <button className="w-12 h-6 shrink-0 rounded-full bg-gray-300 relative transition cursor-pointer border-2 border-transparent">
                      <div className="w-5 h-5 bg-white rounded-full absolute left-0 top-0 shadow-sm"></div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 lg:p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Datos del Local</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Nombre del Gimnasio</label>
                    <input type="text" value="Gimnasio Demo" disabled className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 text-gray-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Moneda</label>
                    <select disabled className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 text-gray-500">
                      <option>MXN - Pesos Mexicanos</option>
                    </select>
                  </div>
                </div>
                <button className="mt-6 w-full sm:w-auto bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-black transition">
                  Guardar Cambios
                </button>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}