import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070708] text-neutral-100 flex flex-col justify-between selection:bg-teal-500 selection:text-black">
      {/* Dynamic Sleek Header */}
      <header className="border-b border-neutral-900 bg-[#0f1012]/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-4 w-4 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_12px_rgba(6,182,212,0.6)]" />
            <span className="font-heading text-xl font-bold tracking-tight text-white">
              Df<span className="text-cyan-500">-OS</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <Link href="/products/df-os" className="hover:text-white transition-colors duration-200">Products</Link>
            <Link href="/solutions" className="hover:text-white transition-colors duration-200">Solutions</Link>
            <Link href="/industries" className="hover:text-white transition-colors duration-200">Industries</Link>
            <Link href="/resources/blog" className="hover:text-white transition-colors duration-200">Insights</Link>
          </nav>

          <Link
            href="/book-demo"
            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-cyan-500 text-black hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:scale-105"
          >
            Book Operational Demo
          </Link>
        </div>
      </header>

      {/* Main Core Section */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-20 flex flex-col gap-24">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-xs text-teal-400 font-semibold tracking-wide w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              PROCESS-FIRST OPERATIONAL COUPLING
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white max-w-3xl">
              Digital Factory Operating System for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">Manufacturing Excellence</span>
            </h1>
            
            <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
              Digitize human-driven shopfloor workflows and connect plant-level execution with real-time analytics. Complement your existing ERP and MES systems with an AI-ready framework powered by Vish AI.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                href="/book-demo"
                className="px-6 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 text-black hover:opacity-95 transition-all duration-300 hover:scale-105"
              >
                Request Plant Demo
              </Link>
              <Link
                href="/products/df-os"
                className="px-6 py-3 rounded-lg text-sm font-semibold border border-neutral-800 bg-[#0f1012] text-white hover:border-neutral-700 transition-all duration-300"
              >
                Explore Platform Capabilities
              </Link>
            </div>
          </div>

          {/* Interactive Hero Visual */}
          <div className="flex-1 w-full max-w-xl bg-[#0f1012] border border-neutral-900 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-50" />
            
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs font-mono text-neutral-500">DF-OS_CONTROL_TOWER_v1.0</span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-xl border border-neutral-800/80 bg-neutral-950/60 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/30">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-neutral-400">Quality Inspection Queue</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">99.8% Compliance</span>
                </div>
                <div className="h-2 w-full bg-neutral-900 rounded-full overflow-hidden">
                  <div className="h-full w-[99.8%] bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full" />
                </div>
              </div>

              <div className="p-4 rounded-xl border border-neutral-800/80 bg-neutral-950/60 relative overflow-hidden transition-all duration-300 hover:border-teal-500/30">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-neutral-400">Maintenance Dispatch</span>
                  <span className="text-xs text-cyan-400 font-mono">12 min Dispatch Avg</span>
                </div>
                <div className="h-2 w-full bg-neutral-900 rounded-full overflow-hidden">
                  <div className="h-full w-[84%] bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full animate-pulse" />
                </div>
              </div>

              <div className="p-4 rounded-xl border border-neutral-800/80 bg-neutral-950/60 relative overflow-hidden transition-all duration-300 hover:border-emerald-500/30">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-neutral-400">Active Vish AI Agent Integration</span>
                  <span className="text-xs text-neutral-500">Connected</span>
                </div>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="h-2 w-2 rounded-full bg-teal-400 animate-ping" />
                  <span className="text-[11px] font-mono text-neutral-400">Telemetry feed synced successfully.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Bento Modules Section */}
        <section className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-left max-w-2xl">
            <span className="text-xs font-bold text-cyan-500 tracking-widest uppercase">Operational Architecture</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">Enterprise Product Offerings</h2>
            <p className="text-neutral-400 text-base leading-relaxed">
              Explore our core platform modules designed specifically to connect operations, continuous compliance, and intelligence systems across the manufacturing plant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl border border-neutral-900 bg-[#0f1012] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-neutral-800 group">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-cyan-500 tracking-wider font-mono">MODULE 01</span>
                <h3 className="font-heading text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">Df-OS Platform</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  The modular workflow automation core. Standardize and digitize people-driven shopfloor routines, checks, safety protocols, and continuous operations checklists.
                </p>
              </div>
              <Link href="/products/df-os" className="text-xs font-semibold text-white inline-flex items-center gap-1.5 mt-6 hover:text-cyan-400 transition-colors duration-200">
                Explore Df-OS Platform →
              </Link>
            </div>

            <div className="p-8 rounded-2xl border border-neutral-900 bg-[#0f1012] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-neutral-800 group">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-teal-500 tracking-wider font-mono">MODULE 02</span>
                <h3 className="font-heading text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-200">Vish AI</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Real-time decision intelligence engine. Feed digitized telemetry into localized machine learning pipelines to forecast asset anomalies and automate escalation procedures.
                </p>
              </div>
              <Link href="/products/vish-ai" className="text-xs font-semibold text-white inline-flex items-center gap-1.5 mt-6 hover:text-teal-400 transition-colors duration-200">
                Explore Vish AI →
              </Link>
            </div>

            <div className="p-8 rounded-2xl border border-neutral-900 bg-[#0f1012] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-neutral-800 group">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-emerald-500 tracking-wider font-mono">MODULE 03</span>
                <h3 className="font-heading text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-200">X-Konnect</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Universal OT/IT integration fabric. Bridging standard PLC telemetry and SCADA layers seamlessly with enterprise transactional structures like ERP and MES.
                </p>
              </div>
              <Link href="/products/x-konnect" className="text-xs font-semibold text-white inline-flex items-center gap-1.5 mt-6 hover:text-emerald-400 transition-colors duration-200">
                Explore X-Konnect →
              </Link>
            </div>
          </div>
        </section>

        {/* Dynamic Solutions Overview */}
        <section className="flex flex-col lg:flex-row gap-12 items-center bg-[#0f1012]/40 border border-neutral-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-40 w-40 bg-teal-500/5 rounded-full blur-3xl" />
          
          <div className="flex-1 flex flex-col gap-6 text-left">
            <span className="text-xs font-bold text-teal-400 tracking-widest uppercase">Target Use Cases</span>
            <h2 className="font-heading text-3xl font-extrabold text-white">Digitizing Process Gaps</h2>
            <p className="text-neutral-400 text-base leading-relaxed">
              Our modular factory applications connect operators, supervisors, and executive leadership, eliminating paper records and manual spreadsheets across all plant operations.
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/solutions/factory-control-tower" className="text-sm text-neutral-300 hover:text-cyan-400 inline-flex items-center gap-2 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                Factory Control Tower Software
              </Link>
              <Link href="/solutions/traceability" className="text-sm text-neutral-300 hover:text-cyan-400 inline-flex items-center gap-2 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                Traceability and Compliance Workflows
              </Link>
              <Link href="/solutions/quality-management" className="text-sm text-neutral-300 hover:text-cyan-400 inline-flex items-center gap-2 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                Shopfloor Quality Management Software
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            <div className="p-6 rounded-xl border border-neutral-800/80 bg-neutral-950/80 flex flex-col gap-2">
              <span className="text-3xl font-heading font-extrabold text-cyan-400">-40%</span>
              <span className="text-xs font-bold text-neutral-400">Paper Compliance Waste</span>
            </div>
            <div className="p-6 rounded-xl border border-neutral-800/80 bg-neutral-950/80 flex flex-col gap-2">
              <span className="text-3xl font-heading font-extrabold text-teal-400">12 min</span>
              <span className="text-xs font-bold text-neutral-400">Escalation Resolution Avg</span>
            </div>
            <div className="p-6 rounded-xl border border-neutral-800/80 bg-neutral-950/80 flex flex-col gap-2">
              <span className="text-3xl font-heading font-extrabold text-emerald-400">+25%</span>
              <span className="text-xs font-bold text-neutral-400">Operator Audit Efficiency</span>
            </div>
            <div className="p-6 rounded-xl border border-neutral-800/80 bg-neutral-950/80 flex flex-col gap-2">
              <span className="text-3xl font-heading font-extrabold text-white">99.8%</span>
              <span className="text-xs font-bold text-neutral-400">Data Reliability Rating</span>
            </div>
          </div>
        </section>

        {/* Factual SEO/GEO/AEO Summary Block Card */}
        <section className="p-8 rounded-2xl border border-neutral-900 bg-neutral-950 flex flex-col gap-6 text-left relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <h3 className="font-heading text-lg font-bold text-white">Df-OS Entity & SEO Reference Specifications</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-neutral-400 uppercase font-mono tracking-wider">AEO Factual Answer Block</span>
              <div className="p-4 rounded-xl border border-neutral-900 bg-[#0f1012]/40 text-neutral-300 leading-relaxed font-sans">
                <strong>Question:</strong> What is a Digital Factory Operating System? <br />
                <strong>Answer:</strong> Df-OS is a process-first Digital Factory Operating System that digitizes people-driven shopfloor workflows, improves operational visibility, automates approvals and escalations, and connects plant-level execution with leadership decision-making.
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-neutral-400 uppercase font-mono tracking-wider">Pillar SEO Summary</span>
              <div className="p-4 rounded-xl border border-neutral-900 bg-[#0f1012]/40 text-neutral-300 leading-relaxed font-sans">
                This platform serves as a digital growth engine and product storytelling matrix for Df-OS, Vish AI, and X-Konnect. It enables COOs, Plant Heads, and Digital Transformation Executives to educate themselves on modular manufacturing digitization, explore trace-compliance systems, and easily coordinate demo Bookings.
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-[#0f1012] py-12 text-sm text-neutral-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-heading text-base font-bold text-white">Df-OS Website Core</span>
            <span className="text-xs text-neutral-600">© {new Date().getFullYear()} Df-OS. All rights reserved.</span>
          </div>

          <div className="flex gap-8">
            <Link href="/security" className="hover:text-white transition-colors duration-200">Security & Trust</Link>
            <Link href="/contact" className="hover:text-white transition-colors duration-200">Contact</Link>
            <Link href="/book-demo" className="hover:text-white transition-colors duration-200">Book Demo</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
