import React from 'react'
import './header.css'

const Header = () => {
    return (
        <>
            {/* <div>Header</div> */}
            {/* <h2 ><img classname= "logo" src= "/header-logo.png" /> TuteDude <span />ProfileName <span />Chat With Mentor My Assignment</h2> */}
            <div className='header'>

                <div className='logo'>
                    <img src="/header-logo.png" />
                    <span>TuteDude</span>
                </div>

                <div>
                    <ul>
                        <li>My Assignment</li>
                        <li>Chat with Mentor</li>
                        <li>
                        <img src="/header-logo.png" />
                          <span>ProfileName</span>  
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Header