import React, {useState} from 'react'
import people from './data'
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'
const Review = () => {
    const [index, setIndex] = useState(0)
    const {name, job, image, text} = people[index]
    return (
    <article className="card">
        <div className="img-container">
            <img src={image} alt={name} className="img-person"/>
            <span className="quote">
                <FaQuoteRight />
            </span>
        </div>
        <h4>{name}</h4>
        <p className="job">{job}</p>
        <p>{text}</p>
        <div className="btn-container">
            <button onClick={() => {
                if(index === 0){
                  return  setIndex(0)
                }
                return setIndex(index - 1)
            }} className="btn">
                <FaChevronLeft />
            </button>
            <button onClick={() => {
                if(index === people.length -1){
                    return setIndex(index)
                }
                return setIndex(index + 1)
            }} className="btn">
                <FaChevronRight />
            </button>
        </div>
        <button onClick={() =>{
            setIndex(()=>{
                return Math.floor(Math.random() * people.length)
            })
        }} className="surprise-btn">
            Suprise Me
        </button>
    </article>
    )
}

export default Review