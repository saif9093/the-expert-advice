import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  story: string;
  service: string;
  rating: number;
}

const fallback: Testimonial[] = [
  { id: '1', name: 'Sarah M.', location: 'Lagos, Nigeria', story: 'The Expert Advice made my Canada PR journey seamless. Within 14 months I had my permanent residency. Their team was available every step of the way.', service: 'Skilled Visa', rating: 5 },
  { id: '2', name: 'James O.', location: 'Accra, Ghana', story: 'I was skeptical at first, but their consultants guided me through every document. I now have my UK work permit and started my new role.', service: 'Work Permit', rating: 5 },
  { id: '3', name: 'Priya K.', location: 'Mumbai, India', story: 'Got my Australia study visa in record time. The team knew exactly what was needed and my application was approved first try.', service: 'Study Visa', rating: 5 },
  { id: '4', name: 'Carlos R.', location: 'Manila, Philippines', story: 'Professional, transparent, and fast. My family visitor visa to Europe was approved without any issues. Highly recommended!', service: 'Visitor Visa', rating: 5 },
  { id: '5', name: 'Amina D.', location: 'Nairobi, Kenya', story: 'I tried twice on my own and failed. The Expert Advice handled everything and I got my USA business visa within 3 weeks.', service: 'Business Visa', rating: 5 },
  { id: '6', name: 'Emmanuel T.', location: 'Abuja, Nigeria', story: 'The Canada Express Entry process is complex but The Expert Advice made it simple. Got my ITA in the first draw. Forever grateful.', service: 'Skilled Visa', rating: 5 },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from('testimonials').select('*').order('created_at', { ascending: false });
      setTestimonials(data && data.length > 0 ? data : fallback);
      setLoading(false);
    })();
  }, []);

  return (
    <div>
      <section className="relative pt-24 pb-16 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <p className="text-gold-400 font-semibold text-sm tracking-wider uppercase mb-3">Our Clients</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Success Stories</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Real people. Real results. Hear from the thousands who trusted us with their immigration journey.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-8 text-center">
          {[
            { value: '5,000+', label: 'Successful Cases' },
            { value: '95%+', label: 'Approval Rate' },
            { value: '40+', label: 'Countries Served' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-display font-bold text-navy-900">{s.value}</p>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-6 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-24 mb-4" />
                  <div className="h-3 bg-gray-200 rounded w-full mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-4/5 mb-6" />
                  <div className="h-4 bg-gray-200 rounded w-32" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.id} className="card-hover p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.story}"</p>
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
          )}
        </div>
      </section>

      <section className="py-16 bg-navy-950 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-gray-400 mb-8">Join thousands who achieved their immigration goals with The Expert Advice.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
