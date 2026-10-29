import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/app/data/projects";

export default function Home() {
  return (
    <main>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Available for select projects</p>
          <h1>Thoughtful digital experiences, <span>made to matter.</span></h1>
          <p className="hero-description">
            I&apos;m Alex Morgan, an independent designer and front-end developer
            partnering with good people to make the internet a little more human.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/projects">Explore my work <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="hero-meta">
            <span>Based in Copenhagen, DK</span>
            <span className="meta-divider" aria-hidden="true" />
            <span>Working everywhere</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="portrait-frame">
            <Image
              src="/images/alex-portrait.svg"
              alt="Illustrated portrait of Alex Morgan"
              width={620}
              height={720}
              priority
              className="portrait-image"
            />
            <span className="portrait-note">Design with a little more feeling.</span>
          </div>
          <span className="hero-side-note">Independent by nature<br />Collaborative by choice</span>
        </div>
        <a className="scroll-cue" href="#selected-work"><span aria-hidden="true">↓</span> Scroll to explore</a>
      </section>

      <section className="work-section section-pad" id="selected-work">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A few things I&apos;ve made</p>
              <h2>Selected work<span className="heading-period">.</span></h2>
            </div>
            <Link className="text-link section-link" href="/projects">View all projects <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="intro-band section-pad">
        <div className="container intro-band-inner">
          <p className="eyebrow">A good place to start</p>
          <h2>Good work happens when <span>curiosity meets care.</span></h2>
          <div className="intro-band-bottom">
            <p>I bring strategy, thoughtful design, and clean code together to help ambitious ideas find their shape.</p>
            <Link className="button button-light" href="/about">A little about me <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
