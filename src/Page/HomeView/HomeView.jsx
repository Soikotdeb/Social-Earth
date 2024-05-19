
import React from 'react';

import LeftSidebar from '../LeftSidebar/LeftSidebar';
import RightSidebar from '../RightSidebar/RightSidebar';
import MainContent from '../MainContent/MainContent';

const HomeView = () => {
  

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <div className="flex-grow flex mt-16">
                
                <LeftSidebar></LeftSidebar>
               <MainContent></MainContent>
               <RightSidebar></RightSidebar>
            </div>
        </div>
    );
};

export default HomeView;

