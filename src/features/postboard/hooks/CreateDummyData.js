// // 📌 더미 데이터 생성 함수
// export const createDummyData = (page, size = 5) => {
//   return Array.from({ length: size }, (_, i) => ({
//     promotionId: (page - 1) * size + i + 1,
//     createdAt: '08/13',
//     promotionStatus: 'APPLYING',
//     nickname: `상호명${(page - 1) * size + i + 1}`,
//     category: i % 2 === 0 ? '식당' : '카페',
//     address: '서울시 노원구 월계동',
//     thumbnail: 'https://placehold.co/400',
//     start_date: '2025-07-31',
//   }))
// }

// CreateDummyData.js
// 📌 더미 데이터 생성 함수
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
    // PostContainer의 categoryMap 키와 일치하도록 '식당'/'카페'를 원본 Enum 값으로 변경
    category: i % 2 === 0 ? 'RESTAURANT' : 'CAFE',
    address: '서울시 노원구 월계동',
    thumbnail: 'https://placehold.co/400',
    start_date: '2025-07-31',
    end_date: '2025-08-31', // PostList에서 사용되므로 추가
  }))
}
