const phone = "+842439275678";
const phoneDisplay = "024 3927 5678";
const address = "81 Văn Cao, Ngọc Hà, Ba Đình, Hà Nội";
const mapQuery = encodeURIComponent(address);

const nav = ["Trang chủ", "Giới thiệu", "Dịch vụ", "Đánh giá", "Hỏi đáp", "Liên hệ"];

const photos = [
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=80",
    alt: "Phòng nha sạch với ghế khám răng",
  },
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    alt: "Bác sĩ nha khoa chuẩn bị dụng cụ khám",
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80",
    alt: "Nụ cười sau chăm sóc răng miệng",
  },
];

const services = [
  ["Khám tổng quát", "Kiểm tra tình trạng răng miệng và tư vấn hướng xử lý phù hợp.", "Từ 100.000đ"],
  ["Lấy cao răng", "Làm sạch mảng bám, hỗ trợ chăm sóc nướu định kỳ.", "Từ 200.000đ"],
  ["Tẩy trắng laser", "Dịch vụ làm sáng răng cần được bác sĩ kiểm tra trước.", "Từ 1.500.000đ"],
  ["Nhổ răng khôn", "Cần chụp, khám và xác nhận tình trạng thực tế trước khi thực hiện.", "Hỏi phòng khám"],
  ["Trám răng", "Xử lý răng sâu, mẻ nhỏ hoặc phục hồi bề mặt răng theo chỉ định.", "Từ 300.000đ"],
  ["Điều trị tuỷ", "Thăm khám kỹ để đánh giá mức độ tổn thương và số lần điều trị.", "Hỏi phòng khám"],
  ["Niềng, chỉnh nha", "Tư vấn lộ trình chỉnh nha sau khi bác sĩ đánh giá khớp cắn.", "Hỏi phòng khám"],
  ["Implant", "Tư vấn phục hồi răng mất, cần khám và lập kế hoạch riêng.", "Hỏi phòng khám"],
];

const reviews = [
  "Mình mới tẩy trắng răng laser ở đây. Bác sĩ nhẹ nhàng, làm sạch răng rất kỹ.",
  "Dịch vụ tuyệt vời, bác sĩ giàu kinh nghiệm và thân thiện. Mình nhổ 2 răng khôn, tay nghề và giảm đau tốt.",
  "Phòng khám sạch, công nghệ cao, nhân viên thân thiện. Trải nghiệm rất ổn.",
];

const faqs = [
  ["Có cần gọi trước khi đến không?", "Nên gọi trước để phòng khám xác nhận giờ thực tế và sắp xếp lịch khám phù hợp."],
  ["Phòng khám có Zalo không?", "Dữ liệu chỉ cung cấp số bàn 024 3927 5678, nên trang demo chỉ dùng nút gọi và chỉ đường."],
  ["Giá trên trang có phải giá chính thức không?", "Chưa. Đây là giá tham khảo để khách dễ hình dung, vui lòng xác nhận bảng giá thực tế với phòng khám."],
  ["Nhổ răng khôn có cần khám trước không?", "Có. Cần bác sĩ kiểm tra tình trạng răng và tư vấn phương án phù hợp trước khi thực hiện."],
  ["Có thể xem đường đi ở đâu?", "Anh/chị bấm Chỉ đường để mở Google Maps tới địa chỉ 81 Văn Cao, Ba Đình."],
];

function SectionTitle({ label, title, desc }: { label: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--primary)]">{label}</p>
      <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {desc ? <p className="mt-4 text-base leading-8 text-[var(--muted)]">{desc}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(244,248,248,0.94)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <a href="#trang-chủ" className="font-[var(--font-display)] text-xl font-semibold">
            Nha Khoa Phượng
          </a>
          <nav className="hidden items-center gap-5 text-sm font-semibold text-[var(--muted)] lg:flex">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="hover:text-[var(--primary)]">
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
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">Phòng khám nha khoa tại Văn Cao</p>
          <h1 className="mt-5 font-[var(--font-display)] text-4xl font-semibold leading-tight md:text-6xl">
            Khám răng rõ ràng, nhẹ nhàng và dễ hẹn trước.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-9 text-[var(--muted)]">
            Nha Khoa Phượng ở 81 Văn Cao, Ngọc Hà, Ba Đình phục vụ các nhu cầu nha khoa quen thuộc như khám tổng quát, lấy cao răng, tẩy trắng, nhổ răng khôn, điều trị tuỷ và tư vấn chỉnh nha.
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
        <div className="clinic-shadow overflow-hidden rounded-[30px] bg-white p-3">
          <img className="h-[520px] w-full rounded-[24px] object-cover" src={photos[0].src} alt={photos[0].alt} />
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 md:grid-cols-4 md:px-6">
          {[
            ["4.7★", "116 đánh giá Google"],
            ["Ba Đình", "Ngọc Hà, Hà Nội"],
            ["Thanh toán", "Xác nhận tại phòng khám"],
            ["Đặt lịch", "Gọi số bàn"],
          ].map(([big, small]) => (
            <div key={big} className="rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-5">
              <p className="font-[var(--font-display)] text-3xl font-semibold">{big}</p>
              <p className="mt-2 text-sm font-medium text-[var(--muted)]">{small}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="giới-thiệu" className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionTitle label="Giới thiệu" title="Trang demo cho khách cần gọi nhanh và tìm đường dễ." />
          <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
            <p>
              Nha Khoa Phượng được cung cấp với địa chỉ 81 Văn Cao, Ngọc Hà, Ba Đình, Hà Nội và số bàn 024 3927 5678. Bản demo trình bày các dịch vụ nha khoa thường gặp như khám tổng quát, lấy cao răng, tẩy trắng laser, nhổ răng khôn, trám răng, điều trị tuỷ, chỉnh nha và implant để khách biết nên gọi hỏi gì trước.
            </p>
            <p>
              Trang này không thêm tên bác sĩ, năm hoạt động, danh hiệu hay cam kết điều trị. Hình ảnh hiện là ảnh minh hoạ từ Unsplash, phù hợp để xem bố cục trước; bản chính thức nên thay bằng ảnh thật của phòng khám, khu tiếp đón, ghế khám và quy trình thăm khám để tăng độ tin cậy.
            </p>
          </div>
          <p className="photo-note">Ảnh demo minh hoạ - bản chính thức sẽ dùng ảnh thật của tiệm.</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img className="h-72 rounded-3xl object-cover" src={photos[1].src} alt={photos[1].alt} />
          <img className="mt-10 h-72 rounded-3xl object-cover" src={photos[2].src} alt={photos[2].alt} />
        </div>
      </section>

      <section id="dịch-vụ" className="bg-white px-4 py-16 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionTitle label="Dịch vụ" title="Dịch vụ & bảng giá tham khảo" desc="Giá tham khảo - vui lòng xác nhận bảng giá thực tế." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map(([name, desc, price]) => (
              <article key={name} className="rounded-3xl border border-[var(--line)] bg-[var(--bg)] p-6">
                <h3 className="font-[var(--font-display)] text-2xl font-semibold">{name}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{desc}</p>
                <p className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-[var(--primary-dark)]">{price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="đánh-giá" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionTitle label="Đánh giá" title="Nhận xét nổi bật từ khách" />
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review} className="rounded-3xl border border-[var(--line)] bg-white p-6">
              <blockquote className="leading-8 text-[var(--muted)]">“{review}”</blockquote>
              <figcaption className="mt-5 font-bold text-[var(--primary)]">Khách</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="liên-hệ" className="bg-white px-4 py-16 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle label="Giờ mở cửa" title="Gọi phòng khám để xác nhận giờ thực tế" />
            <div className="rounded-3xl border border-[var(--line)] bg-[var(--bg)] p-6 leading-8 text-[var(--muted)]">
              <p className="font-bold text-[var(--ink)]">Địa chỉ</p>
              <p>{address}</p>
              <p className="mt-4 font-bold text-[var(--ink)]">Lưu ý</p>
              <p>Xác nhận giờ thực tế, lịch bác sĩ và chi phí trước khi đến phòng khám.</p>
            </div>
          </div>
          <iframe className="min-h-[380px] w-full rounded-3xl border border-[var(--line)]" src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`} title="Bản đồ Nha Khoa Phượng" loading="lazy" />
        </div>
      </section>

      <section id="hỏi-đáp" className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <SectionTitle label="Hỏi đáp" title="Câu hỏi trước khi khám" />
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

      <div className="sticky bottom-0 z-40 border-t border-[var(--line)] bg-[rgba(255,255,255,0.96)] px-3 py-3 backdrop-blur md:hidden">
        <div className="grid grid-cols-2 gap-2 text-center text-sm font-bold">
          <a className="rounded-full bg-[var(--primary-dark)] px-3 py-3 text-white" href={`tel:${phone}`}>
            Gọi {phoneDisplay}
          </a>
          <a className="rounded-full border border-[var(--primary-dark)] px-3 py-3 text-[var(--primary-dark)]" href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}>
            Chỉ đường
          </a>
        </div>
      </div>

      <footer className="border-t border-[var(--line)] px-4 py-10 text-center text-sm leading-7 text-[var(--muted)] md:px-6">
        <p>Đây là bản web demo dựng sẵn làm quà giới thiệu cho Nha Khoa Phượng. Chưa phải trang chính thức. Nếu anh/chị là chủ và muốn dựng web thật với tên miền riêng, liên hệ {phoneDisplay}.</p>
      </footer>
    </main>
  );
}
