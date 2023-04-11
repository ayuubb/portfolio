import React from 'react';
import { IconMoon, IconDownload } from '@tabler/icons-react';

const Header = () => {
    return (
        <nav className={'mb-10 md:mb-16 lg:mb-16 2xl:mb-28 border-b border-slate-300/10 sticky top-0 z-40 w-full backdrop-blur'}>
            <div className='container mx-auto py-4 flex justify-between'>
                <span className={'lg:text-2xl text-xl leading-none'}>Ayprojex</span>
                <ul className={'flex items-center'}>
                    <li>
                        <IconMoon className={'cursor-pointer text-2xl'} />
                    </li>
                    <li>
                        <a className={'px-4 py-2 flex gap-1 items-center'} href='#'>
                            Resume
                            <IconDownload size={'16'} className={'text-sm'} />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
