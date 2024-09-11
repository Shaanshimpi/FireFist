import React, {useState} from 'react'
import './Why.css'
function Why() {
    const [coordinates, setCoordinates] = useState({})
    const [image, setImage] = useState()
    const [titles, setTitles] = useState([
        `Custom Website Design`,
        `E-commerce Solutions`,
        `Web Application Development`,
        `Mobile App Development`
    ])

    const handleMouseMove=(event)=> {
        document.getElementById('cursor-follow').style.display = 'block';
        setTimeout(() => {
            setCoordinates({

                transform: `translate(${Math.min(event.clientX,screen.width - 200)-100}px,${event.clientY-100}px)`
            })
        }, 350)
        
    }
    const handleMouseLeave = (event) => {
        document.getElementById('cursor-follow').style.display = 'none';
    }

    const handleMouseEnter = (event) => {
        const imageList = [`legendary.webp`, `bar.webp`, `genk.webp`,`phone.webp`]
        const eleId = event.target.id.replace("why-sec-","");
        setImage(`./src/images/${imageList[parseInt(eleId)]}`)
        console.log(eleId);
        
        
    }
    
  return (
    <div className='why' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <h5 className="why-title">We're here for you if need</h5>
      <div className="why-section-container">
        {titles.map((e,i)=>{
            return <div className="why-section" key={i} id={`why-sec-`+i} onMouseEnter={handleMouseEnter}>
                <h3>{e}</h3>  
            </div>
        })}
      </div>
      <div className="cursor-follow" style={coordinates} id='cursor-follow'>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Why
