import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-conversion-blue to-conversion-blue-hover">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Struggling with debt? See if you qualify for a lower monthly payment now.
          </h2>
          
          <p className="text-xl text-white/90 mb-8">
            Join thousands of Americans who've found financial relief through our trusted network of debt specialists.
          </p>

          <a
            href="https://apply.penguindebt.com/debt/?v=2972&aid=182&sub1=1821#debt_amount"
            className="inline-flex items-center gap-3 bg-white text-conversion-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Check Eligibility Now
            <ArrowRight className="w-5 h-5" />
          </a>

          <div className="mt-8 flex items-center justify-center gap-8 text-white/80 text-sm">
            <span>✓ Free Assessment</span>
            <span>✓ No Obligation</span>
            <span>✓ Secure & Confidential</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;