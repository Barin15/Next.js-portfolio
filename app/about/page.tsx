import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Alex Morgan, an independent designer and front-end developer based in Copenhagen.",
};

const services = [
  {
    number: "01",
    title: "Digital design",
    description: "Clear, characterful interfaces that balance the details with the bigger picture.",
  },
  {
    number: "02",
    title: "Front-end development",
    description: "Responsive, accessible websites built with care and a focus on lasting quality.",
  },
  {
    number: "03",
    title: "Creative direction",
    description: "A steady design partner from the first sketch through launch and beyond.",
  },
];

export default function AboutPage() {
  return (
    <main className="page-main">
      <section className="container page-heading">
        <p className="eyebrow">A bit about me</p>
        <h1>Design-minded.<br /><span>People-focused.</span></h1>
        <p className="page-lede">
          I&apos;m Alex, an independent designer and developer who likes good questions,
          generous collaboration, and making complicated things feel simple.
        </p>
      </section>

      <section className="container about-grid">
        <div className="about-facts">
          <div className="fact-row"><span>Based in</span><span>Copenhagen, Denmark</span></div>
          <div className="fact-row"><span>Working with</span><span>Kind, curious people</span></div>
          <div className="fact-row"><span>Available for</span><span>Select projects in 2026</span></div>
          <div className="fact-row"><span>Outside work</span><span>Long walks, print, good coffee</span></div>
        </div>
        <div className="about-copy">
          <h2>Make it useful. Make it feel like you.</h2>
          <p>
            I work across design and development, helping teams turn early ideas into
            thoughtful, useful digital experiences. I care about how something works
            just as much as how it feels: the small moments, the clear choices, and
            the details that make a product welcoming to use.
          </p>
          <p>
            My process is collaborative and considered. We get to the heart of the
            problem together, make room for exploration, then build something
            purposeful that can grow with your business.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <p className="eyebrow">How I can help</p>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-item" key={service.number}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
