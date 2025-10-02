import { Button } from "./ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Stop Struggling with Content Creation
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
            Join thousands of creators who've already discovered the easiest way to make stunning, perfectly formatted content. Your audience is waiting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              Create Your First Post
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600 px-10 py-6 rounded-2xl transition-all duration-300">
              See Live Demo
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-lg opacity-90">Start creating instantly</div>
              <div className="text-sm opacity-70">No signup required to try</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎨</div>
              <div className="text-lg opacity-90">500+ templates included</div>
              <div className="text-sm opacity-70">New ones added weekly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📱</div>
              <div className="text-lg opacity-90">All platforms supported</div>
              <div className="text-sm opacity-70">Instagram, TikTok, LinkedIn & more</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}