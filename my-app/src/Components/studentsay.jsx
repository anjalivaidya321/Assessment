// src/TestimonialGrid.jsx
import "./sudentsay.css";

const testimonials = [
  {
    quote:
      "The masterclass completely changed my approach to trading. The mentors’ real-time insights and personalized guidance helped me understand market dynamics like never before. My confidence has increased tremendously!",
    badge: { text: "Improved consistency by 85%", color: "#2ba4e9", bg: "#e4f4ff" },
    name: "Rajesh Kumar",
    role: "Software Engineer · Bangalore",
    initials: "RK",
    avatar: "#0ea5e9",
  },
  {
    quote:
      "As someone with zero trading experience, I was nervous at first. But the structured curriculum and patient mentors made learning enjoyable. Now I’m confidently managing my own portfolio!",
    badge: { text: "Started from zero to profitable", color: "#d94697", bg: "#ffe3f1" },
    name: "Priya Sharma",
    role: "Business Owner · Mumbai",
    initials: "PS",
    avatar: "#ec4899",
  },
  {
    quote:
      "The advanced strategies taught here are game-changing. The combination of technical analysis and risk management frameworks is exactly what professional traders need. Worth every penny!",
    badge: { text: "Achieved 90% win rate", color: "#f97316", bg: "#ffe8d7" },
    name: "Amit Patel",
    role: "Financial Analyst · Delhi",
    initials: "AP",
    avatar: "#f97316",
  },
  {
    quote:
      "The flexibility of the online program allowed me to learn at my own pace despite my hectic schedule. The community support is amazing—always someone to help when you need it!",
    badge: { text: "Balanced career and trading", color: "#14a44d", bg: "#e5f8ec" },
    name: "Sneha Reddy",
    role: "Medical Professional · Hyderabad",
    initials: "SR",
    avatar: "#22c55e",
  },
  {
    quote:
      "I’ve taken multiple courses before, but Haven Ark stands out. The practical approach, live market analysis, and continuous mentorship make all the difference. This is not just a course, it’s a transformation!",
    badge: { text: "Built consistent income stream", color: "#0ea5e9", bg: "#e4f4ff" },
    name: "Vikram Singh",
    role: "Entrepreneur · Pune",
    initials: "VS",
    avatar: "#0ea5e9",
  },
  {
    quote:
      "The psychology aspects of trading they cover are invaluable. Understanding my emotional patterns and learning discipline has made me a much better trader. Highly recommend to everyone!",
    badge: { text: "Mastered trading psychology", color: "#a855f7", bg: "#f3e8ff" },
    name: "Meera Joshi",
    role: "Marketing Manager · Chennai",
    initials: "MJ",
    avatar: "#a855f7",
  },
];

export default function TestimonialGrid() {
  return (
    <section className="testimonial-section">

      {/* ⭐ ADDED THIS TOP HEADING BLOCK (exactly like screenshot) ⭐ */}
      <div style={{ textAlign: "center", marginBottom: "50px", marginTop: "30px" }}>
        <div
          style={{
            display: "inline-block",
            background: "#e0edff",
            padding: "8px 20px",
            borderRadius: "25px",
            fontSize: "14px",
            fontWeight: "600",
            color: "#3b82f6",
            marginBottom: "12px",
          }}
        >
          ⭐ Student Success Stories
        </div>

        <h2 style={{ fontSize: "38px", fontWeight: "700", margin: "0", color: "#111" }}>
          What Our Students Say
        </h2>

        <p style={{ fontSize: "16px", color: "#555", marginTop: "10px" }}>
          Real feedback from traders who transformed their journey with Haven Ark
        </p>
      </div>
      {/* ⭐ END OF ADDED BLOCK ⭐ */}

      <div className="testimonial-grid">
        {testimonials.map((t) => (
          <article className="testimonial-card" key={t.name}>
            <div className="quote-mark">”</div>
            <div className="stars">★★★★★</div>
            <p className="quote">{t.quote}</p>
            <span
              className="badge"
              style={{ color: t.badge.color, background: t.badge.bg }}
            >
              {t.badge.text}
            </span>
            <div className="footer">
              <div className="avatar" style={{ background: t.avatar }}>
                {t.initials}
              </div>
              <div>
                <div className="name">{t.name}</div>
                <div className="role">{t.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
