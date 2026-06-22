function HeroSection() {
  return (
    <header className="relative bg-gradient-to-br from-rose-900 via-rose-800 to-red-950 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background grid pattern for depth */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="relative max-w-5xl mx-auto text-center z-10">
        <span className="inline-block bg-rose-500/20 text-rose-300 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 border border-rose-500/30">
          Save Lives Today
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Your gift of blood can create <br className="hidden sm:inline" />
          <span className="text-rose-300">a second chance</span> at life.
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-rose-100/90 mb-10 leading-relaxed">
          Bloodops connects generous blood donors with local recipients and requests smoothly, quickly, and securely. Every drop matters.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/register" aria-label="Join as a donor" className="w-full sm:w-auto bg-white text-rose-900 hover:bg-rose-50 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 text-center">
            Join as a Donor
          </a>
          <a href="/search" aria-label="Search donors" className="w-full sm:w-auto border-2 border-white/80 hover:border-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition text-center">
            Search Donors
          </a>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;