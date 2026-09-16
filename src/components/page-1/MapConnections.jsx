import React, { useState } from 'react';
import { Compass, Users } from 'lucide-react';

export default function MapConnections() {
  const [selectedUser, setSelectedUser] = useState(null);

  const mapUsers = [
    { name: "Sarah, 26", distance: "0.4 km away", match: "91%", top: "22%", left: "22%", type: "active" },
    { name: "James, 28", distance: "0.5 km away", match: "87%", top: "25%", left: "68%", type: "active" },
    { name: "Emma, 24", distance: "0.3 km away", match: "90%", top: "68%", left: "55%", type: "active" },
    { name: "Alex, 27", distance: "0.6 km away", match: "83%", top: "72%", left: "33%", type: "active" },
    { name: "Nash, 29", distance: "0.7 km away", match: "86%", top: "48%", left: "10%", type: "active" },
    { name: "Mia, 25", distance: "0.8 km away", match: "81%", top: "60%", left: "82%", type: "new" },
  ];

  return (
    <section className="w-full bg-[#fcfcfd] py-24 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-[1800px] mx-auto flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center">
          <span className="text-[#d2ff00] text-sm font-bold tracking-[2px] uppercase mb-4">
            LIVE EXPERIENCE
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-[68px] font-black text-[#111111] leading-[1.08] tracking-tight mb-8">
            Connections{' '}
            <span className="relative inline-block px-3 py-0.5 bg-[#D2F026] rounded -rotate-[0.5deg]">
              Happening
            </span>
            <br />
            Now
          </h2>
          <p className="text-zinc-500 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Watch as real people discover each other, start conversations, and make meaningful connections every second.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full aspect-[21/9] lg:aspect-[2/1] min-h-[350px] sm:min-h-[500px] lg:min-h-[650px] border border-zinc-200 shadow-xl rounded-[40px] overflow-hidden bg-zinc-100 select-none">
          {/* Map Image Background */}
          <img
            src="/assets/page-1/chennai-map.png"
            alt="Chennai City Map"
            className="w-full h-full object-cover object-center select-none pointer-events-none"
          />

          {/* Interactive Radar Waves at the center pin location */}
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 pointer-events-none z-10">
            <div className="absolute inset-0 rounded-full border border-purple-500/30 animate-ping opacity-60 scale-125" />
            <div className="absolute inset-0 rounded-full border border-purple-500/40 animate-ping opacity-40 scale-150" />
          </div>

          Active Users Counter Badge
          <div className="absolute top-5 left-5 sm:top-7 sm:left-7 z-30 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-zinc-200/60 px-4 py-3 flex items-center gap-3 select-none">
            <div className="w-10 h-10 rounded-full bg-[#d2ff00] flex items-center justify-center shrink-0">
              <Users size={18} className="text-zinc-950" />
            </div>
            <div className="text-left leading-tight">
              <span className="text-zinc-500 text-[18px] sm:text-[14px] font-medium">Active Now</span>
            </div>
          </div>

          {/* Invisible interactive hover hotspots to trigger matching state overlay */}
          {mapUsers.map((user, i) => (
            <div
              key={i}
              className="absolute group z-20 cursor-pointer -translate-x-1/2 -translate-y-1/2"
              style={{ top: user.top, left: user.left }}
              onClick={() => setSelectedUser(user)}
            >
              {/* Pulsing Hotspot dot overlaying the map points */}
              <div className="relative flex items-center justify-center w-12 h-12">
                <div className={`w-3.5 h-3.5 rounded-full ${user.type === 'active' ? 'bg-lime-500/0' : 'bg-purple-600/0'} border-2 border-transparent relative z-10`} />
              </div>

              {/* Tooltip on Hover */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-zinc-950 text-white rounded-xl py-1.5 px-3 whitespace-nowrap text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none flex items-center gap-2">
                <span>{user.name}</span>
                <span className="text-[#d2ff00]">{user.match} Match</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
