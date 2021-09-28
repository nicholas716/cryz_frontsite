import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

// images
import previousButtonPinkIcon from 'assets/images/arrow-left-pink.svg'
import previousButtonGrayIcon from 'assets/images/arrow-left-gray.svg'
import nextButtonPinkIcon from 'assets/images/arrow-right-pink.svg'
import nextButtonGrayIcon from 'assets/images/arrow-right-gray.svg'

// json data
import COSliderData from 'assets/data/COSliderData'

// styles
import styles from 'components/Home/COSlider.module.scss'
import globalStyles from 'styles/GlobalStyle.module.scss'

const COSlider = () => {
  const [sliderData, setSliderData] = useState([])
  useEffect(() => {
    var size = 6
    var arrayOfArrays = []
    for (var i = 0; i < COSliderData.length; i += size) {
      arrayOfArrays.push(COSliderData.slice(i, i + size))
    }
    setSliderData(arrayOfArrays)
  }, [COSliderData])
  return (
    <div className={globalStyles.container}>
      <div className={styles.title}>&CO</div>
      <div className={styles.divider}></div>
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        stopOnHover={true}
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
          hasPrev ? (
            <button onClick={clickHandler} className={styles.previousButton}>
              <Image src={previousButtonPinkIcon} alt="" width={20} height={15} />
            </button>
          ) : (
            <button onClick={clickHandler} className={styles.previousButton}>
              <Image src={previousButtonGrayIcon} alt="" width={20} height={15} />
            </button>
          )
        }
        renderArrowNext={(clickHandler, hasNext, labelNext) =>
          hasNext ? (
            <button onClick={clickHandler} className={styles.nextButton}>
              <Image onClick={clickHandler} src={nextButtonPinkIcon} alt="" width={20} height={15} />
            </button>
          ) : (
            <button onClick={clickHandler} className={styles.nextButton}>
              <Image onClick={clickHandler} src={nextButtonGrayIcon} alt="" width={20} height={15} />
            </button>
          )
        }
      >
        {sliderData.map((item, index) => {
          return (
            <div key={index} className="grid grid-cols-3 gap-4">
              {item.map((elem, idx) => (
                <div key={idx}>
                  <Image src={elem.image} alt="" width={364} height={364} />
                  <div className="flex justify-start items-start">
                    <div className={styles.divider} />
                    <div className={styles.name}>
                      {elem.name.split(' ')[0]}
                      <br />
                      {elem.name.split(' ')[1]}
                      <div className={styles.role}>{elem.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default COSlider
