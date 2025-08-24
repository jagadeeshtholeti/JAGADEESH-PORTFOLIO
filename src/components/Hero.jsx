import profileImage from '@assets/profile.jpg';
import resumePdf from '@assets/resume.pdf';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <p className="text-text-gray text-lg font-medium">
                Hello, I'm <span className="text-accent-yellow font-semibold">Jagadeesh Tholeti</span>
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="hero-text">React.js Developer</span><br />
                <span className="text-accent-yellow leading-[1.5]">Expertise In AEM</span>
              </h1>
              <p className="text-text-gray text-lg leading-relaxed max-w-lg">
                Passionate React.js Developer with 2+ years of experience building scalable web applications and AEM components for major brands and enterprises.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+918639307409"
                className="bg-accent-yellow text-dark-bg px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300"
                data-testid="button-hire-me"
              >
                <i className="fas fa-rocket mr-2"></i>
                Hire Me
              </a>
              <a 
                href={resumePdf}
                download="Jagadeesh_Tholeti_Resume.pdf"
                className="btn-secondary border-2 border-accent-yellow text-accent-yellow px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center"
                data-testid="button-download-cv"
              >
                <i className="fas fa-download mr-2"></i>
                Download CV
              </a>
            </div>
            
            {/* Quick Stats */}
            <div className="flex space-x-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-yellow" data-testid="stat-projects">10+</div>
                <div className="text-text-gray text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-yellow" data-testid="stat-clients">5+</div>
                <div className="text-text-gray text-sm">Major Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-yellow" data-testid="stat-experience">2+</div>
                <div className="text-text-gray text-sm">Years Exp.</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-accent-yellow animate-scale-in">
                <img 
                  src={profileImage} 
                  alt="Jagadeesh Tholeti - React.js Developer"
                  className="w-full h-full object-cover object-center"
                  style={{objectPosition: 'center 20%'}}
                />
              </div>
              {/* Floating tech icons */}
              <div className="absolute -top-4 -right-4 bg-accent-yellow text-dark-bg p-3 rounded-full animate-bounce">
                <i className="fab fa-react text-xl"></i>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}>
                <i className="fab fa-js-square text-xl"></i>
              </div>
              <div className="absolute top-1/2 -right-8 bg-green-500 text-white p-2 rounded-full animate-bounce" style={{animationDelay: '1s'}}>
                <i className="fab fa-node-js text-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}