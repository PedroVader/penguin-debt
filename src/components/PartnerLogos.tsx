import { Star, CheckCircle } from "lucide-react";

const PartnerLogos = () => {
  const partners = [
    {
      name: "ClearOne",
      reviews: "45K+ Reviews",
      rating: 4.8
    },
    {
      name: "JG Wentworth",
      reviews: "12K+ Reviews", 
      rating: 4.7
    },
    {
      name: "Freedom Debt Relief",
      reviews: "98K+ Reviews",
      rating: 4.9
    }
  ];

  return (
    <section className="py-16 bg-surface border-y border-border-subtle">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Trusted Partners with Proven Results
          </h2>
          <p className="text-text-secondary">
            We work exclusively with licensed, top-rated debt relief providers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-lg border border-border-subtle">
              <div className="text-2xl font-bold text-text-primary mb-2">
                {partner.name}
              </div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(partner.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-text-primary">
                  {partner.rating}
                </span>
              </div>
              <div className="text-sm text-text-secondary">
                {partner.reviews}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-trust-green-light rounded-full">
            <CheckCircle className="w-5 h-5 text-trust-green" />
            <span className="text-trust-green font-medium">All partners are licensed and accredited</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;