import React from 'react'
import LeftFooter from './LeftFooter'
import RightFooter from './RightFooter'
import '../../css/Footer.css'
import BottomFooter from './BottomFooter'

const Footer = () => {
    return (
        <>
            <div className='Footer'>
                <LeftFooter />
                <RightFooter />
            </div>
            <BottomFooter />

        </>

    )
}

export default Footer
