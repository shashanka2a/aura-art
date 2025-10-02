export function MarketDifferentiators() {
  const marketStats = [
    {
      value: "$1.7B",
      label: "Content Creation Market Size",
      description: "Growing at 13.9% annually as businesses prioritize visual content",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      value: "78%",
      label: "of Marketers Create Visual Content",
      description: "Yet 65% struggle with design tools that are too complex or expensive",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      value: "4.2B",
      label: "Daily Social Media Users",
      description: "All consuming visual content, creating massive demand for creators",
      gradient: "from-green-500 to-teal-500"
    },
    {
      value: "94%",
      label: "Higher Engagement with Visuals",
      description: "Visual content performs dramatically better than text-only posts",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const opportunities = [
    {
      title: "Massive Creator Economy",
      description: "50M+ creators worldwide need better, faster content creation tools",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "SMB Digital Transformation",
      description: "32M small businesses are moving online and need professional content",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Platform Proliferation",
      description: "New social platforms emerge constantly, each requiring unique formats",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tight mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            Massive Market Opportunity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're positioned at the intersection of explosive growth in content creation, social media, and small business digitization.
          </p>
        </div>
        
        {/* Market Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {marketStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className={`text-3xl md:text-4xl mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <h3 className="text-lg mb-3">{stat.label}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Market Opportunities */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <h3 className="text-2xl md:text-3xl mb-8 text-center">Why Now?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white">
                  {opportunity.icon}
                </div>
                <h4 className="text-xl mb-4">{opportunity.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {opportunity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}