import ProductDetailLayout from "../ProductDetailLayout";

export default function SlimPage() {
  return (
    <ProductDetailLayout
      name="파비스 애니원 슬림"
      categoryLabel="다이어트 서포트"
      heroImage="/images/2.jpg"
      originalPrice={224000}
      description="가르시니아 캄보지아와 식이섬유를 중심으로, 체지방 감소와 배변 활동을 동시에 도와주는 절식기/다이어트 집중 케어 제품입니다."
      bullets={[
        "가르시니아 캄보지아 추출물(HCA 60%)로 탄수화물이 지방으로 합성되는 것을 억제하여 체지방 감소에 도움",
        "혈액 정화 및 항산화 작용을 통해 생리 활성 물질 보충에 도움",
        "폴리덱스트로스와 난소화성덱스트린 등 풍부한 식이섬유로 배변 활동 원활에 도움",
        "마테, 녹차, 야가베 선인장 등 추출물 블렌드로 다양한 식물성 영양소 공급",
        "혈액 속 독소와 노폐물 제거를 도와 다이어트 시 컨디션 관리에 도움",
        "L-카르니틴을 통해 지방 연소를 촉진하고 에너지 대사에 도움",
      ]}
    />
  );
}
