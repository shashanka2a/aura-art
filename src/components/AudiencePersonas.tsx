import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AudiencePersonas() {
  const personas = [
    {
      name: "Social Media Influencers",
      description: "Instagram, TikTok, and YouTube creators who need consistently stunning content to grow their audience and maintain engagement.",
      image: "https://images.unsplash.com/photo-1676276375742-9e3d10e39d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHRlbXBsYXRlcyUyMGRlc2lnbnxlbnwxfHx8fDE3NTk0MDkwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: ["3x higher engagement", "500+ viral-ready templates", "Instant platform optimization"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Small Business Owners",
      description: "Entrepreneurs who need professional marketing materials but don't have the budget for a full design team or agency.",
      image: "https://images.unsplash.com/photo-1645385890999-43dcd4f4a703?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwZGVzaWduZXJ8ZW58MXx8fHwxNTU5NDA5MDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: ["90% cost reduction", "Brand consistency guaranteed", "No design skills required"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Content Marketers",
      description: "Marketing professionals at agencies and companies who need to produce high-volume, on-brand content quickly and efficiently.",
      image: "https://images.unsplash.com/photo-1621184078811-1120e2f1fc9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBzdG9yaWVzJTIwY3JlYXRvcnxlbnwxfHx8fDE3NTk0MDkwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: ["5x faster content production", "Campaign-ready templates", "Team collaboration tools"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tight mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            Made for Creators Like You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From influencers to entrepreneurs, our platform empowers every type of content creator to produce scroll-stopping visuals.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden h-64">
                <ImageWithFallback 
                  src={persona.image}
                  alt={persona.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${persona.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl mb-4">{persona.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {persona.description}
                </p>
                
                <div className="space-y-3">
                  {persona.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center gap-3">
                      <div className={`w-6 h-6 bg-gradient-to-br ${persona.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}