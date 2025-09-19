import { Shield, CheckCircle, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-hero">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headlines */}
          <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mb-6 animate-fade-up">
            Take Control of Your{" "}
            <span className="text-conversion-blue">Debt Right Now</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-text-secondary mb-8 animate-fade-up">
            You may qualify for a plan that reduces what you owe and simplifies your payments
          </p>

          {/* Primary CTA */}
          <div className="mb-8 animate-scale-in">
            <Link
              to="/apply-now"
              className="cta-primary inline-block"
            >
              Check My Eligibility
            </Link>
          </div>

          {/* Trust Row */}
          <div className="trust-row justify-center mb-12 animate-fade-up">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-trust-green" />
              <span>Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-trust-green" />
              <span>Free to Check</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-trust-green" />
              <span>Doesn't Impact Your Credit</span>
            </div>
          </div>

          {/* Trust Badges Placeholder */}
          <div className="flex items-center justify-center gap-8 opacity-60">
            <div className="px-4 py-2 bg-surface rounded-lg border border-border-subtle">
              <span className="text-sm font-medium">BBB Accredited</span>
            </div>
            <div className="px-4 py-2 bg-surface rounded-lg border border-border-subtle">
              <span className="text-sm font-medium">SSL Secured</span>
            </div>
            <div className="px-4 py-2 bg-surface rounded-lg border border-border-subtle">
              <span className="text-sm font-medium">Norton Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;