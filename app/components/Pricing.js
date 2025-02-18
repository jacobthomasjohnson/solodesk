// app/components/Pricing.js
"use client";

const pricingTiers = [
  {
    name: "Starter",
    price: "0",
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "24/7 support"
    ]
  },
  {
    name: "Professional",
    price: "29",
    featured: true,
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Custom integrations"
    ]
  },
  {
    name: "Enterprise",
    price: "99",
    features: [
      "Everything in Pro",
      "Custom solutions",
      "Dedicated account manager",
      "SLA guarantee"
    ]
  }
];

const PricingCard = ({ tier }) => {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all">
      <h3 className="text-xl font-semibold text-white mb-2">
        {tier.name}
      </h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">${tier.price}</span>
        <span className="text-gray-400">/month</span>
      </div>
      <ul className="space-y-4 mb-8">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-center text-gray-400">
            <span className="mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-lg transition-all ${
        tier.featured 
          ? 'bg-blue-500 hover:bg-blue-600 text-white' 
          : 'border border-gray-700 hover:border-gray-600 text-gray-300'
      }`}>
        Get started
      </button>
    </div>
  );
};

const Pricing = () => {
  return (
    <section className="container mx-auto px-6 py-32 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Simple, transparent pricing
        </h2>
        <p className="text-gray-400 text-center mb-16">
          No hidden fees. No surprises. Start free, upgrade when you're ready.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
