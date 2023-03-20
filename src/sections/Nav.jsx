import React from 'react';
import { IconHome2, IconUserCode, IconBook2, IconBriefcase, IconMessageDots } from '@tabler/icons-react';

const Nav = () => {
    return (
        <div className={'mx-auto fixed bottom-4 left-0 right-0 flex justify-center items-center'}>
            <ul className={'flex bg-blue-900/40 py-4 px-9 rounded-full gap-4 md:gap-6 backdrop-blur-xl'}>
                <li>
                    <a href='#'>
                        <IconHome2 />
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <IconUserCode />
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <IconBook2 />
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <IconBriefcase />
                    </a>
                </li>{' '}
                <li>
                    <a href='#'>
                        <IconMessageDots />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
