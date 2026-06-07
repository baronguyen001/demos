const phone = "+84898080986";
const phoneDisplay = "089 808 0986";
const zalo = "https://zalo.me/84898080986";
const address = "6a2 Ngõ 158 Nguyễn Khánh Toàn, Nghĩa Đô, Cầu Giấy, Hà Nội";
const mapQuery = encodeURIComponent(address);

const nav = ["Trang chủ", "Giới thiệu", "Dịch vụ", "Đánh giá", "Hỏi đáp", "Liên hệ"];

const photos = [
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
    alt: "Mẫu móng gel tông nhẹ nhàng trong không gian làm đẹp",
  },
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    alt: "Góc spa thư giãn với khăn và tinh dầu",
  },
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    alt: "Không gian chăm sóc sắc đẹp sáng và yên tĩnh",
  },
];

const services = [
  ["Sơn gel", "Màu trơn, nhũ nhẹ hoặc phối tông theo dịp.", "Từ 120.000đ"],
  ["Đắp bột", "Tạo form móng chắc, phù hợp khi muốn dáng móng dài hơn.", "Từ 250.000đ"],
  ["Vẽ nghệ thuật", "Hoạ tiết thanh lịch, hoa nhỏ, đính đá hoặc phối màu pastel.", "Từ 80.000đ"],
  ["Uốn mi collagen", "Làm cong mi tự nhiên, hợp lịch hẹn trước tiệc hoặc chụp ảnh.", "Từ 180.000đ"],
  ["Gội đầu dưỡng sinh", "Chăm sóc da đầu, massage thư giãn trong không gian yên tĩnh.", "Từ 150.000đ"],
  ["Chăm sóc da mặt", "Làm sạch và thư giãn da mặt theo nhu cầu cơ bản.", "Từ 220.000đ"],
  ["Combo thư giãn", "Kết hợp móng, mi hoặc head spa cho buổi chăm sóc trọn vẹn.", "Hỏi tiệm"],
];

const reviews = [
  "Tiệm đẹp và yên tĩnh, không cần đặt trước vẫn được phục vụ. Mình làm head spa thư giãn cực đã.",
  "Thử gói chăm sóc da mặt thư giãn cùng chồng sắp cưới, tuyệt vời. Đón tiếp ấm áp, nhân viên dễ thương.",
  "Làm combo + uốn mi collagen, nếu cho 10 sao mình cũng cho! Không gian yên bình ngay từ lúc bước vào.",
];

const faqs = [
  ["Có cần đặt lịch trước không?", "Nên gọi hoặc nhắn Zalo trước để tiệm sắp xếp thời gian, nhất là khi muốn làm combo hoặc đi theo nhóm."],
  ["Tiệm có làm head spa không?", "Có. Dữ liệu demo chỉ dùng các dịch vụ được cung cấp, trong đó có gội đầu dưỡng sinh và chăm sóc da mặt."],
  ["Bảng giá trên trang đã chính xác chưa?", "Chưa. Đây là giá tham khảo để khách dễ hình dung, vui lòng xác nhận bảng giá thực tế với tiệm."],
  ["Có thể chỉ đường đến tiệm không?", "Có. Anh/chị bấm nút Chỉ đường để mở Google Maps tới địa chỉ ở Nghĩa Đô, Cầu Giấy."],
];

function SectionTitle({ label, title, desc }: { label: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--primary-dark)]">{label}</p>
      <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {desc ? <p className="mt-4 text-base leading-8 text-[var(--muted)]">{desc}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(251,245,236,0.92)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <a href="#trang-chu" className="font-[var(--font-display)] text-xl font-semibold">
            Cine Nail art
          </a>
          <nav className="hidden items-center gap-5 text-sm font-semibold text-[var(--muted)] lg:flex">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="hover:text-[var(--primary-dark)]">
                {item}
              </a>
            ))}
          </nav>
          <a href={`tel:${phone}`} className="rounded-full bg-[var(--primary-dark)] px-4 py-2 text-sm font-bold text-white">
            Gọi ngay
          </a>
        </div>
      </header>

      <section id="trang-chủ" className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-10 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary-dark)]">Nail, head spa và làm đẹp tại Cầu Giấy</p>
          <h1 className="mt-5 font-[var(--font-display)] text-4xl font-semibold leading-tight md:text-6xl">
            Một buổi chăm sóc nhẹ nhàng cho móng, mi và da đầu.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-9 text-[var(--muted)]">
            Cine Nail art nằm trong ngõ 158 Nguyễn Khánh Toàn, phù hợp cho khách muốn làm móng, uốn mi collagen hoặc thư giãn với gội đầu dưỡng sinh trong không gian yên tĩnh.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${phone}`} className="rounded-full bg-[var(--primary-dark)] px-6 py-3 font-bold text-white">
              Gọi {phoneDisplay}
            </a>
            <a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} className="rounded-full border border-[var(--primary-dark)] px-6 py-3 font-bold text-[var(--primary-dark)]">
              Chỉ đường
            </a>
          </div>
        </div>
        <div className="soft-shadow overflow-hidden rounded-[28px] bg-[var(--paper)] p-3">
          <img className="h-[520px] w-full rounded-[22px] object-cover" src={photos[0].src} alt={photos[0].alt} />
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--paper)]">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 md:grid-cols-4 md:px-6">
          {[
            ["5.0★", "236 đánh giá Google"],
            ["Cầu Giấy", "Nghĩa Đô, Hà Nội"],
            ["Thanh toán", "Xác nhận tại tiệm"],
            ["Đặt lịch", "Gọi điện hoặc Zalo"],
          ].map(([big, small]) => (
            <div key={big} className="rounded-2xl border border-[var(--line)] bg-white/70 p-5">
              <p className="font-[var(--font-display)] text-3xl font-semibold">{big}</p>
              <p className="mt-2 text-sm font-medium text-[var(--muted)]">{small}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="giới-thiệu" className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="grid grid-cols-2 gap-3">
          <img className="h-72 rounded-3xl object-cover" src={photos[1].src} alt={photos[1].alt} />
          <img className="mt-10 h-72 rounded-3xl object-cover" src={photos[2].src} alt={photos[2].alt} />
        </div>
        <div>
          <SectionTitle label="Giới thiệu" title="Không gian làm đẹp nhỏ, dịu và dễ ghé." />
          <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
            <p>
              Cine Nail art phục vụ các nhu cầu làm đẹp quen thuộc như sơn gel, đắp bột, vẽ móng nghệ thuật, uốn mi collagen, gội đầu dưỡng sinh và chăm sóc da mặt. Với địa chỉ ở Nghĩa Đô, Cầu Giấy, tiệm phù hợp cho khách quanh Nguyễn Khánh Toàn muốn ghé chăm sóc nhanh hoặc dành một buổi thư giãn kỹ hơn.
            </p>
            <p>
              Bản demo này chỉ dùng các thông tin đã được cung cấp: tên tiệm, địa chỉ, số điện thoại, điểm Google và các nhóm dịch vụ gợi ý. Hình ảnh đang là ảnh minh hoạ từ Unsplash; khi làm trang chính thức, phần hình ảnh nên thay bằng ảnh thật của tiệm, mẫu móng thật và góc head spa thật để khách đặt lịch tự tin hơn.
            </p>
          </div>
          <p className="photo-note">Ảnh demo minh hoạ - bản chính thức sẽ dùng ảnh thật của tiệm.</p>
        </div>
      </section>

      <section id="dịch-vụ" className="bg-[var(--paper)] px-4 py-16 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionTitle label="Dịch vụ" title="Dịch vụ & bảng giá tham khảo" desc="Giá tham khảo - vui lòng xác nhận bảng giá thực tế." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([name, desc, price]) => (
              <article key={name} className="rounded-3xl border border-[var(--line)] bg-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-[var(--font-display)] text-2xl font-semibold">{name}</h3>
                  <p className="rounded-full bg-[var(--bg)] px-3 py-1 text-sm font-bold text-[var(--primary-dark)]">{price}</p>
                </div>
                <p className="mt-4 leading-7 text-[var(--muted)]">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="đánh-giá" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionTitle label="Đánh giá" title="Khách nhắc nhiều tới sự yên tĩnh và thư giãn" />
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review} className="rounded-3xl border border-[var(--line)] bg-[var(--paper)] p-6">
              <blockquote className="leading-8 text-[var(--muted)]">“{review}”</blockquote>
              <figcaption className="mt-5 font-bold text-[var(--primary-dark)]">Khách</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="liên-hệ" className="bg-[var(--paper)] px-4 py-16 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle label="Giờ mở cửa" title="Gọi trước để xác nhận giờ thực tế" />
            <div className="rounded-3xl border border-[var(--line)] bg-white p-6 leading-8 text-[var(--muted)]">
              <p className="font-bold text-[var(--ink)]">Địa chỉ</p>
              <p>{address}</p>
              <p className="mt-4 font-bold text-[var(--ink)]">Lưu ý</p>
              <p>Xác nhận giờ thực tế và tình trạng lịch trống trước khi ghé.</p>
            </div>
          </div>
          <iframe
            className="min-h-[380px] w-full rounded-3xl border border-[var(--line)]"
            src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
            title="Bản đồ Cine Nail art"
            loading="lazy"
          />
        </div>
      </section>

      <section id="hỏi-đáp" className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <SectionTitle label="Hỏi đáp" title="Câu hỏi thường gặp" />
        <div className="space-y-3">
          {faqs.map(([question, answer]) => (
            <details key={question} className="rounded-2xl border border-[var(--line)] bg-white p-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold">
                {question}
                <span className="faq-plus text-2xl transition-transform">+</span>
              </summary>
              <p className="mt-4 leading-8 text-[var(--muted)]">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="sticky bottom-0 z-40 border-t border-[var(--line)] bg-[rgba(255,250,242,0.96)] px-3 py-3 backdrop-blur md:hidden">
        <div className="grid grid-cols-3 gap-2 text-center text-sm font-bold">
          <a className="rounded-full bg-[var(--primary-dark)] px-3 py-3 text-white" href={`tel:${phone}`}>
            Gọi {phoneDisplay}
          </a>
          <a className="rounded-full border border-[var(--primary-dark)] px-3 py-3 text-[var(--primary-dark)]" href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}>
            Chỉ đường
          </a>
          <a className="rounded-full bg-[var(--accent)] px-3 py-3 text-[var(--ink)]" href={zalo}>
            Zalo
          </a>
        </div>
      </div>

      <footer className="border-t border-[var(--line)] px-4 py-10 text-center text-sm leading-7 text-[var(--muted)] md:px-6">
        <p>Đây là bản web demo dựng sẵn làm quà giới thiệu cho Cine Nail art. Chưa phải trang chính thức. Nếu anh/chị là chủ và muốn dựng web thật với tên miền riêng, liên hệ {phoneDisplay}.</p>
      </footer>
    </main>
  );
}
