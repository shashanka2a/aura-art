import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Abstract aura rings */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent">
                Create Stunning,
                <br />
                Perfectly Formatted Content
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
                The perfect hybrid of Unfold's beautiful templates, Picsart's AI magic, and flawless formatting ratios. Create scroll-stopping content in seconds.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                Start Creating Now
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 px-8 py-6 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                See Examples
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl">2M+</div>
                <div className="text-sm text-gray-500">Content Pieces</div>
              </div>
              <div className="text-center">
                <div className="text-2xl">95%</div>
                <div className="text-sm text-gray-500">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl">4.9★</div>
                <div className="text-sm text-gray-500">User Rating</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758599881121-c31bde092252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRpb24lMjBtb2JpbGUlMjBwaG9uZXxlbnwxfHx8fDE3NTk0MDkwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Content creation on mobile"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-3xl blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}