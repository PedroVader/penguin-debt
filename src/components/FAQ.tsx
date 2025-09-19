import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is debt relief?",
      answer: "Debt relief helps reduce the total amount you owe through negotiation with creditors. Our partners work to lower your balances, consolidate payments, and create manageable payment plans that fit your budget."
    },
    {
      question: "Will this hurt my credit?",
      answer: "Debt relief programs may initially impact your credit score, but many clients see improvements over time as they pay off debts and reduce their debt-to-income ratio. The long-term benefits often outweigh short-term score changes."
    },
    {
      question: "How fast can I get help?",
      answer: "You can get matched with a debt relief specialist within 24 hours of completing our assessment. Most clients see their first payment reduction within 30-90 days of starting their program."
    },
    {
      question: "What debts qualify?",
      answer: "Most unsecured debts qualify, including credit cards, personal loans, medical bills, store cards, and collection accounts. Secured debts like mortgages and car loans typically don't qualify for traditional debt relief programs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-surface">
      <div className="section-container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-secondary">
            Get answers to common questions about debt relief
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-lg border border-border-subtle overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface transition-colors"
              >
                <h3 className="text-lg font-semibold text-text-primary">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-conversion-blue" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-text-muted" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/apply-now"
            className="cta-primary"
          >
            See If You're Eligible
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;