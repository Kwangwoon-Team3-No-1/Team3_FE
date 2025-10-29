// // PostBoardPage api 연결
// import { useState, useEffect } from 'react'
// import { Icon } from '../../../components/Icon/Icon'
// import BottomNav from '../../../components/BottomNav/BottomNav'
// import { PostContainer } from '../components/PostContainer'
// import { useNavigate } from 'react-router-dom'
// import './PostBoardPage.css'
// import { getUserRole } from '../../../api/client'

// export function PostBoardPage() {
//   const [userRole, setUserRole] = useState(null)
//   const [searchQuery, setSearchQuery] = useState('')
//   const navigate = useNavigate()

//   useEffect(() => {
//     // 컴포넌트 마운트 시 사용자 역할을 가져와 상태에 저장
//     setUserRole(getUserRole())
//   }, [])

//   const handleFormClick = () => {
//     navigate(`/postform`)
//   }

//   return (
//     <div className='post-board-page__container'>
//       <header className='post-board-page__header'>
//         <h2>프로모션 게시판</h2>
//         <div className='post-board-page__search-bar'>
//           <input
//             type='text'
//             placeholder='검색'
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className='post-board-page__search-input'
//           />
//           <Icon
//             name='post-search'
//             width={24}
//             height={24}
//             className='post-board-page__search-icon'
//           />
//         </div>
//       </header>
//       <div className='post-board-page--scroll-container'>
//         <PostContainer searchQuery={searchQuery} />
//       </div>
//       {userRole === 'ROLE_HOST' && (
//         <div className='post-board-page__floating-button-link' onClick={handleFormClick}>
//           <button className='post-board-page__floating-button'>
//             <Icon name='post-form' width={24} height={24} />
//           </button>
//         </div>
//       )}
//       <BottomNav />
//     </div>
//   )
// }

// PostBoardPage.jsx
import { useState, useEffect } from 'react'
import { Icon } from '../../../components/Icon/Icon'
import BottomNav from '../../../components/BottomNav/BottomNav'
import { PostContainer } from '../components/PostContainer'
import { useNavigate } from 'react-router-dom'
import './PostBoardPage.css'
import { getUserRole } from '../../../api/client'

export function PostBoardPage() {
  const [userRole, setUserRole] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    // 컴포넌트 마운트 시 사용자 역할을 가져와 상태에 저장
    setUserRole(getUserRole())
  }, [])

  const handleFormClick = () => {
    navigate(`/postform`)
  }

  return (
    <div className='post-board-page__container'>
      <header className='post-board-page__header'>
        <h2>프로모션 게시판</h2>
        <div className='post-board-page__search-bar'>
          <input
            type='text'
            placeholder='검색'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='post-board-page__search-input'
          />
          <Icon
            name='post-search'
            width={24}
            height={24}
            className='post-board-page__search-icon'
          />
        </div>
      </header>
      <div className='post-board-page--scroll-container'>
        <PostContainer searchQuery={searchQuery} />
      </div>
      {userRole === 'ROLE_HOST' && (
        <div className='post-board-page__floating-button-link' onClick={handleFormClick}>
          <button className='post-board-page__floating-button'>
            <Icon name='post-form' width={24} height={24} />
          </button>
        </div>
      )}
      <BottomNav />
    </div>
  )
}
