import { CheckCircle, Shield, Users, Star, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const WhyPenguinDebt = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "No Upfront Fees",
      description: "Only pay when we successfully reduce your debt. No hidden costs or surprise charges."
    },
    {
      icon: Shield,
      title: "Safe & Confidential",
      description: "Your personal information is protected with bank-level security and encryption."
    },
    {
      icon: Users,
      title: "Works with Top-Rated Debt Providers",
      description: "We partner only with licensed, accredited debt relief companies with proven track records."
    },
    {
      icon: Star,
      title: "Rated Excellent by Thousands of Americans",
      description: "Join over 50,000 satisfied customers who've found financial relief through our network."
    },
    {
      icon: CheckCircle,
      title: "Lower Your Monthly Payments",
      description: "Most customers see significant reductions in their monthly debt payments within 90 days."
    }
  ];

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Benefits */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-8">
              Why Choose{" "}
              <span className="text-conversion-blue">Penguin Debt?</span>
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-trust-green-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-trust-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-text-secondary">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Stats & CTA */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-conversion-blue mb-2">
                $50,000+
              </div>
              <div className="text-text-secondary mb-6">
                Average debt relief amount for our customers
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-text-primary">24-48</div>
                  <div className="text-sm text-text-secondary">Months to debt freedom</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-text-primary">40-60%</div>
                  <div className="text-sm text-text-secondary">Average debt reduction</div>
                </div>
              </div>
            </div>

            <Link
              to="/apply-now"
              className="cta-primary w-full text-center block"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPenguinDebt;