import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-surface to-background section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Terms of Use
            </h1>
            <p className="text-lg text-text-secondary">
              Effective Date: July 8, 2024
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

      {/* Table of Contents */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="trust-card">
              <h2 className="text-2xl font-semibold mb-6">Quick Navigation</h2>
              <nav className="grid md:grid-cols-2 gap-3">
                <a href="#services" className="block p-3 rounded-lg bg-background hover:bg-border-subtle transition-colors">
                  <span className="text-text-primary font-medium">Services</span>
                </a>
                <a href="#use-of-website" className="block p-3 rounded-lg bg-background hover:bg-border-subtle transition-colors">
                  <span className="text-text-primary font-medium">Use of Website</span>
                </a>
                <a href="#prohibited-conduct" className="block p-3 rounded-lg bg-background hover:bg-border-subtle transition-colors">
                  <span className="text-text-primary font-medium">Prohibited Conduct</span>
                </a>
                <a href="#dispute-resolution" className="block p-3 rounded-lg bg-background hover:bg-border-subtle transition-colors">
                  <span className="text-text-primary font-medium">Dispute Resolution</span>
                </a>
              </nav>
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
                These Terms of Use ("Terms") govern your access and use of the content and services set out on apply.penguindebt.com 
                (collectively, "Website" and "Services"). By using the Website or Services, you agree to these Terms. 
                apply.penguindebt.com ("We") reserve the right to make changes to the Website and these Terms at any time.
              </p>
              
              <div className="p-6 bg-trust-green-light border-l-4 border-trust-green rounded-lg mb-8">
                <p className="text-text-primary font-medium mb-2">Important Notice:</p>
                <p className="text-text-secondary">
                  You must be at least 18 years old to use the Website or any services or products provided on or through the Website.
                </p>
              </div>

              <div className="p-6 bg-surface border-2 border-conversion-blue rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Key Legal Points</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-conversion-blue mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-text-secondary">Governed by the laws of the State of Delaware</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-conversion-blue mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-text-secondary">Agreement includes mandatory arbitration for all disputes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-conversion-blue mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-text-secondary">Restricts class action participation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-conversion-blue mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-text-secondary">Contains liability limitations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services Section */}
            <div id="services" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-semibold text-text-primary mb-6">Services</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-text-secondary mb-4">
                  We provide updated and interesting information on our Website through our posted news, articles, and blogs. 
                  We own or have licensed all content and information we post on the Website. You may copy and reproduce our 
                  content for your own non-personal use.
                </p>
                <p className="text-text-secondary mb-4">
                  If you provide us with an article or content, such as posting comments, photos, or submitting information 
                  intended to be posted on our Website, you own the content, but have provided us a license or permission to 
                  use, copy, display, and publish your content on the Website and in our marketing and newsletters.
                </p>
                <p className="text-text-secondary mb-4">
                  As such, we may display your content to be viewed by others and we may use it to advertise and promote the 
                  Website or other commercial and marketing purposes. You agree that use of your content is royalty-free, and 
                  we do not owe you any revenue or other benefits from using your content.
                </p>
              </div>
            </div>

            {/* Use of Website Section */}
            <div id="use-of-website" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-semibold text-text-primary mb-6">Use of Website and Third Party Links</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-text-secondary mb-4">
                  You are responsible for your use of the Website and any services or products found through links on the Website. 
                  The links, services and products found throughout our Website are all owned by third-parties and we have no 
                  control and therefore no liability for these links, services, or products.
                </p>
                <p className="text-text-secondary mb-4">
                  These are put on the Website for your convenience and to generate ad revenue for us to continue our publication 
                  of informational articles, news, and blogs. We do not endorse any of the services or products found through the links.
                </p>
                <div className="p-5 bg-surface border-l-4 border-text-muted rounded-lg my-6">
                  <p className="text-text-secondary font-medium">
                    You use these links and purchase products and services at your own risk. You waive any and all claims against 
                    us involving any of the links or the websites, services, or products provided or posted through the links.
                  </p>
                </div>
              </div>
            </div>

            {/* Prohibited Conduct Section */}
            <div id="prohibited-conduct" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-semibold text-text-primary mb-6">Prohibited Conduct</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-text-secondary mb-4">
                  Our goal is to create a safe and informed platform to express all different types of opinions. To promote this 
                  goal, we prohibit certain conduct that may be harmful to other users or to our reputation.
                </p>
                <p className="text-text-secondary mb-4 font-medium">When you use the Website or Services, you may not:</p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start">
                    <span className="text-conversion-blue font-bold mr-3">•</span>
                    <span className="text-text-secondary">Violate any law or regulation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-conversion-blue font-bold mr-3">•</span>
                    <span className="text-text-secondary">Violate or infringe other people's intellectual property, privacy, publicity, or other legal rights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-conversion-blue font-bold mr-3">•</span>
                    <span className="text-text-secondary">Transmit anything that is illegal, abusive, harassing, harmful to reputation, pornographic, indecent, profane, obscene, hateful, racist, or otherwise objectionable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-conversion-blue font-bold mr-3">•</span>
                    <span className="text-text-secondary">Transmit any malicious or unsolicited software</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-conversion-blue font-bold mr-3">•</span>
                    <span className="text-text-secondary">Stalk, harass, or harm another person or entity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-conversion-blue font-bold mr-3">•</span>
                    <span className="text-text-secondary">Impersonate or misrepresent your affiliation with another person or entity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-conversion-blue font-bold mr-3">•</span>
                    <span className="text-text-secondary">Use code to "scrape," "crawl," or "spider" any pages contained in the Website</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-conversion-blue font-bold mr-3">•</span>
                    <span className="text-text-secondary">Interfere with or disrupt the Website</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Accuracy of Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-text-primary mb-6">Accuracy of Information</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-text-secondary">
                  We make no claims or promises about the quality, accuracy, or reliability of any content available on or through 
                  the Website. We are not liable for any loss or damage that might arise from your reliance on any content available 
                  on or through the Website or Services. Use the Content at your own risk.
                </p>
              </div>
            </div>

            {/* DMCA Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-text-primary mb-6">Digital Millennium Copyright Act</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-text-secondary mb-4">
                  We respect the intellectual property rights of others. If notified of a violation of another party's intellectual 
                  property rights, we will remove the offending content.
                </p>
                <p className="text-text-secondary mb-4">
                  If you believe your work has been copied in a way that constitutes copyright infringement, please send us a 
                  notification of claimed infringement with all of the following information:
                </p>
                <ol className="space-y-2 mt-4 list-decimal list-inside">
                  <li className="text-text-secondary">Identification of the copyrighted work claimed to have been infringed</li>
                  <li className="text-text-secondary">Identification of the claimed infringing material</li>
                  <li className="text-text-secondary">Your contact information</li>
                  <li className="text-text-secondary">A good faith belief statement</li>
                  <li className="text-text-secondary">A statement under penalty of perjury</li>
                  <li className="text-text-secondary">Your physical or electronic signature</li>
                </ol>
              </div>
            </div>

            {/* Dispute Resolution Section */}
            <div id="dispute-resolution" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-semibold text-text-primary mb-6">Dispute Resolution</h2>
              
              <div className="space-y-6">
                <div className="trust-card">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">1. Informal Resolution</h3>
                  <p className="text-text-secondary">
                    If a dispute arises, the claimant must send written notice to the other party within 30 days. 
                    The notice must include a detailed description of the claims, legal basis, and resolution sought.
                  </p>
                </div>

                <div className="trust-card">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">2. Negotiation</h3>
                  <p className="text-text-secondary">
                    Parties shall attempt in good faith to resolve disputes through negotiation. Within 60 days of notice, 
                    parties will exchange written responses and meet within 90 days.
                  </p>
                </div>

                <div className="trust-card">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">3. Mediation</h3>
                  <p className="text-text-secondary">
                    If negotiation fails, disputes will be submitted to JAMS for mediation. Mediation will be conducted 
                    in-person in Wilmington, Delaware, with costs shared equally.
                  </p>
                </div>

                <div className="trust-card">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">4. Arbitration</h3>
                  <p className="text-text-secondary mb-4">
                    If mediation fails, disputes will be determined by arbitration in Delaware before one arbitrator, 
                    administered by JAMS pursuant to its Comprehensive Arbitration Rules.
                  </p>
                  <div className="p-4 bg-surface rounded-lg">
                    <p className="text-text-primary font-medium mb-2">Important:</p>
                    <p className="text-text-secondary text-sm">
                      By entering into these Terms, you hereby irrevocably waive any right you may have to join claims 
                      with those of others in the form of a class action or similar procedural device.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimers and Limitations */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-text-primary mb-6">Disclaimers and Limitations on Our Liability</h2>
              <div className="p-6 bg-surface border-2 border-text-muted rounded-lg">
                <p className="text-text-secondary mb-4 uppercase font-semibold">
                  YOU USE THE WEBSITE AT YOUR OWN RISK. THE WEBSITE, ITS CONTENT, AND SERVICES ARE PROVIDED ON AN "AS IS" 
                  AND "AS AVAILABLE" BASIS.
                </p>
                <p className="text-text-secondary mb-4">
                  To the fullest extent permitted by applicable law, we disclaim all warranties of any kind, express or implied, 
                  with respect to the Website.
                </p>
                <p className="text-text-secondary">
                  We will not be liable under any theory of liability for any indirect, incidental, special, consequential, or 
                  exemplary damages, including damages for loss of revenues, profits, goodwill, use, data, or other intangible losses.
                </p>
              </div>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-text-primary mb-6">Indemnification</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-text-secondary">
                  You agree to indemnify, defend, and hold us harmless from and against any and all claims, liabilities, damages, 
                  losses, costs, expenses, fees of any kind (including reasonable attorneys' fees and legal costs), arising from 
                  or relating to: (i) your content; (ii) the use of the Website by you; (iii) the violation of these Terms by you; 
                  or (iv) the violation of any rights of any third party.
                </p>
              </div>
            </div>

            {/* Electronic Communications */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-text-primary mb-6">Electronic Communications</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-text-secondary">
                  When you visit our Website or send email to us, you are communicating with us electronically. You consent to 
                  receive communications from us electronically. You agree that all agreements, notices, disclosures, and other 
                  communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="trust-card bg-conversion-blue">
  <h2 className="text-2xl font-semibold mb-4 text-white">Questions About These Terms?</h2>
  <p className="mb-6 text-white opacity-95">
    If you have any questions about these Terms of Use or need clarification on any section, 
    we're here to help.
  </p>
</div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;