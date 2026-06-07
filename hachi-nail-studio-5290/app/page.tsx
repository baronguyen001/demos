const info = {
  name: "Hachi Nail Studio",
  address: "84 P. Nguyễn Phúc Lai, Ô Chợ Dừa, Đống Đa, Hà Nội",
  phone: "033 791 2168",
  tel: "+84337912168",
  zalo: "https://zalo.me/84337912168",
  rating: "4.9 sao",
  count: "69 đánh giá",
};

const images = [
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1200&q=80",
];

const nav = ["Trang chủ", "Giới thiệu", "Dịch vụ", "Bảng giá", "Đánh giá", "Hỏi đáp", "Giờ mở cửa", "Liên hệ"];

const services = [
  ["Sơn gel", "Màu trơn, ombre hoặc phối nhẹ theo dáng móng."],
  ["Đắp bột, đắp lụa", "Tư vấn độ dài và form phù hợp sinh hoạt hằng ngày."],
  ["Nối móng", "Lựa chọn dáng móng mềm, gọn hoặc nổi bật theo mẫu."],
  ["Vẽ nghệ thuật, đính đá", "Trang trí theo ảnh tham khảo, xác nhận trước khi làm."],
  ["Chăm sóc tay, chân", "Làm sạch da, chỉnh form móng, dưỡng vùng quanh móng."],
  ["Tẩy da chết", "Bước thư giãn nhẹ cho tay chân trước khi sơn hoặc dưỡng."],
  ["Dưỡng móng", "Phù hợp khi móng yếu, mỏng hoặc cần nghỉ sơn."],
  ["Trang trí theo mẫu", "Mang mẫu yêu thích để tiệm tư vấn cách làm gần nhất."],
];

const reviews = [
  ['"Quán rất xinh, cực kì chú trọng trải nghiệm khách hàng ạ"', "Hương Trà"],
  ['"Làm bộ nail rất ưng, màu lên chuẩn đẹp ạ"', "Yến Bùi"],
  ['"Không gian đẹp, nhân viên nhiệt tình."', "Diệu Linh"],
  ['"Nhân viên làm tỉ mỉ đúng ý khách, dụng cụ sạch sẽ."', "Chav Bao"],
];

const faqs = [
  ["Có nên đặt lịch trước không?", "Anh/chị nên gọi trước để tiệm giữ khung giờ phù hợp, đặc biệt vào cuối tuần hoặc khi muốn làm mẫu cầu kỳ."],
  ["Có nhận mẫu từ ảnh không?", "Có. Anh/chị có thể gửi hoặc mang ảnh mẫu để thợ tư vấn màu, dáng và cách trang trí phù hợp tình trạng móng."],
  ["Giá dịch vụ được tính thế nào?", "Giá phụ thuộc dịch vụ, độ dài móng và chi tiết trang trí. Vui lòng xác nhận bảng giá thực tế trước khi làm."],
  ["Có thể đi cùng bạn không?", "Có thể gọi trước để hỏi khung giờ còn trống cho nhóm nhỏ, giúp tiệm chuẩn bị chỗ ngồi và thợ làm phù hợp."],
  ["Địa chỉ ở khu vực nào?", "Tiệm ở phố Nguyễn Phúc Lai, khu Ô Chợ Dừa, Đống Đa, Hà Nội."],
];

const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(info.address)}&output=embed`;
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.address)}`;

export default function Page() {
  return (
    <main className="min-h-screen pb-24">
      <header className="sticky top-0 z-40 border-b border-[#ead1d2] bg-[#fff7eff2] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <a href="#trang-chu" className="font-[var(--font-display)] text-lg font-semibold tracking-wide text-[#6b3340]">
            {info.name}
          </a>
          <nav className="hidden items-center gap-4 text-sm font-semibold text-[#6f4b54] lg:flex">
            {nav.map((item) => (
              <a key={item} href={`#${slug(item)}`} className="hover:text-[#a45866]">
                {item}
              </a>
            ))}
          </nav>
          <a href={`tel:${info.tel}`} className="rounded-full bg-[#8f4553] px-4 py-2 text-sm font-bold text-white shadow-sm">
            Gọi ngay
          </a>
        </div>
      </header>

      <section id="trang-chu" className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[0.92fr_1.08fr] md:py-16">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#b76e79]">Tiệm móng tại Đống Đa</p>
          <h1 className="mt-5 font-[var(--font-display)] text-5xl font-semibold leading-tight text-[#351923] md:text-7xl">
            Bộ móng xinh, chỉn chu và nhẹ nhàng đúng ý.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#68434d]">
            Hachi Nail Studio là điểm làm móng tại phố Nguyễn Phúc Lai, phù hợp cho khách muốn sơn gel, chăm sóc tay chân hoặc làm mẫu trang trí nữ tính trong không gian ấm và gọn gàng.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${info.tel}`} className="rounded-full bg-[#8f4553] px-6 py-3 font-bold text-white">
              Gọi {info.phone}
            </a>
            <a href={directionsUrl} className="rounded-full border border-[#b76e79] px-6 py-3 font-bold text-[#6b3340]">
              Chỉ đường
            </a>
          </div>
        </div>
        <div className="grid min-h-[560px] grid-cols-5 grid-rows-6 gap-3">
          <img className="col-span-5 row-span-3 h-full rounded-[2rem] object-cover shadow-xl md:col-span-3 md:row-span-6" src={images[0]} alt="Mẫu móng sơn gel tông hồng kem" />
          <img className="col-span-3 row-span-3 h-full rounded-[2rem] object-cover md:col-span-2" src={images[1]} alt="Bàn làm móng với lọ sơn và dụng cụ" />
          <img className="col-span-2 row-span-3 h-full rounded-[2rem] object-cover md:col-span-2" src={images[2]} alt="Móng tay được chăm sóc gọn gàng" />
          <p className="photo-note col-span-5 self-end rounded-2xl bg-white/75 p-3">Ảnh demo minh họa - bản chính thức sẽ dùng ảnh thật của tiệm.</p>
        </div>
      </section>

      <section className="border-y border-[#edd6d6] bg-[#f7e5e6]" aria-label="Dải tin cậy">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-5 md:grid-cols-4">
          {[
            [info.rating, "Điểm đánh giá"],
            [info.count, "Từ khách đã ghé"],
            ["Ô Chợ Dừa", "Khu vực phục vụ"],
            ["Gọi trước", "Đặt lịch hoặc ghé tiệm"],
          ].map(([big, small]) => (
            <div key={big} className="rounded-2xl bg-white/60 p-4">
              <p className="font-[var(--font-display)] text-2xl font-semibold text-[#7d3f4c]">{big}</p>
              <p className="mt-1 text-sm font-medium text-[#79545d]">{small}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="giới-thiệu" className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b76e79]">Giới thiệu</p>
          <h2 className="mt-3 font-[var(--font-display)] text-4xl font-semibold md:text-5xl">Một góc làm móng gần gũi ở Nguyễn Phúc Lai.</h2>
          <p className="mt-6 leading-8 text-[#5f4048]">
            Hachi Nail Studio phục vụ khách tại khu Ô Chợ Dừa, Đống Đa, với các dịch vụ móng quen thuộc như sơn gel, nối móng, đắp bột, chăm sóc tay chân và trang trí theo mẫu. Các thông tin có thể kiểm chứng hiện tại gồm địa chỉ, số điện thoại, trạng thái đang hoạt động cùng mức đánh giá 4.9 sao từ 69 lượt đánh giá.
          </p>
          <p className="mt-5 leading-8 text-[#5f4048]">
            Bản demo này ưu tiên cách trình bày ấm, rõ và dễ gọi điện cho khách ở gần khu vực. Những lời nhận xét được đặt nguyên văn ở phần đánh giá để người xem cảm nhận không khí tiệm qua trải nghiệm đã được chia sẻ, trong khi hình ảnh đang dùng chỉ là minh họa và cần thay bằng ảnh thật khi làm trang chính thức.
          </p>
        </div>
        <div>
          <img className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl" src={images[1]} alt="Khu vực làm móng tông kem hồng" />
          <p className="photo-note">Ảnh demo minh họa - bản chính thức sẽ dùng ảnh thật của tiệm.</p>
        </div>
      </section>

      <section id="dịch-vụ" className="bg-[#fbefe8] py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p id="bảng-giá" className="text-sm font-bold uppercase tracking-[0.2em] text-[#b76e79]">Dịch vụ</p>
              <h2 className="mt-3 font-[var(--font-display)] text-4xl font-semibold md:text-5xl">Dịch vụ và bảng giá tham khảo</h2>
            </div>
            <p className="max-w-md rounded-2xl bg-white p-4 text-sm font-semibold text-[#704a53]">Giá tham khảo - vui lòng xác nhận bảng giá thực tế.</p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, desc]) => (
              <article key={title} className="rounded-[1.25rem] border border-[#ead1d2] bg-white p-5 shadow-sm">
                <h3 className="font-[var(--font-display)] text-xl font-semibold text-[#713847]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6a4a51]">{desc}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#b76e79]">Báo giá khi tư vấn</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="đánh-giá" className="mx-auto max-w-7xl px-4 py-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b76e79]">Đánh giá</p>
        <h2 className="mt-3 font-[var(--font-display)] text-4xl font-semibold md:text-5xl">Khách nói về Hachi Nail Studio</h2>
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {reviews.map(([quote, author]) => (
            <figure key={author} className="rounded-[1.5rem] bg-white p-6 shadow-sm">
              <blockquote className="font-[var(--font-display)] text-2xl leading-snug text-[#4f2632]">{quote}</blockquote>
              <figcaption className="mt-5 text-sm font-bold text-[#b76e79]">- {author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="giờ-mở-cửa" className="bg-[#3b2029] py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f1b9bf]">Giờ mở cửa</p>
            <h2 className="mt-3 font-[var(--font-display)] text-4xl font-semibold">Gọi để xác nhận giờ trống trong ngày.</h2>
            <p className="mt-5 leading-8 text-[#f3d9dc]">Địa chỉ: {info.address}. Xác nhận giờ thực tế trước khi ghé để tránh phải chờ vào khung giờ đông khách.</p>
            <div id="liên-hệ" className="mt-7 flex flex-wrap gap-3">
              <a href={`tel:${info.tel}`} className="rounded-full bg-[#f1b9bf] px-6 py-3 font-bold text-[#3b2029]">Gọi {info.phone}</a>
              <a href={directionsUrl} className="rounded-full border border-[#f1b9bf] px-6 py-3 font-bold text-white">Chỉ đường</a>
            </div>
          </div>
          <iframe className="h-[360px] w-full rounded-[1.5rem] border-0" src={mapUrl} title="Bản đồ Hachi Nail Studio" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>

      <section id="hỏi-đáp" className="mx-auto max-w-4xl px-4 py-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b76e79]">Hỏi đáp</p>
        <h2 className="mt-3 font-[var(--font-display)] text-4xl font-semibold">Trước khi ghé tiệm</h2>
        <div className="mt-8 space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="rounded-2xl bg-white p-5 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold">
                {q}
                <span className="faq-plus text-2xl text-[#b76e79]" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 leading-7 text-[#67464e]">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#ead1d2] bg-[#fff7ef] p-3 shadow-2xl md:hidden">
        <div className="grid grid-cols-3 gap-2 text-center text-sm font-bold">
          <a className="rounded-full bg-[#8f4553] px-3 py-3 text-white" href={`tel:${info.tel}`}>Gọi {info.phone}</a>
          <a className="rounded-full border border-[#b76e79] px-3 py-3 text-[#6b3340]" href={directionsUrl}>Chỉ đường</a>
          <a className="rounded-full bg-[#f1d2d7] px-3 py-3 text-[#6b3340]" href={info.zalo}>Zalo</a>
        </div>
      </div>

      <footer className="border-t border-[#ead1d2] px-4 py-8 text-sm text-[#6d4b53]">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold text-[#3b2029]">{info.name}</p>
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
