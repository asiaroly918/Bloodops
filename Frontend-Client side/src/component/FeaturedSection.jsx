function FeaturedSection() {
  const cards = [
    {
      title: "How It Works",
      description: "Register in under 2 minutes, look for compatible requests in your geographical radius, and set a date to donate.",
      icon: (
        <svg aria-hidden="true" focusable="false" className="w-8 h-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Why Donate?",
      description: "A single unit of blood saves up to three lives. Your contribution actively addresses emergencies, surgeries, and chronic illnesses.",
      icon: (
        <svg aria-hidden="true" focusable="false" className="w-8 h-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Our Impact",
      description: "Over 12,000 requests processed with a 94% fulfillment rate via an enthusiastic network of local regular heroes.",
      icon: (
        <svg aria-hidden="true" focusable="false" className="w-8 h-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Making a Difference Together</h2>
        <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">We use modern technology to eliminate traditional friction points in crucial blood donation supply lines.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100 flex flex-col items-start">
            <div className="p-3 bg-rose-50 rounded-xl mb-6">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedSection;