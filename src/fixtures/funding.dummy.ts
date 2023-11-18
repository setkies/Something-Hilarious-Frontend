interface FundingData {
  title: string;
  description: string;
  id: number;
  people: number;
  fundraising: number;
}

const dummyData: FundingData[] = [
  {
    id: 1,
    title: '[단독공개 | 눈내리는케이크] 크리스마스를 위한 홍대케이크맛집',
    description:
      '[누적 2.5억] 겨울에는 따뜻하게 달궈드리겠습니다. 사갓 캠핑 쉘터',
    people: 100,
    fundraising: 250000000,
  },
  {
    id: 2,
    title: '[눈송이 놀이터] 겨울에 눈싸움 즐기기!',
    description:
      '[누적 1.8억] 함께 눈싸움을 즐겨보세요. 따뜻한 차를 제공합니다.',
    people: 80,
    fundraising: 180000000,
  },
  {
    id: 3,
    title: '[따뜻한 국수 요리] 겨울철 맛있는 국수 즐기기',
    description: '[누적 3.2억] 추운 겨울, 맛있는 국수로 따뜻함을 느껴보세요.',
    people: 120,
    fundraising: 320000000,
  },
  {
    id: 4,
    title: '[우리 동네 책방] 겨울에는 따뜻한 책 한 권 어떠세요?',
    description:
      '[누적 900만] 동네 책방에서 함께 책을 읽어보세요. 뜨거운 음료 무료 제공!',
    people: 50,
    fundraising: 90000000,
  },
  {
    id: 5,
    title: '[눈 내리는 산책로] 겨울 풍경 감상하며 걷기',
    description:
      '[누적 1.5억] 아름다운 겨울 풍경을 즐기며 건강한 산책을 즐겨보세요.',
    people: 90,
    fundraising: 150000000,
  },
  {
    id: 6,
    title: '[디저트 마스터 클래스] 크리스마스 케이크 만들기',
    description:
      '[누적 2.8억] 케이크 마스터가 가르치는 특별한 크리스마스 케이크 레시피!',
    people: 110,
    fundraising: 280000000,
  },
  {
    id: 7,
    title: '[겨울야경 투어] 도시의 불빛이 아름다운 겨울 야경 투어',
    description:
      '[누적 1.2억] 도시의 아름다운 불빛을 감상하며 특별한 겨울 야경 투어를 즐겨보세요.',
    people: 70,
    fundraising: 120000000,
  },
  {
    id: 8,
    title: '[온 가족을 위한 겨울 스포츠] 눈썰매장에서 신나게 놀기',
    description:
      '[누적 2.1억] 온 가족이 함께 즐길 수 있는 눈썰매장에서 즐거운 시간을 보내보세요.',
    people: 95,
    fundraising: 210000000,
  },
  {
    id: 9,
    title: '[겨울의 따뜻함] 온 가족 모두를 위한 소품 만들기',
    description:
      '[누적 1.6억] 집에서 온 가족이 함께 만들 수 있는 따뜻한 겨울 소품 만들기 클래스!',
    people: 60,
    fundraising: 160000000,
  },
  {
    id: 10,
    title: '[헬스 모임] 추운 겨울, 함께 운동하며 건강 관리하기',
    description:
      '[누적 1.9억] 헬스 모임에서 함께 운동하며 건강한 겨울을 맞이하세요.',
    people: 85,
    fundraising: 190000000,
  },
  {
    id: 11,
    title: '[온 가족을 위한 겨울 피크닉] 따뜻한 이불 속에서 소품 만들기',
    description:
      '[누적 2.3억] 자연 속에서 따뜻한 이불 속에서 가족과 함께 소품을 만들어보세요.',
    people: 75,
    fundraising: 230000000,
  },
  {
    id: 12,
    title: '[소울푸드 맛집] 겨울에 어울리는 따뜻한 음식 즐기기',
    description:
      '[누적 2.4억] 겨울에 어울리는 소울푸드를 맛보러 오세요. 따뜻한 음료 제공!',
    people: 105,
    fundraising: 240000000,
  },
];

export default dummyData;
