const phone = "+84965933663";
const phoneDisplay = "096 593 3663";
const zalo = "https://zalo.me/84965933663";
const address = "26 Liễu Giai, Ngọc Hà, Ba Đình, Hà Nội";
const mapQuery = encodeURIComponent(address);

const nav = ["Trang chủ", "Giới thiệu", "Dịch vụ", "Đánh giá", "Hỏi đáp", "Liên hệ"];

const photos = [
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80",
    alt: "Người tập pilates trong phòng tập sáng",
  },
  {
    src: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=1200&q=80",
    alt: "Không gian tập luyện tối giản với thảm tập",
  },
  {
    src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1200&q=80",
    alt: "Buổi tập pilates nhẹ nhàng trong phòng sáng",
  },
];

const services = [
  ["Lớp nhóm nhỏ", "Không gian vừa đủ để huấn luyện viên theo sát từng người.", "Từ 250.000đ/buổi"],
  ["Tập 1-1", "Buổi riêng cho mục tiêu cá nhân, điều chỉnh theo thể trạng.", "Từ 650.000đ/buổi"],
  ["Reformer", "Tập với máy để hỗ trợ kiểm soát chuyển động và tăng sức mạnh.", "Từ 350.000đ/buổi"],
  ["Mat pilates", "Bài tập trên thảm, phù hợp để xây nền tảng và kiểm soát hơi thở.", "Từ 200.000đ/buổi"],
  ["Gói người mới", "Làm quen động tác, nhịp thở và cách giữ form an toàn.", "Hỏi studio"],
  ["Gói tháng hoặc khoá", "Phù hợp khi muốn duy trì lịch tập đều đặn.", "Hỏi studio"],
  ["Buổi tập thử", "Trải nghiệm không gian và trao đổi mục tiêu trước khi theo gói.", "Hỏi studio"],
];

const reviews = [
  "Không gian tuyệt vời, yên tĩnh, sạch, thiết kế chuẩn để tập trung. HLV cực kỳ tận tâm, luôn chỉnh form đúng.",
  "HLV chuyên nghiệp, giáo án bài bản, không gian sạch sẽ.",
  "Lần đầu mình theo một môn lâu đến vậy. Pilates hợp sức khoẻ và lịch của mình, HLV rất tâm huyết.",
];

const faqs = [
  ["Người mới có tập được không?", "Có. Anh/chị nên hỏi gói người mới hoặc buổi tập thử để được hướng dẫn form cơ bản trước."],
  ["Studio có lớp riêng không?", "Có gợi ý lớp tập 1-1. Vui lòng gọi hoặc nhắn Zalo để studio xác nhận lịch và huấn luyện viên."],
  ["Giá trên trang có phải bảng giá chính thức không?", "Chưa. Đây là giá tham khảo để hình dung trước, vui lòng xác nhận bảng giá thực tế với studio."],
  ["Đi tập cần chuẩn bị gì?", "Nên mặc đồ co giãn, dễ vận động và đến sớm vài phút để trao đổi tình trạng cơ thể nếu cần."],
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
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(248,246,239,0.94)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <a href="#trang-chủ" className="font-[var(--font-display)] text-xl font-semibold">
            Mây Pilates
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

      <section id="trang-chủ" className="mx-auto grid max-w-7xl gap-8 px-4 pb-14 pt-10 md:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:pb-24">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary-dark)]">Studio pilates tại Liễu Giai</p>
          <h1 className="mt-5 font-[var(--font-display)] text-4xl font-semibold leading-tight md:text-6xl">
            Tập trung vào form, hơi thở và nhịp tập bền vững.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-9 text-[var(--muted)]">
            Mây Pilates ở 26 Liễu Giai phù hợp cho người muốn tìm một studio sạch, yên tĩnh và có huấn luyện viên theo sát trong từng buổi tập.
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
        <div className="studio-shadow grid gap-3 rounded-[30px] bg-white p-3 md:grid-cols-[1fr_0.7fr]">
          <img className="h-[520px] rounded-[24px] object-cover md:col-span-1" src={photos[0].src} alt={photos[0].alt} />
          <div className="hidden gap-3 md:grid">
            <img className="h-[254px] rounded-[24px] object-cover" src={photos[1].src} alt={photos[1].alt} />
            <img className="h-[254px] rounded-[24px] object-cover" src={photos[2].src} alt={photos[2].alt} />
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--paper)]">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 md:grid-cols-4 md:px-6">
          {[
            ["5.0★", "80 đánh giá Google"],
            ["Ba Đình", "Ngọc Hà, Hà Nội"],
            ["Thanh toán", "Xác nhận tại studio"],
            ["Đặt lịch", "Gọi điện hoặc Zalo"],
          ].map(([big, small]) => (
            <div key={big} className="rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-5">
              <p className="font-[var(--font-display)] text-3xl font-semibold">{big}</p>
              <p className="mt-2 text-sm font-medium text-[var(--muted)]">{small}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="giới-thiệu" className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="overflow-hidden rounded-[30px] border border-[var(--line)] bg-white p-3">
          <img className="h-[460px] w-full rounded-[24px] object-cover" src={photos[1].src} alt={photos[1].alt} />
        </div>
        <div>
          <SectionTitle label="Giới thiệu" title="Một nhịp tập gọn, sáng và có người chỉnh form." />
          <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
            <p>
              Mây Pilates được giới thiệu là studio tại Liễu Giai, Ngọc Hà, Ba Đình. Các nhóm dịch vụ phù hợp với nhiều nhu cầu: lớp nhóm nhỏ, tập riêng 1-1, reformer, mat pilates, gói người mới, gói tháng hoặc khoá và buổi tập thử. Điểm mạnh được khách nhắc tới là không gian sạch, yên tĩnh và huấn luyện viên chú ý chỉnh form.
            </p>
            <p>
              Trang demo này không thêm năm thành lập, tên huấn luyện viên hay cam kết kết quả. Nội dung chỉ tập trung vào các thông tin đã có để người xem nhanh chóng hiểu vị trí, cách đặt lịch, loại buổi tập và lý do nên gọi trước. Khi làm bản chính thức, studio nên bổ sung ảnh thật của phòng tập, máy tập và lịch lớp mới nhất.
            </p>
          </div>
          <p className="photo-note">Ảnh demo minh hoạ - bản chính thức sẽ dùng ảnh thật của tiệm.</p>
        </div>
      </section>

      <section id="dịch-vụ" className="bg-white px-4 py-16 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionTitle label="Dịch vụ" title="Buổi tập & bảng giá tham khảo" desc="Giá tham khảo - vui lòng xác nhận bảng giá thực tế." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
        <SectionTitle label="Đánh giá" title="Khách đánh giá cao không gian và huấn luyện viên" />
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review} className="rounded-3xl border border-[var(--line)] bg-white p-6">
              <blockquote className="leading-8 text-[var(--muted)]">“{review}”</blockquote>
              <figcaption className="mt-5 font-bold text-[var(--primary-dark)]">Khách</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="liên-hệ" className="bg-white px-4 py-16 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle label="Giờ mở cửa" title="Xác nhận lịch tập trước khi đến" />
            <div className="rounded-3xl border border-[var(--line)] bg-[var(--bg)] p-6 leading-8 text-[var(--muted)]">
              <p className="font-bold text-[var(--ink)]">Địa chỉ</p>
              <p>{address}</p>
              <p className="mt-4 font-bold text-[var(--ink)]">Lưu ý</p>
              <p>Xác nhận giờ thực tế, lịch lớp và tình trạng chỗ trống trước khi ghé studio.</p>
            </div>
          </div>
          <iframe className="min-h-[380px] w-full rounded-3xl border border-[var(--line)]" src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`} title="Bản đồ Mây Pilates" loading="lazy" />
        </div>
      </section>

      <section id="hỏi-đáp" className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <SectionTitle label="Hỏi đáp" title="Thông tin trước buổi tập" />
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
        <p>Đây là bản web demo dựng sẵn làm quà giới thiệu cho Mây Pilates. Chưa phải trang chính thức. Nếu anh/chị là chủ và muốn dựng web thật với tên miền riêng, liên hệ {phoneDisplay}.</p>
      </footer>
    </main>
  );
}
