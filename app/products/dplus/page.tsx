import ProductDetailLayout from "../ProductDetailLayout";

export default function DplusPage() {
  return (
    <ProductDetailLayout
      name="파비스 애니원 디플러스"
      categoryLabel="장 디톡스 케어"
      heroImage="/images/5.jpg"
      originalPrice={84000}
      description="차전차피, 혼합 유산균, 해조류, 허브를 담아 장 속 노폐물과 콜레스테롤까지 한 번에 케어하는 디플러스입니다."
      bullets={[
        "차전자피 분말과 식이섬유 80% 이상 배합으로 장내 노폐물 배출을 적극적으로 돕는 포뮬라",
        "혼합 유산균, 녹차, 푸른 과즙 분말 등으로 장내 환경 개선에 도움",
        "SG 효소 발효 배양 분말(현미, 보리, 율무, 미역, 다시마 등)로 장 기능 활성화에 도움",
        "혈중 콜레스테롤 개선과 장내 독소 제거에 도움을 주어 대사 균형에 기여",
        "장내 찌꺼기 흡수 및 대변의 점도를 높여 이동성을 증가시키는 데 도움",
        "혈액 오염 물질과 염증성 노폐물 배출을 돕는 장 디톡스 전용 제품",
      ]}
    />
  );
}
