import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, GraduationCap, TrendingUp, FileCheck, Users, MapPin, ChevronRight } from 'lucide-react';
import { services } from '../data/services';

const iconMap: Record<string, React.ElementType> = {
  Briefcase, GraduationCap, TrendingUp, FileCheck, Users, MapPin,
};

export default function Services() {
  return (
    <div>
      <section className="relative pt-24 pb-16 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <p className="text-gold-400 font-semibold text-sm tracking-wider uppercase mb-3">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Immigration Services</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            From skilled worker visas to study permits and visitor visas, we cover every immigration pathway with expert precision.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="card-hover group"
                >
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold text-navy-900 mb-2">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gold-600 bg-gold-50 px-3 py-1 rounded-full">
                        {service.processingTime}
                      </span>
                      <span className="inline-flex items-center gap-1 text-navy-700 text-sm font-semibold group-hover:gap-2 transition-all">
                        Details <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-950 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Not Sure Which Visa You Need?</h2>
          <p className="text-gray-400 mb-8">Our experts will assess your profile and recommend the best pathway for free.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Get Free Assessment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
