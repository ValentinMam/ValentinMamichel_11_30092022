import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './carousel.css'

function Carousel({ imgList }) {
  const imgListLength = imgList.length
  const [currImg, setCurrImg] = useState(0)

  const nextSlide = () => {
    setCurrImg(currImg === imgListLength - 1 ? 0 : currImg + 1)
  }
  const prevSlide = () => {
    setCurrImg(currImg === 0 ? imgListLength - 1 : currImg - 1)
  }

  if (imgListLength === 1) {
    return (
      <div className="carousel">
        {imgList.map((slide, index) => {
          return <>{index === currImg && <img src={slide} alt="housing" />}</>
        })}
      </div>
    )
  } else {
    return (
      <div className="carousel">
        <FaChevronLeft className="left-arrow" onClick={prevSlide} />
        <FaChevronRight className="right-arrow" onClick={nextSlide} />
        {imgList.map((slide, index) => {
          return (
            <div
              className={index === currImg ? 'slide-active' : 'slide'}
              key={index}
            >
              {index === currImg && (
                <img key={index} src={slide} alt="housing" />
              )}
              <span>
                {currImg + 1}/{imgListLength}
              </span>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Carousel
