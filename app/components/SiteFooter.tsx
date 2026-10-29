import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="wordmark" href="/">
          <span className="wordmark-mark" aria-hidden="true">a.</span>
          <span>Alex Morgan</span>
        </Link>
        <p className="footer-note">Independent designer &amp; developer · Copenhagen, DK</p>
        <div className="footer-links">
          <Link href="/projects">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <a href="mailto:hello@alexmorgan.design">Email ↗</a>
        </div>
      </div>
    </footer>
  );
}
