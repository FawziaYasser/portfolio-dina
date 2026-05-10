export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-white/80">Ebtsam Amin Fakhry</div>
            <div className="text-xs text-white/50 mt-1">Procurement Engineer • Electrical Power Engineer</div>
          </div>

          <div className="text-xs text-white/45">
            © {new Date().getFullYear()} • Built with React + Vite + Tailwind
          </div>
        </div>
      </div>
    </footer>
  )
}

