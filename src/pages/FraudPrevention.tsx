import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, ShieldCheck, AlertTriangle, FileText, CreditCard, Scale } from 'lucide-react';

const paymentGuidelines = [
  'Always request official invoices or receipts for payments made',
  'Avoid making undocumented cash payments',
  'Use secure and traceable payment methods whenever possible',
  'Maintain records of all communications and transactions',
];

const beCautiousOf = [
  'Guaranteed visa promises',
  'Unrealistic success claims',
  'Pressure for immediate cash payments',
  'Lack of proper documentation or agreements',
  'Unofficial communication channels',
];

const ourCommitments = [
  'Ethical and transparent immigration services',
  'Honest profile evaluations and realistic guidance',
  'Professional communication and support',
  'Secure and accountable service processes',
  'Reliable assistance throughout your journey',
];

export default function FraudPrevention() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative pt-24 pb-16 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-400/20 rounded-full px-4 py-1.5 mb-4">
            <ShieldCheck className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm font-medium">Fraud Prevention</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Our Commitment to Ethical & Transparent Immigration Services
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Building trust through professionalism and integrity in every step of your immigration journey.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Intro */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">
              Building Trust Through Professionalism and Integrity
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              At the Expert Advice we are committed to maintaining the highest standards of professionalism, transparency, and ethical practices in the immigration industry. We strongly believe that every client deserves honest guidance, clear communication, and reliable support throughout their immigration journey.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              We are dedicated to helping clients recognize and avoid unlawful, misleading, or unauthorized practices that may exist within the immigration and visa services industry.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our goal is not only to assist clients with immigration services but also to educate and empower them to make informed and secure decisions.
            </p>
          </div>

          {/* Protect Yourself From Fraudulent Practices */}
          <div>
            <h2 className="text-2xl font-display font-bold text-navy-900 mb-3">
              Protect Yourself From Fraudulent Practices
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              When choosing an immigration advisor or consultant, it is important to work with professionals who operate with transparency, accountability, and ethical business practices.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Below are some important points every client should keep in mind while working with immigration service providers.
            </p>
          </div>

          {/* Payment Transparency & Safe Transactions */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-navy-950 rounded-xl flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-5 h-5 text-gold-400" />
              </div>
              <h2 className="text-2xl font-display font-bold text-navy-900">
                Payment Transparency & Safe Transactions
              </h2>
            </div>

            <h3 className="text-lg font-display font-semibold text-navy-900 mb-3">
              Avoid Cash Payments Without Proper Documentation
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Legitimate immigration service providers maintain transparent financial processes and provide proper invoices or receipts for all services rendered.
            </p>
            <p className="text-gray-500 text-sm font-medium mb-4">Important Guidelines:</p>
            <ul className="space-y-3 mb-8">
              {paymentGuidelines.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-display font-semibold text-navy-900 mb-3">
              Always Pay to Official Company Accounts
            </h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              To avoid possible fraud or unauthorized transactions, clients are strongly advised to make payments only to the official company bank accounts mentioned in invoices or official communications issued by the company.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This helps ensure accountability, transparency, and protection for both the client and the service provider.
            </p>
          </div>

          {/* Importance of Service Agreements */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-navy-950 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-gold-400" />
              </div>
              <h2 className="text-2xl font-display font-bold text-navy-900">
                Importance of Service Agreements
              </h2>
            </div>
            <h3 className="text-lg font-display font-semibold text-navy-900 mb-3">
              Always Sign a Service Agreement
            </h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              A professional service agreement clearly outlines the scope of services, responsibilities, payment terms, and process expectations between the client and the company.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Signing a proper agreement helps establish transparency and protects the interests of all parties involved.
            </p>
          </div>

          {/* Understanding Visa Approvals */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-navy-950 rounded-xl flex items-center justify-center flex-shrink-0">
                <Scale className="w-5 h-5 text-gold-400" />
              </div>
              <h2 className="text-2xl font-display font-bold text-navy-900">
                Understanding Visa Approvals
              </h2>
            </div>
            <h3 className="text-lg font-display font-semibold text-navy-900 mb-3">
              No Genuine Consultant Can Guarantee Visa Approval
            </h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Visa approvals are solely determined by the respective immigration authorities and embassies based on eligibility, documentation, and immigration regulations.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              While experienced consultants can help improve the quality and accuracy of your application, no individual or organization can legally guarantee visa approval.
            </p>

            <p className="text-gray-500 text-sm font-medium mb-4">Be Cautious Of:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {beCautiousOf.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-xl p-3">
                  <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed">
              It is important to approach immigration processes with realistic expectations and accurate information.
            </p>
          </div>

          {/* Our Commitment to Clients */}
          <div className="bg-navy-950 rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-white mb-3">
              Our Commitment to Clients
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              At Expert Advice we are committed to providing:
            </p>
            <ul className="space-y-3 mb-6">
              {ourCommitments.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-sm leading-relaxed">
              We value the trust our clients place in us and remain dedicated to maintaining integrity and professionalism in every interaction.
            </p>
          </div>

          {/* CTA */}
          <div className="border border-gold-200 bg-gold-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-display font-bold text-navy-900 mb-3">
              Your Journey Deserves Trusted Guidance
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-lg mx-auto">
              Choosing the right immigration partner is an important decision. We encourage every client to stay informed, ask questions, and work only with trusted professionals who prioritize transparency and ethical practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Speak With Our Team <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="btn-secondary text-base px-7 py-3.5">
                Learn More About Our Services
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
