// app/components/Logo.js
"use client";

const Logo = ({ variant = "1" }) => {
  const logos = {
    // Simple wordmark with gradient
    1: (
      <div className="flex items-center">
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
          solodesk
        </span>
      </div>
    ),

    // Icon + Wordmark combination
    2: (
      <div className="flex items-center space-x-2">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 6h16M4 12h16M4 18h7"
            className="stroke-blue-400"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-xl font-bold text-white">solodesk</span>
      </div>
    ),

    // Minimal geometric icon
    3: (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center">
          <span className="text-white font-bold text-lg">S</span>
        </div>
        <span className="text-xl font-bold text-white">solodesk</span>
      </div>
    ),

    // Abstract desk icon
    4: (
      <div className="flex items-center space-x-2">
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <rect
            x="4"
            y="16"
            width="24"
            height="12"
            className="fill-blue-400"
            rx="2"
          />
          <rect
            x="8"
            y="8"
            width="16"
            height="8"
            className="fill-violet-500"
            rx="2"
          />
        </svg>
        <span className="text-xl font-bold text-white">solodesk</span>
      </div>
    ),

    // Modern brackets design
    5: (
      <div className="flex items-center">
        <span className="text-2xl font-bold">
          <span className="text-blue-400">{`{`}</span>
          <span className="text-white">solodesk</span>
          <span className="text-violet-500">{`}`}</span>
        </span>
      </div>
    ),

    // Dot grid pattern
    6: (
      <div className="flex items-center space-x-2">
        <div className="grid grid-cols-2 gap-1">
          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
          <div className="w-2 h-2 rounded-full bg-violet-500"></div>
          <div className="w-2 h-2 rounded-full bg-violet-500"></div>
          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
        </div>
        <span className="text-xl font-bold text-white">solodesk</span>
      </div>
    ),

    // Circuit board inspired
    7: (
      <div className="flex items-center space-x-2">
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path
            d="M6 16h20M16 6v20M10 10h12M10 22h12"
            className="stroke-blue-400"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="16" cy="16" r="2" className="fill-violet-500" />
        </svg>
        <span className="text-xl font-bold text-white">solodesk</span>
      </div>
    ),

    // Minimalist window
    8: (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 border-2 border-blue-400 rounded-lg relative">
          <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-violet-500"></div>
          <div className="absolute top-1 left-3 w-1 h-1 rounded-full bg-blue-400"></div>
        </div>
        <span className="text-xl font-bold text-white">solodesk</span>
      </div>
    ),

    // Connected nodes
    9: (
      <div className="flex items-center space-x-2">
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <circle cx="8" cy="16" r="3" className="fill-blue-400" />
          <circle cx="16" cy="16" r="3" className="fill-violet-500" />
          <circle cx="24" cy="16" r="3" className="fill-blue-400" />
          <path
            d="M11 16h10"
            stroke="currentColor"
            strokeWidth="2"
            className="stroke-gray-600"
          />
        </svg>
        <span className="text-xl font-bold text-white">solodesk</span>
      </div>
    ),

    // Stacked layers
    10: (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <div className="absolute bottom-0 w-4 h-2 bg-blue-400 rounded-sm"></div>
          <div className="absolute bottom-2 w-3 h-2 bg-violet-500 rounded-sm opacity-80"></div>
          <div className="absolute bottom-4 w-2 h-2 bg-blue-400 rounded-sm opacity-60"></div>
        </div>
        <span className="text-2xl font-bold text-white">solodesk</span>
      </div>
    ),

    // Hexagonal grid
    11: (
      <div className="flex items-center space-x-2">
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 4L26 10V22L16 28L6 22V10L16 4Z"
            className="stroke-blue-400"
            strokeWidth="2"
          />
          <path
            d="M16 10L21 13V19L16 22L11 19V13L16 10Z"
            className="fill-violet-500"
          />
        </svg>
        <span className="text-xl font-bold text-white">solodesk</span>
      </div>
    ),

    // Infinity loop
    12: (
      <div className="flex items-center space-x-2">
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" /> {/* blue-400 */}
              <stop offset="100%" stopColor="#8B5CF6" /> {/* violet-500 */}
            </linearGradient>
          </defs>
          <path
            d="M8 16C8 13.8 9.8 12 12 12C14.2 12 16 13.8 16 16C16 18.2 17.8 20 20 20C22.2 20 24 18.2 24 16C24 13.8 22.2 12 20 12C17.8 12 16 13.8 16 16C16 18.2 14.2 20 12 20C9.8 20 8 18.2 8 16Z"
            stroke="url(#logoGradient)"
            strokeWidth="2"
          />
        </svg>
        <span className="text-xl font-bold text-white">solodesk</span>
      </div>
    ),
  };

  return logos[variant] || logos["1"];
};

export default Logo;
