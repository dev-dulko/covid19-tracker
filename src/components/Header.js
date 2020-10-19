import React from 'react'
import mask from '../images/mask.jpg'

export default function Header() {
 
   const maskElement = <img style={{width:'50px', height:'50px'}} src={mask} alt='mask'/>


    return (
        <div className='header'>
            <div className='header__text'>
                {maskElement}<h1>COVID-19 TRACKER</h1>
                {maskElement}
            </div>
            <p>The best site of pandemic!</p>
        </div>
    )
}

