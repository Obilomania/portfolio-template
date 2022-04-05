import React from 'react'
import "./Header.css"
import HeaderSocial from './HeaderSocials'
import ActionButtons from './Actionbuttons'
import ME from "../../../images/p-pics.png"

const Header = () => {
    return (
        <header>
            <div className="head__container">
                <div className="head__image">
                    <div className="img__contHorizontal">
                        <div className="img__contVertical">
                            <img src={ME} alt="myPhoto" />
                        </div>
                    </div>
                </div>
                <div className="side__note">
                    <h2 className="name">MR CHINEDUM LUCKY</h2>
                    <h1 className="creative"> CREATIVE</h1>
                    <h2>DEV OPS ENGINEER <span>AND</span> FRONT END</h2>
                    <h1 className="developer">
                        DEVELOPER
                    </h1>
                    <ActionButtons />
                </div>

                <HeaderSocial />
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header