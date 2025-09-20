import penguinLogo from "@/assets/penguin-logo.png";

const Footer = () => {
  return (
    <footer className="bg-text-primary text-white py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={penguinLogo} 
                alt="Penguin Debt Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-lg font-bold">Penguin Debt</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connecting Americans with trusted debt relief solutions since 2020. 
              Licensed and regulated financial services.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="text-gray-300 hover:text-white transition-colors">
                  Legal Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-sm space-y-2">
              <div className="text-gray-300">
                Phone: <a href="tel:+18553750026" className="text-white hover:underline">(855) 375-0026</a>
              </div>
              <div className="text-gray-300">
                Available: Mon-Fri 8AM-8PM EST
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-xs text-gray-400">
          <div className="mb-4">
            <strong>Important Disclaimer:</strong> PenguinDebt.com is a marketing site and does not directly provide debt relief services. 
            We connect users with trusted, licensed debt relief providers. All debt relief services are provided by third-party companies.
          </div>
          
          <div className="mb-4">
            <strong>Service Availability:</strong> Not available in all states. Services may vary depending on your location and debt situation. 
            Results are not guaranteed and individual results may vary.
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              © 2025 PenguinDebt.com. All rights reserved.
            </div>
            <div className="text-gray-500">
              Licensed Financial Services Provider
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;