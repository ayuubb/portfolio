import React from 'react';
import { IconCertificate2 } from '@tabler/icons-react';
const Card = () => {
    return (
        <div className={'p-4 bg-slate-800 text-center rounded-lg m-2'}>
            <IconCertificate2 className={'mx-auto mb-2'} />
            <h3>Experience</h3>
            <span>3 Years Working</span>
        </div>
    );
};

export default Card;
