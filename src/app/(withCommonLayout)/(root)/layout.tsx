import LeftSideBar from '@/components/Layout/LeftSideBar'
import MainSideBar from '@/components/Layout/MainSideBar'
import RightSideBar from '@/components/Layout/RightSideBar'
import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className='flex flex-row'>
      <LeftSideBar/>
     <main className='flex-1'>
     {children}
     </main>
      <RightSideBar/>
      </div>
  )
}

export default layout