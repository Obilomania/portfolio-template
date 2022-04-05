import React from 'react'
import CV from '../../../images/cv.pdf'

const ActionButtons = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
    )
}

export default ActionButtons;