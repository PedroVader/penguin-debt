import { FileText, Users, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Answer a few simple questions",
      description: "Tell us about your debt situation in just 2-3 minutes."
    },
    {
      icon: Users,
      title: "Get matched with a debt relief plan",
      description: "We connect you with top-rated, licensed debt relief providers."
    },
    {
      icon: TrendingDown,
      title: "Start lowering your monthly payments",
      description: "Begin your journey to financial freedom with expert guidance."
    }
  ];

  return (
    <section className="section-padding bg-surface">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            How It Works
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Getting debt relief is easier than you think. Here's how we help thousands of Americans every month.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="w-16 h-16 bg-conversion-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <div className="mb-2 text-conversion-blue font-bold text-lg">
                Step {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                {step.title}
              </h3>
              <p className="text-text-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/apply-now"
            className="cta-primary"
          >
            Start Your Free Assessment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;