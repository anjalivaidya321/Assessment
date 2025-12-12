// src/ProgramAccordion.jsx
import { useState } from "react";
import "./curriculam.css";

const programData = [
  {
    id: "m1",
    monthLabel: "Month 1",
    weekRange: "Weeks 1-4",
    title: "Foundation & Market Basics",
    gradient: "linear-gradient(90deg,#0ea5e9,#0b7bc7)",
    weeks: [
      {
        id: "m1w1",
        label: "Week 1-2",
        title: "Investing & Market Introduction",
        icon: "📈",
        topics: [
          "Introduction to Stocks, Bonds, Forex, Crypto & F&O",
          "Passive Investing strategies",
          "Fundamental Analysis",
          "Financial Ratio Analysis",
        ],
      },
      {
        id: "m1w3",
        label: "Week 3-4",
        title: "Positional Trading & Strategies",
        icon: "📘",
        topics: [
          "Positional Trading with Trend-following",
          "Timing bull & bear market runs",
          "Trading with Time cycles",
          "Creating Portfolios on Smallcase",
          "Daytrading with 5-EMA",
          "IPO & Grey Market Analysis",
        ],
      },
    ],
  },
  {
    id: "m2",
    monthLabel: "Month 2",
    weekRange: "Weeks 5-9",
    title: "Advanced Trading & Market Structure",
    gradient: "linear-gradient(90deg,#9b59e0,#d35282)",
    weeks: [
      {
        id: "m2w5",
        label: "Week 5-6",
        title: "Trade Locations & Technical Analysis",
        icon: "🎯",
        topics: [
          "IPO Short Strategies",
          "Momentum Switch Strategy",
          "Range Trading",
          "S&R Practical Trading",
          "Demand and Supply zone Setup",
          "Intro to SMC - BoS, ChoCh",
        ],
      },
      {
        id: "m2w7",
        label: "Week 7-8",
        title: "Futures, Options & Derivatives",
        icon: "📈",
        topics: [
          "Introduction to Derivatives",
          "Futures Trading Concepts",
          "Options Fundamentals - Calls, Puts, Strike Selection",
          "Option Greeks & Volatility",
          "Option Strategies - Directional & Non-directional",
          "Institutional & Data Analysis",
          "Advanced Execution & Risk Management",
        ],
      },
      {
        id: "m2w9",
        label: "Week 9",
        title: "Market Structure Foundations",
        icon: "🧱",
        topics: [
          "Auction Market Theory",
          "Rules of Price Behaviour",
          "Liquidity (types, pools, and zones)",
          "Price Inefficiency Theory",
          "Market Profile (TPO, value area, POC)",
        ],
      },
    ],
  },
  {
    id: "m3",
    monthLabel: "Month 3",
    weekRange: "Weeks 10-12",
    title: "Professional Trading & Funding",
    gradient: "linear-gradient(90deg,#1fa24b,#0b7f2d)",
    weeks: [
      {
        id: "m3w10",
        label: "Week 10",
        title: "Order Flow & Institutional Activity",
        icon: "📊",
        topics: [
          "Order Flow Analysis",
          "Iceberg Orders",
          "Understanding institutional trading patterns",
          "Liquidity Engineering",
          "Price Inducement",
          "Liquidity Traps and Sweeps",
        ],
      },
      {
        id: "m3w11",
        label: "Week 11",
        title: "Advanced Strategies & FOREX",
        icon: "💵",
        topics: [
          "Market Manipulations (spoofing, absorption)",
          "Base Manipulations",
          "Price Deliveries",
          "Volume / Gap Imbalances",
          "FOREX Trading Fundamentals",
          "Currency Pairs & Trading Sessions",
          "VWAP Trading Strategies",
        ],
      },
      {
        id: "m3w12",
        label: "Week 12",
        title: "Risk Management & Funding",
        icon: "🏆",
        topics: [
          "Position sizing and lot sizes",
          "Risk Management in Derivatives",
          "Understanding Market Risk & India VIX",
          "VWAP Sniper Trading Setup",
          "Prop Firms for Forex",
          "HavenArk Prop. Firm Funding",
          "Hacking funded programs",
          "Psychology for Funded Account",
        ],
      },
    ],
  },
];

export default function ProgramAccordion() {
  const [openMonth, setOpenMonth] = useState(null);
  const [openWeek, setOpenWeek] = useState(null);

  const toggleMonth = (id) => {
    setOpenMonth((prev) => (prev === id ? null : id));
    setOpenWeek(null);
  };

  const toggleWeek = (id) => {
    setOpenWeek((prev) => (prev === id ? null : id));
  };

  return (
    <section className="program">

      {/* ⭐ ADDED EXACTLY WHAT YOU ASKED (Complete Curriculum pill) */}
      <div className="curriculum-badge">
        <button className="curriculum-pill">📘 Complete Curriculum</button>
      </div>

      <header className="program__header">
        <h2>12-Week Comprehensive Program</h2>
        <p>Structured journey from market basics to professional trading across 3 intensive months</p>
      </header>

      <div className="program__list">
        {programData.map((month) => (
          <div key={month.id} className="program__month">
            <button
              className="program__month-bar"
              style={{ background: month.gradient }}
              onClick={() => toggleMonth(month.id)}
            >
              <div className="program__month-meta">
                <span className="pill">{month.monthLabel}</span>
                <span className="pill pill--ghost">{month.weekRange}</span>
              </div>
              <div className="program__month-title">{month.title}</div>
              <span className="chevron">
                {openMonth === month.id ? "▾" : "▸"}
              </span>
            </button>

            {openMonth === month.id && (
              <div className="program__weeks">
                {month.weeks.map((week) => (
                  <div key={week.id} className="program__week-card">
                    <button
                      className="program__week-head"
                      onClick={() => toggleWeek(week.id)}
                    >
                      <div className="program__week-left">
                        <span className="icon">{week.icon}</span>
                        <div>
                          <div className="pill pill--soft">{week.label}</div>
                          <div className="program__week-title">
                            {week.title}
                          </div>
                        </div>
                      </div>
                      <span className="chevron">
                        {openWeek === week.id ? "▾" : "▸"}
                      </span>
                    </button>

                    {openWeek === week.id && (
                      <ul className="program__topics">
                        {week.topics.map((topic) => (
                          <li key={topic}>
                            <span className="bullet">○</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
