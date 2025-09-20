import React, { useState } from 'react';

const Privacy: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const dataCategories = [
    {
      category: "Identifiers",
      description: "Information that identifies, relates to, describes, or is capable of being associated with, a particular individual",
      sources: ["Consumer directly", "ISPs", "Data analytics providers", "Data brokers", "Credit reporting agencies"],
      purposes: ["Auditing", "Security", "Debugging", "Services", "Research", "Quality maintenance"],
      retention: "Identifiers with TCPA consent: 6 years; All other data: Indefinitely unless deletion requested",
      notCollected: false
    },
    {
      category: "Protected Classifications",
      description: "Characteristics of protected classifications under California or federal law",
      sources: ["Consumer directly", "ISPs", "Data analytics providers", "Social networks", "Data brokers"],
      purposes: ["Auditing", "Security", "Debugging", "Services", "Research", "Quality maintenance"],
      retention: "Indefinitely unless deletion requested",
      notCollected: false
    },
    {
      category: "Commercial Information",
      description: "Records of products or services purchased, obtained, or considered",
      sources: ["Consumer directly", "Advertising networks", "ISPs", "Data analytics providers", "Social networks", "Data brokers"],
      purposes: ["Auditing", "Security", "Debugging", "Services", "Research", "Quality maintenance"],
      retention: "Indefinitely unless deletion requested",
      notCollected: false
    },
    {
      category: "Biometric Information",
      description: "Physiological, biological, or behavioral characteristics",
      sources: [],
      purposes: [],
      retention: "Not applicable",
      notCollected: true
    },
    {
      category: "Internet Activity",
      description: "Browsing history, search history, and interaction with websites, applications, or advertisements",
      sources: ["Consumer directly", "Advertising networks", "ISPs", "Data analytics providers", "Operating systems", "Social networks", "Data brokers"],
      purposes: ["Auditing", "Security", "Debugging", "Services", "Research", "Quality maintenance"],
      retention: "Indefinitely unless deletion requested",
      notCollected: false
    },
    {
      category: "Geolocation Data",
      description: "Physical location or movements",
      sources: ["Consumer directly", "Advertising networks", "ISPs", "Data analytics providers", "Operating systems", "Social networks", "Data brokers"],
      purposes: ["Auditing", "Security", "Debugging", "Services", "Research", "Quality maintenance"],
      retention: "Indefinitely unless deletion requested",
      notCollected: false
    },
    {
      category: "Sensory Data",
      description: "Audio, electronic, visual, thermal, olfactory, or similar information",
      sources: ["Consumer directly", "Data analytics providers", "Operating systems", "Call centers"],
      purposes: ["Auditing", "Security", "Debugging", "Services", "Research", "Quality maintenance"],
      retention: "Indefinitely unless deletion requested",
      notCollected: false
    },
    {
      category: "Professional/Employment",
      description: "Professional or employment-related information",
      sources: ["Consumer directly", "Data analytics providers", "Data brokers", "Credit reporting agencies"],
      purposes: ["Auditing", "Security", "Debugging", "Services", "Research", "Quality maintenance"],
      retention: "Indefinitely unless deletion requested",
      notCollected: false
    },
    {
      category: "Education Information",
      description: "Education records and information",
      sources: ["Consumer directly", "Data analytics providers", "Data brokers"],
      purposes: ["Auditing", "Security", "Debugging", "Services", "Research", "Quality maintenance"],
      retention: "Indefinitely unless deletion requested",
      notCollected: false
    },
    {
      category: "Inferences",
      description: "Inferences drawn to create a profile reflecting preferences, characteristics, behavior, attitudes",
      sources: ["Consumer directly", "Advertising networks", "Data analytics providers", "Operating systems", "Data brokers"],
      purposes: ["Auditing", "Security", "Debugging", "Services", "Research", "Quality maintenance"],
      retention: "Indefinitely unless deletion requested",
      notCollected: false
    },
    {
      category: "Sensitive Personal Information",
      description: "Information that reveals certain characteristics or conditions",
      sources: ["Consumer directly", "ISPs", "Data analytics providers", "Data brokers", "Credit reporting agencies"],
      purposes: ["Auditing", "Security", "Debugging", "Services", "Research", "Quality maintenance"],
      retention: "Indefinitely unless deletion requested",
      notCollected: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-surface to-background section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-text-secondary">
              Your privacy is important to us
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-text-muted">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Last updated: July 8, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="trust-card">
              <h2 className="text-2xl font-semibold mb-6">Quick Navigation</h2>
              <div className="grid md:grid-cols-2 gap-3">
                <a href="#information-collection" className="block p-3 rounded-lg bg-background hover:bg-border-subtle transition-colors">
                  <span className="text-text-primary font-medium">Information Collection</span>
                </a>
                <a href="#technology-collection" className="block p-3 rounded-lg bg-background hover:bg-border-subtle transition-colors">
                  <span className="text-text-primary font-medium">Technology & Cookies</span>
                </a>
                <a href="#disclosure" className="block p-3 rounded-lg bg-background hover:bg-border-subtle transition-colors">
                  <span className="text-text-primary font-medium">Information Disclosure</span>
                </a>
                <a href="#sharing-sale" className="block p-3 rounded-lg bg-background hover:bg-border-subtle transition-colors">
                  <span className="text-text-primary font-medium">Sharing & Sale</span>
                </a>
                <a href="#third-party" className="block p-3 rounded-lg bg-background hover:bg-border-subtle transition-colors">
                  <span className="text-text-primary font-medium">Third Parties</span>
                </a>
                <a href="#security" className="block p-3 rounded-lg bg-background hover:bg-border-subtle transition-colors">
                  <span className="text-text-primary font-medium">Security</span>
                </a>
                <a href="#state-rights" className="block p-3 rounded-lg bg-background hover:bg-border-subtle transition-colors">
                  <span className="text-text-primary font-medium">State Privacy Rights</span>
                </a>
                <a href="#california" className="block p-3 rounded-lg bg-background hover:bg-border-subtle transition-colors">
                  <span className="text-text-primary font-medium">California Residents</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-text-secondary leading-relaxed mb-6">
                This Privacy Policy has been designed to set out our consumer information collection and processing practices 
                related to personal information in the course of our business, including on our website, apply.penguindebt.com 
                (the "Website"), or other web properties (referenced collectively herein as the "Website"), and the services 
                provided on the Website (the "Services").
              </p>
              
              <div className="p-6 bg-trust-green-light border-l-4 border-trust-green rounded-lg mb-8">
                <p className="text-text-primary font-medium mb-2">Important Notice:</p>
                <p className="text-text-secondary">
                  This policy affects your rights and our use of your personal information and advises you how to exercise 
                  your rights with respect to your personal information. This Privacy Policy is governed by the Terms of Use.
                </p>
              </div>

              <div className="p-6 bg-surface border-2 border-conversion-blue rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Children's Privacy</h3>
                <p className="text-text-secondary">
                  <svg className="inline-block w-5 h-5 text-conversion-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  We will never knowingly collect any Personal Information from anyone under the age of 16. If we accidentally 
                  collect such information, we delete the same upon notice.
                </p>
              </div>
            </div>

            {/* Section 1: Information Collection */}
            <div id="information-collection" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-semibold text-text-primary mb-6">1. Information Collection</h2>
              
              <p className="text-text-secondary mb-6">
                We have collected personal information about individuals in the preceding twelve (12) months, including:
              </p>

              <div className="space-y-4 mb-8">
                {dataCategories.map((item, index) => (
                  <div key={index} className="trust-card">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-text-primary mb-2">
                          {item.category}
                        </h4>
                        {item.notCollected ? (
                          <div className="flex items-center gap-2 text-text-muted">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span className="text-sm font-medium">Not Collected</span>
                          </div>
                        ) : (
                          <>
                            <p className="text-text-secondary text-sm mb-3">{item.description}</p>
                            
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                              <div>
                                <p className="text-sm font-medium text-text-primary mb-2">Sources:</p>
                                <ul className="text-sm text-text-secondary space-y-1">
                                  {item.sources.slice(0, 3).map((source, i) => (
                                    <li key={i} className="flex items-start">
                                      <span className="text-conversion-blue mr-2">•</span>
                                      {source}
                                    </li>
                                  ))}
                                  {item.sources.length > 3 && (
                                    <li className="text-text-muted italic">
                                      +{item.sources.length - 3} more sources
                                    </li>
                                  )}
                                </ul>
                              </div>
                              
                              <div>
                                <p className="text-sm font-medium text-text-primary mb-2">Retention:</p>
                                <p className="text-sm text-text-secondary">{item.retention}</p>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-surface border-l-4 border-text-muted rounded-lg">
                <p className="text-text-secondary">
                  <strong>Business Purposes include:</strong> Auditing related to counting ad impressions, ensuring security 
                  and integrity, debugging errors, performing services, undertaking internal research, and maintaining quality 
                  of services.
                </p>
              </div>
            </div>

            {/* Section 2: Technology Collection */}
            <div id="technology-collection" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-semibold text-text-primary mb-6">2. How Information is Collected Through Technology</h2>
              
              <div className="space-y-6">
                <div className="trust-card">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Cookies</h3>
                  <p className="text-text-secondary mb-3">
                    If enabled, cookies store small amounts of information on your computer about actions you take on our Website. 
                    This helps us track which features you visit most often, and what content you view.
                  </p>
                  <p className="text-text-secondary text-sm">
                    You can modify or disable cookies, but our Website may not function properly for you. 
                    Learn more at <a href="http://cookiecentral.com/faq/" className="text-conversion-blue hover:underline">cookiecentral.com/faq</a>
                  </p>
                </div>

                <div className="trust-card">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Google Analytics & Services</h3>
                  <p className="text-text-secondary mb-3">
                    We participate in all of Google's Analytics Advertising, including:
                  </p>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-conversion-blue mr-2">•</span>
                      Remarketing with Google Analytics
                    </li>
                    <li className="flex items-start">
                      <span className="text-conversion-blue mr-2">•</span>
                      Google Display Network Impression Reporting
                    </li>
                    <li className="flex items-start">
                      <span className="text-conversion-blue mr-2">•</span>
                      Google Analytics Demographics and Interest Reporting
                    </li>
                    <li className="flex items-start">
                      <span className="text-conversion-blue mr-2">•</span>
                      Google AdSense and Tag Manager
                    </li>
                  </ul>
                  <p className="text-sm text-text-muted mt-3">
                    To opt-out: <a href="https://tools.google.com/dlpage/gaoptout/" className="text-conversion-blue hover:underline">Google Analytics Opt-out</a>
                  </p>
                </div>

                <div className="trust-card">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Web Beacons & Pixels</h3>
                  <p className="text-text-secondary">
                    We use web beacons to collect information about your visit, measure advertisement effectiveness, and track 
                    delivery of advertising. We may also include web beacons in emails to understand whether messages have been 
                    opened, acted on, or forwarded.
                  </p>
                </div>

                <div className="p-5 bg-surface border-l-4 border-conversion-blue rounded-lg">
                  <p className="text-text-primary font-medium mb-2">Do Not Track Notice:</p>
                  <p className="text-text-secondary text-sm">
                    California residents should be advised we do not respond to do not track signals or cookies.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Disclosure */}
            <div id="disclosure" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-semibold text-text-primary mb-6">3. Disclosure of Personal Information</h2>
              
              <p className="text-text-secondary mb-6">
                We have disclosed personal information about consumers for business purposes to third parties within the 
                preceding twelve (12) months to the following categories:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="trust-card">
                  <h4 className="text-lg font-semibold text-text-primary mb-3">Marketing Partners</h4>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• Direct lead buyers</li>
                    <li>• Email marketers & service providers</li>
                    <li>• Offline marketing partners</li>
                    <li>• Advertising networks</li>
                  </ul>
                </div>

                <div className="trust-card">
                  <h4 className="text-lg font-semibold text-text-primary mb-3">Service Providers</h4>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• Data hygiene companies</li>
                    <li>• Data analytics providers</li>
                    <li>• Operating systems and platforms</li>
                    <li>• Social networks & data brokers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: Sharing and Sale */}
            <div id="sharing-sale" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-semibold text-text-primary mb-6">4. Sharing and Sale of Personal Information</h2>
              
              <div className="p-6 bg-surface border-2 border-conversion-blue rounded-lg mb-6">
                <p className="text-text-primary font-semibold mb-2">Notice of Sale:</p>
                <p className="text-text-secondary">
                  We have sold and shared personal information about consumers for business purposes to third parties 
                  within the preceding twelve (12) months. Categories include identifiers, characteristics of protected 
                  classifications, commercial information, internet activity, geolocation data, professional/employment 
                  information, education information, and inferences drawn from this data.
                </p>
              </div>

              <p className="text-text-secondary">
                We do not have any actual knowledge of the sale of personal information of minors under 16 years of age. 
                In the event that we, or substantially all of our assets, are acquired, such personal information may be 
                included within the transferred assets.
              </p>
            </div>

            {/* Section 5: Third Party Collection */}
            <div id="third-party" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-semibold text-text-primary mb-6">5. Third Party Collection and Use</h2>
              
              <div className="space-y-4">
                <div className="trust-card">
                  <h4 className="text-lg font-semibold text-text-primary mb-2">Advertisers</h4>
                  <p className="text-text-secondary text-sm">
                    Advertising agencies and networks may use their own technology to collect information about you. 
                    We do not control the use of such technology and have no responsibility for their information gathering.
                  </p>
                </div>

                <div className="trust-card">
                  <h4 className="text-lg font-semibold text-text-primary mb-2">Links</h4>
                  <p className="text-text-secondary text-sm">
                    Our Website contains hypertext links to third-party websites. We are not responsible for the privacy 
                    practices or content of such websites. Always read their privacy policies before use.
                  </p>
                </div>

                <div className="trust-card">
                  <h4 className="text-lg font-semibold text-text-primary mb-2">Analytics</h4>
                  <p className="text-text-secondary text-sm">
                    We use Service Providers to monitor, analyze and report on traffic to, from and within our Website 
                    and email messages.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6: Security */}
            <div id="security" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-semibold text-text-primary mb-6">6. Storage and Security</h2>
              
              <div className="p-6 bg-surface border-2 border-text-muted rounded-lg">
                <p className="text-text-secondary mb-4">
                  We use reasonable industry-accepted technology and controls to protect your information from disclosure 
                  to unauthorized third parties, including:
                </p>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-trust-green mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Firewalls and secured facilities
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-trust-green mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Logged and limited access controls
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-trust-green mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Industry-standard encryption
                  </li>
                </ul>
                <p className="text-text-muted text-sm mt-4">
                  <strong>Important:</strong> No method of transmission over the Internet or electronic storage is 100% secure. 
                  Any transmission of data is at your own risk.
                </p>
              </div>
            </div>

            {/* Section 7: Policy Changes */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-text-primary mb-6">7. Changes to Privacy Policy</h2>
              <p className="text-text-secondary">
                We have the right to make material changes to this Privacy Policy. We will post those changes through a 
                prominent notice on the Website with no further notice to you. Please review this policy often so that you 
                will always know what information we gather, how we might use that information, and with whom we disclose, 
                share, and sell it.
              </p>
            </div>

            {/* Section 8: State Privacy Rights */}
            <div id="state-rights" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-semibold text-text-primary mb-6">8. State Privacy Supplemental Notice</h2>
              
              <div className="mb-8">
                <p className="text-text-secondary mb-6">
                  The information for residents of each of the featured states below is intended to supplement the information 
                  contained in our primary Privacy Policy.
                </p>

                <div className="grid gap-4">
                  <button
                    onClick={() => setActiveSection(activeSection === 'california' ? '' : 'california')}
                    className="w-full text-left p-4 bg-surface rounded-lg hover:bg-border-subtle transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-text-primary">California Residents</h3>
                      <svg 
                        className={`w-5 h-5 text-text-muted transition-transform ${activeSection === 'california' ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {activeSection === 'california' && (
                    <div id="california" className="trust-card ml-4">
                      <h4 className="text-lg font-semibold text-text-primary mb-4">California Privacy Rights</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-text-primary mb-2">A. California "Shine the Light" Disclosure</h5>
                          <p className="text-text-secondary text-sm mb-3">
                            California residents have the right to request, once a year, information about personal information 
                            we have shared with third parties for direct marketing purposes.
                          </p>
                        </div>

                        <div>
                          <h5 className="font-medium text-text-primary mb-2">B. CCPA/CPRA Rights</h5>
                          <ul className="space-y-2 text-text-secondary text-sm">
                            <li className="flex items-start">
                              <span className="text-conversion-blue mr-2">•</span>
                              <div>
                                <strong>Notice at Collection:</strong> Right to receive notice of our practices
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="text-conversion-blue mr-2">•</span>
                              <div>
                                <strong>Right to Know:</strong> What personal information is collected and how it's used
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="text-conversion-blue mr-2">•</span>
                              <div>
                                <strong>Right to Delete:</strong> Request deletion of personal information
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="text-conversion-blue mr-2">•</span>
                              <div>
                                <strong>Right to Correct:</strong> Correct inaccurate personal information
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="text-conversion-blue mr-2">•</span>
                              <div>
                                <strong>Right to Opt-Out:</strong> Opt-out of sale or sharing of personal information
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="text-conversion-blue mr-2">•</span>
                              <div>
                                <strong>Right to Limit:</strong> Limit use of sensitive personal information
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="text-conversion-blue mr-2">•</span>
                              <div>
                                <strong>Right to No Discrimination:</strong> No discriminatory treatment for exercising rights
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div className="p-4 bg-conversion-blue text-white rounded-lg">
                          <p className="font-medium mb-2 text-white">Submit a Request:</p>
                          <p className="text-sm mb-3 text-white">
                            California residents can exercise their privacy rights by visiting:
                          </p>
                          <a 
                            href="https://optconsumerprivacy.com" 
                            className="inline-block bg-white text-conversion-blue px-4 py-2 rounded font-medium hover:bg-opacity-95 transition-colors"
                          >
                            Submit Privacy Request
                          </a>
                        </div>

                        <div>
                          <h5 className="font-medium text-text-primary mb-2">Global Privacy Control (GPC)</h5>
                          <p className="text-text-secondary text-sm">
                            You may use an Opt-Out Preference Signal, such as the Global Privacy Control, to opt-out of the 
                            sale/sharing of your personal information. Note that this technology is still developing.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setActiveSection(activeSection === 'colorado' ? '' : 'colorado')}
                    className="w-full text-left p-4 bg-surface rounded-lg hover:bg-border-subtle transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-text-primary">Colorado Residents</h3>
                      <svg 
                        className={`w-5 h-5 text-text-muted transition-transform ${activeSection === 'colorado' ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {activeSection === 'colorado' && (
                    <div className="trust-card ml-4">
                      <h4 className="text-lg font-semibold text-text-primary mb-4">Colorado Privacy Rights (CPA)</h4>
                      <ul className="space-y-2 text-text-secondary text-sm mb-4">
                        <li>• Right to opt-out of targeted advertising and sale of personal data</li>
                        <li>• Right to access and confirm processing of personal data</li>
                        <li>• Right to correction of inaccuracies</li>
                        <li>• Right to deletion of personal data</li>
                        <li>• Right to data portability</li>
                      </ul>
                      <p className="text-sm text-text-secondary">
                        Submit requests at: <a href="https://optconsumerprivacy.com" className="text-conversion-blue hover:underline">
                          https://optconsumerprivacy.com
                        </a>
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => setActiveSection(activeSection === 'connecticut' ? '' : 'connecticut')}
                    className="w-full text-left p-4 bg-surface rounded-lg hover:bg-border-subtle transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-text-primary">Connecticut Residents</h3>
                      <svg 
                        className={`w-5 h-5 text-text-muted transition-transform ${activeSection === 'connecticut' ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {activeSection === 'connecticut' && (
                    <div className="trust-card ml-4">
                      <h4 className="text-lg font-semibold text-text-primary mb-4">Connecticut Privacy Rights (CTDPA)</h4>
                      <ul className="space-y-2 text-text-secondary text-sm mb-4">
                        <li>• Right to confirmation and access</li>
                        <li>• Right to correct inaccuracies</li>
                        <li>• Right to delete personal data</li>
                        <li>• Right to data portability</li>
                        <li>• Right to opt-out of targeted advertising and sales</li>
                      </ul>
                      <p className="text-sm text-text-secondary">
                        Submit requests at: <a href="https://optconsumerprivacy.com" className="text-conversion-blue hover:underline">
                          https://optconsumerprivacy.com
                        </a>
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => setActiveSection(activeSection === 'oregon' ? '' : 'oregon')}
                    className="w-full text-left p-4 bg-surface rounded-lg hover:bg-border-subtle transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-text-primary">Oregon Residents</h3>
                      <svg 
                        className={`w-5 h-5 text-text-muted transition-transform ${activeSection === 'oregon' ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {activeSection === 'oregon' && (
                    <div className="trust-card ml-4">
                      <h4 className="text-lg font-semibold text-text-primary mb-4">Oregon Privacy Rights (OCPA)</h4>
                      <p className="text-sm text-text-muted mb-3">Effective July 1, 2024</p>
                      <ul className="space-y-2 text-text-secondary text-sm mb-4">
                        <li>• Right to access and obtain copy of personal data</li>
                        <li>• Right to correct inaccuracies</li>
                        <li>• Right to delete personal data</li>
                        <li>• Right to opt-out of targeted advertising and sales</li>
                      </ul>
                      <p className="text-sm text-text-secondary">
                        Submit requests at: <a href="https://optconsumerprivacy.com" className="text-conversion-blue hover:underline">
                          https://optconsumerprivacy.com
                        </a>
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => setActiveSection(activeSection === 'texas' ? '' : 'texas')}
                    className="w-full text-left p-4 bg-surface rounded-lg hover:bg-border-subtle transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-text-primary">Texas Residents</h3>
                      <svg 
                        className={`w-5 h-5 text-text-muted transition-transform ${activeSection === 'texas' ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {activeSection === 'texas' && (
                    <div className="trust-card ml-4">
                      <h4 className="text-lg font-semibold text-text-primary mb-4">Texas Privacy Rights</h4>
                      <p className="text-sm text-text-muted mb-3">Effective July 1, 2024</p>
                      <div className="p-4 bg-surface border-l-4 border-conversion-blue rounded mb-4">
                        <p className="text-text-primary font-medium mb-2">NOTICE:</p>
                        <p className="text-text-secondary text-sm">
                          We may sell your sensitive personal data. By providing disability status information through our Website, 
                          you provide consent for us to process such information.
                        </p>
                      </div>
                      <ul className="space-y-2 text-text-secondary text-sm mb-4">
                        <li>• Right to access personal data</li>
                        <li>• Right to correct inaccuracies</li>
                        <li>• Right to delete personal data</li>
                        <li>• Right to data portability</li>
                        <li>• Right to opt-out of targeted advertising and sales</li>
                      </ul>
                      <p className="text-sm text-text-secondary">
                        Submit requests at: <a href="https://optconsumerprivacy.com" className="text-conversion-blue hover:underline">
                          https://optconsumerprivacy.com
                        </a>
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => setActiveSection(activeSection === 'utah' ? '' : 'utah')}
                    className="w-full text-left p-4 bg-surface rounded-lg hover:bg-border-subtle transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-text-primary">Utah Residents</h3>
                      <svg 
                        className={`w-5 h-5 text-text-muted transition-transform ${activeSection === 'utah' ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {activeSection === 'utah' && (
                    <div className="trust-card ml-4">
                      <h4 className="text-lg font-semibold text-text-primary mb-4">Utah Privacy Rights (UCPA)</h4>
                      <ul className="space-y-2 text-text-secondary text-sm mb-4">
                        <li>• Right to access personal data</li>
                        <li>• Right to delete personal data</li>
                        <li>• Right to obtain copy/portability</li>
                        <li>• Right to opt-out of targeted advertising and sales</li>
                      </ul>
                      <p className="text-sm text-text-secondary">
                        Submit requests at: <a href="https://optconsumerprivacy.com" className="text-conversion-blue hover:underline">
                          https://optconsumerprivacy.com
                        </a>
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => setActiveSection(activeSection === 'virginia' ? '' : 'virginia')}
                    className="w-full text-left p-4 bg-surface rounded-lg hover:bg-border-subtle transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-text-primary">Virginia Residents</h3>
                      <svg 
                        className={`w-5 h-5 text-text-muted transition-transform ${activeSection === 'virginia' ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {activeSection === 'virginia' && (
                    <div className="trust-card ml-4">
                      <h4 className="text-lg font-semibold text-text-primary mb-4">Virginia Privacy Rights (CDPA)</h4>
                      <ul className="space-y-2 text-text-secondary text-sm mb-4">
                        <li>• Right to access personal data</li>
                        <li>• Right to correct inaccuracies</li>
                        <li>• Right to delete personal data</li>
                        <li>• Right to data portability</li>
                        <li>• Right to opt-out of targeted advertising and sales</li>
                      </ul>
                      <p className="text-sm text-text-secondary">
                        Submit requests at: <a href="https://optconsumerprivacy.com" className="text-conversion-blue hover:underline">
                          https://optconsumerprivacy.com
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;