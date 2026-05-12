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

  // Skilled Migration: requirements come BEFORE benefits (per doc order)
  const requirementsFirst = service.slug === 'skilled-visa';

  const RequirementsBlock = () => (
    <div>
      <h2 className="text-2xl font-display font-bold text-navy-900 mb-3">
        {service.requirementsSectionTitle}
      </h2>
      {service.requirementsSectionIntro && (
        <p className="text-gray-600 leading-relaxed mb-4">{service.requirementsSectionIntro}</p>
      )}
      {service.requirementsSectionSubtitle && (
        <p className="text-gray-500 text-sm mb-5 font-medium">{service.requirementsSectionSubtitle}</p>
      )}
      <ul className="space-y-3">
        {service.requirements.map((req) => (
          <li key={req} className="flex items-start gap-3 text-gray-700">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            {req}
          </li>
        ))}
      </ul>
      {service.requirementsClosingNote && (
        <p className="text-gray-600 leading-relaxed mt-4">{service.requirementsClosingNote}</p>
      )}
    </div>
  );

  const BenefitsBlock = () => (
    <div>
      <h2 className="text-2xl font-display font-bold text-navy-900 mb-3">
        {service.benefitsSectionTitle}
      </h2>
      {service.benefitsSectionIntro && (
        <p className="text-gray-600 leading-relaxed mb-4">{service.benefitsSectionIntro}</p>
      )}
      {service.benefitsSectionSubtitle && (
        <p className="text-gray-500 text-sm mb-5 font-medium">{service.benefitsSectionSubtitle}</p>
      )}
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
  );

  return (
    <div>
      {/* ── HERO ─────────────────────────────────── */}
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
                <div className="w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-navy-950" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-display font-bold text-white">{service.title}</h1>
                  <p className="text-gold-300 font-medium text-base mt-1">{service.subtitle}</p>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                    <Clock className="w-4 h-4" />
                    Processing Time: {service.processingTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left: Main Content */}
            <div className="lg:col-span-2 space-y-10">

              {/* ① SUBTITLE as prominent H2 in content — matches exact doc heading */}
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">
                  {service.subtitle}
                </h2>
                {service.intro.split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed text-lg mb-4">{para}</p>
                ))}
              </div>

              {/* ② ORDER: Skilled Migration = Requirements first, then Benefits */}
              {/*         All others = Benefits first, then Requirements */}
              {requirementsFirst ? (
                <>
                  <RequirementsBlock />
                  <BenefitsBlock />
                </>
              ) : (
                <>
                  <BenefitsBlock />

                  {/* Industries section (Unskilled only — between Benefits and Requirements) */}
                  {service.industriesSectionTitle && service.industries && (
                    <div>
                      <h2 className="text-2xl font-display font-bold text-navy-900 mb-3">
                        {service.industriesSectionTitle}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-2">
                        European countries and international employers regularly seek workers across several labor-intensive and service-based industries.
                      </p>
                      {service.industriesSectionSubtitle && (
                        <p className="text-gray-500 text-sm mb-5 font-medium">{service.industriesSectionSubtitle}</p>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.industries.map((item) => (
                          <div key={item} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                      {service.industriesClosingNote && (
                        <p className="text-gray-600 leading-relaxed mt-4">{service.industriesClosingNote}</p>
                      )}
                    </div>
                  )}

                  <RequirementsBlock />
                </>
              )}

              {/* ③ Extra Section (Visit Visa only: "Global Visit Visa Services") */}
              {service.extraSectionTitle && service.extraSectionDesc && (
                <div className="bg-gold-50 border border-gold-200 rounded-2xl p-6">
                  <h2 className="text-2xl font-display font-bold text-navy-900 mb-3">
                    {service.extraSectionTitle}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{service.extraSectionDesc}</p>
                </div>
              )}

              {/* ④ Destinations / Programs */}
              {service.destinations && service.destinations.length > 0 && (
                <div>
                  <h2 className="text-2xl font-display font-bold text-navy-900 mb-5">
                    {service.destinationsSectionTitle}
                  </h2>
                  <div className="space-y-4">
                    {service.destinations.map((dest) => (
                      <div key={dest.name} className="border border-gray-100 rounded-xl p-5 hover:border-gold-300 hover:shadow-sm transition-all">
                        <h4 className="font-display font-semibold text-navy-900 mb-2">{dest.name}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{dest.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ⑤ Our Support Throughout Your Journey */}
              <div className="bg-navy-950 rounded-2xl p-8">
                <h2 className="text-2xl font-display font-bold text-white mb-3">Our Support Throughout Your Journey</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.ourSupportIntro}</p>
                <p className="text-gray-300 text-sm font-semibold mb-4">Our Services Include:</p>
                <ul className="space-y-3">
                  {service.ourServices.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ⑥ CTA — exact title from doc */}
              <div className="border border-gold-200 bg-gold-50 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-3">{service.ctaTitle}</h2>
                <p className="text-gray-600 leading-relaxed mb-6 max-w-lg mx-auto">{service.ctaDesc}</p>
                <Link to="/contact" className="btn-primary">
                  Book Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Sidebar form */}
            <div>
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-xl font-display font-semibold text-navy-900 mb-2">Check Your Eligibility</h3>
                  <p className="text-gray-500 text-sm mb-5">Free assessment — our team will contact you within 24 hours.</p>
                  <ContactForm formType="eligibility" showCountry />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── OTHER SERVICES ──────────────────────── */}
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
