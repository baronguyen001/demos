export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#08090b] px-4 text-center text-white">
      <div>
        <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#ff7a1a]">Không tìm thấy trang</p>
        <h1 className="mt-4 font-[var(--font-display)] text-5xl font-bold uppercase">Trang này chưa có trong bản demo.</h1>
        <a className="mt-7 inline-flex rounded bg-[#ff7a1a] px-6 py-3 font-extrabold text-black" href="/demos/topgun-boutique-fitness-hanoi-starlake-32b0/">
          Về trang chủ
        </a>
      </div>
    </main>
  );
}
