import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../css/footer_icons.css'

const Icons = (props) => {
    return (
        <FontAwesomeIcon icon={props.img_src} className='footer_icons'/>
    )
}

export default Icons
