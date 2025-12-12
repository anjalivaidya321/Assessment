import "./Mentors.css";

const founders = [
  {
    name: "Ritvik Vipin",
    title: "CO-FOUNDER",
    handle: "@ritviik",
    img: "/founder.png",
  },
  {
    name: "Akash Jayan",
    title: "CO-FOUNDER",
    handle: "@akash_jayan97",
    img: "/founder.png",
  },
  {
    name: "Christophal Rafael",
    title: "CO-FOUNDER",
    handle: "@christophelraphel",
    img: "/founder.png",
  },
];

export default function Founders() {
  return (
    <section className="founders">
      <div className="founders__container">

        {/* ⭐ Top Heading Section (from your reference image) */}
        <div className="mentors-header">
          <div className="badge">Expert Mentors</div>
          <h2 className="main-title">
            Learn from the <span>best</span>
          </h2>
          <p className="subtitle">
            9+ years of combined experience across all market segments
          </p>
        </div>

        {/* Founder Cards */}
        <div className="founders__grid">
          {founders.map((founder) => (
            <article className="founder-card" key={founder.name}>
              <div className="founder-card__image-wrap">
                <img
                  src={founder.img}
                  alt={founder.name}
                  className="founder-card__image"
                />
              </div>
              <div className="founder-card__content">
                <div className="founder-card__badge">{founder.title}</div>
                <div className="founder-card__name">{founder.name}</div>
                <div className="founder-card__handle">{founder.handle}</div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
