import { useState } from "react";

function ContactSection() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message sent. We'll respond shortly.");
    // keep UI-only behavior; show polite live region for assistive tech
    setTimeout(() => setStatus("") , 5000);
  };

  return (
    <section className="bg-slate-100/80 py-20 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Info Side */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Get in touch with us</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-md">
              Have questions about eligibility, hosting drive campaigns, or corporate sponsorships? Drop a message or reach out over our direct lines.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-rose-600">
                  <svg aria-hidden="true" focusable="false" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Phone Helpline</p>
                  <p className="text-slate-800 font-medium">+1 (555) 234-5678</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-rose-600">
                  <svg aria-hidden="true" focusable="false" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Headquarters</p>
                  <p className="text-slate-800 font-medium">89 Pulse Avenue, Crimson Suite 400, NY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/50">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input id="contact-name" name="name" type="text" required placeholder="John Doe" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition" />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input id="contact-email" name="email" type="email" required placeholder="john@example.com" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition" />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea id="contact-message" name="message" rows={4} required placeholder="How can we help you?" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 rounded-lg transition shadow-sm">
                Send Message
              </button>
              <p role="status" aria-live="polite" className="sr-only">{status}</p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

  export default ContactSection;