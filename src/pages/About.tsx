import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Globe2, TrendingUp, Heart, Star, Eye, Shield, Handshake } from 'lucide-react';

const coreValues = [
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'We believe in honest communication, ethical practices, and realistic guidance for every client.',
    color: 'bg-navy-950',
    iconColor: 'text-gold-400',
  },
  {
    icon: Heart,
    title: 'Commitment',
    desc: 'We are dedicated to supporting our clients throughout their journey with care and responsibility.',
    color: 'bg-gold-500',
    iconColor: 'text-gold-400',
  },
  {
    icon: Eye,
    title: 'Transparency',
    desc: 'We maintain clear communication and ensure clients understand every step of the process.',
    color: 'bg-navy-950',
    iconColor: 'text-gold-400',
  },
  {
    icon: Star,
    title: 'Excellence',
    desc: 'We strive to deliver professional service and high-quality support tailored to individual goals.',
    color: 'bg-gold-500',
    iconColor: 'text-gold-400',
  },
  {
    icon: Handshake,
    title: 'Client Success',
    desc: 'Your success is at the heart of everything we do, and we work tirelessly to help you achieve your global aspirations.',
    color: 'bg-navy-950',
    iconColor: 'text-gold-400',
  },
];

export default function About() {
  return (
    <div>

      {/* ── HERO ──────────────────────────────────── */}
      <section className="relative pt-24 pb-16 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <p className="text-gold-400 font-semibold text-sm tracking-wider uppercase mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Guiding People Toward Global Opportunities
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            At Expert Advice we believe immigration is more than just paperwork — it is about building better futures, creating new opportunities, and helping people achieve their dreams beyond borders.
          </p>
        </div>
      </section>

      {/* ── WHO WE ARE ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-2">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-5">
                Your Trusted Immigration Partner
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our team is committed to providing honest guidance, personalized support, and reliable immigration solutions tailored to each client's goals. Whether you are planning to study, work, settle abroad, or secure a better future for your family, we are here to simplify the journey and support you at every step.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With a client-focused approach and deep understanding of global immigration pathways, we strive to make the process transparent, smooth, and stress-free. We value trust, long-term relationships, and the confidence our clients place in us during one of the most important decisions of their lives.
              </p>
              <Link to="/contact" className="btn-primary">
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
                alt="Our team"
                className="rounded-2xl shadow-xl w-full h-[440px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-navy-950 rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-navy-950" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl">5,000+</p>
                    <p className="text-gray-400 text-xs">Successful Cases</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CLIENTS TRUST US ─────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-2">Our Clients</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
                Why Clients Trust Us
              </h2>
              <p className="text-xl text-navy-800 font-display font-semibold mb-4">
                Trusted Guidance for Life-Changing Decisions
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We understand that every immigration journey is personal and important. That's why we focus on building lasting relationships through transparency, professionalism, and genuine support at every stage of the process.
              </p>
              <ul className="space-y-4">
                {[
                  'Honest and transparent guidance',
                  'Personalized solutions for every profile',
                  'Dedicated support from experienced consultants',
                  'Ethical and client-focused approach',
                  'Commitment to smooth and stress-free processing',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                alt="Trusted immigration consultants"
                className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-navy-900 font-semibold text-sm">98% Client Satisfaction</p>
                    <p className="text-gray-500 text-xs">Across 40+ countries served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ──────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-2">Our Purpose</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-navy-950 rounded-2xl p-8 text-white">
              <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-navy-950" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Our Vision</h3>
              <p className="text-gold-400 font-medium text-sm mb-4">Creating Global Opportunities with Trust and Integrity</p>
              <p className="text-gray-300 leading-relaxed">
                Our vision is to become a trusted global immigration partner known for transforming aspirations into successful international journeys. We aim to empower individuals and families with the right guidance, ethical practices, and meaningful opportunities to build a brighter future anywhere in the world.
              </p>
            </div>
            {/* Mission */}
            <div className="bg-gold-500 rounded-2xl p-8 text-navy-950">
              <div className="w-12 h-12 bg-navy-950 rounded-xl flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Our Mission</h3>
              <p className="text-navy-700 font-medium text-sm mb-4">Supporting Every Journey with Care and Commitment</p>
              <p className="text-navy-800 leading-relaxed">
                Our mission is to provide transparent, personalized, and professional immigration solutions that help clients move forward with confidence. We are dedicated to simplifying complex processes, delivering genuine guidance, and ensuring every client receives the support they need from consultation to successful settlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────── */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, value: '5,000+', label: 'Successful Clients' },
              { icon: Globe2, value: '40+', label: 'Countries Served' },
              { icon: Award, value: '10+', label: "Years' Experience" },
              { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
            ].map((s) => (
              <div key={s.label}>
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <s.icon className="w-6 h-6 text-navy-800" />
                </div>
                <p className="text-3xl font-display font-bold text-navy-900">{s.value}</p>
                <p className="text-gray-500 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR CORE VALUES (replaces Timeline/Journey) ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-2">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900">Our Core Values</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-lg">
              The principles that guide everything we do — our values reflect our commitment to helping individuals and families move forward with confidence, trust, and peace of mind.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className={`${value.color} rounded-2xl p-8 group hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className={`w-12 h-12 ${value.color === 'bg-navy-950' ? 'bg-navy-800' : 'bg-navy-950'} rounded-xl flex items-center justify-center mb-5`}>
                  <value.icon className={`w-6 h-6 ${value.iconColor}`} />
                </div>
                <h3 className={`text-xl font-display font-bold mb-3 ${value.color === 'bg-navy-950' ? 'text-white' : 'text-navy-950'}`}>
                  {value.title}
                </h3>
                <p className={`text-sm leading-relaxed ${value.color === 'bg-navy-950' ? 'text-gray-300' : 'text-navy-800'}`}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="py-16 bg-navy-950 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-gray-400 mb-8">
            Speak to our immigration experts today and take the first step toward your global future.
          </p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
