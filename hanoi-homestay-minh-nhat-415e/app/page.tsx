const phone = "+84901771287";
const phoneDisplay = "090 177 1287";
const zalo = "https://zalo.me/84901771287";
const address = "40 Bát Đàn, Hoàn Kiếm, Hà Nội";
const mapQuery = encodeURIComponent(address);

const nav = ["Trang chủ", "Giới thiệu", "Phòng", "Vị trí", "Hỏi đáp", "Liên hệ"];

const photos = [
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    alt: "Phòng nghỉ ấm áp với chất liệu gỗ",
  },
  {
    src: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    alt: "Góc phố cổ Hà Nội với màu sắc hoài cổ",
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    alt: "Không gian lưu trú gọn gàng và sáng",
  },
];

const rooms = [
  ["Phòng nghỉ cho khách đi một mình", "Gọn, đủ tiện nghi cơ bản cho chuyến ghé Hà Nội ngắn ngày.", "Hỏi giá"],
  ["Phòng cho cặp đôi", "Không gian ấm, phù hợp nghỉ lại gần khu Phố Cổ.", "Hỏi giá"],
  ["Phòng cho nhóm nhỏ", "Gợi ý khi đi cùng bạn bè hoặc gia đình nhỏ, cần xác nhận sức chứa thực tế.", "Hỏi giá"],
  ["Wifi", "Tiện nghi cần có cho khách làm việc hoặc tra cứu lịch trình.", "Đã nêu trong gợi ý"],
  ["Điều hoà", "Phù hợp thời tiết Hà Nội, vui lòng xác nhận tình trạng phòng khi đặt.", "Đã nêu trong gợi ý"],
  ["Nước nóng", "Tiện nghi sinh hoạt cơ bản cho khách lưu trú.", "Đã nêu trong gợi ý"],
  ["Vị trí Phố Cổ", "Từ Bát Đàn có thể đi bộ ra khu Hồ Gươm và Chợ Đồng Xuân.", "Điểm nổi bật"],
];

const faqs = [
  ["Đặt phòng bằng cách nào?", "Anh/chị có thể gọi trực tiếp hoặc nhắn Zalo để hỏi phòng trống, loại phòng và giá thực tế."],
  ["Giá phòng trên trang đã chính xác chưa?", "Chưa. Đây là bản demo nên không đưa giá cố định; vui lòng xác nhận bảng giá thực tế khi đặt phòng."],
  ["Homestay ở khu nào?", "Địa chỉ được cung cấp là 40 Bát Đàn, Hoàn Kiếm, Hà Nội, trong khu Phố Cổ."],
  ["Có tiện nghi gì?", "Dữ liệu gợi ý có wifi, điều hoà, nước nóng và vị trí thuận tiện để đi bộ quanh Phố Cổ."],
  ["Có nên hỏi giờ nhận phòng trước không?", "Có. Vui lòng liên hệ trước để xác nhận giờ nhận phòng, trả phòng và tình trạng phòng trống."],
];

function SectionTitle({ label, title, desc }: { label: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent)]">{label}</p>
      <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {desc ? <p className="mt-4 text-base leading-8 text-[var(--muted)]">{desc}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(245,239,229,0.94)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <a href="#trang-chủ" className="font-[var(--font-display)] text-xl font-semibold">
            Homestay Minh Nhật
          </a>
          <nav className="hidden items-center gap-5 text-sm font-semibold text-[var(--muted)] lg:flex">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="hover:text-[var(--accent)]">
                {item}
              </a>
            ))}
          </nav>
          <a href={`tel:${phone}`} className="rounded-full bg-[var(--primary-dark)] px-4 py-2 text-sm font-bold text-white">
            Gọi ngay
          </a>
        </div>
      </header>

      <section id="trang-chủ" className="mx-auto grid max-w-7xl gap-9 px-4 pb-16 pt-10 md:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:pb-24">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Homestay tại Bát Đàn, Phố Cổ</p>
          <h1 className="mt-5 font-[var(--font-display)] text-4xl font-semibold leading-tight md:text-6xl">
            Chỗ nghỉ ấm cúng để ở gần nhịp phố cổ Hà Nội.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-9 text-[var(--muted)]">
            Homestay Minh Nhật nằm tại 40 Bát Đàn, Hoàn Kiếm, phù hợp cho khách muốn lưu trú trong khu Phố Cổ và thuận tiện đi bộ tới các điểm quen thuộc quanh trung tâm.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={zalo} className="rounded-full bg-[var(--primary-dark)] px-6 py-3 font-bold text-white">
              Đặt phòng
            </a>
            <a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} className="rounded-full border border-[var(--primary-dark)] px-6 py-3 font-bold text-[var(--primary-dark)]">
              Chỉ đường
            </a>
          </div>
        </div>
        <div className="warm-shadow overflow-hidden rounded-[30px] bg-[var(--paper)] p-3">
          <img className="h-[520px] w-full rounded-[24px] object-cover" src={photos[0].src} alt={photos[0].alt} />
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--paper)]">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 md:grid-cols-4 md:px-6">
          {[
            ["4.9★", "16 đánh giá Google"],
            ["Hoàn Kiếm", "Khu Phố Cổ Hà Nội"],
            ["Thanh toán", "Xác nhận khi đặt"],
            ["Đặt phòng", "Gọi điện hoặc Zalo"],
          ].map(([big, small]) => (
            <div key={big} className="rounded-2xl border border-[var(--line)] bg-white/65 p-5">
              <p className="font-[var(--font-display)] text-3xl font-semibold">{big}</p>
              <p className="mt-2 text-sm font-medium text-[var(--muted)]">{small}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="giới-thiệu" className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="grid gap-3">
          <img className="h-72 rounded-3xl object-cover md:h-96" src={photos[1].src} alt={photos[1].alt} />
          <img className="h-56 rounded-3xl object-cover" src={photos[2].src} alt={photos[2].alt} />
        </div>
        <div>
          <SectionTitle label="Giới thiệu" title="Ở gần những con phố quen của trung tâm Hà Nội." />
          <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
            <p>
              Homestay Minh Nhật có địa chỉ tại 40 Bát Đàn, Hoàn Kiếm, Hà Nội. Điểm đáng chú ý nhất trong bản demo là vị trí ở khu Phố Cổ, phù hợp cho khách muốn nghỉ gần trung tâm, dễ đi bộ ăn uống, dạo phố và di chuyển tới các điểm quen thuộc quanh Hồ Gươm, Chợ Đồng Xuân.
            </p>
            <p>
              Nội dung không thêm đánh giá giả, không tự đặt tên phòng cố định và không công bố giá khi chưa có bảng giá chính thức. Trang demo chỉ trình bày cách liên hệ, nhóm phòng gợi ý và tiện nghi cơ bản như wifi, điều hoà, nước nóng. Bản chính thức nên bổ sung ảnh thật từng phòng, sức chứa và quy định nhận phòng rõ ràng.
            </p>
          </div>
          <p className="photo-note">Ảnh demo minh hoạ - bản chính thức sẽ dùng ảnh thật của tiệm.</p>
        </div>
      </section>

      <section id="phòng" className="bg-[var(--paper)] px-4 py-16 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionTitle label="Phòng" title="Phòng & tiện nghi" desc="Giá tham khảo - vui lòng xác nhận bảng giá thực tế." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map(([name, desc, note]) => (
              <article key={name} className="rounded-3xl border border-[var(--line)] bg-white p-6">
                <h3 className="font-[var(--font-display)] text-2xl font-semibold">{name}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{desc}</p>
                <p className="mt-5 inline-flex rounded-full bg-[var(--bg)] px-4 py-2 text-sm font-bold text-[var(--primary-dark)]">{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="vị-trí" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionTitle label="Vị trí" title="Từ Bát Đàn dễ đi bộ quanh Phố Cổ" />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Hồ Gươm", "Thuận tiện lên lịch dạo phố, cà phê và tham quan khu trung tâm."],
            ["Chợ Đồng Xuân", "Phù hợp khách muốn khám phá khu chợ lâu đời trong Phố Cổ."],
            ["Ẩm thực quanh Bát Đàn", "Dễ tìm các quán ăn địa phương trong khu phố cũ."],
          ].map(([title, desc]) => (
            <article key={title} className="rounded-3xl border border-[var(--line)] bg-[var(--paper)] p-6">
              <h3 className="font-[var(--font-display)] text-2xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="liên-hệ" className="bg-[var(--paper)] px-4 py-16 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle label="Giờ mở cửa" title="Liên hệ để xác nhận giờ nhận phòng" />
            <div className="rounded-3xl border border-[var(--line)] bg-white p-6 leading-8 text-[var(--muted)]">
              <p className="font-bold text-[var(--ink)]">Địa chỉ</p>
              <p>{address}</p>
              <p className="mt-4 font-bold text-[var(--ink)]">Lưu ý</p>
              <p>Xác nhận giờ thực tế, phòng trống, giá phòng và hướng dẫn nhận phòng trước khi đến.</p>
            </div>
          </div>
          <iframe className="min-h-[380px] w-full rounded-3xl border border-[var(--line)]" src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`} title="Bản đồ Homestay Minh Nhật" loading="lazy" />
        </div>
      </section>

      <section id="hỏi-đáp" className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <SectionTitle label="Hỏi đáp" title="Trước khi đặt phòng" />
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

      <div className="sticky bottom-0 z-40 border-t border-[var(--line)] bg-[rgba(255,250,240,0.96)] px-3 py-3 backdrop-blur md:hidden">
        <div className="grid grid-cols-3 gap-2 text-center text-sm font-bold">
          <a className="rounded-full bg-[var(--primary-dark)] px-3 py-3 text-white" href={`tel:${phone}`}>
            Gọi {phoneDisplay}
          </a>
          <a className="rounded-full border border-[var(--primary-dark)] px-3 py-3 text-[var(--primary-dark)]" href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}>
            Chỉ đường
          </a>
          <a className="rounded-full bg-[var(--accent)] px-3 py-3 text-white" href={zalo}>
            Zalo
          </a>
        </div>
      </div>

      <footer className="border-t border-[var(--line)] px-4 py-10 text-center text-sm leading-7 text-[var(--muted)] md:px-6">
        <p>Đây là bản web demo dựng sẵn làm quà giới thiệu cho Homestay Minh Nhật. Chưa phải trang chính thức. Nếu anh/chị là chủ và muốn dựng web thật với tên miền riêng, liên hệ 0374 075 969.</p>
      </footer>
    </main>
  );
}
