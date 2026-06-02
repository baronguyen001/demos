import Image from "next/image";

const phoneHref = "tel:+351920040369";
const phoneDisplay = "+351 920 040 369";
const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=R.%20Crist%C3%B3v%C3%A3o%20Falc%C3%A3o%205A%2C%201900-082%20Lisboa%2C%20Portugal";

const images = {
  hero:
    "https://images.unsplash.com/photo-1637777277435-3c44f82fd0c9?auto=format&fit=crop&w=1600&q=82",
  about:
    "https://images.unsplash.com/photo-1746723378067-83a345ff3160?auto=format&fit=crop&w=1200&q=82",
  hair:
    "https://images.unsplash.com/photo-1675034743339-0b0747047727?auto=format&fit=crop&w=900&q=82",
  nails:
    "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=82",
  makeup:
    "https://images.unsplash.com/photo-1771254240529-dbe324f0a401?auto=format&fit=crop&w=900&q=82",
  nailArt:
    "https://images.unsplash.com/photo-1572814601679-4ef8f7b5ebd1?auto=format&fit=crop&w=900&q=82",
  manicure:
    "https://images.unsplash.com/photo-1511803574983-43bf1f387ece?auto=format&fit=crop&w=900&q=82",
  blowDry:
    "https://images.unsplash.com/photo-1673465766620-1f336d434bff?auto=format&fit=crop&w=900&q=82",
  balayage:
    "https://images.unsplash.com/photo-1695527081848-1e46c06e6458?auto=format&fit=crop&w=900&q=82",
  makeupBrush:
    "https://images.unsplash.com/photo-1560869683-94e483e13bb0?auto=format&fit=crop&w=900&q=82",
  hairPortrait:
    "https://images.unsplash.com/photo-1540920798597-102964c2d7ba?auto=format&fit=crop&w=900&q=82",
  nailPortrait:
    "https://images.unsplash.com/photo-1511803574983-43bf1f387ece?auto=format&fit=crop&w=900&q=82",
};

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Hours", href: "#hours" },
  { label: "FAQ", href: "#faq" },
];

const stats = [
  { value: "4.9", detail: "From 152 Google reviews", label: "Rating" },
  { value: "Lisbon", detail: "Penha de Franca / near Alameda", label: "Salon" },
  { value: "English", detail: "Consultations kept clear", label: "Spoken" },
  {
    value: "Hair · nails",
    detail: "Makeup and waxing too",
    label: "Services",
  },
];

const serviceGroups = [
  {
    title: "Hair",
    services: [
      { name: "Cut & style", price: "from EUR 42" },
      { name: "Balayage", price: "from EUR 125" },
      { name: "Full colour", price: "from EUR 85" },
      { name: "Highlights", price: "from EUR 110" },
    ],
  },
  {
    title: "Nails",
    services: [
      { name: "Manicure", price: "from EUR 22" },
      { name: "Gel / BIAB", price: "from EUR 35" },
      { name: "Pedicure", price: "from EUR 32" },
    ],
  },
  {
    title: "Makeup",
    services: [{ name: "Event makeup", price: "from EUR 65" }],
  },
  {
    title: "Waxing",
    services: [{ name: "Waxing services", price: "from EUR 14" }],
  },
];

const team = [
  {
    role: "Colour Specialist",
    specialties: "Balayage, highlights, full colour, tonal refreshes",
    image: images.hairPortrait,
    alt: "Stock portrait photo of a woman with styled hair",
  },
  {
    role: "Nail Technician",
    specialties: "Manicures, gel polish, BIAB-style strengthening, pedicures",
    image: images.nailPortrait,
    alt: "Stock portrait-style photo focused on a manicure",
  },
  {
    role: "Makeup & Waxing Specialist",
    specialties: "Soft event makeup, finishing touches, waxing appointments",
    image: images.makeup,
    alt: "Stock portrait-style photo of a makeup artist applying makeup",
  },
];

const gallery = [
  {
    image: images.balayage,
    alt: "Stock photo of styled hair with soft salon lighting",
    className: "md:row-span-2",
  },
  {
    image: images.nailArt,
    alt: "Stock photo of detailed manicure and nail art",
    className: "",
  },
  {
    image: images.about,
    alt: "Stock photo of a bright salon interior with hair products",
    className: "",
  },
  {
    image: images.blowDry,
    alt: "Stock photo of a salon blow dry appointment",
    className: "",
  },
  {
    image: images.manicure,
    alt: "Stock photo of polished nails in a beauty setting",
    className: "",
  },
  {
    image: images.makeupBrush,
    alt: "Stock close-up of makeup being applied with a brush",
    className: "md:col-span-2",
  },
];

const reviews = [
  {
    name: "Suu",
    quote:
      "Obsessed with my new hair colour. Thank you Vinny for your attention to detail and for making me feel gorgeous. Amazing service and stunning results. I highly recommend this salon to anyone seeking expert, high-quality colouring.",
  },
  {
    name: "Javiera",
    quote:
      "Amazing — they make sure you leave looking perfect. I felt so well taken care of, and they clearly know exactly what they're doing. I loved how my hair turned out: a gorgeous copper colour and a stunning cut.",
  },
  {
    name: "Stephanie",
    quote:
      "More than satisfied with the result. My hair turned out exactly the way I had imagined it, and Vinny knows her craft very well. The price was surprisingly affordable for the time and effort.",
  },
];

const hours = [
  ["Monday", "By appointment"],
  ["Tuesday", "10:00 AM - 7:00 PM"],
  ["Wednesday", "10:00 AM - 7:00 PM"],
  ["Thursday", "10:00 AM - 7:00 PM"],
  ["Friday", "10:00 AM - 7:00 PM"],
  ["Saturday", "10:00 AM - 7:00 PM"],
  ["Sunday", "Closed"],
];

const faqs = [
  {
    question: "Should I book ahead or walk in?",
    answer:
      "For colour, nails, makeup, and waxing, booking ahead is the safest option. Walk-ins can be possible when the team has open time.",
  },
  {
    question: "Is English spoken during appointments?",
    answer:
      "The demo highlights English-friendly service because multiple public reviews mention that clear communication made appointments easier.",
  },
  {
    question: "Do colour services include a consultation?",
    answer:
      "Colour work should start with a practical consultation on tone, maintenance, timing, and the result your hair can realistically hold.",
  },
  {
    question: "Are deposits required?",
    answer:
      "This demo does not assume a deposit policy. Add the salon's real policy here before using the site publicly.",
  },
  {
    question: "Can I book hair, nails, makeup, and waxing together?",
    answer:
      "The Google listing includes all four service areas. Combined appointments should be confirmed directly with the salon.",
  },
];

function DemoLabel({ children }: { children: React.ReactNode }) {
  return <span className="label">{children}</span>;
}

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-40 border-b border-[#eadbd1] bg-[#fffdf9]/92 backdrop-blur">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-4">
          <a
            href="#top"
            className="font-display text-xl font-semibold text-[#251d1a]"
            aria-label="Beauty Concept by Vinny home"
          >
            Beauty Concept by Vinny
          </a>
          <nav
            className="hidden items-center gap-7 text-sm font-semibold uppercase tracking-[0.16em] text-[#5f5049] md:flex"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[#9a614d]">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={phoneHref}
            className="shrink-0 whitespace-nowrap rounded-full bg-[#251d1a] px-4 py-3 text-sm font-bold text-[#fffdf9] transition hover:bg-[#68483b] sm:px-5"
          >
            Call now
          </a>
        </div>
      </header>

      <section id="top" className="bg-[#faf6f1]">
        <div className="section-shell grid min-h-[calc(100vh-76px)] items-center gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="scroll-reveal">
            <DemoLabel>Demo photo - replace with salon images</DemoLabel>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.22em] text-[#9a614d]">
              Hair, nails, makeup, waxing
            </p>
            <h1 className="font-display mt-4 max-w-3xl text-5xl font-semibold leading-[0.98] text-[#251d1a] sm:text-6xl lg:text-7xl">
              Lisbon colour worth obsessing over
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5049]">
              Expert colour, English-friendly care, and 152 Google reviews in a
              warm Lisbon salon.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={phoneHref}
                className="rounded-full bg-[#c08a72] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-[#251d1a] transition hover:bg-[#9a614d] hover:text-white"
              >
                Call now
              </a>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#c08a72] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-[#68483b] transition hover:bg-[#fffdf9]"
              >
                Get directions
              </a>
            </div>
          </div>

          <div className="photo-frame soft-shadow relative aspect-[4/5] max-h-[720px] rounded-[2rem]">
            <Image
              src={images.hero}
              alt="Bright salon styling chairs and mirrors used as a demo hero photo"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-[#fffdf9]/88 p-4 text-sm font-semibold text-[#5f5049] backdrop-blur">
              Demo-only image. Final site should use Beauty Concept by Vinny
              salon photos.
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Trust signals" className="border-y border-[#eadbd1] bg-[#fffdf9]">
        <div className="mx-auto grid max-w-[1180px] gap-px bg-[#eadbd1] md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#fffdf9] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a614d]">
                {stat.label}
              </p>
              <p className="font-display mt-3 text-3xl font-semibold text-[#251d1a]">
                {stat.value}
                {stat.label === "Rating" ? " ★" : ""}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#70635c]">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-[#faf6f1]">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="photo-frame aspect-[4/5] rounded-[1.5rem]">
            <Image
              src={images.about}
              alt="Bright salon interior with products and a stylist in the background"
              width={900}
              height={1125}
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="scroll-reveal">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9a614d]">
              About
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
              A calmer beauty appointment
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-[#5f5049]">
              <p>
                Beauty Concept by Vinny should feel personal from the first
                consultation: colour choices explained clearly, finishes
                photographed well, and services paced so hair, nails, makeup, or
                waxing still feel considered.
              </p>
              <p>
                The public proof point is strong: 4.9 across 152 Google reviews,
                with repeat praise for careful colour work and a warm team.
              </p>
            </div>
            <a
              href="#hours"
              className="mt-8 inline-flex rounded-full border border-[#c08a72] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#68483b]"
            >
              See hours
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#fffdf9]">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <DemoLabel>Demo prices - Confirm with your actual rates</DemoLabel>
              <h2 className="font-display mt-5 text-4xl font-semibold sm:text-5xl">
                Services shaped around the finish
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#70635c]">
              Hair colour leads the page, with nails, makeup, and waxing kept
              easy to scan for quick booking decisions.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {serviceGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-lg border border-[#eadbd1] bg-[#faf6f1] p-6"
              >
                <h3 className="font-display text-3xl font-semibold">{group.title}</h3>
                <div className="mt-6 divide-y divide-[#eadbd1]">
                  {group.services.map((service) => (
                    <div
                      key={service.name}
                      className="flex items-center justify-between gap-4 py-4"
                    >
                      <span className="font-semibold text-[#251d1a]">
                        {service.name}
                      </span>
                      <span className="text-sm font-bold text-[#9a614d]">
                        {service.price}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="bg-[#faf6f1]">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9a614d]">
              Team
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">
              The right specialist for each detail
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.role}
                className="overflow-hidden rounded-lg border border-[#eadbd1] bg-[#fffdf9]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <DemoLabel>Replace with your actual team</DemoLabel>
                  <h3 className="font-display mt-4 text-2xl font-semibold">
                    {member.role}
                  </h3>
                  <p className="mt-3 leading-7 text-[#70635c]">
                    {member.specialties}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#fffdf9]">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9a614d]">
                Gallery
              </p>
              <h2 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">
                Let the work take the room
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-[#70635c]">
              Photos for demo only — your final site will use shots of your salon
              and work.
            </p>
          </div>

          <div className="mt-10 grid auto-rows-[260px] gap-4 md:grid-cols-3">
            {gallery.map((item) => (
              <div
                key={item.image}
                className={`photo-frame rounded-lg ${item.className}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={900}
                  height={700}
                  loading="lazy"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-[#faf6f1]">
        <div className="section-shell">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9a614d]">
            Testimonials
          </p>
          <h2 className="font-display mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Colour clients notice the care
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <figure
                key={review.name}
                className="rounded-lg border border-[#eadbd1] bg-[#fffdf9] p-6"
              >
                <blockquote className="text-lg leading-8 text-[#4f433d]">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[#9a614d]">
                  {review.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="hours" className="bg-[#fffdf9]">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <DemoLabel>Confirm your actual hours</DemoLabel>
            <h2 className="font-display mt-5 text-4xl font-semibold sm:text-5xl">
              Hours and Lisbon location
            </h2>
            <div className="mt-8 overflow-hidden rounded-lg border border-[#eadbd1]">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">
                  Demo business hours for Beauty Concept by Vinny
                </caption>
                <tbody className="divide-y divide-[#eadbd1]">
                  {hours.map(([day, time]) => (
                    <tr key={day} className="bg-[#faf6f1]">
                      <th scope="row" className="px-5 py-4 font-semibold">
                        {day}
                      </th>
                      <td className="px-5 py-4 text-right text-[#5f5049]">
                        {time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 leading-7 text-[#70635c]">
              R. Cristóvão Falcão 5A, 1900-082 Lisboa, Portugal
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.5rem] border border-[#eadbd1] bg-[#faf6f1] soft-shadow">
            <iframe
              title="Map to Beauty Concept by Vinny in Lisbon"
              src="https://www.google.com/maps?q=R.%20Crist%C3%B3v%C3%A3o%20Falc%C3%A3o%205A%2C%201900-082%20Lisboa%2C%20Portugal&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full border-0"
            />
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#faf6f1] pb-24 md:pb-0">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9a614d]">
              FAQ
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">
              Before you book
            </h2>
          </div>
          <div className="mt-9 grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-[#eadbd1] bg-[#fffdf9] p-5"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-[#251d1a] marker:hidden">
                  <span className="inline-flex w-full items-center justify-between gap-4">
                    {faq.question}
                    <span aria-hidden="true" className="text-2xl text-[#c08a72]">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl leading-7 text-[#70635c]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-[#eadbd1] bg-[#fffdf9] p-3 shadow-[0_-14px_40px_rgba(69,42,31,0.12)] md:hidden">
        <a
          href={phoneHref}
          className="rounded-full bg-[#251d1a] px-4 py-3 text-center text-sm font-bold text-white"
        >
          Call {phoneDisplay}
        </a>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="ml-3 rounded-full border border-[#c08a72] px-4 py-3 text-center text-sm font-bold text-[#68483b]"
        >
          Get directions
        </a>
      </div>

      <footer className="bg-[#251d1a] px-5 py-10 text-[#fffdf9]">
        <div className="mx-auto grid max-w-[1180px] gap-8 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="font-display text-3xl font-semibold">
              Beauty Concept by Vinny
            </p>
            <p className="mt-4 text-sm leading-6 text-[#eadbd1]">
              Demo site — not affiliated with the business.
            </p>
          </div>
          <div className="text-sm leading-7 text-[#eadbd1] md:text-right">
            <p>R. Cristóvão Falcão 5A, 1900-082 Lisboa, Portugal</p>
            <p>
              <a href={phoneHref}>{phoneDisplay}</a>
            </p>
            <p className="mt-4 text-xs leading-6 text-[#d8c7bc]">
              This is a demo site built as a free preview for Beauty Concept by
              Vinny. Not officially affiliated. If you're the owner and want it
              live with your real photos, contact baonv001@gmail.com.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
