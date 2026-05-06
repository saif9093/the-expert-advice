import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Briefcase, GraduationCap, TrendingUp, FileCheck, Users, MapPin } from 'lucide-react';
import { services } from '../data/services';
import ContactForm from '../components/ContactForm';

const iconMap: Record<string, React.ElementType> = {
  Briefcase, GraduationCap, TrendingUp, FileCheck, Users, MapPin,
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold text-navy-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="btn-primary">Back to Services</Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon];

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-20 overflow-hidden">
        <div className="h-72 md:h-96 relative">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-950/75" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <Link to="/services" className="text-gray-400 hover:text-white text-sm mb-4 inline-flex items-center gap-1 transition-colors">
                ← Back to Services
              </Link>
              <div className="flex items-center gap-4 mt-2">
                <div className="w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center">
                  <Icon className="w-7 h-7 text-navy-950" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-display font-bold text-white">{service.title}</h1>
                  <div className="flex items-center gap-2 text-gray-300 text-sm mt-1">
                    <Clock className="w-4 h-4" />
                    Processing Time: {service.processingTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-5">Requirements</h2>
                <ul className="space-y-3">
                  {service.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-5">Benefits</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3 bg-navy-50 rounded-xl p-4">
                      <div className="w-6 h-6 bg-navy-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-gold-400" />
                      </div>
                      <span className="text-gray-700 text-sm">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process steps */}
              <div>
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-5">Our Process</h2>
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Initial Consultation', desc: 'We assess your profile and determine the best visa pathway for your situation.' },
                    { step: '02', title: 'Document Preparation', desc: 'We prepare and review every document to ensure your application is complete and compelling.' },
                    { step: '03', title: 'Application Submission', desc: 'We submit your application with full oversight and handle any queries from the immigration authority.' },
                    { step: '04', title: 'Approval & Beyond', desc: 'Once approved, we guide you through next steps including arrival planning and settlement.' },
                  ].map((p) => (
                    <div key={p.step} className="flex gap-5 items-start">
                      <div className="w-10 h-10 bg-navy-950 text-gold-400 font-bold rounded-xl flex items-center justify-center flex-shrink-0 text-sm">
                        {p.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">{p.title}</h4>
                        <p className="text-gray-500 text-sm mt-0.5">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar form */}
            <div>
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-xl font-display font-semibold text-navy-900 mb-2">
                    Apply for {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-5">Free assessment — our team will contact you within 24 hours.</p>
                  <ContactForm formType="eligibility" showCountry />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-navy-900 mb-8">Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.filter((s) => s.slug !== slug).slice(0, 3).map((s) => {
              const SIcon = iconMap[s.icon];
              return (
                <Link key={s.id} to={`/services/${s.slug}`} className="card-hover p-5 flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-navy-50 group-hover:bg-navy-800 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                    <SIcon className="w-6 h-6 text-navy-800 group-hover:text-gold-400 transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">{s.title}</h4>
                    <span className="text-xs text-gold-600">{s.processingTime}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-navy-800 transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
