export default function ClientWork() {
  const clients = [
    {
      id: 'royal-enfield',
      name: 'Royal Enfield',
      category: 'Motorcycle PDP & Flying Flea',
      description: 'Developed AEM components for Flying Flea project and Motorcycle PDP with custom dialog boxes, content fragments, and 3D interactive 404 error page using Three.js.',
      technologies: ['AEM', 'HTL', 'JavaScript', 'SCSS', 'Three.js'],
      link: 'https://author1apsouth1.stage.royalenfield.adobecqms.net/content/royal-enfield/in/en/motorcycles/p4a-india-demo.html',
      icon: 'fas fa-motorcycle',
      iconBg: 'bg-red-600'
    },
    {
      id: 'volkswagen',
      name: 'Volkswagen',
      category: 'Event Platform Components',
      description: 'Architected React-based components for Volkswagen event platform with responsive navigation, search functionality, multi-language support, and modal-based authentication.',
      technologies: ['React', 'HTML', 'SCSS', 'JavaScript'],
      link: 'https://thelabs.22feettribalworldwide.com/vw-event/',
      icon: 'fas fa-car',
      iconBg: 'bg-blue-600'
    },
    {
      id: 'flipkart',
      name: 'Flipkart',
      category: 'Valentine\'s Day Campaign',
      description: 'Built campaign landing page for Flipkart Valentine\'s Day "Rift to Gift" initiative using vanilla JavaScript, CSS3 animations, and responsive design.',
      technologies: ['HTML', 'SCSS', 'JavaScript', 'CSS'],
      link: 'https://rifttogift.com/',
      icon: 'fas fa-shopping-cart',
      iconBg: 'bg-orange-500'
    },
    {
      id: 'lumina',
      name: 'Lumina',
      category: 'Marketing Website',
      description: 'Developed WordPress-integrated marketing pages utilizing custom PHP templates, JavaScript interactivity, and CSS Grid/Flexbox layouts with backend API integration.',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
      link: 'https://thelabs.22feettribalworldwide.com/lumina/',
      icon: 'fas fa-lightbulb',
      iconBg: 'bg-purple-600'
    },
    {
      id: 'ddb-mudra',
      name: 'DDB Mudra',
      category: 'Digital Agency Solutions',
      description: 'Implemented comprehensive frontend solutions and component libraries for multiple advertising campaigns and client projects at leading digital agency.',
      technologies: ['Frontend', 'JavaScript', 'HTML', 'CSS'],
      link: 'https://ddbmudragroup.com',
      icon: 'fas fa-bullhorn',
      iconBg: 'bg-green-600'
    }
  ];

  return (
    <section id="clients" className="py-20 bg-gradient-to-b from-dark-bg to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Client </span>
            <span className="text-accent-yellow">Work</span>
          </h2>
          <p className="text-text-gray text-lg max-w-3xl mx-auto leading-relaxed">
            Delivering high-quality frontend solutions for major brands and enterprises. 
            Each project represents a unique challenge solved with modern technologies and innovative approaches.
          </p>
        </div>
        
        {/* Client Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div 
              key={client.id}
              className="client-card p-8 rounded-2xl border border-gray-700 animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
              data-testid={`card-client-${client.id}`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${client.iconBg} rounded-xl flex items-center justify-center mr-4`}>
                  <i className={`${client.icon} text-white text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white" data-testid={`text-client-name-${client.id}`}>
                    {client.name}
                  </h3>
                  <p className="text-text-gray text-sm">{client.category}</p>
                </div>
              </div>
              
              <p className="text-text-gray mb-6 leading-relaxed" data-testid={`text-client-description-${client.id}`}>
                {client.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {client.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="tech-badge px-3 py-1 rounded-full text-xs font-medium text-accent-yellow"
                    data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={client.link} 
                target={client.link.startsWith('http') ? '_blank' : '_self'}
                rel={client.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="inline-flex items-center text-accent-yellow hover:text-white transition-colors duration-300 font-medium"
                data-testid={`link-client-${client.id}`}
              >
                <span>{client.link.startsWith('http') ? 'View Live' : 'Learn More'}</span>
                <i className={`fas ${client.link.startsWith('http') ? 'fa-external-link-alt' : 'fa-arrow-right'} ml-2 text-sm`}></i>
              </a>
            </div>
          ))}
          
          {/* Additional Skills Showcase Card */}
          <div className="client-card p-8 rounded-2xl border border-gray-700 animate-scale-in bg-gradient-to-br from-dark-card to-gray-800" style={{animationDelay: '0.5s'}}>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-yellow to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-plus text-dark-bg text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">More Projects</h3>
              <p className="text-text-gray mb-6 leading-relaxed">
                Interested in seeing more of my work? Let's discuss your next project and how I can help bring it to life.
              </p>
              <button 
                className="bg-accent-yellow text-dark-bg px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
                data-testid="button-lets-talk"
              >
                <i className="fas fa-comment-dots mr-2"></i>
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}