// app/components/Features.js
"use client";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Experience unparalleled speed with our optimized workflow system."
  },
  {
    icon: "🔒",
    title: "Bank-Grade Security",
    description: "Your data is protected with enterprise-level encryption and security measures."
  },
  {
    icon: "🔄",
    title: "Real-time Sync",
    description: "Stay updated across all your devices with instant synchronization."
  },
  {
    icon: "📊",
    title: "Advanced Analytics",
    description: "Make data-driven decisions with comprehensive insights and reports."
  }
];

const FeatureCard = ({ feature }) => {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all">
      <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
        <span className="text-blue-400 text-2xl">{feature.icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">
        {feature.title}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-6 py-32 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Features that empower you
        </h2>
        <p className="text-gray-400 text-center mb-16">
          Everything you need, nothing you don't.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
