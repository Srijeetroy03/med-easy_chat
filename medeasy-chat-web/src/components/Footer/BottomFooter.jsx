import React from 'react'
import Icons from './Icons'
import { faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Item from '../../Images/Item.png'
import '../../css/BottomFooter.css'

let arr_src = [
    faGithub, faInstagram, faLinkedinIn, faTwitter
]

const BottomFooter = () => {
    return (
        <div className='BottomFooter'>
            <div className="icon_container">
                {
                    arr_src.map(
                        (src) => (
                            <Icons img_src={src} />
                        )
                    )
                }
                <img src={Item} alt="" srcset="" height={32} width={32}/>
            </div>
            <p style={{fontSize:'10px', fontWeight:'500', marginTop:'20px', textAlign:'center'}}>© 2023 MedEasy. All rights reserved.</p>
        </div>
    )
}

export default BottomFooter
