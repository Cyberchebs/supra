import React from 'react'

const Buy = () => {
  return (
    <div className="last" id="last">
      <div className="min-h-screen  flex items-center justify-center px-4 py-20"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
 
        
        <div className="relative w-full max-w-2xl rounded-lg border bg-zinc-900 border-red-600 overflow-hidden">
 
        
          <div className="flex h-1.5 w-full">
            <div className="flex-1 bg-red-600" />
            <div className="w-12 bg-zinc-700" />
            <div className="w-6 bg-zinc-800" />
          </div>
 
          
          <div
            className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 tracking-widest uppercase"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "13px", letterSpacing: "0.15em" }}
          >
            Limited Availability
          </div>
 
          
          <div className="px-8 py-12 flex flex-col items-center text-center gap-6">
 
            
            <p
              className="text-red-500 text-sm font-bold tracking-widest uppercase"
              style={{ letterSpacing: "0.25em" }}
            >
              🏁 Ready to own one?
            </p>
 
          
            <h1
              className="text-white leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(52px, 10vw, 88px)",
                letterSpacing: "0.03em",
              }}
            >
              Place an order <span className="text-red-600">Now</span>
            </h1>
 
          
            <p className="text-zinc-400 max-w-md leading-relaxed" style={{ fontSize: "16px" }}>
              Secure your GR Supra build slot today. Configure your spec, choose your trim, and get behind the wheel faster than you think.
            </p>
 
          
            <div className="flex gap-1 my-1">
              <div className="h-1 w-16 bg-red-600 rounded-sm" />
              <div className="h-1 w-6 bg-zinc-600 rounded-sm" />
              <div className="h-1 w-3 bg-zinc-700 rounded-sm" />
            </div>
 
            
            <a
              href="https://www.toyota.com/configurator/build/step/model/year/2024?modelCode=supragr"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 mt-2 cursor-pointer"
            >
            
              <span className="absolute inset-0 rounded-lg bg-red-600 opacity-20 blur-md scale-105 group-hover:opacity-40 transition-opacity duration-300" />
 
            
              <span
                className="relative flex items-center gap-3 bg-red-600 hover:bg-red-500 active:scale-95 text-white font-bold tracking-widest uppercase px-10 py-4 rounded-lg transition-all duration-200"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "20px", letterSpacing: "0.15em" }}
              >
              
                <span className="text-red-300 text-sm leading-none">▶▶</span>
                Configure &amp; Order
              
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform duration-200"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
 
            
            <p className="text-zinc-600 text-xs tracking-widest uppercase mt-2" style={{ letterSpacing: "0.15em" }}>
              Opens official Toyota configurator
            </p>
          </div>
 
            <div className="flex h-1.5 w-full">
            <div className="w-6 bg-zinc-800" />
            <div className="w-12 bg-zinc-700" />
            <div className="flex-1 bg-red-600" />
          </div>
        </div>
 
      </div>

      copyright @ 2024 | Made by  chebem nzom
    </div>
  )
}

export default Buy