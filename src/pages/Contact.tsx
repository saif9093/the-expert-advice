import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const offices = [
  { city: 'Dubai (HQ)', address: 'Office 308, Al Fajer Complex, Oud Metha, Dubai, United Arab Emirates', phone: '+971 4 8873662', email: 'info@theexpertadvice.com' },
];

export default function Contact() {
  return (
    <div>
      <section className="relative pt-24 pb-16 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <p className="text-gold-400 font-semibold text-sm tracking-wider uppercase mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Speak to our experts today. We're ready to help you take the next step.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Contact info */}
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-6">Let's Talk</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you have a question, need a quote, or want to book a consultation, we're here. Fill in the form or reach us directly via phone, email, or WhatsApp.
              </p>

              <div className="space-y-5 mb-10">
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-navy-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-navy-950 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Phone</p>
                    <p className="font-semibold text-navy-900 group-hover:text-navy-700">+971 4 8873662</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">WhatsApp</p>
                    <p className="font-semibold text-navy-900 group-hover:text-green-700">Chat with us instantly</p>
                  </div>
                </a>
                <a
                  href="mailto:info@theexpertadvice.com"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-navy-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-navy-950 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Email</p>
                    <p className="font-semibold text-navy-900 group-hover:text-navy-700">info@theexpertadvice.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-navy-950 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Business Hours</p>
                    <p className="font-semibold text-navy-900">Mon to Sat: 09:30 AM – 06:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-display font-semibold text-navy-900 mb-6">Send Us a Message</h3>
              <ContactForm formType="contact" showCountry />
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-navy-900 mb-8 text-center">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((o) => (
              <div key={o.city} className="card-hover p-6">
                <h4 className="font-display font-bold text-navy-900 text-lg mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold-500" />
                  {o.city}
                </h4>
                <p className="text-gray-500 text-sm mb-3">{o.address}</p>
                <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="block text-sm font-medium text-navy-800 hover:text-navy-600 mb-1 transition-colors">
                  {o.phone}
                </a>
                <a href={`mailto:${o.email}`} className="block text-sm text-gray-500 hover:text-gray-700 transition-colors">
                  {o.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
