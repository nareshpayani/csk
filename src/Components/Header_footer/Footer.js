import React from 'react';
import { CityLogo } from '../ui/icons';

const Footer = () => {
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
                <CityLogo
                    width="90px"
                    height="75px"
                    link={true}
                    linkTo="/"
                />
            </div>
            <div className="footer_discl">
                Chenai Super Kings @2019.All rights reserved.
            </div>
            
        </footer>
    );
};

export default Footer;