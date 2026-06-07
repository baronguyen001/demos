import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 py-20 text-center text-[var(--ink)]">
      <h1 className="font-[var(--font-display)] text-4xl font-semibold">Không tìm thấy trang</h1>
      <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
        Trang demo này chỉ có một trang chính. Anh/chị có thể quay lại phần giới thiệu của Homestay Minh Nhật.
      </p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-[var(--primary-dark)] px-6 py-3 font-semibold text-white">
        Về trang chính
      </Link>
    </main>
  );
}
