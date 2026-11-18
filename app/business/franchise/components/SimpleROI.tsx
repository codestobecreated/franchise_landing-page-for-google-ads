"use client";

export default function SimpleROI() {
  const stats = [
    { label: "Annualized ROI", value: "+43%", icon: "📈" },
    { label: "Payback Period", value: "2.3 Years", icon: "⏱️" },
    { label: "5-Year Net Gain", value: "₹47.9 L", icon: "💰" },
  ];

  const yearData = [
    { year: "Year 0", label: "Investment", value: "₹42.0 L" },
    { year: "Year 1", label: "Return", value: "₹18.0 L" },
    { year: "Year 2", label: "Growth", value: "₹36.0 L" },
    { year: "Year 3", label: "Profit", value: "₹54.0 L" },
    { year: "Year 4", label: "Strong Gain", value: "₹71.9 L" },
    { year: "Year 5", label: "Net Value", value: "₹89.9 L" },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white text-black font-poppins border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <span className="text-[#00b14f] text-xs font-black uppercase tracking-widest">
            INTERACTIVE ROI TOOL
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 mb-4">
            Calculate Your Franchise <span className="text-[#00b14f]">Returns</span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Select your charger plan, adjust daily charging sessions, and project your exact 5-year net profits & payback timeline.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 flex items-center gap-4 shadow-sm">
              <div className="text-4xl">{stat.icon}</div>
              <div>
                <div className="text-2xl font-black text-zinc-900">{stat.value}</div>
                <div className="text-xs font-bold text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Setup */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8">
            <h3 className="text-lg font-black mb-6 flex items-center gap-3">
              <span className="text-2xl">⚙️</span> Investment Setup
            </h3>
            <p className="text-xs font-semibold text-gray-600 mb-4 uppercase">Customize your plan as per your location and capacity</p>

            <div className="space-y-6">
              <div>
                <label className="text-xs font-black uppercase text-gray-600 block mb-3">Charger Type</label>
                <div className="space-y-2">
                  {["60 kW", "120 kW", "Super Hub"].map((type) => (
                    <button key={type} className="w-full text-left px-4 py-2 rounded-lg border border-gray-200 hover:border-[#00b14f] hover:bg-emerald-50 transition-colors text-sm font-semibold">
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-black uppercase text-gray-600 block mb-3">Select Your Plan Amount</label>
                <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-600 space-y-1">
                  <p>60 kW – ₹42 Lakhs (60 kW Dual Gun Fast Charger)</p>
                  <p>120 kW – ₹72 Lakhs (120 kW Heavy Fast Charger)</p>
                  <p>Super Hub – ₹1.35 Cr (240 kW – 800 kW Commercial Hub)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Parameters */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8">
            <h3 className="text-lg font-black mb-6 flex items-center gap-3">
              <span className="text-2xl">📊</span> Daily Usage & Session Parameters
            </h3>

            <div className="space-y-6">
              <div>
                <label className="text-xs font-black uppercase text-gray-600 block mb-2">Daily Charging Sessions</label>
                <div className="flex items-center gap-4">
                  <input type="range" min="1" max="30" defaultValue="18" className="flex-1" />
                  <span className="text-lg font-black text-[#00b14f]">18</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-black uppercase text-gray-600 block mb-2">Avg Energy per Session</label>
                <div className="flex items-center gap-4">
                  <input type="range" min="10" max="50" defaultValue="26" className="flex-1" />
                  <span className="text-lg font-black text-[#00b14f]">26 kWh</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-xs font-semibold text-gray-600 mb-3 uppercase">Key Parameters</p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Electricity Tariff (₹/Unit)</span>
                    <span className="font-black">₹12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Operational Days (Per Year)</span>
                    <span className="font-black">365</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#00b14f] hover:bg-[#009b45] text-black font-bold py-3 rounded-full transition-colors">
                Calculate My Returns
              </button>
            </div>
          </div>
        </div>

        {/* 5-Year ROI Chart */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black mb-2">5-Year ROI Projection</h3>
            <p className="text-sm text-gray-600">See how your investment grows year by year</p>
          </div>

          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-gray-600 mb-2">Payback in 2.3 Years</p>
            <svg viewBox="0 0 400 200" className="w-full h-64">
              {/* Y-axis labels */}
              <text x="30" y="20" fontSize="12" fontWeight="bold" fill="#888">₹1Cr</text>
              <text x="30" y="50" fontSize="12" fontWeight="bold" fill="#888">₹83L</text>
              <text x="30" y="80" fontSize="12" fontWeight="bold" fill="#888">₹62L</text>
              <text x="30" y="110" fontSize="12" fontWeight="bold" fill="#888">₹41L</text>
              <text x="30" y="140" fontSize="12" fontWeight="bold" fill="#888">₹21L</text>
              <text x="40" y="170" fontSize="12" fontWeight="bold" fill="#888">₹0</text>

              {/* Grid lines */}
              <line x1="50" y1="20" x2="380" y2="20" stroke="#eee" strokeWidth="1"/>
              <line x1="50" y1="50" x2="380" y2="50" stroke="#eee" strokeWidth="1"/>
              <line x1="50" y1="80" x2="380" y2="80" stroke="#eee" strokeWidth="1"/>
              <line x1="50" y1="110" x2="380" y2="110" stroke="#eee" strokeWidth="1"/>
              <line x1="50" y1="140" x2="380" y2="140" stroke="#eee" strokeWidth="1"/>
              <line x1="50" y1="170" x2="380" y2="170" stroke="#999" strokeWidth="2"/>

              {/* Chart line */}
              <polyline points="60,160 120,140 180,110 240,80 300,50 360,20" fill="none" stroke="#00b14f" strokeWidth="3" strokeLinecap="round"/>

              {/* Data points */}
              {[60, 120, 180, 240, 300, 360].map((x, i) => (
                <circle key={i} cx={x} cy={[160, 140, 110, 80, 50, 20][i]} r="4" fill="#00b14f"/>
              ))}

              {/* X-axis labels */}
              <text x="55" y="190" fontSize="11" fill="#888">Year 0</text>
              <text x="115" y="190" fontSize="11" fill="#888">Year 1</text>
              <text x="175" y="190" fontSize="11" fill="#888">Year 2</text>
              <text x="235" y="190" fontSize="11" fill="#888">Year 3</text>
              <text x="295" y="190" fontSize="11" fill="#888">Year 4</text>
              <text x="355" y="190" fontSize="11" fill="#888">Year 5</text>
            </svg>
          </div>

          {/* Year-wise Details */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
            {yearData.map((data, i) => (
              <div key={i} className="bg-gradient-to-b from-emerald-50 to-white border border-emerald-100 rounded-xl p-4 text-center">
                <p className="text-xs font-black text-gray-600 uppercase mb-2">{data.year}</p>
                <p className="text-xs font-semibold text-gray-500 mb-2">{data.label}</p>
                <p className="text-sm font-black text-[#00b14f]">{data.value}</p>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-emerald-50 to-white border border-emerald-200 rounded-xl p-6 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Total Net Gain (5 Years)</p>
                <p className="text-3xl font-black text-[#00b14f]">₹47.9 L</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 uppercase mb-1">TOTAL ROI</p>
                <p className="text-3xl font-black text-[#00b14f]">+214%</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-[#00b14f] hover:bg-[#009b45] text-black font-bold px-8 py-3 rounded-full transition-colors">
              MAKE AN ENQUIRY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
