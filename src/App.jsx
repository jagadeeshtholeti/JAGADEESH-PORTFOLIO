import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ClientWork from './components/ClientWork';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-dark-bg font-poppins text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <ClientWork />
      <About />
      <Services />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 bg-dark-card border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-text-gray mb-4 md:mb-0">
              © 2024 Jagadeesh Tholeti. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a 
                href="mailto:jagadeeshtholeti@gmail.com" 
                className="text-text-gray hover:text-accent-yellow transition-colors duration-300"
                data-testid="link-email"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a 
                href="tel:+918639307409" 
                className="text-text-gray hover:text-accent-yellow transition-colors duration-300"
                data-testid="link-phone"
              >
                <i className="fas fa-phone text-xl"></i>
              </a>
              <a 
                href="https://github.com/jagadeeshtholeti" 
                className="text-text-gray hover:text-accent-yellow transition-colors duration-300"
                data-testid="link-github"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;