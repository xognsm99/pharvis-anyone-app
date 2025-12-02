"use client";

import Image from "next/image";
import Link from "next/link";

type ProductDetailLayoutProps = {
  name: string;
  categoryLabel: string;
  heroImage: string;
  description: string;
  bullets: string[];
  originalPrice: number;
  discountRate?: number;
};

const formatKRW = (value: number) =>
  value.toLocaleString("ko-KR", { maximumFractionDigits: 0 });

export default function ProductDetailLayout({
  name,
  categoryLabel,
  heroImage,
  description,
  bullets,
  originalPrice,
  discountRate = 0.3,
}: ProductDetailLayoutProps) {
  const salePrice = Math.round(originalPrice * (1 - discountRate));

  return (
    <main className="min-h-screen bg-[#F8F4EC] px-4 py-10">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        {/* 메인 카드 */}
        <section className="rounded-3xl bg-white p-6 shadow-md md:p-8">
          <div className="flex flex-col items-center gap-6">
            {/* 상단 카테고리 라벨 */}
            <span className="rounded-full bg-black/70 px-4 py-1 text-xs font-semibold text-white">
              {categoryLabel}
            </span>

            {/* 제품 이미지 (중앙 정렬, 너무 크지 않게 제한) */}
            <div className="w-full max-w-md">
              <div className="overflow-hidden rounded-2xl bg-[#F3EFE4]">
                <Image
                  src={heroImage}
                  alt={name}
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* 제품명 + 짧은 설명 */}
            <div className="w-full space-y-2 text-center">
              <h1 className="text-2xl font-bold text-zinc-900 md:text-3xl">
                {name}
              </h1>
              <p className="text-sm leading-relaxed text-zinc-700">
                {description}
              </p>
            </div>

            {/* 가격 박스 */}
            <div className="mt-4 w-full rounded-2xl bg-[#FFF6E5] p-5 text-sm">
              <div className="space-y-1 text-center">
                <p className="text-xs text-zinc-400 line-through">
                  정가 {formatKRW(originalPrice)}원
                </p>
                <p className="flex items-center justify-center gap-2 text-2xl font-extrabold text-[#43B77A]">
                  {formatKRW(salePrice)}원
                  <span className="rounded-full bg-[#43B77A] px-3 py-1 text-[11px] font-semibold text-white">
                    30% OFF
                  </span>
                </p>
                <p className="text-xs text-zinc-500">
                  온라인 전용 프로그램가입니다. 상담 후 결제 시 적용됩니다.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  className="rounded-full bg-[#43B77A] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#379867]"
                >
                  나에게 맞는 프로그램 상담받기
                </button>
                <Link
                  href="/"
                  className="rounded-full border border-[#43B77A] px-6 py-2.5 text-sm font-semibold text-[#43B77A] hover:bg-[#E6F4ED]"
                >
                  다른 상품도 둘러보기
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 효능 요약 - 번호/이모지 스타일 */}
        <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-lg font-bold text-zinc-900">효능 요약</h2>
          <p className="mt-1 text-xs text-zinc-500">
            실제 제품 설명서와 상담 자료를 바탕으로 정리한 핵심 포인트입니다.
          </p>

          <ol className="mt-4 space-y-3 text-sm text-zinc-800">
            {bullets.map((item, index) => (
              <li key={item} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#FCE2B5] text-xs font-semibold text-[#A8641A]">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* 공통 주의사항 */}
        <section className="mb-6 rounded-3xl bg-[#FFF0F0] p-5 text-xs text-[#A14444] md:p-6">
          <p className="font-semibold">섭취 전 안내사항</p>
          <p className="mt-1 leading-relaxed">
            개인의 체질, 현재 복용 중인 약, 질환 등에 따라 섭취가 적합하지 않을 수
            있습니다. 이상 증상이 느껴지면 섭취를 중단하고 전문가와 상담해 주세요.
          </p>
        </section>
      </div>
    </main>
  );
}
