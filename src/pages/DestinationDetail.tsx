import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MapPin, DollarSign } from 'lucide-react';
import { countries } from '../data/countries';
import ContactForm from '../components/ContactForm';

export default function DestinationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const country = countries.find((c) => c.slug === slug);

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold text-navy-900 mb-4">Destination Not Found</h1>
          <Link to="/destinations" className="btn-primary">Back to Destinations</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-20 h-80 md:h-[480px] overflow-hidden">
        <img src={country.image} alt={country.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link to="/destinations" className="text-gray-400 hover:text-white text-sm mb-4 inline-flex items-center gap-1 transition-colors">
              ← All Destinations
            </Link>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-5xl">{country.flag}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white">{country.name}</h1>
                <div className="flex items-center gap-4 text-gray-300 text-sm mt-2">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{country.capital}</span>
                  <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" />{country.currency}</span>
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
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-4">Why Immigrate to {country.name}?</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{country.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-5">Key Highlights</h2>
                <ul className="space-y-3">
                  {country.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-5">Available Visa Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {country.visaTypes.map((v) => (
                    <div key={v} className="flex items-center gap-3 bg-navy-50 rounded-xl p-4">
                      <div className="w-2 h-2 bg-gold-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gold-50 border border-gold-200 rounded-2xl p-6">
                <h3 className="font-display font-semibold text-navy-900 text-lg mb-2">Processing Time</h3>
                <p className="text-gray-700">Typical processing time: <strong>{country.processingTime}</strong></p>
                <p className="text-gray-500 text-sm mt-2">Times vary by visa category and individual circumstances. Contact us for an accurate estimate based on your profile.</p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-xl font-display font-semibold text-navy-900 mb-2">
                    Immigrate to {country.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-5">Start with a free eligibility assessment from our experts.</p>
                  <ContactForm formType="eligibility" showCountry />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-navy-900 mb-8">Other Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {countries.filter((c) => c.slug !== slug).map((c) => (
              <Link
                key={c.id}
                to={`/destinations/${c.slug}`}
                className="card-hover p-4 flex items-center gap-3 group"
              >
                <span className="text-2xl">{c.flag}</span>
                <span className="font-medium text-navy-900 text-sm group-hover:text-navy-700">{c.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400 ml-auto" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
