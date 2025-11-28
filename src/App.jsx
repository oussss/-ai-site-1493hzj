import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ArrowRight, CheckCircle2, Building2, TrendingUp, ShieldCheck, Phone, Mail, MapPin, ChevronRight, Gavel, FileText, CreditCard, Home, Briefcase, Users } from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-primary' : 'text-white'}`}>
          ABC PLRS
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-bold uppercase tracking-wide transition-colors hover:text-neutral-400 ${isScrolled ? 'text-primary' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className={`px-6 py-2 rounded-md font-bold text-sm transition-all duration-300 ${isScrolled ? 'bg-primary text-white hover:bg-neutral-800' : 'bg-white text-primary hover:bg-neutral-200'}`}
          >
            Get Assessment
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-neutral-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-primary font-bold text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://source.unsplash.com/1600x900/?dubai,skyline,finance,corporate" 
          alt="Dubai Finance Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight"
        >
          Expert Debt Recovery Solutions<br/>for UAE Businesses
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-neutral-100 max-w-3xl mx-auto mb-10 font-light"
        >
          Recover your outstanding debts efficiently and compliantly with ABC PLRS. Specializing in B2B collections, repossessions, and dispute resolutions across the UAE finance sector.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-neutral-100 transition-all hover:scale-105 shadow-xl"
          >
            Request a Free Debt Assessment Today
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const values = [
    { title: "Integrity", desc: "We operate with full transparency and adherence to UAE regulations." },
    { title: "Expertise", desc: "Leveraging local knowledge and global best practices for superior results." },
    { title: "Client-Centric", desc: "Prioritizing your success through personalized strategies and clear communication." },
    { title: "Innovation", desc: "Embracing digital tools for efficient, secure debt management." }
  ];

  return (
    <section id="about" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Leading Compliant Debt Recovery</h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              At ABC PLRS, we are a leading professional debt recovery firm dedicated to helping UAE businesses, banks, and creditors reclaim what is rightfully theirs. With deep expertise in local regulations and ethical practices, we navigate the complexities of debt collection—from cheque bounces to asset repossessions—ensuring maximum recovery rates while maintaining compliance.
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Our digital-first approach leverages advanced tools for faster, transparent results. Trusted by major UAE financial institutions, we prioritize building long-term partnerships through reliability and results.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-neutral-200 shadow-sm">
                <CheckCircle2 className="text-semantic-success" size={20} />
                <span className="font-semibold text-primary">Compliant Recovery</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-neutral-200 shadow-sm">
                <CheckCircle2 className="text-semantic-success" size={20} />
                <span className="font-semibold text-primary">Proven Expertise</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-neutral-200 shadow-sm">
                <CheckCircle2 className="text-semantic-success" size={20} />
                <span className="font-semibold text-primary">Digital Efficiency</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 transform translate-x-4 translate-y-4 rounded-lg"></div>
            <img 
              src="https://source.unsplash.com/1200x800/?meeting,office,team,collaboration,dubai" 
              alt="ABC PLRS Team"
              className="rounded-lg shadow-2xl relative z-10 w-full"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <motion.div 
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
              <p className="text-neutral-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Asset Repossession",
      desc: "Secure recovery of vehicles, equipment, and other assets in default B2B deals, ensuring legal compliance.",
      icon: <Building2 className="w-10 h-10 text-primary" />,
      img: "https://source.unsplash.com/800x600/?car,keys,handover,vehicle",
      cta: "Schedule Consultation"
    },
    {
      title: "Default Account Recovery",
      desc: "Handle stuck or default accounts efficiently, from amicable negotiations to legal escalation.",
      icon: <FileText className="w-10 h-10 text-primary" />,
      img: "https://source.unsplash.com/800x600/?accounting,finance,calculator,money",
      cta: "Initiate Recovery"
    },
    {
      title: "Disputed Amounts",
      desc: "Resolve contested debts through mediation, arbitration, or litigation, focusing on fair settlements.",
      icon: <Gavel className="w-10 h-10 text-primary" />,
      img: "https://source.unsplash.com/800x600/?handshake,meeting,mediation,lawyer",
      cta: "Request Assessment"
    },
    {
      title: "Cheque Bounce Recovery",
      desc: "Recover unpaid invoices and handle cheque bounce cases via criminal or civil proceedings.",
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      img: "https://source.unsplash.com/800x600/?cheque,pen,banking,signature",
      cta: "File Your Claim"
    },
    {
      title: "Unpaid Salaries",
      desc: "Assist employers in recovering advances or loans, or help employees claim unpaid wages compliantly.",
      icon: <Users className="w-10 h-10 text-primary" />,
      img: "https://source.unsplash.com/800x600/?team,office,workers,corporate",
      cta: "Start Process"
    },
    {
      title: "Mortgage Collections",
      desc: "Manage overdue mortgage payments, real estate installments, and property-related debts with precision.",
      icon: <Home className="w-10 h-10 text-primary" />,
      img: "https://source.unsplash.com/800x600/?house,keys,real-estate,modern-home",
      cta: "Assess Debt"
    },
    {
      title: "Trade & Bank Debts",
      desc: "Comprehensive recovery for trade debts, credit card defaults, and bank loans, including dispute settlements.",
      icon: <CreditCard className="w-10 h-10 text-primary" />,
      img: "https://source.unsplash.com/800x600/?credit-card,payment,banking,finance",
      cta: "Launch Recovery"
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight">Comprehensive Recovery Services</h2>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto">Tailored solutions for every debt scenario, protecting your interests with strict UAE compliance.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden relative">
                 <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                 <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
                <a href="#contact" className="inline-flex items-center text-primary font-bold text-sm hover:text-semantic-info transition-colors">
                  {service.cta} <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Major Bank Cheque Bounce Recovery",
      stats: "AED 2.5M Recovered",
      desc: "Recovered AED 2.5 million in bounced cheques for a leading UAE bank through swift civil proceedings, achieving 95% success rate within 6 months.",
      img: "https://source.unsplash.com/800x600/?bank,finance,building,dubai"
    },
    {
      title: "B2B Asset Repossession",
      stats: "AED 1.8M Assets Secured",
      desc: "Repossessed vehicles worth AED 1.8 million for a Dubai-based firm, minimizing losses and ensuring full compliance with local laws.",
      img: "https://source.unsplash.com/800x600/?truck,construction,industrial,vehicle"
    },
    {
      title: "Real Estate Dispute Settlement",
      stats: "AED 3M Resolved",
      desc: "Resolved AED 3 million in installment disputes via mediation, restoring cash flow and preserving client relationships.",
      img: "https://source.unsplash.com/800x600/?architecture,building,real-estate,modern"
    },
    {
      title: "Retail Trade Debt Collection",
      stats: "90% Recovery Rate",
      desc: "Collected overdue invoices totaling AED 4.2 million from suppliers, using digital tools for transparent tracking and 90% recovery.",
      img: "https://source.unsplash.com/800x600/?retail,store,shopping,mall"
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Success Stories</h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Discover how ABC PLRS has delivered results for clients across the UAE finance sector. Real outcomes that build trust.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row bg-neutral-800 rounded-xl overflow-hidden hover:bg-neutral-700 transition-colors duration-300"
            >
              <div className="md:w-2/5">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <div className="text-semantic-info font-bold mb-2 uppercase tracking-wider text-sm">{project.stats}</div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-primary text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Ready to Recover Your Debts?</h2>
            <p className="text-lg text-neutral-300 mb-10 leading-relaxed">
              Our team is here to provide a no-obligation assessment of your debt recovery needs. With offices in Dubai and Abu Dhabi, we serve clients across the UAE. Share your details, and we'll respond within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Call Us</p>
                  <p className="font-bold text-lg">+971 4 123 4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Email Us</p>
                  <p className="font-bold text-lg">recovery@abcplrs.ae</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Visit Us</p>
                  <p className="font-bold text-lg">Downtown Dubai, UAE</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Submit Your Inquiry Now</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:outline-none text-neutral-900" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:outline-none text-neutral-900" placeholder="Company LLC" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:outline-none text-neutral-900" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:outline-none text-neutral-900">
                  <option>General Debt Recovery</option>
                  <option>Asset Repossession</option>
                  <option>Cheque Bounce</option>
                  <option>Real Estate Dispute</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:outline-none text-neutral-900" placeholder="Describe your case..."></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-lg shadow-lg hover:bg-neutral-800 transition-all hover:shadow-xl transform hover:-translate-y-1">
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-neutral-900 text-neutral-400 py-12 border-t border-neutral-800">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-center md:text-left">
        <h4 className="text-white font-black text-2xl mb-2">ABC PLRS</h4>
        <p className="text-sm">© 2024 ABC PLRS. All rights reserved. <br/>Licensed Debt Recovery Firm in UAE.</p>
      </div>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-white transition-colors">Compliance</a>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="font-sans text-neutral-900 bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;