export function ConceptFlow() {
  const steps = [
    {
      number: "01",
      title: "Ideate",
      description: "Start with your creative vision or use AI to generate inspiring concepts",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "02", 
      title: "Design",
      description: "Use our intuitive tools to bring your ideas to life with precision",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "03",
      title: "Enhance",
      description: "Apply AI-powered effects, filters, and optimizations automatically",
      color: "from-green-500 to-teal-500"
    },
    {
      number: "04",
      title: "Share",
      description: "Export and share your creations across all platforms seamlessly",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tight mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined creative process transforms your ideas into stunning visuals in just four simple steps.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-200 via-blue-200 to-green-200 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                    <span className="text-white text-xl">{step.number}</span>
                  </div>
                  
                  <h3 className="text-2xl mb-4 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}