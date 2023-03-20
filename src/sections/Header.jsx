import React from 'react';
import { IconMoon, IconDownload } from '@tabler/icons-react';

const Header = () => {
    return (
        <nav className={'py-10 flex justify-between mb-10 md:mb-28 lg:mb-12'}>
            <a className={'text-xl'}>Ayprojex</a>
            <ul className={'flex items-center'}>
                <li>
                    <IconMoon className={'cursor-pointer text-2xl'} />
                </li>
                <li>
                    <a className={'px-4 py-2 flex gap-1 items-center'} href='#'>
                        Resume
                        <IconDownload size={16} className={'text-sm'} />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
