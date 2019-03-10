import React from 'react';
import { Link } from 'react-router-dom';

import logo1 from '../../Resources/images/logos/logo1.png';

export const CityLogo = (props) => {

    const template = <div
        className="img_cover"
        style={{
            width: props.width,
            height: props.height,
            background:`url(${logo1}) no-repeat`
        }}
    ></div>

    if(props.link){
        return (
            <Link to={props.linkTo} className="link_logo">
                {template}
            </Link>
        )
    } else {
        return template
    }

}