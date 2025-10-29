// import './PostList.css'
// import { formatPromoDate, timeAgo } from '../../../utils/promoDate'
// import { Icon } from '../../../components/Icon/Icon'
// import { useNavigate } from 'react-router-dom'

// export function PostList({
//   promotionId,
//   nickname,
//   category,
//   createdAt,
//   address,
//   thumbnail,
//   start_date,
//   end_date,
// }) {
//   const navigate = useNavigate()

//   console.log('넘어온 thumbnail:', thumbnail)

//   const handleClick = () => {
//     navigate(`/postboard/${promotionId}`)
//   }

//   return (
//     <div className='post-list__item' key={promotionId} onClick={handleClick}>
//       <div className='post-list__content'>
//         <div className='post-list__header'>
//           <span className='post-list__shop'>{nickname}</span>
//           <span className='post-list__dot'>·</span>
//           <span className='post-list__category'>{category}</span>
//           <span className='post-list__time'>{timeAgo(createdAt)}</span>
//         </div>
//         <div className='post-list__address'>
//           <Icon name='post-location' width={16} height={16} />
//           <span>{address}</span>
//         </div>
//         <div className='post-list__date'>
//           <Icon name='post-date' width={16} height={16} />
//           <span>{formatPromoDate(start_date, end_date)}</span>
//         </div>
//       </div>

//       {thumbnail && (
//         <div className='post-list__image'>
//           <img src={thumbnail} alt={nickname} />
//         </div>
//       )}
//     </div>
//   )
// }

// PostList.jsx
import './PostList.css'
import { formatPromoDate, timeAgo } from '../../../utils/promoDate'
import { Icon } from '../../../components/Icon/Icon'
import { useNavigate } from 'react-router-dom'

// PostBoardPage 에서 {...post}로 props가 펼쳐져 넘어옴
export function PostList({
  promotionId,
  nickname,
  category,
  createdAt,
  address,
  thumbnail,
  start_date,
  end_date,
}) {
  const navigate = useNavigate()

  console.log('넘어온 thumbnail:', thumbnail)

  const handleClick = () => {
    navigate(`/postboard/${promotionId}`)
  }

  return (
    <div className='post-list__item' key={promotionId} onClick={handleClick}>
      {/* 왼쪽 텍스트 영역 */}
      <div className='post-list__content'>
        <div className='post-list__header'>
          <span className='post-list__shop'>{nickname}</span>
          <span className='post-list__dot'>·</span>
          <span className='post-list__category'>{category}</span>
          <span className='post-list__time'>{timeAgo(createdAt)}</span>
        </div>
        <div className='post-list__address'>
          <Icon name='post-location' width={16} height={16} />
          <span>{address}</span>
        </div>
        <div className='post-list__date'>
          <Icon name='post-date' width={16} height={16} />
          <span>{formatPromoDate(start_date, end_date)}</span>
        </div>
      </div>

      {/* 오른쪽 이미지 */}
      {thumbnail && (
        <div className='post-list__image'>
          <img src={thumbnail} alt={nickname} />
        </div>
      )}
    </div>
  )
}
