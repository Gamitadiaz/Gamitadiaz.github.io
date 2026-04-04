"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function DemoAdminPremium() {
  // Estado para controlar qué vista se muestra
  const [vistaActual, setVistaActual] = useState('socios'); // 'socios' | 'reportes' | 'configuracion'

  // Datos simulados
  const [clientes] = useState([
    { id: 1, nombre: "Carlos Mendoza", plan: "Mensualidad", estado: "Activo", vencimiento: "2026-05-15" },
    { id: 2, nombre: "Lucía Fernández", plan: "Anualidad", estado: "Vencido", vencimiento: "2026-04-01" },
    { id: 3, nombre: "Roberto Gómez", plan: "Estudiante", estado: "Activo", vencimiento: "2026-04-20" },
  ]);

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900 overflow-hidden">
      
      {/* SIDEBAR (Barra Lateral) */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col shadow-2xl z-20">
        <div className="h-16 flex items-center px-6 border-b border-gray-800">
          <svg className="w-8 h-8 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          <span className="text-xl font-black tracking-wider uppercase">Panel<span className="text-blue-500">Pro</span></span>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2">
          {/* Botón Socios */}
          <button 
            onClick={() => setVistaActual('socios')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition ${vistaActual === 'socios' ? 'bg-blue-600/10 text-blue-400 border-l-4 border-blue-500' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            Socios / Clientes
          </button>

          {/* Botón Reportes */}
          <button 
            onClick={() => setVistaActual('reportes')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition ${vistaActual === 'reportes' ? 'bg-blue-600/10 text-blue-400 border-l-4 border-blue-500' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            Reporte Financiero
          </button>

          {/* Botón Configuración */}
          <button 
            onClick={() => setVistaActual('configuracion')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition ${vistaActual === 'configuracion' ? 'bg-blue-600/10 text-blue-400 border-l-4 border-blue-500' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            Configuración
          </button>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <Link href="/" className="text-sm text-gray-500 hover:text-white transition">← Volver al Portafolio</Link>
        </div>
      </aside>

      {/* ÁREA PRINCIPAL */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8 z-10">
          <h2 className="text-xl font-bold text-gray-700 capitalize">
            {vistaActual === 'socios' ? 'Gestión de Clientes' : vistaActual === 'reportes' ? 'Análisis Financiero' : 'Configuración del Sistema'}
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-600 hidden md:block">Hola, Administrador</span>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold border-2 border-blue-500">
              A
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto w-full">
          
          {/* VISTA 1: SOCIOS */}
          {vistaActual === 'socios' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">Ingresos del Mes</p>
                    <p className="text-3xl font-black text-gray-800">$12,450</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-2xl">💰</div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">Socios Activos</p>
                    <p className="text-3xl font-black text-gray-800">142</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl">📈</div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">Pagos Vencidos</p>
                    <p className="text-3xl font-black text-red-600">8</p>
                  </div>
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center text-2xl">⚠️</div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <h3 className="text-lg font-bold text-gray-800">Directorio de Socios</h3>
                  <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/30 w-full sm:w-auto">
                    + Nuevo Socio
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50/50">
                      <tr>
                        <th className="px-6 py-4 font-semibold text-gray-500 text-sm uppercase tracking-wider">Cliente</th>
                        <th className="px-6 py-4 font-semibold text-gray-500 text-sm uppercase tracking-wider">Plan</th>
                        <th className="px-6 py-4 font-semibold text-gray-500 text-sm uppercase tracking-wider">Estado</th>
                        <th className="px-6 py-4 font-semibold text-gray-500 text-sm uppercase tracking-wider">Vencimiento</th>
                        <th className="px-6 py-4 font-semibold text-gray-500 text-sm uppercase tracking-wider text-right">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {clientes.map((c) => (
                        <tr key={c.id} className="hover:bg-gray-50/80 transition group">
                          <td className="px-6 py-4 font-bold text-gray-800">{c.nombre}</td>
                          <td className="px-6 py-4 text-gray-600">{c.plan}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${c.estado === 'Activo' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                              {c.estado}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-500 font-medium">{c.vencimiento}</td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-blue-600 hover:text-blue-800 font-bold text-sm bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-md transition opacity-0 group-hover:opacity-100">
                              Renovar Pago
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* VISTA 2: REPORTES */}
          {vistaActual === 'reportes' && (
            <div className="animate-fade-in space-y-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-6">Proyección de Ingresos 2026</h3>
                
                {/* Gráfico de barras simulado con Flexbox */}
                <div className="h-64 flex items-end justify-between gap-2 border-b-2 border-l-2 border-gray-100 p-4">
                  <div className="w-full flex flex-col items-center gap-2 group">
                    <div className="w-1/2 bg-blue-200 h-[40%] rounded-t-sm group-hover:bg-blue-300 transition relative">
                       <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-500 opacity-0 group-hover:opacity-100 transition">$8.5k</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-500">Ene</span>
                  </div>
                  <div className="w-full flex flex-col items-center gap-2 group">
                    <div className="w-1/2 bg-blue-300 h-[55%] rounded-t-sm group-hover:bg-blue-400 transition relative">
                       <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-500 opacity-0 group-hover:opacity-100 transition">$9.2k</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-500">Feb</span>
                  </div>
                  <div className="w-full flex flex-col items-center gap-2 group">
                    <div className="w-1/2 bg-blue-400 h-[70%] rounded-t-sm group-hover:bg-blue-500 transition relative">
                       <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-500 opacity-0 group-hover:opacity-100 transition">$11.1k</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-500">Mar</span>
                  </div>
                  <div className="w-full flex flex-col items-center gap-2 group">
                    <div className="w-1/2 bg-blue-600 h-[90%] rounded-t-sm shadow-[0_0_15px_rgba(37,99,235,0.3)] relative">
                       <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-blue-600">$12.4k</span>
                    </div>
                    <span className="text-sm font-black text-blue-600">Abr</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Últimas Transacciones</h3>
                <ul className="divide-y divide-gray-100">
                  <li className="py-3 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">↓</div>
                      <div>
                        <p className="font-semibold text-gray-800">Mensualidad - Carlos Mendoza</p>
                        <p className="text-xs text-gray-500">Hace 2 horas</p>
                      </div>
                    </div>
                    <span className="font-bold text-gray-800">+$590.00</span>
                  </li>
                  <li className="py-3 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">↓</div>
                      <div>
                        <p className="font-semibold text-gray-800">Inscripción - Nuevo Socio</p>
                        <p className="text-xs text-gray-500">Hoy, 09:30 AM</p>
                      </div>
                    </div>
                    <span className="font-bold text-gray-800">+$150.00</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* VISTA 3: CONFIGURACIÓN */}
          {vistaActual === 'configuracion' && (
            <div className="animate-fade-in space-y-6">
              
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                  <h3 className="text-lg font-bold text-gray-800">Automatizaciones Premium</h3>
                  <p className="text-sm text-gray-500">El sistema trabajará por ti cuando no estés.</p>
                </div>
                <div className="p-6 space-y-6">
                  
                  {/* Toggle 1 */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-800">Avisos automáticos por WhatsApp</h4>
                      <p className="text-sm text-gray-500">Envía un recordatorio 2 días antes del vencimiento.</p>
                    </div>
                    <button className="w-12 h-6 rounded-full bg-blue-600 relative transition cursor-pointer border-2 border-transparent">
                      <div className="w-5 h-5 bg-white rounded-full absolute right-0 top-0 shadow-sm"></div>
                    </button>
                  </div>

                  {/* Toggle 2 */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                    <div>
                      <h4 className="font-bold text-gray-800">Correo de Bienvenida</h4>
                      <p className="text-sm text-gray-500">Se envía automáticamente al registrar un nuevo socio.</p>
                    </div>
                    <button className="w-12 h-6 rounded-full bg-gray-300 relative transition cursor-pointer border-2 border-transparent">
                      <div className="w-5 h-5 bg-white rounded-full absolute left-0 top-0 shadow-sm"></div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
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
                <button className="mt-6 bg-gray-900 text-white px-6 py-2 rounded-lg font-bold hover:bg-black transition">
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