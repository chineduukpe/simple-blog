import React from 'react'
import Auxil from './Auxil';


const ProfileImageSection = props => {
    const propStyles = props.style ? {...props.style} : {}
    return (
        <Auxil>
            <div className="text-center avatar-wrapper" style={propStyles}>
                <img src={props.user.profile_image_url} style={{transform:`scale(${props.imgScale ? props.imgScale : 1})`}} alt="avatar" className={'img-fluid'}/>
                    <h4 className='text-center'>{props.user.name}</h4>
                <span>{props.user.role}</span>
            </div>
            {props.children}
        </Auxil>
    )
}

export default ProfileImageSection;