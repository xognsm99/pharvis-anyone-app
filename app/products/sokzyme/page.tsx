import ProductDetailLayout from "../ProductDetailLayout";

export default function SokzymePage() {
  return (
    <ProductDetailLayout
      name="파비스 애니원 속자임"
      categoryLabel="속 편한 장 케어"
      heroImage="/images/7.jpg"
      originalPrice={108000}
      description="곡물·해조·비타민·효소를 한 포에 담아 속을 편안하게 다독여 주는 속자임입니다. 절식기와 보식기 사이, 부담 없이 장을 정돈해 줍니다."
      bullets={[
        "현미, 보리, 율무, 메밀 등 곡물 발효 분말과 해조류, 함초 등으로 구성된 포뮬라",
        "식물 혼합 발효 추출물과 비타민 B군, 미네랄로 장과 간 기능을 동시에 서포트",
        "장 점막 보호와 장내 환경 개선에 도움을 주어 속이 편안한 컨디션 유지에 도움",
        "장 연동 운동 활성화 및 배변 리듬 안정에 도움",
        "하루 3회, 물과 함께 간편하게 섭취할 수 있어 일상 속 장 케어 루틴으로 적합",
      ]}
    />
  );
}
