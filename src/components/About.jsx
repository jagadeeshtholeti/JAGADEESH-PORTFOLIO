export default function About() {
  const skills = [
    { name: 'React.js & JavaScript', percentage: 95 },
    { name: 'AEM & CMS Development', percentage: 90 },
    { name: 'CSS3 & SCSS', percentage: 92 }
  ];

  const techStack = [
    { name: 'React.js', icon: 'fab fa-react', color: 'text-blue-400' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: 'text-yellow-400' },
    { name: 'AEM', icon: 'fab fa-adobe', color: 'text-red-400' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-400' },
    { name: 'SCSS', icon: 'fab fa-sass', color: 'text-pink-400' },
    { name: 'HTL', icon: 'fas fa-code', color: 'text-purple-400' }
  ];

  return (
    <section id="about" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-white">About </span>
              <span className="text-accent-yellow">Me</span>
            </h2>
            <div className="space-y-6 text-text-gray text-lg leading-relaxed">
              <p>
                I'm a passionate React.js Developer with <span className="text-accent-yellow font-semibold">2+ years of experience</span> 
                building scalable web applications and AEM components for major brands and enterprises.
              </p>
              <p>
                Highly proficient in <span className="text-white font-semibold">React.js, AEM, and Node.js</span>, 
                I specialize in creating intuitive, user-centric, and responsive interfaces with modern frontend technologies.
              </p>
              <p>
                My AEM expertise includes <span className="text-accent-yellow font-semibold">OSGI configuration, HTL (Sightly), dialog creation, style system, templates, experience fragments, content fragments, and MSM</span>. 
                I'm committed to delivering innovative solutions that combine React's flexibility with AEM's powerful content management capabilities.
              </p>
            </div>
            
            {/* Skills Progress */}
            <div className="mt-12 space-y-6">
              {skills.map((skill, index) => (
                <div key={index} data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-accent-yellow font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-accent-yellow to-orange-500 h-2 rounded-full" 
                      style={{width: `${skill.percentage}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tech Stack Visual */}
          <div className="animate-scale-in">
            <div className="grid grid-cols-3 gap-6">
              {techStack.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-dark-card p-6 rounded-2xl text-center border border-gray-700 hover:border-accent-yellow transition-colors duration-300"
                  data-testid={`tech-card-${tech.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                >
                  <i className={`${tech.icon} text-4xl ${tech.color} mb-4`}></i>
                  <h4 className="text-white font-semibold">{tech.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}