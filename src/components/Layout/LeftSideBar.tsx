"use client"
import { useUser } from '@/context/user.context'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/UI/avatar"

export default function LeftSideBar() {

  const user =useUser()
  console.log(user,"from left side bar")

  return (
    <div className='h-screen left-0 top-0 bg-black text-white sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden 2xl:w-[350px] pr-20 custom-scrollbar'>
        <div className='p-6 text-2xl font-bold text-white'>
            <Link href='/'>SOCIAL HUB</Link>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center'>
            <div className=''>
                <Link href='/'>
                <Avatar className="w-16 h-16 md:w-24 md:h-24">
      <AvatarImage className="w-full h-full" src={user?.user?.profilePhoto} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
                </Link>
            </div>
            <p className="text-small-bold">
            {user?.user?.name ?? 'Guest'}
          </p>
            <div className='flex justify-between items-center gap-4'>
              <div className='text-center text-white'>
                <p>1</p>
                <p>Post</p>
              </div>
              <div className='text-center  text-white'>
              <p>1</p>
              <p>Followers</p>
              </div>
              <div className='text-center  text-white'>
              <p>1</p>
              <p>Following</p>
              </div>
            </div>
            <hr className='bg-white p-3'/>
        </div>
    </div>
  )
}
