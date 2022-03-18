import React from 'react';

const Icon = ({ icon }) => {
    switch( icon ) {
        case 'main':
            return (
                <div className="icon__w">
                    <svg className="icon icon--size-mod" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <g>
                            <path
                                d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,23.32a3,3,0,1,1,3-3A3,3,0,0,1,16,25.32Zm2.61-8.5a1.5,1.5,0,0,1-1.49,1.36H14.88a1.5,1.5,0,0,1-1.49-1.36l-.78-8a2,2,0,0,1,2-2.19h2.8a2,2,0,0,1,2,2.19Z"
                                fill="currentColor"/>
                            <path
                                d="M17.4,6.68H14.6a2,2,0,0,0-2,2.19l.78,8a1.5,1.5,0,0,0,1.49,1.35h2.24a1.5,1.5,0,0,0,1.49-1.35l.78-8a2,2,0,0,0-2-2.19Z"/>
                            <circle cx="16" cy="22.32" r="3"/>
                        </g>
                    </svg>
                </div>
            );
        case 'delete':
            return (
                <div className="icon__w">
                    <svg className="icon icon--size-mod" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <g>
                            <path d="M256,469.33c-117.63,0-213.33-95.7-213.33-213.33S138.37,42.67,256,42.67,469.33,138.37,469.33,256,373.64,469.33,256,469.33Z"/>
                            <circle cx="256" cy="256" r="256" fill="currentColor"/>
                            <path d="M381.5,174.61H335.83V153a9,9,0,0,0-9-9H201.17a9,9,0,0,0-9,9v21.6H146.5v10h21l22.75,183.55A18,18,0,0,0,208.12,384H319.88a18,18,0,0,0,17.91-15.83l22.74-183.55h21ZM221.09,352l-9.93-129.53,10-.76,9.93,129.53Zm47.91-.38H259V222.05h10Zm37.91.38-10-.76,9.92-129.53,10,.76Z"/>
                            <path d="M373.5,166.61H327.83V145a9,9,0,0,0-9-9H193.17a9,9,0,0,0-9,9v21.6H138.5v10h21l22.75,183.55A18,18,0,0,0,200.12,376H311.88a18,18,0,0,0,17.91-15.83l22.74-183.55h21ZM213.09,344l-9.93-129.53,10-.76,9.93,129.53Zm47.91-.38H251V214.05h10Zm37.91.38-10-.76,9.92-129.53,10,.76Z" />
                        </g>
                    </svg>
                </div>
            );
    };
};

export default Icon;