import React from 'react';
import "./Thread.scss";

export interface ThreadProps {
    heading: string;
    reply: number;
    date: Date;
}

const Thread: React.FC<ThreadProps> = ({heading,reply,date}) => {
    const dateString = date.toLocaleDateString();
    return (
        <div className='thread'>
            <div className='thread--heading'>
                <p>{heading}</p>
            </div>
            <div className='thread--stats'>
                <p>Replies: {reply}</p>
            </div>
            <div className='thread--time'>{dateString}</div>
        </div>
    );
};

export default Thread;