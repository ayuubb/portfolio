import React from 'react';
import logo from '../../src/assets/images/logoaynew2.png';
import { IconArrowsDown } from '@tabler/icons-react';

const Hero = () => {
    return (
        <div className={'h-[calc(100vh-120px)] flex justify-center'}>
            <div className={'text-center'}>
                <span className={'text-sm'}>Welcome To,</span>
                <h1 className={'text-3xl mt-4 mb-1'}>Ayprojex</h1>
                <h3 className={'text-gray-400 mb-5'}>Frontend Developer</h3>
                <div className={'w-40 mx-auto mb-24'}>
                    <img className={'rounded-full'} src={logo} />
                </div>
                <a href='#'>
                    <IconArrowsDown size={'38'} className={'mx-auto animate-bounce p-2 bg-blue-900 rounded-full'} />
                </a>
            </div>
        </div>
    );
};

export default Hero;
