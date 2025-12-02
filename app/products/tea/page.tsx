import ProductDetailLayout from "../ProductDetailLayout";

export default function TeaPage() {
  return (
    <ProductDetailLayout
      name="파비스 차"
      categoryLabel="절식기 티"
      heroImage="/images/6.jpg"
      originalPrice={50000}
      description="절식 프로그램 동안 물 대신, 혹은 식사 사이에 부담 없이 마실 수 있는 장 케어 티입니다. 따뜻하게 마시면 체온과 효소 활성에 도움을 줍니다."
      bullets={[
        "허브 혼합물(현미, 마테, 결명자, 산사자, 구기자, 구기자 잎 등)을 통해 장과 위를 동시에 케어",
        "인체의 하수구 역할을 하는 신장과 방광 기능 강화에 도움",
        "입에서 요도까지 독소 배출을 도와 노폐물 순환에 도움",
        "혈류 개선 및 부종 완화, 고지혈증 등 혈관 건강 관리에 도움",
        "콜레스테롤 중화 및 체외 배출을 도와 혈관 청소에 도움",
        "따뜻하게 마시면 장 운동과 효소 활성화에 더욱 최적의 상태를 만들어 줌",
      ]}
    />
  );
}
