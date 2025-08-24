export default function Services() {
  const services = [
    {
      id: 'react-development',
      title: 'React Development',
      description: 'Build modern, scalable React applications with optimal performance and user experience.',
      icon: 'fab fa-react',
      color: 'bg-blue-500'
    },
    {
      id: 'aem-development',
      title: 'AEM Development',
      description: 'Create custom AEM components and templates for enterprise content management solutions.',
      icon: 'fab fa-adobe',
      color: 'bg-red-500'
    },
    {
      id: 'nodejs-development',
      title: 'Node.js Development',
      description: 'Develop robust backend APIs and server-side applications using Node.js runtime environment.',
      icon: 'fab fa-node-js',
      color: 'bg-green-500'
    },
    {
      id: 'express-development',
      title: 'Express.js Development',
      description: 'Build fast and scalable web applications and APIs using Express.js framework.',
      icon: 'fas fa-server',
      color: 'bg-gray-600'
    },
    {
      id: '3d-experiences',
      title: '3D Experiences',
      description: 'Develop interactive 3D web experiences using Three.js and WebGL technologies.',
      icon: 'fas fa-cube',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">My </span>
            <span className="text-accent-yellow">Services</span>
          </h2>
          <p className="text-text-gray text-lg max-w-3xl mx-auto leading-relaxed">
            Comprehensive frontend development solutions tailored to your business needs and goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-dark-card p-8 rounded-2xl border border-gray-700 hover:border-accent-yellow transition-all duration-300 animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
              data-testid={`service-card-${service.id}`}
            >
              <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4" data-testid={`service-title-${service.id}`}>
                {service.title}
              </h3>
              <p className="text-text-gray leading-relaxed" data-testid={`service-description-${service.id}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}