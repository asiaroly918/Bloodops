function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Logo */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-xl font-bold text-white tracking-tight mb-4">
              <svg aria-hidden="true" focusable="false" className="w-6 h-6 text-rose-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
              <span>Bloodops</span>
            </div>
            <p className="text-sm max-w-sm text-slate-400 leading-relaxed">
              Empowering communities and optimizing safe medical responses by bringing donors and recipients into closer unity.
            </p>
          </div>

          {/* Col 2: Useful Links */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/requests" className="hover:text-white transition">Find Requests</a></li>
              <li><a href="/eligibility" className="hover:text-white transition">Eligibility Rules</a></li>
              <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Col 3: Social Icons */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* X Logo */}
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition" aria-label="X (formerly Twitter)">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Facebook Icon */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Bloodops. All rights reserved.</p>
          <p>Built with <span aria-hidden="true">❤️</span> for humanity.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;