export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fff7ef] px-4 text-center text-[#301d24]">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b76e79]">Không tìm thấy trang</p>
        <h1 className="mt-4 font-[var(--font-display)] text-4xl font-semibold">Trang này chưa có trong bản demo.</h1>
        <a className="mt-7 inline-flex rounded-full bg-[#8f4553] px-6 py-3 font-bold text-white" href="/demos/hachi-nail-studio-5290/">
          Về trang chủ
        </a>
      </div>
    </main>
  );
}
