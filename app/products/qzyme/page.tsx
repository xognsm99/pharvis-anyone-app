import ProductDetailLayout from "../ProductDetailLayout";

export default function QzymePage() {
  return (
    <ProductDetailLayout
      name="파비스 애니원 큐자임"
      categoryLabel="스트레스 & 신경계 서포트"
      heroImage="/images/4.jpg"
      originalPrice={84000}
      description="L-테아닌과 발효 곡물, 식물 추출물을 조합하여 스트레스 케어와 신경계 밸런스를 동시에 돕는 큐자임입니다."
      bullets={[
        "L-테아닌을 함유하여 긴장 완화, 수면 보조, 우울감 및 스트레스 완화에 도움",
        "3차 발효 혼합 곡물로 정신적 불안 및 교감·부교감 신경 밸런스 유지에 도움",
        "자율신경계 조절, 혈관 이완, 스트레스성 두통 완화에 도움",
        "체내 염증 대사와 신경계·호르몬계 염증을 조절하여 회복과 재충전에 도움",
        "신경계 긴장과 예민함을 완화해 편안한 컨디션 유지에 도움",
      ]}
    />
  );
}
