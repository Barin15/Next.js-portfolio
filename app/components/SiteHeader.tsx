import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/" aria-label="Alex Morgan, home">
          <span className="wordmark-mark" aria-hidden="true">a.</span>
          <span>Alex Morgan</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
          <Link className="nav-contact" href="/contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
