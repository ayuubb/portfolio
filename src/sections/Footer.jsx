import React from 'react';
import { footerIcons } from '../Data.jsx';
const Footer = () => {
    return (
        <footer className='grid justify-items-center w-100 h-60'>
            <h2 className='font-medium text-2xl text-center'>Ayprojex</h2>
            <div className='grid grid-cols-4 w-48'>
                {footerIcons.map((icon, index) => {
                    return (
                        <div className={'mx-auto px-3'} key={index}>
                            {icon}
                        </div>
                    );
                })}
            </div>
        </footer>
    );
};

export default Footer;
