import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { countries } from '../data/countries';

export default function Destinations() {
  return (
    <div>
      <section className="relative pt-24 pb-16 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.pexels.com/photos/1488313/pexels-photo-1488313.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <p className="text-gold-400 font-semibold text-sm tracking-wider uppercase mb-3">Where We Can Take You</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Immigration Destinations</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore the world's most popular immigration destinations and find out how we can help you get there.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {countries.map((country) => (
              <Link
                key={country.id}
                to={`/destinations/${country.slug}`}
                className="card-hover group overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-3xl">{country.flag}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-display font-bold text-navy-900">{country.name}</h3>
                      <p className="text-gray-400 text-xs mt-0.5">Capital: {country.capital} · {country.currency}</p>
                    </div>
                    <div className="w-8 h-8 bg-navy-50 group-hover:bg-navy-800 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                      <ArrowRight className="w-4 h-4 text-navy-700 group-hover:text-gold-400 transition-colors" />
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{country.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {country.visaTypes.slice(0, 3).map((v) => (
                      <span key={v} className="text-xs bg-navy-50 text-navy-700 px-2.5 py-1 rounded-full">{v}</span>
                    ))}
                    {country.visaTypes.length > 3 && (
                      <span className="text-xs bg-gold-50 text-gold-700 px-2.5 py-1 rounded-full">+{country.visaTypes.length - 3} more</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-950 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Don't See Your Destination?</h2>
          <p className="text-gray-400 mb-8">We serve 40+ countries. Contact us to discuss your specific destination and immigration goals.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
