import { useState, useEffect, useRef } from "react";

function Navbar({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-2 text-2xl font-bold text-rose-600 tracking-tight">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
              <span>BlooDrops</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/donation-requests" className="text-slate-600 hover:text-rose-600 font-medium transition">Donation Requests</a>
            {isLoggedIn && (
              <a href="/funding" className="text-slate-600 hover:text-rose-600 font-medium transition">Funding</a>
            )}

            {/* Auth Dependent Elements */}
            {!isLoggedIn ? (
              <a href="/login" className="bg-rose-600 hover:bg-rose-700 text-white px-5 py-2 rounded-md font-medium shadow-sm transition">
                Login
              </a>
            ) : (
              /* User Avatar Dropdown */
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  aria-haspopup="true"
                  aria-expanded={isProfileOpen}
                  className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                >
                  <img
                    className="h-9 w-9 rounded-full object-cover border-2 border-rose-100"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="User Profile"
                  />
                </button>
                {isProfileOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <a href="/dashboard" onClick={() => setIsProfileOpen(false)} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Dashboard</a>
                    <button onClick={() => { setIsProfileOpen(false); alert('Logging out...'); }} className="block w-full text-left px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 font-medium">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-rose-600 hover:bg-slate-100 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Open State */}
      {isOpen && (
        <div ref={menuRef} id="mobile-menu" className="md:hidden border-t border-slate-100 bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/requests" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-600">Donation Requests</a>
          {isLoggedIn && (
            <a href="/funding" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-600">Funding</a>
          )}

          <div className="border-t border-slate-100 my-2 pt-2">
            {!isLoggedIn ? (
              <a href="/login" onClick={() => setIsOpen(false)} className="block text-center bg-rose-600 text-white px-4 py-2 rounded-md font-medium">Login</a>
            ) : (
              <>
                <a href="/dashboard" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Dashboard</a>
                <button onClick={() => { setIsOpen(false); alert('Logging out...'); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-rose-600 hover:bg-rose-50">Logout</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;