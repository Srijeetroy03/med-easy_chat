import React from 'react'
import '../../css/RightFooter.css'

const RightFooter = () => {
    return (
        <div className='RightFooter'>
            <div className="top_right">
                <p>ABOUT US</p>
                <p>TERMS & CONDITIONS</p>
                <p>HEALTHCARE BLOGS</p>
                <p>CONTACT US</p>
                <p>PRIVACY POLICY</p>
                <p>PROFILE</p>
            </div>
            <div className="bottom_right">
                <h1>Sign up for newsletter</h1>
                <div className="credentials_email">
                    <input type="text" placeholder='Enter your email' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default RightFooter
