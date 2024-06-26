import React from 'react';
import { IconType } from 'react-icons';

type HeaderLinkProps = {
    Icon: IconType;
    text: string;
};

const HeaderLink: React.FC<HeaderLinkProps> = ({ Icon, text }) => {
    return (
        <div className="cursor-pointer flex flex-col justify-center items-center text-gray-500 hover:text-gray-700">
            <Icon style={{ fontSize: '20px', color: '#000', marginTop: 'auto', marginBottom: 'auto' }} />
            <h4 className="text-sm">{text}</h4>
        </div>
    );
};

export default HeaderLink;
