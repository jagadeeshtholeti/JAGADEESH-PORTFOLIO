export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Let's Work </span>
            <span className="text-accent-yellow">Together</span>
          </h2>
          <p className="text-text-gray text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
            Ready to bring your next project to life? I'm always excited to collaborate on innovative frontend solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:jagadeeshtholeti@gmail.com" 
              className="bg-accent-yellow text-dark-bg px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300"
              data-testid="button-send-email"
            >
              <i className="fas fa-envelope mr-3"></i>
              Send Email
            </a>
            <a 
              href="tel:+918639307409" 
              className="btn-secondary border-2 border-accent-yellow text-accent-yellow px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center"
              data-testid="button-phone"
            >
              <i className="fas fa-phone mr-3"></i>
              Call Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}