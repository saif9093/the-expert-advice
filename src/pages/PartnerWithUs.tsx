import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Users, Handshake, Building2, Globe, Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const idealPartners = [
  'Immigration and visa consultants',
  'Travel and tourism agencies',
  'Overseas education consultants',
  'Recruitment agencies and HR consultants',
  'Freelancers and independent advisors',
  'Business networking professionals',
  'Individuals with client referral networks',
];

const partnerBenefits = [
  'Dedicated B2B partnership support',
  'Transparent communication and process updates',
  'Wide range of immigration and visa services',
  'Professional handling of client cases',
  'Long-term business collaboration opportunities',
  'Reliable and ethical service approach',
  'Personalized coordination for referred clients',
];

const servicesCovered = [
  'Skilled Migration Programs',
  'Study Abroad Services',
  'Work Permits and Overseas Jobs',
  'Visit Visa Processing',
  'Business Visa Solutions',
  'European Work Opportunities',
  'Blue-Collar and Unskilled Job Pathways',
];

const processSteps = [
  { step: '01', title: 'Connect with our team' },
  { step: '02', title: 'Share your client requirements' },
  { step: '03', title: 'Our experts evaluate and guide the case' },
  { step: '04', title: 'Regular updates throughout the process' },
  { step: '05', title: 'Build long-term collaboration opportunities together' },
];

export default function PartnerWithUs() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative pt-24 pb-16 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <p className="text-gold-400 font-semibold text-sm tracking-wider uppercase mb-3">Partner with Us</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Grow Together Through Trusted Immigration Partnerships
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We welcome collaborations with businesses, consultants, and individuals who work with clients seeking immigration, visa, study abroad, work permit, or overseas career solutions.
          </p>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Intro */}
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">
                  Grow Together Through Trusted Immigration Partnerships
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  At Expert Advice, we believe strong partnerships create stronger opportunities. We welcome collaborations with businesses, consultants, travel agencies, education advisors, recruitment partners, freelancers, and individuals who work with clients seeking immigration, visa, study abroad, work permit, or overseas career solutions.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Whether you are an established organization or an individual with a strong client network, our partnership program is designed to create long-term, mutually beneficial relationships built on trust, transparency, and professional support.
                </p>
              </div>

              {/* Who Can Partner with Us? */}
              <div>
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-3">
                  Who Can Partner with Us?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We collaborate with individuals and businesses across different industries who wish to offer international opportunities and immigration solutions to their clients.
                </p>
                <p className="text-gray-500 text-sm font-medium mb-5">Our Ideal Partners Include:</p>
                <ul className="space-y-3">
                  {idealPartners.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Partner with Us? */}
              <div>
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-3">
                  Why Partner with Us?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our goal is to make the partnership process simple, professional, and rewarding while ensuring your clients receive quality support and guidance throughout their journey.
                </p>
                <p className="text-gray-500 text-sm font-medium mb-5">Benefits of Partnering with Us:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {partnerBenefits.map((b) => (
                    <div key={b} className="flex items-start gap-3 bg-navy-50 rounded-xl p-4">
                      <div className="w-6 h-6 bg-navy-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-gold-400" />
                      </div>
                      <span className="text-gray-700 text-sm">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services Covered Under Partnership */}
              <div>
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-3">
                  Services Covered Under Partnership
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our partners can refer clients for a wide range of overseas services including:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {servicesCovered.map((item) => (
                    <div key={item} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How Our Partnership Works */}
              <div>
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-3">
                  How Our Partnership Works
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We aim to keep the collaboration process smooth and transparent for every partner.
                </p>
                <p className="text-gray-500 text-sm font-medium mb-5">Simple Partnership Process:</p>
                <div className="space-y-4">
                  {processSteps.map((p) => (
                    <div key={p.step} className="flex gap-5 items-start">
                      <div className="w-10 h-10 bg-navy-950 text-gold-400 font-bold rounded-xl flex items-center justify-center flex-shrink-0 text-sm">
                        {p.step}
                      </div>
                      <div className="flex items-center h-10">
                        <h4 className="font-semibold text-navy-900">{p.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dedicated Support for Every Partner */}
              <div className="bg-navy-950 rounded-2xl p-8">
                <h2 className="text-2xl font-display font-bold text-white mb-3">
                  Dedicated Support for Every Partner
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  We understand the importance of trust when referring clients. Our team ensures professional communication, responsible case handling, and personalized coordination to help maintain strong relationships with both partners and clients.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Whether you refer individual cases occasionally or manage a large client network, we are committed to supporting your business growth with reliable immigration solutions.
                </p>
              </div>

              {/* CTA */}
              <div className="border border-gold-200 bg-gold-50 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-3">
                  Let's Build Global Opportunities Together
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 max-w-lg mx-auto">
                  If you are looking for a trusted immigration and visa partner for your clients, we would be happy to collaborate and grow together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="btn-primary">
                    Become a Partner <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="mailto:Business@theexpertadvice.com"
                    className="btn-secondary text-base px-7 py-3.5 inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Business@theexpertadvice.com
                  </a>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-xl font-display font-semibold text-navy-900 mb-2">
                    Become a Partner
                  </h3>
                  <p className="text-gray-500 text-sm mb-5">Connect with our team — we'll get back to you within 24 hours.</p>
                  <ContactForm formType="contact" showCountry />
                </div>

                {/* Quick highlights */}
                <div className="bg-navy-950 rounded-2xl p-6">
                  <h4 className="text-white font-display font-semibold mb-4">Why Choose Us?</h4>
                  <div className="space-y-3">
                    {[
                      { icon: Handshake, label: 'Trusted B2B Partnerships' },
                      { icon: Globe, label: '40+ Countries Served' },
                      { icon: Users, label: '5,000+ Successful Cases' },
                      { icon: Building2, label: 'Dubai-Based HQ' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-navy-800 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-gold-400" />
                        </div>
                        <span className="text-gray-300 text-sm">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
