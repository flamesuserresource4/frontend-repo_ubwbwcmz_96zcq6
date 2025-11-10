import { useState } from 'react'
import { Check, Menu, X, Send, Star, Shield, HeadphonesIcon } from 'lucide-react'

const backendBase = import.meta.env.VITE_BACKEND_URL || ''

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-600 shadow-lg shadow-yellow-500/20 grid place-items-center">
            <span className="text-black font-extrabold">KT</span>
          </div>
          <span className="text-white font-semibold tracking-wide">Kursus Tilawah Online</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Fitur</a>
          <a href="#pricing" className="hover:text-white transition">Harga</a>
          <a href="#contact" className="hover:text-white transition">Kontak</a>
          <a href="#contact" className="px-4 py-2 rounded-md bg-gradient-to-r from-amber-400 to-yellow-600 text-black font-semibold shadow shadow-yellow-500/30 hover:brightness-110 transition">Daftar Sekarang</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/80 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3 text-white/80">
            <a href="#features" onClick={() => setOpen(false)}>Fitur</a>
            <a href="#pricing" onClick={() => setOpen(false)}>Harga</a>
            <a href="#contact" onClick={() => setOpen(false)}>Kontak</a>
            <a href="#contact" onClick={() => setOpen(false)} className="px-4 py-2 rounded-md bg-gradient-to-r from-amber-400 to-yellow-600 text-black font-semibold shadow shadow-yellow-500/30 w-max">Daftar Sekarang</a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black text-white pt-28">
      <PatternBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-yellow-300 mb-6">
              <Star size={16} className="text-yellow-300" />
              <span className="text-xs tracking-wide">Belajar Tilawah Al-Qur'an secara online, terstruktur & interaktif</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Tingkatkan Tilawah Anda dengan Bimbingan Profesional
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl">
              Program pembelajaran tajwid dan tilawah untuk semua level. Kelas live, rekaman materi, penilaian personal, dan jadwal fleksibel.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#pricing" className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-600 text-black font-semibold shadow-lg shadow-yellow-500/30 hover:brightness-110 transition">
                Lihat Paket
              </a>
              <a href="#contact" className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition">
                Konsultasi Gratis
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2"><Shield className="text-yellow-400" size={16}/> Kurikulum Tajwid</div>
              <div className="flex items-center gap-2"><HeadphonesIcon className="text-yellow-400" size={16}/> Mentor Berpengalaman</div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-zinc-900 to-black p-6 shadow-2xl shadow-yellow-500/10">
              <div className="aspect-video rounded-xl overflow-hidden ring-1 ring-white/10">
                <MuslimPatternCard />
              </div>
              <p className="mt-4 text-sm text-white/60">
                Visualisasi pola islami dengan animasi lembut sebagai representasi harmoni tilawah.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    {
      title: 'Kelas Live & Rekaman',
      desc: 'Ikuti sesi langsung dan akses rekaman materi kapan pun.',
    },
    {
      title: 'Penilaian Personal',
      desc: 'Feedback detail dari ustadz/ustadzah untuk peningkatan terukur.',
    },
    {
      title: 'Jadwal Fleksibel',
      desc: 'Sesuaikan belajar dengan rutinitas Anda, pagi atau malam.',
    },
    {
      title: 'Komunitas & Support',
      desc: 'Bergabung dengan komunitas pembelajar dan dukungan harian.',
    },
  ]
  return (
    <section id="features" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-zinc-900/60 p-6 hover:border-yellow-500/40 hover:shadow-lg hover:shadow-yellow-500/20 transition">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-amber-400 to-yellow-600 text-black grid place-items-center mb-4">
                <Check />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-white/60">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const tiers = [
    {
      name: 'Pemula',
      price: 'Rp149k',
      period: '/bulan',
      features: ['Dasar Tajwid', '2x Kelas Live/Minggu', 'Akses Rekaman', 'Grup Komunitas'],
      highlight: false,
    },
    {
      name: 'Standar',
      price: 'Rp249k',
      period: '/bulan',
      features: ['Semua di Pemula', '3x Kelas Live/Minggu', 'Penilaian Bulanan', 'Konsultasi WA'],
      highlight: true,
    },
    {
      name: 'Intensif',
      price: 'Rp399k',
      period: '/bulan',
      features: ['Semua di Standar', '5x Kelas Live/Minggu', 'Penilaian Mingguan', 'Sertifikat Kelulusan'],
      highlight: false,
    },
  ]
  return (
    <section id="pricing" className="relative bg-gradient-to-b from-black to-zinc-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Paket Harga</h2>
          <p className="mt-3 text-white/60">Pilih paket sesuai kebutuhan belajar Anda.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div key={i} className={`rounded-2xl p-6 border transition ${t.highlight ? 'bg-gradient-to-br from-yellow-500/10 to-yellow-700/10 border-yellow-500/40 shadow-2xl shadow-yellow-500/20 scale-[1.02]' : 'bg-zinc-900/50 border-white/10'}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                {t.highlight && <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">Terpopuler</span>}
              </div>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">{t.price}</span>
                <span className="text-white/60">{t.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-white/80"><Check size={18} className="text-yellow-400"/> {f}</li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg py-3 font-semibold transition ${t.highlight ? 'bg-gradient-to-r from-amber-400 to-yellow-600 text-black shadow-yellow-500/30 shadow-lg hover:brightness-110' : 'border border-white/20 hover:border-white/40'}`}>
                Pilih Paket
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', plan: 'Standar' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${backendBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Gagal mengirim')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '', plan: 'Standar' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 pattern-grid opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Hubungi Kami</h2>
            <p className="mt-4 text-white/70 max-w-prose">Tanyakan apapun tentang program, jadwal, atau kurikulum. Kami siap membantu memilih paket terbaik untuk Anda.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 p-4 bg-zinc-900/50">
                <div className="text-sm text-white/60">Respon Cepat</div>
                <div className="text-lg font-semibold">Senin - Sabtu, 08.00-21.00</div>
              </div>
              <div className="rounded-xl border border-white/10 p-4 bg-zinc-900/50">
                <div className="text-sm text-white/60">Saluran</div>
                <div className="text-lg font-semibold">Email & WhatsApp</div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-zinc-900 to-black p-6 shadow-xl shadow-yellow-500/10">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Nama</label>
                <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="w-full rounded-lg bg-black/40 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-500/60" placeholder="Nama lengkap" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Email</label>
                <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="w-full rounded-lg bg-black/40 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-500/60" placeholder="email@contoh.com" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">No. HP/WA</label>
                <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="w-full rounded-lg bg-black/40 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-500/60" placeholder="08xxxxxxxxxx" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Paket</label>
                <select value={form.plan} onChange={e=>setForm({...form, plan:e.target.value})} className="w-full rounded-lg bg-black/40 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-500/60">
                  <option>Pemula</option>
                  <option>Standar</option>
                  <option>Intensif</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/70 mb-1">Pesan</label>
                <textarea rows={4} value={form.message} onChange={e=>setForm({...form, message:e.target.value})} className="w-full rounded-lg bg-black/40 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-500/60" placeholder="Ceritakan kebutuhan belajar Anda" />
              </div>
            </div>
            <button disabled={status==='loading'} className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-600 text-black font-semibold shadow-yellow-500/30 shadow-lg hover:brightness-110 transition">
              <Send size={18} /> {status==='loading' ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
            {status==='success' && <p className="mt-3 text-green-400">Terima kasih! Pesan Anda sudah terkirim.</p>}
            {status==='error' && <p className="mt-3 text-red-400">Maaf, terjadi kesalahan. Coba lagi ya.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Kursus Tilawah Online. Semua hak cipta.</p>
        <div className="text-white/60 text-sm">Dibuat dengan cinta dan ketelitian tajwid.</div>
      </div>
    </footer>
  )
}

function PatternBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(234,179,8,0.12),_transparent_40%),_radial-gradient(circle_at_80%_0%,_rgba(250,204,21,0.12),_transparent_45%)]" />
      <svg className="absolute -right-10 -top-10 w-[520px] h-[520px] opacity-30 animate-slow-spin" viewBox="0 0 100 100" fill="none">
        <defs>
          <pattern id="geom" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M5 0 L10 5 L5 10 L0 5 Z" stroke="#facc15" strokeWidth="0.5" fill="none" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#geom)" />
      </svg>
    </div>
  )
}

function MuslimPatternCard() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-zinc-950 via-black to-zinc-900 grid place-items-center overflow-hidden">
      <svg className="absolute w-[160%] h-[160%] opacity-40 pattern-move" viewBox="0 0 200 200">
        <defs>
          <pattern id="stars" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <g stroke="#f59e0b" strokeWidth="0.6">
              <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="none" />
            </g>
          </pattern>
        </defs>
        <rect x="0" y="0" width="200" height="200" fill="url(#stars)" />
      </svg>
      <div className="relative z-10 text-center p-6">
        <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-amber-300 to-yellow-600 shadow-lg shadow-yellow-500/30 grid place-items-center">
          <Star className="text-black" />
        </div>
        <h3 className="mt-4 text-xl font-semibold">Belajar Nyaman dari Rumah</h3>
        <p className="mt-2 text-white/60 text-sm max-w-sm">Akses materi kapan saja, sesi live terjadwal, dan dukungan mentor melalui chat.</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  )
}
