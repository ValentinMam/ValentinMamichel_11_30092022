import { MdStarRate } from 'react-icons/md'
import './stars.css'

function Stars({ rate }) {
  const stars = Array.from({ length: 5 }, () => {
    // eslint-disable-next-line react/jsx-key
    return <MdStarRate />
  })

  return (
    <div className="star-rating">
      {stars.map((star, index) => {
        return (
          <div key={index}>
            {
              <MdStarRate
                key={index}
                className={index < rate ? 'active-color' : 'inactive-color'}
              />
            }
          </div>
        )
      })}
    </div>
  )
}

export default Stars
