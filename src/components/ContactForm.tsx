import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabase';
import { CheckCircle, Send } from 'lucide-react';

interface Props {
  formType?: 'eligibility' | 'contact';
  showCountry?: boolean;
  compact?: boolean;
}

export default function ContactForm({ formType = 'contact', showCountry = false, compact = false }: Props) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', country_interest: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const countries = ['Canada', 'Australia', 'United Kingdom', 'United States', 'Germany', 'Portugal', 'Netherlands', 'Other'];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    const { error: dbError } = await supabase.from('contacts').insert({
      ...form,
      form_type: formType,
    });
    setSubmitting(false);
    if (dbError) {
      setError('Something went wrong. Please try again.');
    } else {
      setSuccess(true);
      setForm({ name: '', phone: '', email: '', country_interest: '', message: '' });
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
        <CheckCircle className="w-14 h-14 text-green-500" />
        <h3 className="text-xl font-semibold text-navy-900">Thank you!</h3>
        <p className="text-gray-500 max-w-sm">
          We've received your message and will be in touch within 24 hours.
        </p>
        <button onClick={() => setSuccess(false)} className="btn-outline mt-2 text-sm">
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? 'grid grid-cols-1 sm:grid-cols-2 gap-4' : 'space-y-4'}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
          <input
            type="text"
            required
            placeholder="John Smith"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="input-field"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
          <input
            type="tel"
            required
            placeholder="+1 234 567 890"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="input-field"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="input-field"
        />
      </div>
      {(showCountry || formType === 'eligibility') && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Country of Interest *</label>
          <select
            required
            value={form.country_interest}
            onChange={(e) => setForm({ ...form, country_interest: e.target.value })}
            className="input-field bg-white"
          >
            <option value="">Select a country</option>
            {countries.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
        <textarea
          rows={4}
          placeholder={formType === 'eligibility' ? 'Tell us about your background and goals...' : 'How can we help you?'}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="input-field resize-none"
        />
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button type="submit" disabled={submitting} className="btn-primary w-full gap-2">
        {submitting ? (
          <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-navy-950 border-t-transparent rounded-full animate-spin" /> Sending...</span>
        ) : (
          <><Send className="w-4 h-4" /> {formType === 'eligibility' ? 'Check My Eligibility' : 'Send Message'}</>
        )}
      </button>
    </form>
  );
}
