import type { CSSProperties } from "react";
import { site } from "./site-data";

const navItems = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Reviews", "#reviews"],
  ["Hours", "#hours"],
] as const;

const themeStyle = {
  "--bg": "#FAF5EE",
  "--surface": "#FFF8F0",
  "--surface-strong": "#FFFFFF",
  "--text": "#2A1A22",
  "--muted": "#705F67",
  "--accent": "#C99478",
  "--accent-strong": "#9F6B52",
  "--line": "rgba(42, 26, 34, 0.14)",
  "--shadow": "0 18px 45px rgba(42, 26, 34, 0.08)",
} as CSSProperties;

export default function Home() {
  return (
    <main className="site-shell" style={themeStyle}>
      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#">
            <strong>{site.name}</strong>
            <span>{site.label}</span>
          </a>
          <nav className="nav" aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
          <a className="button button-primary" href={site.phoneHref}>
            Call now
          </a>
        </div>
      </header>

      <section className="container hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{site.address}</p>
          <h1 id="hero-title">{site.headline}</h1>
          <p>{site.subhead}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={site.phoneHref}>
              Book an appointment
            </a>
            <a className="button button-secondary" href={site.directions}>
              Get directions
            </a>
          </div>
        </div>
        <div className="hero-media">
          <img
            src={site.heroImage.src}
            alt={site.heroImage.alt}
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="container trust" aria-label="Key salon details">
        {site.trust.map(([value, label]) => (
          <div className="trust-tile" key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="container section split" id="about">
        <div>
          <div className="section-heading">
            <p className="eyebrow">About the salon</p>
            <h2>Neighbourhood care, finished with detail.</h2>
          </div>
          <div className="copy-stack">
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="image-panel">
          <img src={site.aboutImage.src} alt={site.aboutImage.alt} loading="lazy" />
        </div>
      </section>

      <section className="container section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Clear choices for hands, feet, and colour.</h2>
          <p className="note">{site.serviceNote}</p>
        </div>
        <div className="card-grid">
          {site.services.map(([name, text, price]) => (
            <article className="service-card" key={name}>
              <div>
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
              <span className="price">{price}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="container section" id="team">
        <div className="section-heading">
          <p className="eyebrow">Team</p>
          <h2>Roles shown for the demo site.</h2>
          <p className="note">{site.teamNote}</p>
        </div>
        <div className="card-grid">
          {site.team.map((member) => (
            <article className="team-card" key={member.role}>
              <img src={member.image} alt={member.alt} loading="lazy" />
              <div>
                <h3>{member.role}</h3>
                <p>{member.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section" id="gallery">
        <div className="section-heading">
          <p className="eyebrow">Gallery</p>
          <h2>A calm visual direction for the final site.</h2>
          <p className="note">{site.galleryNote}</p>
        </div>
        <div className="gallery-grid">
          {site.gallery.map((image) => (
            <img src={image.src} alt={image.alt} loading="lazy" key={image.src} />
          ))}
        </div>
      </section>

      <section className="container section" id="reviews">
        <div className="section-heading">
          <p className="eyebrow">Testimonials</p>
          <h2>Real words from five-star Google reviews.</h2>
        </div>
        <div className="quote-grid">
          {site.testimonials.map((testimonial) => (
            <article className="quote-card" key={testimonial.name}>
              <blockquote>“{testimonial.quote}”</blockquote>
              <p>{testimonial.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section hours-map" id="hours">
        <div>
          <div className="section-heading">
            <p className="eyebrow">Hours</p>
            <h2>Plan your visit.</h2>
            <p className="note">{site.hoursNote}</p>
          </div>
          <table className="hours-table">
            <tbody>
              {site.hours.map(([day, hours]) => (
                <tr key={day}>
                  <th scope="row">{day}</th>
                  <td>{hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="map-frame">
          <iframe
            title={`${site.name} map`}
            src={site.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="container section" id="faq">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Common questions before calling.</h2>
        </div>
        <div className="faq">
          {site.faq.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="mobile-cta" aria-label="Quick actions">
        <a className="button button-primary" href={site.phoneHref}>
          Call {site.phoneDisplay}
        </a>
        <a className="button button-secondary" href={site.directions}>
          Get directions
        </a>
      </div>

      <footer className="footer">
        <div className="container">
          <strong>{site.name}</strong>
          <p>{site.address}</p>
          <p>{site.phoneDisplay}</p>
          <p>{site.footerDisclaimer}</p>
        </div>
      </footer>
    </main>
  );
}
