import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Alex Morgan about a design or development project.",
};

export default function ContactPage() {
  return (
    <main className="page-main">
      <section className="container page-heading">
        <p className="eyebrow">Have a good one in mind?</p>
        <h1>Let&apos;s make<br /><span>something matter.</span></h1>
        <p className="page-lede">
          Tell me a little about what you&apos;re working on. I&apos;m always happy to hear
          about thoughtful projects and meet the people behind them.
        </p>
      </section>
      <section className="container contact-section">
        <div className="contact-copy">
          <h2>The best work starts with a conversation.</h2>
          <p>
            Share a few details, a rough timeline, or just the idea that&apos;s been on
            your mind. I&apos;ll get back to you within a couple of working days.
          </p>
          <a className="contact-email" href="mailto:hello@alexmorgan.design">
            hello@alexmorgan.design <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-details">
          <div className="contact-detail"><span>Location</span><span>Copenhagen, Denmark<br />Working worldwide</span></div>
          <div className="contact-detail"><span>Availability</span><span>Taking on select projects</span></div>
          <div className="contact-detail"><span>Elsewhere</span><span><Link href="/projects">Explore my work ↗</Link></span></div>
        </div>
      </section>
    </main>
  );
}
