const info = {
  name: "NBA Language & Training Center",
  address: "417 Nguyễn Khang, Cầu Giấy, Hà Nội",
  phone: "098 312 0891",
  tel: "+84983120891",
  zalo: "https://zalo.me/84983120891",
  rating: "5.0 sao",
  count: "28 đánh giá",
};

const images = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
];

const nav = ["Trang chủ", "Giới thiệu", "Dịch vụ", "Bảng giá", "Đánh giá", "Hỏi đáp", "Giờ mở cửa", "Liên hệ"];

const services = [
  ["Tiếng Anh giao tiếp", "Luyện phản xạ, phát âm và cách dùng tiếng Anh trong tình huống hằng ngày."],
  ["IELTS, TOEIC", "Tư vấn lộ trình luyện thi theo trình độ hiện tại và mục tiêu của học viên."],
  ["Tiếng Anh trẻ em", "Lớp học thân thiện, phù hợp phụ huynh cần trao đổi trực tiếp trước khi đăng ký."],
  ["Lớp 1-1", "Thời lượng và lịch học được xác nhận theo nhu cầu của từng học viên."],
  ["Lớp nhóm nhỏ", "Tạo không gian tương tác, dễ hỏi bài và theo sát tiến độ hơn."],
  ["Luyện thi", "Ôn kỹ năng theo mục tiêu thi, cần kiểm tra trình độ trước khi xếp lớp."],
  ["Kiểm tra trình độ miễn phí", "Gọi trước để hỏi khung giờ kiểm tra và tư vấn lộ trình."],
];

const reviews = [
  ['"Chất lượng đầu ra của trung tâm rất tốt. Mình hoàn toàn hài lòng, giáo viên chuyên nghiệp và nhiệt tình."', "Học viên"],
  ['"Chủ trung tâm cực kỳ tâm huyết. Các bạn trợ giảng rất dễ thương, hỗ trợ học viên hết mình."', "Phụ huynh"],
  ['"Trung tâm \'nhỏ mà có võ\' ^^ Thầy cô và trợ giảng tận tâm, nhiệt huyết."', "Học viên"],
];

const faqs = [
  ["Có kiểm tra trình độ trước khi học không?", "Có thể gọi trước để hỏi lịch kiểm tra trình độ miễn phí và nhận tư vấn lộ trình phù hợp."],
  ["Trung tâm có lớp cho người đi làm không?", "Có thể hỏi lớp giao tiếp, IELTS, TOEIC hoặc lớp 1-1 theo lịch cá nhân. Lịch thực tế cần xác nhận trực tiếp."],
  ["Học phí được tính thế nào?", "Học phí phụ thuộc lớp, thời lượng và hình thức học. Vui lòng xác nhận bảng giá thực tế trước khi đăng ký."],
  ["Có lớp nhóm nhỏ không?", "Có gợi ý lớp nhóm nhỏ để tăng tương tác. Sĩ số và lịch khai giảng cần hỏi trực tiếp trung tâm."],
  ["Trung tâm ở đâu?", "Trung tâm ở 417 Nguyễn Khang, Cầu Giấy, Hà Nội."],
];

const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(info.address)}&output=embed`;
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.address)}`;

export default function Page() {
  return (
    <main className="min-h-screen pb-24">
      <header className="sticky top-0 z-40 border-b border-[#cbe3df] bg-[#fffaf1f2] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <a href="#trang-chu" className="font-[var(--font-display)] text-lg font-black text-[#10253f]">
            NBA Language
          </a>
          <nav className="hidden items-center gap-4 text-sm font-bold text-[#315064] lg:flex">
            {nav.map((item) => (
              <a key={item} href={`#${slug(item)}`} className="hover:text-[#0b7c7a]">
                {item}
              </a>
            ))}
          </nav>
          <a href={`tel:${info.tel}`} className="rounded-full bg-[#0b7c7a] px-4 py-2 text-sm font-extrabold text-white">
            Gọi ngay
          </a>
        </div>
      </header>

      <section id="trang-chu" className="bg-[#e8f6f3]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1fr_1fr] md:py-16">
          <div className="flex flex-col justify-center">
            <p className="inline-flex w-fit rounded-full bg-[#fff4d9] px-4 py-2 text-sm font-extrabold text-[#8a5a08]">Trung tâm tiếng Anh tại Cầu Giấy</p>
            <h1 className="mt-6 font-[var(--font-display)] text-5xl font-black leading-tight text-[#10253f] md:text-7xl">
              Học tiếng Anh có lộ trình, theo sát đầu ra.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#315064]">
              NBA Language & Training Center tại Nguyễn Khang hỗ trợ học viên học giao tiếp, luyện thi và kiểm tra trình độ trước khi chọn lớp phù hợp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${info.tel}`} className="rounded-full bg-[#0b7c7a] px-6 py-3 font-extrabold text-white">Gọi {info.phone}</a>
              <a href={directionsUrl} className="rounded-full border border-[#0b7c7a] px-6 py-3 font-extrabold text-[#0b5f5d]">Chỉ đường</a>
            </div>
          </div>
          <div>
            <div className="rounded-[2rem] border border-[#cbe3df] bg-white p-3 shadow-lg">
              <img className="aspect-[4/3] w-full rounded-[1.4rem] object-cover" src={images[0]} alt="Học viên trao đổi trong lớp học tiếng Anh" />
              <div className="grid grid-cols-3 gap-3 p-3">
                {[
                  [info.rating, "Điểm đánh giá"],
                  [info.count, "Lượt đánh giá"],
                  ["Nguyễn Khang", "Khu vực"],
                ].map(([big, small]) => (
                  <div key={big} className="rounded-2xl bg-[#e8f6f3] p-3 text-center">
                    <p className="font-[var(--font-display)] text-xl font-black text-[#0b7c7a]">{big}</p>
                    <p className="mt-1 text-xs font-bold text-[#315064]">{small}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="photo-note">Ảnh demo minh họa - bản chính thức sẽ dùng ảnh thật của tiệm.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#cbe3df] bg-white" aria-label="Dải tin cậy">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-5 md:grid-cols-4">
          {[
            [info.rating, "Điểm đánh giá"],
            [info.count, "Từ học viên, phụ huynh"],
            ["Cầu Giấy", "Khu vực"],
            ["Gọi trước", "Tư vấn lịch học"],
          ].map(([big, small]) => (
            <div key={big} className="rounded-2xl bg-[#fffaf1] p-4">
              <p className="font-[var(--font-display)] text-2xl font-black text-[#10253f]">{big}</p>
              <p className="mt-1 text-sm font-semibold text-[#526b7c]">{small}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="giới-thiệu" className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0b7c7a]">Giới thiệu</p>
          <h2 className="mt-3 font-[var(--font-display)] text-4xl font-black leading-tight md:text-6xl">Một địa chỉ học tiếng Anh gần Nguyễn Khang.</h2>
          <p className="mt-6 leading-8 text-[#315064]">
            NBA Language & Training Center nằm tại 417 Nguyễn Khang, Cầu Giấy, Hà Nội. Bản demo này chỉ dùng các thông tin có sẵn gồm tên trung tâm, địa chỉ, số điện thoại, trạng thái đang hoạt động, điểm 5.0 sao từ 28 lượt đánh giá và các nhận xét của học viên, phụ huynh về giáo viên, trợ giảng và chất lượng đầu ra.
          </p>
          <p className="mt-5 leading-8 text-[#315064]">
            Nội dung được sắp xếp để phụ huynh và học viên xem nhanh những lựa chọn học phổ biến như giao tiếp, IELTS, TOEIC, tiếng Anh trẻ em, lớp 1-1, lớp nhóm nhỏ và kiểm tra trình độ miễn phí. Lịch học, học phí và lộ trình chính thức cần được xác nhận trực tiếp với trung tâm.
          </p>
        </div>
        <div>
          <img className="aspect-[5/4] w-full rounded-[2rem] object-cover shadow-lg" src={images[1]} alt="Học viên học bài trong không gian lớp học" />
          <p className="photo-note">Ảnh demo minh họa - bản chính thức sẽ dùng ảnh thật của tiệm.</p>
        </div>
      </section>

      <section id="dịch-vụ" className="bg-[#10253f] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p id="bảng-giá" className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#f5a524]">Dịch vụ</p>
              <h2 className="mt-3 font-[var(--font-display)] text-4xl font-black md:text-6xl">Lớp học và học phí tham khảo</h2>
            </div>
            <p className="max-w-md rounded-2xl bg-[#18395f] p-4 text-sm font-bold text-[#ffe0a7]">Giá tham khảo - vui lòng xác nhận bảng giá thực tế.</p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, desc]) => (
              <article key={title} className="rounded-2xl border border-[#2a527d] bg-[#143052] p-5">
                <h3 className="font-[var(--font-display)] text-2xl font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#d7e8f1]">{desc}</p>
                <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.12em] text-[#f5a524]">Tư vấn theo trình độ</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="đánh-giá" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0b7c7a]">Đánh giá</p>
            <h2 className="mt-3 font-[var(--font-display)] text-4xl font-black leading-tight md:text-6xl">Học viên và phụ huynh chia sẻ</h2>
          </div>
          <div className="space-y-4">
            {reviews.map(([quote, author]) => (
              <figure key={quote} className="rounded-2xl border border-[#d7e8e5] bg-white p-6 shadow-sm">
                <blockquote className="text-lg font-semibold leading-8 text-[#10253f]">{quote}</blockquote>
                <figcaption className="mt-4 text-sm font-extrabold text-[#0b7c7a]">- {author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="giờ-mở-cửa" className="bg-[#e8f6f3] py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0b7c7a]">Giờ mở cửa</p>
            <h2 className="mt-3 font-[var(--font-display)] text-4xl font-black leading-tight md:text-6xl">Gọi trước để xác nhận lịch tư vấn.</h2>
            <p className="mt-5 leading-8 text-[#315064]">Địa chỉ: {info.address}. Xác nhận giờ thực tế, lịch kiểm tra trình độ và lớp còn chỗ trước khi ghé trung tâm.</p>
            <div id="liên-hệ" className="mt-7 flex flex-wrap gap-3">
              <a href={`tel:${info.tel}`} className="rounded-full bg-[#0b7c7a] px-6 py-3 font-extrabold text-white">Gọi {info.phone}</a>
              <a href={directionsUrl} className="rounded-full border border-[#0b7c7a] px-6 py-3 font-extrabold text-[#0b5f5d]">Chỉ đường</a>
            </div>
          </div>
          <iframe className="h-[380px] w-full rounded-[1.5rem] border-0 shadow-lg" src={mapUrl} title="Bản đồ NBA Language & Training Center" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>

      <section id="hỏi-đáp" className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0b7c7a]">Hỏi đáp</p>
          <h2 className="mt-3 font-[var(--font-display)] text-4xl font-black leading-tight md:text-6xl">Trước khi đăng ký học</h2>
          <img className="mt-8 aspect-[4/3] w-full rounded-[1.5rem] object-cover" src={images[2]} alt="Học viên ghi chép trong lớp học" />
          <p className="photo-note">Ảnh demo minh họa - bản chính thức sẽ dùng ảnh thật của tiệm.</p>
        </div>
        <div className="space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="rounded-2xl border border-[#d7e8e5] bg-white p-5 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-extrabold">
                {q}
                <span className="faq-plus text-2xl text-[#0b7c7a]" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 leading-7 text-[#315064]">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#cbe3df] bg-[#fffaf1] p-3 shadow-2xl md:hidden">
        <div className="grid grid-cols-3 gap-2 text-center text-sm font-extrabold">
          <a className="rounded-full bg-[#0b7c7a] px-3 py-3 text-white" href={`tel:${info.tel}`}>Gọi {info.phone}</a>
          <a className="rounded-full border border-[#0b7c7a] px-3 py-3 text-[#0b5f5d]" href={directionsUrl}>Chỉ đường</a>
          <a className="rounded-full bg-[#f5a524] px-3 py-3 text-[#10253f]" href={info.zalo}>Zalo</a>
        </div>
      </div>

      <footer className="border-t border-[#cbe3df] px-4 py-8 text-sm text-[#315064]">
        <div className="mx-auto max-w-7xl">
          <p className="font-[var(--font-display)] text-xl font-black text-[#10253f]">{info.name}</p>
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
