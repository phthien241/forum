import React from 'react';
import BreadScrumb from '../../components/BreadScrumb/BreadScrumb';

interface ForumProps {

}

const Forum: React.FC<ForumProps> = (props) => {

    return (
        <div>
            <BreadScrumb navHeadings={["haha", "hehe"]} headingForum='haha'/>
            {/* Render your component's content here */}
        </div>
    );
};

export default Forum;