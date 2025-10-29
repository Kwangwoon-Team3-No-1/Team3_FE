// 더미 데이터 생성
export const createDummyData = (page, size = 5) => {
  // 3페이지까지만 데이터를 만들도록 제한 (테스트 용이성)
  if (page > 3) {
    return []
  }
  return Array.from({ length: size }, (_, i) => ({
    promotionId: (page - 1) * size + i + 1,
    createdAt: '08/13',
    promotionStatus: 'APPLYING',
    nickname: `상호명${(page - 1) * size + i + 1}`,
    category: i % 2 === 0 ? 'RESTAURANT' : 'CAFE',
    address: '서울시 노원구 월계동',
    thumbnail: 'https://placehold.co/400',
    start_date: '2025-07-31',
    end_date: '2025-08-31',
  }))
}
