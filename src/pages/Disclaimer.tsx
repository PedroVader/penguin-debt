import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-surface to-background section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Legal Disclaimer
            </h1>
            <p className="text-lg text-text-secondary">
              Important Information About Our Services
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            
            {/* Marketing Disclosure */}
            <div className="mb-8">
              <div className="p-6 bg-surface border-l-4 border-conversion-blue rounded-lg">
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  Marketing Disclosure
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  We are a marketing company. This Site is part of our marketing efforts for third-parties.
                </p>
              </div>
            </div>

            {/* Third Party Compensation */}
            <div className="trust-card mb-8">
              <div className="flex items-start mb-4">
                <svg className="w-6 h-6 text-conversion-blue mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Compensation Disclosure
                  </h3>
                  <p className="text-text-secondary">
                    The offers that are discussed or appear on our website are from third party advertisers who compensate us. 
                    This compensation may impact how and where products appear on our website and the order in which they appear.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Influence */}
            <div className="trust-card mb-8">
              <div className="flex items-start mb-4">
                <svg className="w-6 h-6 text-conversion-blue mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Content Influence
                  </h3>
                  <p className="text-text-secondary">
                    The compensation that we receive may also influence the topic, posts, and content on our Site. 
                    We do not represent all services or products available on the market.
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Independence */}
            <div className="trust-card mb-8">
              <div className="flex items-start mb-4">
                <svg className="w-6 h-6 text-conversion-blue mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Editorial Opinions
                  </h3>
                  <p className="text-text-secondary">
                    Editorial opinions expressed on the Site are strictly our own, and are not provided, endorsed, 
                    or approved by advertisers.
                  </p>
                </div>
              </div>
            </div>

            {/* No Affiliation Notice */}
            <div className="trust-card mb-8 bg-surface border-2 border-text-muted">
              <div className="flex items-start mb-4">
                <svg className="w-6 h-6 text-text-muted mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    No Affiliation or Endorsement
                  </h3>
                  <p className="text-text-secondary mb-3">
                    We are not affiliated with any third party advertiser other than as stated above. As such, we do not 
                    recommend or endorse any product or service on this website.
                  </p>
                </div>
              </div>
            </div>

            {/* Third Party Redirection Warning */}
            <div className="p-6 bg-surface border-l-4 border-conversion-blue rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Important Notice About Third Party Sites
              </h3>
              <p className="text-text-secondary mb-4">
                If you are redirected to a third party advertiser's site, you should:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-conversion-blue mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-text-secondary">
                    Review their terms and conditions carefully
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-conversion-blue mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-text-secondary">
                    Read their privacy policy thoroughly
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-conversion-blue mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-text-secondary">
                    Understand they may differ significantly from those posted on this site
                  </span>
                </li>
              </ul>
            </div>

            {/* Key Points Summary */}
            <div className="trust-card bg-trust-green-light border-2 border-trust-green mb-8">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Key Points to Remember
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <span className="text-trust-green font-bold mr-3">1.</span>
                  <p className="text-text-secondary text-sm">
                    We receive compensation from advertisers
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-trust-green font-bold mr-3">2.</span>
                  <p className="text-text-secondary text-sm">
                    This affects content and product placement
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-trust-green font-bold mr-3">3.</span>
                  <p className="text-text-secondary text-sm">
                    We don't endorse any specific products
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-trust-green font-bold mr-3">4.</span>
                  <p className="text-text-secondary text-sm">
                    Always review third party terms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;