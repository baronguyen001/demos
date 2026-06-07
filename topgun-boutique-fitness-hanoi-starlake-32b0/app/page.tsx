const info = {
  name: "TOPGUN Boutique Fitness Hanoi Starlake",
  address: "Starlake K7TT1-SH02, Khu trung tâm, Xuân Đỉnh, Tây Hồ, Hà Nội",
  phone: "090 343 0099",
  tel: "+84903430099",
  zalo: "https://zalo.me/84903430099",
  rating: "5.0 sao",
  count: "73 đánh giá",
};

const images = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
];

const nav = ["Trang chủ", "Giới thiệu", "Dịch vụ", "Bảng giá", "Đánh giá", "Hỏi đáp", "Giờ mở cửa", "Liên hệ"];

const services = [
  ["Vé ngày", "Phù hợp khách muốn tập thử hoặc ghé theo lịch cá nhân."],
  ["Gói tháng, gói quý", "Lựa chọn theo tần suất tập và lịch sinh hoạt."],
  ["PT 1-1", "Huấn luyện riêng, trao đổi mục tiêu và lịch tập trước khi bắt đầu."],
  ["Lớp nhóm nhỏ", "Các buổi boxing hoặc HIIT, cần xác nhận lịch thực tế."],
  ["Khu tự do tạ", "Không gian tập sức mạnh với máy móc và tạ."],
  ["Tủ khóa và khăn", "Tiện ích cho khách tập, xác nhận khi mua vé."],
  ["Hỗ trợ khách vãng lai", "Hỏi nhanh vé ngày và hướng dẫn vào phòng tập."],
];

const reviews = [
  ['"Tập ở đây mấy hôm về mê luôn. Máy móc hiện đại, bảo trì tốt, lúc nào cũng sạch, không khí rất tạo động lực."', "Dennis"],
  ['"Tập buổi chiều không quá đông, máy nào cũng tập được ngay không phải chờ. Phòng tập rất hiện đại."', "Steve"],
  ['"Mua vé ngày, nhân viên thân thiện, máy móc ổn, có khăn và tủ khoá."', "Chan"],
];

const faqs = [
  ["Có bán vé ngày không?", "Có thể gọi trước để hỏi vé ngày và khung giờ phù hợp. Giá tham khảo cần xác nhận trực tiếp với phòng tập."],
  ["Có gói theo tháng không?", "Có thể hỏi gói tháng hoặc gói quý theo nhu cầu tập. Bảng giá thực tế nên được xác nhận trước khi đăng ký."],
  ["Có lớp nhóm nhỏ không?", "Có các gợi ý như boxing hoặc HIIT, nhưng lịch lớp cần xác nhận trực tiếp vì có thể thay đổi theo ngày."],
  ["Khách vãng lai cần chuẩn bị gì?", "Anh/chị nên gọi trước, hỏi vé ngày, tủ khóa, khăn và các yêu cầu khi vào tập."],
  ["Phòng tập ở khu vực nào?", "Địa chỉ nằm tại Starlake K7TT1-SH02, khu trung tâm, Xuân Đỉnh, Tây Hồ, Hà Nội."],
];

const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(info.address)}&output=embed`;
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.address)}`;

export default function Page() {
  return (
    <main className="min-h-screen bg-[#08090b] pb-24 text-[#f6f2ea]">
      <header className="sticky top-0 z-40 border-b border-[#252b34] bg-[#08090bf2] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <a href="#trang-chu" className="font-[var(--font-display)] text-lg font-bold uppercase tracking-[0.08em] text-white">
            TOPGUN Starlake
          </a>
          <nav className="hidden items-center gap-4 text-sm font-bold text-[#c8cbd0] lg:flex">
            {nav.map((item) => (
              <a key={item} href={`#${slug(item)}`} className="hover:text-[#ff7a1a]">
                {item}
              </a>
            ))}
          </nav>
          <a href={`tel:${info.tel}`} className="rounded bg-[#ff7a1a] px-4 py-2 text-sm font-extrabold text-black">
            Gọi ngay
          </a>
        </div>
      </header>

      <section id="trang-chu" className="relative overflow-hidden">
        <img className="absolute inset-0 h-full w-full object-cover opacity-42" src={images[0]} alt="Khu tập gym với máy móc và ánh sáng mạnh" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090b] via-[#08090bdd] to-[#08090b66]" />
        <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="inline-flex rounded bg-[#ff7a1a] px-3 py-2 text-sm font-extrabold uppercase tracking-[0.18em] text-black">Phòng tập tại Starlake</p>
            <h1 className="mt-6 max-w-4xl font-[var(--font-display)] text-6xl font-bold uppercase leading-none tracking-normal md:text-8xl">
              Tập gọn lịch, đủ năng lượng, dễ bắt đầu.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#e8e0d6]">
              TOPGUN Boutique Fitness Hanoi Starlake phù hợp cho khách muốn mua vé ngày, hỏi gói tập hoặc cần một buổi tập rõ ràng trong khu Xuân Đỉnh, Tây Hồ.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${info.tel}`} className="rounded bg-[#ff7a1a] px-6 py-3 font-extrabold text-black">Gọi {info.phone}</a>
              <a href={directionsUrl} className="rounded border border-[#ff7a1a] px-6 py-3 font-extrabold text-white">Chỉ đường</a>
            </div>
          </div>
          <aside className="border border-[#3a414b] bg-[#10141bcc] p-6 backdrop-blur">
            <p className="font-[var(--font-display)] text-3xl font-bold uppercase text-[#ffd166]">Đang hoạt động</p>
            <div className="mt-7 grid gap-3">
              {[
                [info.rating, "Điểm đánh giá"],
                [info.count, "Từ khách đã tập"],
                ["Starlake", "Khu vực"],
                ["Vé ngày", "Gọi trước để xác nhận"],
              ].map(([big, small]) => (
                <div key={big} className="flex items-center justify-between border-t border-[#343b45] py-4">
                  <span className="font-[var(--font-display)] text-3xl font-bold text-white">{big}</span>
                  <span className="max-w-[130px] text-right text-sm font-semibold text-[#c8cbd0]">{small}</span>
                </div>
              ))}
            </div>
            <p className="photo-note">Ảnh demo minh họa - bản chính thức sẽ dùng ảnh thật của tiệm.</p>
          </aside>
        </div>
      </section>

      <section className="border-y border-[#252b34] bg-[#11151b]" aria-label="Dải tin cậy">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[#252b34] md:grid-cols-4">
          {[
            [info.rating, "Điểm đánh giá"],
            [info.count, "Lượt đánh giá"],
            ["Xuân Đỉnh", "Khu vực"],
            ["Tiền mặt, chuyển khoản", "Thanh toán"],
          ].map(([big, small]) => (
            <div key={big} className="bg-[#11151b] p-5">
              <p className="font-[var(--font-display)] text-3xl font-bold text-[#ff7a1a]">{big}</p>
              <p className="mt-1 text-sm font-semibold text-[#c9c4bb]">{small}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="giới-thiệu" className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.95fr_1.05fr]">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-2 gap-4">
            <img className="h-72 w-full object-cover" src={images[1]} alt="Khu tạ tự do trong phòng tập" />
            <img className="mt-12 h-72 w-full object-cover" src={images[2]} alt="Người tập luyện sức mạnh trong phòng gym" />
          </div>
          <p className="photo-note">Ảnh demo minh họa - bản chính thức sẽ dùng ảnh thật của tiệm.</p>
        </div>
        <div className="order-1 md:order-2">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#ff7a1a]">Giới thiệu</p>
          <h2 className="mt-3 font-[var(--font-display)] text-5xl font-bold uppercase leading-tight md:text-6xl">Một phòng tập boutique ở Starlake, dễ gọi và dễ tìm.</h2>
          <p className="mt-6 leading-8 text-[#d6d0c6]">
            TOPGUN Boutique Fitness Hanoi Starlake có địa chỉ tại Starlake K7TT1-SH02, khu trung tâm, Xuân Đỉnh, Tây Hồ, Hà Nội. Những thông tin có thể dùng trong bản demo gồm số điện thoại, trạng thái đang hoạt động, điểm 5.0 sao và 73 lượt đánh giá, cùng các nhận xét về máy móc, độ sạch và trải nghiệm mua vé ngày.
          </p>
          <p className="mt-5 leading-8 text-[#d6d0c6]">
            Trang này được dựng để khách xem nhanh các lựa chọn như vé ngày, gói tháng hoặc quý, PT 1-1, lớp nhóm nhỏ và tiện ích cơ bản. Mọi lịch lớp, loại gói và giá thực tế đều cần được xác nhận trực tiếp qua điện thoại hoặc Zalo trước khi khách đến tập.
          </p>
        </div>
      </section>

      <section id="dịch-vụ" className="border-y border-[#252b34] bg-[#11151b] py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p id="bảng-giá" className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#ff7a1a]">Dịch vụ</p>
              <h2 className="mt-3 font-[var(--font-display)] text-5xl font-bold uppercase md:text-6xl">Gói tập tham khảo</h2>
              <p className="mt-5 border-l-4 border-[#ff7a1a] pl-4 text-sm font-bold text-[#ffd7b5]">Giá tham khảo - vui lòng xác nhận bảng giá thực tế.</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {services.map(([title, desc]) => (
                <article key={title} className="border border-[#343b45] bg-[#08090b] p-5">
                  <h3 className="font-[var(--font-display)] text-2xl font-bold uppercase text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#cfc8bd]">{desc}</p>
                  <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#ff7a1a]">Xác nhận khi gọi</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="đánh-giá" className="mx-auto max-w-7xl px-4 py-16">
        <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#ff7a1a]">Đánh giá</p>
        <h2 className="mt-3 font-[var(--font-display)] text-5xl font-bold uppercase md:text-6xl">Nhận xét từ khách tập</h2>
        <div className="mt-9 grid gap-4 lg:grid-cols-3">
          {reviews.map(([quote, author]) => (
            <figure key={author} className="border border-[#343b45] bg-[#11151b] p-6">
              <blockquote className="text-lg font-semibold leading-8 text-[#f3eadf]">{quote}</blockquote>
              <figcaption className="mt-6 font-[var(--font-display)] text-2xl font-bold uppercase text-[#ff7a1a]">- {author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="giờ-mở-cửa" className="bg-[#f6f2ea] py-16 text-[#08090b]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#d85f0c]">Giờ mở cửa</p>
            <h2 className="mt-3 font-[var(--font-display)] text-5xl font-bold uppercase leading-tight">Xác nhận giờ thực tế trước khi đến tập.</h2>
            <p className="mt-5 leading-8 text-[#30343a]">Địa chỉ: {info.address}. Gọi trước để hỏi vé ngày, lịch lớp nhóm nhỏ và khung giờ phù hợp.</p>
            <div id="liên-hệ" className="mt-7 flex flex-wrap gap-3">
              <a href={`tel:${info.tel}`} className="rounded bg-[#08090b] px-6 py-3 font-extrabold text-white">Gọi {info.phone}</a>
              <a href={directionsUrl} className="rounded border border-[#08090b] px-6 py-3 font-extrabold text-[#08090b]">Chỉ đường</a>
            </div>
          </div>
          <iframe className="h-[380px] w-full border-0" src={mapUrl} title="Bản đồ TOPGUN Boutique Fitness Hanoi Starlake" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>

      <section id="hỏi-đáp" className="mx-auto max-w-4xl px-4 py-16">
        <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#ff7a1a]">Hỏi đáp</p>
        <h2 className="mt-3 font-[var(--font-display)] text-5xl font-bold uppercase">Trước buổi tập</h2>
        <div className="mt-8 space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="border border-[#343b45] bg-[#11151b] p-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-extrabold">
                {q}
                <span className="faq-plus text-2xl text-[#ff7a1a]" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 leading-7 text-[#cec7bc]">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#252b34] bg-[#08090b] p-3 shadow-2xl md:hidden">
        <div className="grid grid-cols-3 gap-2 text-center text-sm font-extrabold">
          <a className="rounded bg-[#ff7a1a] px-3 py-3 text-black" href={`tel:${info.tel}`}>Gọi {info.phone}</a>
          <a className="rounded border border-[#ff7a1a] px-3 py-3 text-white" href={directionsUrl}>Chỉ đường</a>
          <a className="rounded bg-[#ffd166] px-3 py-3 text-black" href={info.zalo}>Zalo</a>
        </div>
      </div>

      <footer className="border-t border-[#252b34] px-4 py-8 text-sm text-[#cfc8bd]">
        <div className="mx-auto max-w-7xl">
          <p className="font-[var(--font-display)] text-xl font-bold uppercase text-white">{info.name}</p>
          <p className="mt-2">{info.address} - {info.phone}</p>
          <p className="mt-4 text-xs leading-6">Đây là bản web demo dựng sẵn làm quà giới thiệu cho {info.name}. Chưa phải trang chính thức. Nếu anh/chị là chủ tiệm và muốn dùng web thật với ảnh + tên miền riêng, liên hệ 0374 075 969.</p>
        </div>
      </footer>
    </main>
  );
}

function slug(label: string) {
  const map: Record<string, string> = {
    "Trang chủ": "trang-chu",
    "Giới thiệu": "giới-thiệu",
    "Dịch vụ": "dịch-vụ",
    "Bảng giá": "bảng-giá",
    "Đánh giá": "đánh-giá",
    "Hỏi đáp": "hỏi-đáp",
    "Giờ mở cửa": "giờ-mở-cửa",
    "Liên hệ": "liên-hệ",
  };
  return map[label];
}
