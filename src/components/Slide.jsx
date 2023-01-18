import data from "../data"
import pattern from "../assets/pattern-bg.svg"
import nextBtn from '../assets/icon-next.svg'
import prevBtn from '../assets/icon-prev.svg'
import { useState } from "react"

function Slide() {
    const [index, setIndex] = useState(0)

    let currentSlide = data[index]
    // console.log(currentSlide)

    const dataInfo = <div className="slider">
        <div className="content">
                <p className="quotes">“{currentSlide.body}”</p>
                <h1>{currentSlide.name}<span>{currentSlide.role}</span></h1>
            </div>
                <div className="heroImg">
                    <img src={pattern} alt="" className="patternImg"/>
                <img src={currentSlide.profileAvatar} alt="" className="profileImg" />
                </div>
    </div>

    function handlePrev() {
      setIndex(prevIndex => {
        if(prevIndex === 0) {
            return  prevIndex = 1
            }
            return prevIndex - 1
        })
    }
  
    function handleNext() {
      setIndex(prevIndex => {
        if(prevIndex === 1) {
        return  prevIndex = 0
        }
        return prevIndex + 1
    })
    }
  
    return (
        <div className="slider">
                {dataInfo}
                <div className="btn">
                <button className='prev' onClick={handlePrev}><img src={prevBtn} alt="" /></button>
                <button className='next' onClick={handleNext}><img src={nextBtn} alt="" /></button>
                </div>
        </div>
    )
}

export default Slide;