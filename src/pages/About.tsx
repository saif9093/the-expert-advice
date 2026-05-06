import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Globe2, TrendingUp } from 'lucide-react';

const milestones = [
  { year: '2009', title: 'Founded', desc: 'The Expert Advice Immigration Consultants opens its doors in Dubai.' },
  { year: '2012', title: '1,000 Clients', desc: 'Reached our first major milestone of successful client cases.' },
  { year: '2016', title: 'UK & Europe Expansion', desc: 'Launched dedicated services for UK and European immigration pathways.' },
  { year: '2019', title: '3,000 Cases', desc: 'Expanded our team to 25+ licensed consultants serving clients globally.' },
  { year: '2023', title: '5,000+ Success Stories', desc: 'Became one of the most trusted immigration firms in North America.' },
];

const team = [
  {
    name: 'Michael Chen',
    role: 'CEO & Senior Immigration Consultant',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    credentials: 'RCIC • 18 years experience',
  },
  {
    name: 'Aisha Williams',
    role: 'Head of UK & Europe Division',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
    credentials: 'OISC Level 3 • 12 years experience',
  },
  {
    name: 'David Okonkwo',
    role: 'Australia & NZ Specialist',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
    credentials: 'MARA Agent • 10 years experience',
  },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <p className="text-gold-400 font-semibold text-sm tracking-wider uppercase mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Your Trusted Immigration Partner
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            For over 15 years, The Expert Advice has been helping individuals and families turn their international aspirations into reality.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-2">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-5">
                15+ Years of Immigration Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Expert Advice Immigration Consultants was founded with a clear mission: to make international mobility accessible, transparent, and successful for everyone. Today, we are a team of 30+ licensed consultants serving clients in over 40 countries.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our consultants hold recognized certifications including RCIC (Canada), OISC Level 3 (UK), and MARA (Australia), ensuring you receive the highest standard of professional advice.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Licensed and regulated immigration consultants',
                  'Offices in Toronto, London, and Sydney',
                  'Over 5,000 successful visa applications',
                  'Multilingual team serving 40+ countries',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
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

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy-950 rounded-2xl p-8 text-white">
              <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center mb-5">
                <Globe2 className="w-6 h-6 text-navy-950" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower individuals and families with expert, ethical, and accessible immigration services — transforming the complex into the achievable, and aspirations into new beginnings.
              </p>
            </div>
            <div className="bg-gold-500 rounded-2xl p-8 text-navy-950">
              <div className="w-12 h-12 bg-navy-950 rounded-xl flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-navy-800 leading-relaxed">
                To be the world's most trusted immigration consultancy, recognized for our integrity, expertise, and the life-changing outcomes we deliver to every client we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, value: '5,000+', label: 'Successful Clients' },
              { icon: Globe2, value: '40+', label: 'Countries Served' },
              { icon: Award, value: '15+', label: 'Years Experience' },
              { icon: TrendingUp, value: '95%+', label: 'Approval Rate' },
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

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-2">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900">Our History</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-navy-200 hidden sm:block" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="hidden sm:flex flex-col items-center">
                    <div className="w-16 h-16 bg-navy-950 rounded-xl flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-gold-400 font-bold text-sm">{m.year}</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex-1">
                    <span className="sm:hidden inline-block text-gold-600 font-bold text-sm mb-1">{m.year}</span>
                    <h4 className="font-display font-semibold text-navy-900 text-lg">{m.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-600 font-semibold text-sm tracking-wider uppercase mb-2">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900">Meet Our Experts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((m) => (
              <div key={m.name} className="card-hover text-center p-6">
                <img src={m.image} alt={m.name} className="w-full h-52 object-cover object-top rounded-xl mb-5" />
                <h3 className="font-display font-semibold text-navy-900 text-lg">{m.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{m.role}</p>
                <p className="text-gold-600 text-xs font-medium mt-2">{m.credentials}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-950 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-400 mb-8">Book a free consultation and let our experts build your immigration strategy.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
