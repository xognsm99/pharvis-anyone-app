import ProductDetailLayout from "../ProductDetailLayout";

export default function MilzymePage() {
  return (
    <ProductDetailLayout
      name="파비스 애니원 밀자임"
      categoryLabel="단백질 & 종합 영양"
      heroImage="/images/3.jpg"
      originalPrice={134000}
      description="15종 곡물을 3차 발효하여 체내 흡수율을 높인, 단백질과 각종 영양을 동시에 보충해 주는 밀자임입니다."
      bullets={[
        "발아 곡물 15종 복합 발효로 100% 체내 흡수를 목표로 설계된 발효 곡물 블렌드",
        "현미, 보리, 율무, 메밀 등 다양한 곡물과 과일 추출 분말, 천연 염분, 함초 분말 함유",
        "비타민 C, 비타민 B군, 미네랄을 함께 공급하여 종합적인 영양 보충에 도움",
        "단백질과 각종 영양 공급으로 건강 증진 및 체력 유지에 도움",
        "체내 당 대사와 지방 대사 촉진에 도움을 주어 체중 관리에 보조 역할",
        "몸속 급은 지방과 단백질(염증물질)을 잘게 분해하여 배출하는 데 도움",
      ]}
    />
  );
}
