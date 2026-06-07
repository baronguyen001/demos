export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#e8f6f3] px-4 text-center text-[#10253f]">
      <div>
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0b7c7a]">Không tìm thấy trang</p>
        <h1 className="mt-4 font-[var(--font-display)] text-4xl font-black">Trang này chưa có trong bản demo.</h1>
        <a className="mt-7 inline-flex rounded-full bg-[#0b7c7a] px-6 py-3 font-extrabold text-white" href="/demos/nba-language-training-center-6b88/">
          Về trang chủ
        </a>
      </div>
    </main>
  );
}
