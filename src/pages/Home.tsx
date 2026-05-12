import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, Phone,
  Briefcase, GraduationCap, TrendingUp, FileCheck, Users, MapPin,
  Award, Shield, ThumbsUp, UserCheck, ChevronRight, ChevronLeft,
  ClipboardList, Search, FileText, Send, Star
} from 'lucide-react';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
import { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { services } from '../data/services';
import { countries } from '../data/countries';

const iconMap: Record<string, React.ElementType> = {
  Briefcase, GraduationCap, TrendingUp, FileCheck, Users, MapPin,
};

const stats = [
  { value: '5,000+', label: 'Successful Cases' },
  { value: '10+', label: "Years' Experience" },
  { value: '40+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

const whyUs = [
  {
    icon: Award,
    title: 'Expert Immigration Advisors',
    desc: 'Our experienced consultants understand complex immigration pathways and provide reliable solutions tailored to your goals. We stay updated with changing policies to guide you with confidence and clarity.',
  },
  {
    icon: Shield,
    title: 'Complete End-to-End Assistance',
    desc: 'From eligibility assessment to documentation and final submission, we support you throughout the entire process. Our team ensures a smooth and hassle-free immigration experience at every stage.',
  },
  {
    icon: ThumbsUp,
    title: 'Tailored Migration Strategies',
    desc: 'Every client\'s profile is unique, which is why we create customized plans based on your background and aspirations. We focus on identifying the best possible pathway for your success.',
  },
  {
    icon: UserCheck,
    title: 'Dedicated Personal Guidance',
    desc: 'We believe in personalized support, transparent communication, and one-on-one consultation for every applicant. Our experts are committed to helping you make informed decisions with confidence.',
  },
];

const processSteps = [
  {
    number: '01',
    icon: Phone,
    title: 'Initial Consultation',
    desc: 'Connect with our immigration experts to discuss your goals, profile, and preferred destination. We help you understand the best pathways available for your future plans.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Profile Evaluation',
    desc: 'Our team carefully reviews your qualifications, work experience, and eligibility criteria. This helps us identify the most suitable immigration program for your profile.',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Documentation Assistance',
    desc: 'We guide you through the complete documentation and verification process with accuracy and care. Our experts ensure your application meets all required standards and compliance guidelines.',
  },
  {
    number: '04',
    icon: Send,
    title: 'Application Processing',
    desc: 'Once everything is prepared, we handle the submission and follow-up procedures efficiently. We keep you informed throughout every stage of the application process.',
  },
  {
    number: '05',
    icon: Star,
    title: 'Visa Success & Settlement Support',
    desc: 'After approval, we continue assisting you with relocation guidance and next steps for a smooth transition. Our goal is to help you begin your new journey with confidence and peace of mind.',
  },
];

const heroSlides = [
  {
    image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg',
    badge: 'Trusted by Thousands Worldwide',
    title: 'Your Global Future',
    titleAccent: 'Starts Here',
    description: 'Expert guidance for immigration, visas, and overseas opportunities designed to help you move forward with confidence.',
    buttons: [
      { label: 'Check Eligibility', href: '#eligibility', primary: true },
      { label: 'Book Consultation', href: '/contact', primary: false },
    ],
  },
  {
    image: '/2.png',
    badge: 'Dubai-Based Immigration Experts',
    title: 'Smart Migration Solutions',
    titleAccent: 'Tailored for You',
    description: 'From profile evaluation to visa processing, our specialists provide transparent and reliable support for your international goals.',
    buttons: [
      { label: 'Free Profile Assessment', href: '#eligibility', primary: true },
      { label: 'Speak to an Expert', href: '/contact', primary: false },
    ],
  },
  {
    image: '/1.png',
    badge: 'Global Security & Freedom',
    title: 'Give Your Family',
    titleAccent: 'A Borderless Future',
    description: 'Unlock the benefits of second citizenship with greater mobility, financial flexibility, and long-term security for your loved ones.',
    buttons: [
      { label: 'Explore Citizenship Options', href: '#eligibility', primary: true },
      { label: 'Schedule Consultation', href: '/contact', primary: false },
    ],
  },
  {
    image: '/3.png',
    badge: 'Skilled Migration Pathways',
    title: 'Build an International',
    titleAccent: 'Career with Confidence',
    description: 'We help professionals secure skilled visas and work permits through strategic guidance, documentation support, and end-to-end assistance.',
    buttons: [
      { label: 'Check Your Eligibility', href: '#eligibility', primary: true },
      { label: 'Start Your Application', href: '/contact', primary: false },
    ],
  },
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
      {/* ── HERO SLIDER ─────────────────────────────── */}
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
                className={`w-full h-full object-cover ${index === currentSlide ? 'animate-kenburns' : ''}`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/60 to-navy-950/25" />
            </div>

            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center pt-24 pb-20">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
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
                  {slide.buttons.map((btn) =>
                    btn.primary ? (
                      <a key={btn.label} href={btn.href} className="btn-primary text-base px-7 py-3.5">
                        {btn.label}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <Link key={btn.label} to={btn.href} className="btn-secondary text-base px-7 py-3.5">
                        {btn.label}
                      </Link>
                    )
                  )}
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
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === currentSlide ? 'bg-gold-500 w-8' : 'bg-white/40 hover:bg-white/60 w-2.5'
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

      {/* ── OUR IMMIGRATION SERVICES ────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900">Our Immigration Services</h2>
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

      {/* ── WHERE WE CAN TAKE YOU ───────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900">Where We Can Take You</h2>
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

      {/* ── WHY CHOOSE US ───────────────────────────── */}
      <section className="py-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500 rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm tracking-wider uppercase mb-2">Our Edge</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Why Choose Us</h2>
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

      {/* ── OUR PROCESS ─────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-2">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900">Our Process</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-lg">
              A clear, structured journey from your first conversation to a successful visa outcome.
            </p>
          </div>
          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gold-200 z-0" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {processSteps.map((step, i) => (
                <div key={step.number} className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-md border border-gray-100 group-hover:border-gold-400 group-hover:shadow-lg flex flex-col items-center justify-center mb-5 transition-all duration-300 relative">
                    <step.icon className="w-7 h-7 text-navy-800 group-hover:text-gold-500 transition-colors mb-1" />
                    <span className="text-xs font-bold text-gold-500">{step.number}</span>
                  </div>
                  <h3 className="font-display font-semibold text-navy-900 text-base mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY / ASSESSMENT FORM ───────────── */}
      <section id="eligibility" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-2">Free Assessment</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
                Discover Your Best Immigration Pathway
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Expert guidance tailored to your profile, goals, and international aspirations.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We analyze your background, qualifications, and experience to identify the most suitable visa and migration opportunities for your future abroad.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Consultant-led profile assessment',
                  'Strategic country and program recommendations',
                  'Clear roadmap with transparent guidance',
                  'Personalized support at every stage',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="inline-flex items-center gap-2 bg-gold-50 border border-gold-200 text-gold-700 text-sm font-medium px-4 py-2 rounded-full mb-8">
                <ClipboardList className="w-4 h-4" />
                Quick assessment response within 24–48 hours
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
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
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-display font-semibold text-navy-900 mb-2">Start Your Assessment Now</h3>
              <p className="text-gray-500 text-sm mb-6">Our consultant will reach out within 24–48 hours with a personalised plan.</p>
              <ContactForm formType="eligibility" showCountry />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────── */}
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
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
            Start Your Process Today
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-md transition-all duration-200"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
