// app/components/Hero.js
"use client";

const Hero = () => {
  return (
    <section className="container mx-auto px-6 pt-96 pb-96">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500 mb-6">
          Work smarter, not harder
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl mb-12 leading-relaxed">
          The minimalist workspace for freelancers who demand excellence.
          Streamline your workflow, amplify your productivity.
        </p>
        <div className="flex gap-6 justify-center">
          <button className="px-8 py-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all">
            Get Started
          </button>
          <button className="px-8 py-4 rounded-lg border border-gray-700 hover:border-gray-600 text-gray-300 font-medium transition-all">
            Learn more →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
