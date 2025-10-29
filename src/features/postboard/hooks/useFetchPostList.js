// useFetchPostList api 연결
// import instance from '../../../api/client'
// import { useState, useEffect } from 'react'

// export const useFetchPostList = () => {
//   const [postList, setPostList] = useState([]) // 누적된 게시물 목록
//   const [page, setPage] = useState(0) // 현재 페이지
//   const [isLastPage, setIsLastPage] = useState(false) // 마지막 페이지인지
//   const [isError, setIsError] = useState(false) // 에러 상태
//   const [isLoading, setIsLoading] = useState(true) // 로딩 중 여부

//   const enabled = !isLoading && !isLastPage && !isError

//   const loadNextPage = async () => {
//     try {
//       console.log('API 호출 시작, isLoading을 true로 설정')
//       setIsLoading(true)
//       setIsError(false)

//       const response = await instance.get(`/promotions?status=${'ACTIVE'}&page=${page}&size=${10}`)

//       console.log('API 호출 성공, 응답 데이터:', response.data)
//       const { items: posts, hasNext } = response || {}

//       if (!hasNext || !posts || posts.length === 0) {
//         setIsLastPage(true)
//       }

//       setPostList((prev) => [...prev, ...(posts || [])])
//       setPage((prev) => prev + 1)
//     } catch (err) {
//       console.error('API 호출 실패:', err)
//       setIsError(true)
//     } finally {
//       console.log('로딩 종료, isLoading을 false로 설정')
//       setIsLoading(false)
//     }
//   }

//   useEffect(() => {
//     loadNextPage()
//   }, []) // 빈 배열을 넣어 컴포넌트 마운트 시 한 번만 실행되도록 설정
//   return { postList, loadNextPage, enabled, isError, isLoading }
// }

import { useState, useEffect, useCallback } from 'react'
import { createDummyData } from './CreateDummyData'

const DUMMY_FETCH_DELAY = 500

export const useFetchPostList = () => {
  const [postList, setPostList] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const [hasMore, setHasMore] = useState(true)

  const enabled = !isLoading && hasMore && !isError

  const loadNextPage = useCallback(() => {
    if (isLoading || !hasMore) return

    setIsLoading(true)
    setIsError(false)

    setTimeout(() => {
      try {
        const newData = createDummyData(page)

        if (newData.length === 0 || page > 3) {
          // 더미로 3페이지만 데이터를 만들도록 설정
          setHasMore(false)
        } else {
          setPostList((prevList) => [...prevList, ...newData])
          setPage((prevPage) => prevPage + 1)
        }
        setIsLoading(false)
      } catch (error) {
        console.error('Failed to load dummy data:', error)
        setIsError(true)
        setIsLoading(false)
      }
    }, DUMMY_FETCH_DELAY)
  }, [page, isLoading, hasMore])

  useEffect(() => {
    loadNextPage()
  }, [])

  return { postList, loadNextPage, enabled, isError, isLoading }
}
