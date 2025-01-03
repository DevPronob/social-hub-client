import LeftSideBar from '@/components/Layout/LeftSideBar';
import RightSideBar from '@/components/Layout/RightSideBar';
import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => { // Added type for children
    return (
        <div className='flex flex-row'>
      <LeftSideBar/>
     <main className='flex-1'>
     {children}
     </main>
      <RightSideBar/>
      </div>
    );
};

export default Layout;