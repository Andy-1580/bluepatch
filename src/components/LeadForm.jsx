import React, { useState } from 'react';

/* ─── Contact info data ───────────────────────────────────────────── */
const CONTACT_ITEMS = [
  {
    label: 'Sales & Support',
    lines: ['0116 444 443', 'sales@bluepatchventures.co.ke'],
    iconPath:
      'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  },
  {
    label: 'Email Us',
    lines: ['bluepatchventuresltd@gmail.com', 'support@bluepatchventures.co.ke'],
    iconPath:
      'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
];

/* ─── Sub-components ─────────────────────────────────────────────── */
const ContactItem = ({ label, lines, iconPath }) => (
  <div className="flex items-start gap-4">
    <div className="bp-icon-box">
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
      </svg>
    </div>
    <div>
      <h4 className="font-bold text-white text-base sm:text-lg mb-1">{label}</h4>
      {lines.map((line) => (
        <p key={line} className="text-slate-400 text-sm sm:text-base">{line}</p>
      ))}
    </div>
  </div>
);

const FormField = ({ label, children }) => (
  <div className="space-y-1">
    <label className="text-sm font-medium text-slate-400">{label}</label>
    {children}
  </div>
);

const Spinner = () => (
  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
);

/* ─── Main component ─────────────────────────────────────────────── */
const LeadForm = () => {
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative bg-[#0d1324] border-t border-slate-800/50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — info */}
          <div>
            <h2 className="section-heading">Ready to Transform Your Connectivity?</h2>
            <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
              Whether you need a cutting-edge Starlink deployment for a remote site or robust managed
              internet infrastructure for your enterprise, BluePatch has you covered.
            </p>
            <div className="space-y-6">
              {CONTACT_ITEMS.map((item) => (
                <ContactItem key={item.label} {...item} />
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bp-card shadow-2xl relative">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-[50px] pointer-events-none" />

            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 border border-green-500/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                <p className="text-slate-400">Our technical team will contact you shortly to schedule a site survey.</p>
                <button onClick={() => setStatus('idle')} className="bp-btn-ghost mt-8">
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Full Name">
                    <input required type="text" className="bp-input" placeholder="John Doe" />
                  </FormField>
                  <FormField label="Phone Number">
                    <input required type="tel" className="bp-input" placeholder="0712 345 678" />
                  </FormField>
                </div>

                <FormField label="Location / County">
                  <input required type="text" className="bp-input" placeholder="e.g. Westlands, Nairobi" />
                </FormField>

                <FormField label="Service of Interest">
                  <select className="bp-input appearance-none">
                    <option>Starlink Deployment</option>
                    <option>Enterprise Fixed Wireless</option>
                    <option>Home Internet</option>
                    <option>Other Services</option>
                  </select>
                </FormField>

                <FormField label="Message (Optional)">
                  <textarea rows={4} className="bp-input resize-none" placeholder="Any specific requirements?" />
                </FormField>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bp-btn-primary w-full py-4 flex justify-center items-center font-bold text-base"
                >
                  {status === 'loading' ? <Spinner /> : 'Request Connection'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadForm;
