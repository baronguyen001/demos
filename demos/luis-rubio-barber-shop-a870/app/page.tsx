const phoneHref = "tel:+34914022147";
const phoneDisplay = "+34 914 02 21 47";
const address = "C. de Hermosilla, 110, Salamanca, 28009 Madrid, Spain";
const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=C.%20de%20Hermosilla%2C%20110%2C%20Salamanca%2C%2028009%20Madrid%2C%20Spain";
const mapUrl =
  "https://www.google.com/maps?q=C.%20de%20Hermosilla%2C%20110%2C%20Salamanca%2C%2028009%20Madrid%2C%20Spain&output=embed";

const aboutImage =
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80";

const services = [
  ["Skin fade", "Precision fade with clean neckline", "from 24 EUR", "Fade"],
  ["Classic cut", "Scissor or clipper finish with styling", "from 22 EUR", "Cut"],
  ["Beard trim & shape", "Line work, taper and product finish", "from 15 EUR", "Beard"],
  ["Hot-towel shave", "Straight razor finish with warm towel", "from 18 EUR", "Shave"],
  ["Cut + beard combo", "Haircut, beard shape and final detail", "from 36 EUR", "Combo"],
  ["Kids cut", "Calm, tidy cut for younger clients", "from 16 EUR", "Kids"],
  ["Hair wash & style", "Wash, dry and product finish", "from 12 EUR", "Style"],
  ["Line-up", "Edges, neckline and small cleanups", "from 10 EUR", "Line"],
];

const team = [
  {
    role: "Master Barber",
    specialty: "Classic cuts, skin fades and final detailing",
    image:
      "https://images.unsplash.com/photo-1546665291-dbef6ab58991?auto=format&fit=crop&w=700&q=80",
    alt: "Stock portrait of a barber in a salon apron",
  },
  {
    role: "Beard & Shave Specialist",
    specialty: "Beard shaping, razor work and hot-towel finishes",
    image:
      "https://images.unsplash.com/photo-1515967022087-4de48c1fc9fc?auto=format&fit=crop&w=700&q=80",
    alt: "Stock portrait of a professional in a dark apron",
  },
  {
    role: "Stylist",
    specialty: "Texture, wash-and-style finishes and kids cuts",
    image:
      "https://images.unsplash.com/photo-1570808683491-59d59f89e070?auto=format&fit=crop&w=700&q=80",
    alt: "Stock photo of a stylist working in a barber shop",
  },
];

const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1621645582931-d1d3e6564943?auto=format&fit=crop&w=900&q=80",
    alt: "Black leather barber chairs in a dark shop interior",
    span: "md:row-span-2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1761148438883-e34e0289a214?auto=format&fit=crop&w=800&q=80",
    alt: "Barber shaving a client with a straight razor",
    span: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1747832910187-f27508ac4c60?auto=format&fit=crop&w=800&q=80",
    alt: "Barber cutting a client's hair in warm light",
    span: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1747830280502-f33d7305a714?auto=format&fit=crop&w=800&q=80",
    alt: "Close-up of barber work during a haircut",
    span: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80",
    alt: "Empty barber chair near a brick wall",
    span: "md:row-span-2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517869129960-b9b74bfcdecb?auto=format&fit=crop&w=800&q=80",
    alt: "Night view into a barber shop window",
    span: "",
  },
];

const testimonials = [
  {
    name: "Tiago",
    quote:
      "I had an amazing experience getting my haircut. I was the last customer before the afternoon break, but even then they didn't rush. The atmosphere was welcoming and professional, and the cut turned out even better than I expected.",
  },
  {
    name: "Luis",
    quote:
      "Had my haircut by Nell. I was a walk-in and he was awesome, and friendly. I will definitely come back when in Madrid.",
  },
  {
    name: "Stanko",
    quote:
      "Good and quick service. Needed an appointment urgently and got one — top service. Highly recommend.",
  },
];

const hours = [
  ["Monday", "10:00-14:00", "Afternoon closed"],
  ["Tuesday", "10:00-20:00", "Walk-ins + bookings"],
  ["Wednesday", "10:00-20:00", "Walk-ins + bookings"],
  ["Thursday", "10:00-20:00", "Walk-ins + bookings"],
  ["Friday", "10:00-20:00", "Walk-ins + bookings"],
  ["Saturday", "10:00-20:00", "Walk-ins + bookings"],
  ["Sunday", "Closed", "Closed"],
];

export default function Home() {
  return (
    <div className="bg-[#f7f6f1] text-[#1a1a1a]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#1a1a1a]/92 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="text-base font-semibold tracking-[0.18em]">
            LUIS RUBIO
          </a>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 text-sm text-white/72 md:flex"
          >
            <a href="#about" className="transition hover:text-[#c8a04d]">
              About
            </a>
            <a href="#services" className="transition hover:text-[#c8a04d]">
              Services
            </a>
            <a href="#gallery" className="transition hover:text-[#c8a04d]">
              Gallery
            </a>
            <a href="#hours" className="transition hover:text-[#c8a04d]">
              Hours
            </a>
          </nav>
          <a
            href={phoneHref}
            className="rounded-md bg-[#c8a04d] px-4 py-2 text-sm font-semibold text-[#1a1a1a] transition hover:bg-[#d6b86a] focus:outline-none focus:ring-2 focus:ring-white"
          >
            Call now
          </a>
        </div>
      </header>

      <main id="home">
        <section className="hero-photo relative isolate min-h-[92vh] overflow-hidden bg-[#1a1a1a] pt-24 text-white">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(26,26,26,0.93),rgba(26,26,26,0.74)_48%,rgba(26,26,26,0.34))]" />
          <div className="mx-auto flex min-h-[calc(92vh-6rem)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#c8a04d]">
                Barrio de Salamanca barber
              </p>
              <h1 className="font-serif text-5xl font-semibold leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
                Salamanca&apos;s quietly perfect barber cut
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
                Walk-ins and appointments in Barrio de Salamanca, with unhurried
                cuts backed by 790 five-star reviews.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={phoneHref}
                  className="rounded-md bg-[#c8a04d] px-6 py-4 text-center font-semibold text-[#1a1a1a] transition hover:bg-[#d6b86a] focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Call now
                </a>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-white/30 px-6 py-4 text-center font-semibold text-white transition hover:border-[#c8a04d] hover:text-[#c8a04d] focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Get directions
                </a>
              </div>
              <figure className="mt-8 overflow-hidden rounded-lg border border-white/14 bg-[#232323] md:hidden">
                <img
                  src="https://images.unsplash.com/photo-1536520002442-39764a41e987?auto=format&fit=crop&w=640&q=45"
                  alt="Demo photo of a refined barber shop interior with chairs and pendant lighting"
                  className="h-24 w-full object-cover"
                  loading="eager"
                />
                <figcaption className="px-3 py-2 text-xs leading-5 text-white/70">
                  Demo hero photo from Unsplash. Replace with your actual shop.
                </figcaption>
              </figure>
            </div>
          </div>
          <p className="absolute bottom-5 right-5 hidden max-w-[15rem] rounded-md bg-[#1a1a1a]/82 px-3 py-2 text-xs leading-5 text-white/75 md:block">
            Demo hero photo from Unsplash. Replace with your actual shop.
          </p>
        </section>

        <section aria-label="Trust details" className="bg-[#232323] text-white">
          <div className="mx-auto grid max-w-7xl gap-px bg-white/10 px-4 py-px sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {[
              ["5.0 ★", "Rating from 790 Google reviews"],
              ["Salamanca", "Neighborhood barber near C. de Hermosilla"],
              ["Payment", "Cash, card and Bizum - confirm at counter"],
              ["Flexible", "Walk-ins welcome, appointments recommended"],
            ].map(([title, text]) => (
              <div key={title} className="bg-[#232323] px-5 py-7 motion-rise">
                <p className="text-3xl font-semibold text-[#c8a04d]">{title}</p>
                <p className="mt-2 text-sm leading-6 text-white/72">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section-pad">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
            <div className="overflow-hidden rounded-lg bg-[#232323] motion-rise">
              <img
                src={aboutImage}
                alt="Demo photo of a barber carefully trimming a beard"
                className="h-full min-h-[420px] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="motion-rise">
              <p className="section-kicker">About the shop</p>
              <h2 className="section-title">
                A calm chair, a clean finish, no rush.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-[#4b463c]">
                <p>
                  Luis Rubio Barber Shop is built around the kind of grooming
                  visit that feels focused without feeling formal. Clients come
                  in for sharp fades, tidy beard work and classic cuts that hold
                  their shape after they leave the chair.
                </p>
                <p>
                  The clearest signal is the 5.0 rating across 790 Google
                  reviews: people notice the welcoming atmosphere, the precise
                  finish and the unhurried care even when the shop is busy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="section-kicker">Services</p>
                <h2 className="section-title">Barber essentials, priced for demo.</h2>
              </div>
              <p className="rounded-md border border-[#c8a04d]/45 bg-[#c8a04d]/12 px-4 py-3 text-sm font-semibold text-[#5d4716]">
                Confirm with your actual rates
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(([name, detail, price, icon]) => (
                <article
                  key={name}
                  className="rounded-lg border border-[#ded8c9] bg-[#fbfaf6] p-5 motion-rise"
                >
                  <div
                    aria-hidden="true"
                    className="mb-7 flex h-11 w-11 items-center justify-center rounded-md bg-[#232323] text-xs font-bold uppercase tracking-wide text-[#c8a04d]"
                  >
                    {icon}
                  </div>
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-[#5d5649]">
                    {detail}
                  </p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#8b6a22]">
                    Demo price {price}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="section-pad bg-[#1a1a1a] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="section-kicker">Team</p>
            <h2 className="section-title text-white">Roles to replace with your team.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {team.map((member) => (
                <article
                  key={member.role}
                  className="overflow-hidden rounded-lg border border-white/12 bg-white/[0.04] motion-rise"
                >
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="h-80 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a04d]">
                      Replace with your actual team
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold">{member.role}</h3>
                    <p className="mt-3 leading-7 text-white/68">{member.specialty}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section-pad">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="section-kicker">Gallery</p>
                <h2 className="section-title">Texture, tools and finished details.</h2>
              </div>
              <p className="max-w-md text-sm font-medium leading-6 text-[#5d5649]">
                Photos for demo only — your final site will use shots of your shop.
              </p>
            </div>
            <div className="mt-10 grid auto-rows-[220px] gap-4 md:grid-cols-3">
              {gallery.map((item) => (
                <figure
                  key={item.image}
                  className={`overflow-hidden rounded-lg bg-[#232323] motion-rise ${item.span}`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="section-kicker">Testimonials</p>
            <h2 className="section-title">What recent clients said.</h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="rounded-lg border border-[#ded8c9] bg-[#fbfaf6] p-6 motion-rise"
                >
                  <blockquote className="text-lg leading-8 text-[#3a352d]">
                    "{testimonial.quote}"
                  </blockquote>
                  <figcaption className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#8b6a22]">
                    {testimonial.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="hours" className="section-pad bg-[#232323] text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="motion-rise">
              <p className="section-kicker">Hours + map</p>
              <h2 className="section-title text-white">Find the chair on Hermosilla.</h2>
              <div className="mt-8 overflow-hidden rounded-lg border border-white/12">
                <table className="w-full border-collapse text-left text-sm">
                  <caption className="caption-bottom px-4 py-4 text-left text-xs uppercase tracking-[0.18em] text-[#c8a04d]">
                    Confirm your actual hours
                  </caption>
                  <thead className="bg-white/8 text-white">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">
                        Day
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold">
                        Hours
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/72">
                    {hours.map(([day, time, note]) => (
                      <tr key={day}>
                        <th scope="row" className="px-4 py-3 font-semibold text-white">
                          {day}
                        </th>
                        <td className="px-4 py-3">{time}</td>
                        <td className="px-4 py-3">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="min-h-[440px] overflow-hidden rounded-lg border border-white/12 bg-[#1a1a1a] motion-rise">
              <iframe
                title="Map to Luis Rubio Barber Shop"
                src={mapUrl}
                className="h-full min-h-[440px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section id="faq" className="section-pad bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="section-kicker">FAQ</p>
            <h2 className="section-title">Before you come in.</h2>
            <div className="mt-8 divide-y divide-[#ded8c9] rounded-lg border border-[#ded8c9]">
              {[
                [
                  "Do you take walk-ins or bookings?",
                  "This demo presents both options: walk-ins are welcome, and appointments are recommended when you need a specific time.",
                ],
                [
                  "Is English spoken?",
                  "The final site can confirm languages clearly. For now, call ahead if you prefer service in English.",
                ],
                [
                  "Do you handle beard services?",
                  "Yes, this demo highlights beard trims, shaping and hot-towel shave options for owner confirmation.",
                ],
                [
                  "Can I pay by card?",
                  "Payment options should be confirmed by the shop. This demo lists cash, card and Bizum as placeholders.",
                ],
                [
                  "How is parking in Salamanca?",
                  "Street parking can be tight around Barrio de Salamanca. Public parking and metro access are usually easier.",
                ],
              ].map(([question, answer]) => (
                <details key={question} className="group p-5">
                  <summary className="cursor-pointer list-none text-lg font-semibold">
                    <span>{question}</span>
                    <span aria-hidden="true" className="float-right text-[#c8a04d]">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 leading-7 text-[#5d5649]">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#c8a04d]/35 bg-[#1a1a1a] p-3 text-white shadow-2xl md:hidden">
        <div className="grid grid-cols-[1.28fr_0.72fr] gap-3">
          <a
            href={phoneHref}
            className="whitespace-nowrap rounded-md bg-[#c8a04d] px-2 py-3 text-center text-[13px] font-semibold text-[#1a1a1a]"
          >
            Call {phoneDisplay}
          </a>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/18 px-2 py-3 text-center text-[13px] font-semibold"
          >
            Get directions
          </a>
        </div>
      </div>
      <footer className="bg-[#1a1a1a] px-4 pb-28 pt-10 text-white md:pb-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:px-6 lg:px-8">
          <div>
            <p className="text-lg font-semibold tracking-[0.18em]">LUIS RUBIO</p>
            <p className="mt-3 text-white/68">{address}</p>
            <a href={phoneHref} className="mt-2 inline-block text-[#c8a04d]">
              {phoneDisplay}
            </a>
          </div>
          <p className="max-w-2xl text-xs leading-5 text-white/46">
            This is a demo site built as a free preview for Luis Rubio Barber
            Shop. Not officially affiliated. Owner contact details can be added
            before publishing an official version.
          </p>
        </div>
      </footer>
    </div>
  );
}
