import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function LeftSideBar() {

  return (
    <div className='h-screen left-0 top-0 bg-gray-200 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden 2xl:w-[350px] pr-20 custom-scrollbar'>
        <div className='p-6 text-2xl font-bold'>
            <Link href='/'>SOCIAL HUB</Link>
        </div>
        <div className='flex flex-col gap-4'>
            <div>
                <Link href='/'>
                {/* <Image
              src={"userData""?.""profilePhoto"}
              alt="profile photo"
              width={50}
              height={50}
              className="rounded-full"
            /> */}
                </Link>
            </div>
        </div>
    </div>
  )
}
