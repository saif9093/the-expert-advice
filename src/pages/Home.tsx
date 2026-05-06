import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, Star, Phone, MessageCircle,
  Briefcase, GraduationCap, TrendingUp, FileCheck, Users, MapPin,
  Award, Shield, ThumbsUp, UserCheck, ChevronRight, ChevronLeft
} from 'lucide-react';
import { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { services } from '../data/services';
import { countries } from '../data/countries';

const iconMap: Record<string, React.ElementType> = {
  Briefcase, GraduationCap, TrendingUp, FileCheck, Users, MapPin,
};

const stats = [
  { value: '5,000+', label: 'Successful Cases' },
  { value: '15+', label: 'Years Experience' },
  { value: '40+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

const whyUs = [
  {
    icon: Award,
    title: 'Experienced Consultants',
    desc: 'Our team holds RCICs and other recognized certifications with over a decade of proven results.',
  },
  {
    icon: Shield,
    title: 'Transparent Process',
    desc: 'No hidden fees, clear timelines, and regular updates at every stage of your application.',
  },
  {
    icon: ThumbsUp,
    title: 'High Success Rate',
    desc: 'Over 95% of our applications are approved first-time, backed by thorough preparation.',
  },
  {
    icon: UserCheck,
    title: 'Personalized Guidance',
    desc: 'Every client receives a dedicated consultant and a strategy built for their unique profile.',
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Lagos, Nigeria',
    service: 'Canada PR',
    text: 'The Expert Advice made my Canada PR journey seamless. Within 14 months I had my permanent residency. Their team was available every step of the way.',
    rating: 5,
  },
  {
    name: 'James O.',
    location: 'Accra, Ghana',
    service: 'UK Work Permit',
    text: 'I was skeptical at first, but their consultants guided me through every document. I now have my UK work permit and started my new role.',
    rating: 5,
  },
  {
    name: 'Priya K.',
    location: 'Mumbai, India',
    service: 'Australia Study Visa',
    text: 'Got my Australia study visa in record time. The team knew exactly what was needed and my application was approved first try.',
    rating: 5,
  },
];

const heroSlides = [
  {
    image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg',
    title: 'Start Your Immigration',
    titleAccent: 'Journey Today',
    description: 'Expert guidance for visas, work permits, and global opportunities. We simplify the process so you can focus on your future.',
    badge: 'Trusted by 5,000+ immigrants worldwide'
  },
  {
    image: '/1.png',
    title: "Secure Your Family's Future",
    titleAccent: 'With a Second Passport',
    description: 'Whether you are a businessman, a frequent international traveller, or want better security for your family, you will significantly benefit from obtaining a second citizenship.',
    badge: 'Global Mobility & Security'
  },
  {
    image: '/2.png',
    title: 'Best Migration Services',
    titleAccent: 'Consultancy in Dubai',
    description: 'We are one of the most trusted and knowledgeable Migration consultants based in Dubai. We are ready to make your Dreams Possible.',
    badge: 'Expertise based in Dubai, UAE'
  },
  {
    image: '/3.png',
    title: 'Unlock Global',
    titleAccent: 'Career Opportunities',
    description: 'Navigate the complex process of skilled visas and work permits with our expert guidance. Your professional future starts here.',
    badge: 'Skilled Visas & Work Permits'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div>
      {/* HERO SLIDER */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover ${
                  index === currentSlide ? 'animate-kenburns' : ''
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/60 to-navy-950/30" />
            </div>
            
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center pt-24 pb-20">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-300 text-sm font-medium px-4 py-2 rounded-full mb-6 animate-fadeIn">
                  <CheckCircle className="w-4 h-4" />
                  {slide.badge}
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                  {slide.title}
                  <span className="block text-gold-400">{slide.titleAccent}</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-12">
                  <a href="#eligibility" className="btn-primary text-base px-7 py-3.5">
                    Check Eligibility
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link to="/contact" className="btn-secondary text-base px-7 py-3.5">
                    Book Consultation
                  </Link>
                </div>
                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-2xl font-display font-bold text-gold-400">{s.value}</p>
                      <p className="text-sm text-gray-400">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <div className="absolute inset-x-0 bottom-20 z-20 flex justify-center items-center gap-8">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors hidden sm:block"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === currentSlide ? 'bg-gold-500 w-8' : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors hidden sm:block"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-20 hidden md:block">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-2">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900">Our Immigration Services</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-lg">
              Comprehensive visa and immigration solutions tailored to your goals and profile.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="card-hover p-6 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-navy-50 group-hover:bg-navy-800 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-navy-800 group-hover:text-gold-400 transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                  <span className="inline-flex items-center gap-1.5 text-navy-700 text-sm font-semibold group-hover:gap-2.5 transition-all">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-2">Destinations</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900">Where We Can Take You</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-lg">
              We specialize in immigration to the world's most sought-after destinations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country) => (
              <Link
                key={country.id}
                to={`/destinations/${country.slug}`}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl mb-1">{country.flag}</p>
                      <h3 className="text-white font-display font-bold text-xl">{country.name}</h3>
                      <p className="text-gray-300 text-sm">{country.visaTypes.length} visa categories</p>
                    </div>
                    <div className="w-9 h-9 bg-gold-500 group-hover:bg-gold-400 rounded-full flex items-center justify-center transition-colors">
                      <ArrowRight className="w-4 h-4 text-navy-950" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/destinations" className="btn-outline">
              Explore All Destinations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500 rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm tracking-wider uppercase mb-2">Our Edge</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Why Choose The Expert Advice?</h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-lg">
              We combine expertise, transparency, and genuine care to deliver results others can't match.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center p-6 rounded-2xl border border-navy-800 hover:border-gold-500/40 hover:bg-navy-900 transition-all duration-300">
                <div className="w-14 h-14 bg-navy-800 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-white font-display font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-2">Success Stories</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900">What Our Clients Say</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-lg">
              Real stories from real clients who trusted us with their immigration journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-hover p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 bg-navy-100 rounded-full flex items-center justify-center font-semibold text-navy-800">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.location} · {t.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/testimonials" className="btn-outline">
              Read More Stories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY FORM */}
      <section id="eligibility" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-2">Free Assessment</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
                Check Your Eligibility
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Fill out our quick eligibility form and one of our expert consultants will reach out within 24 hours with a personalized assessment.
              </p>
              <ul className="space-y-3">
                {['Free initial assessment', 'Response within 24 hours', 'No obligation', 'Expert consultant assigned'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-100">
                <a href="tel:+97148873662" className="flex items-center gap-2 text-navy-800 font-semibold hover:text-navy-600 transition-colors">
                  <Phone className="w-5 h-5" />
                  +971 4 8873662
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-500 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-display font-semibold text-navy-900 mb-6">Get Your Free Assessment</h3>
              <ContactForm formType="eligibility" showCountry />
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
            alt="Start your journey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/85" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Start Your Process Today
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Don't let the complexity of immigration hold you back. Our team is ready to guide you every step of the way.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+97148873662"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-md transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-md transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
