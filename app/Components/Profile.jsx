'use client'
import React from 'react'
import Image from 'next/image'
import { useUserContext } from '../Context';


const Profile = () => {
  const {userName} = useUserContext() 
 
  return (
    <div>
             <div className="flex">
        <Image
          className="h-[60px] w-[60px] rounded-lg ml-3"
          src="/Images/react.png"
          height={30}
          width={30}
          alt='image'
        ></Image>
        <h2 className="font-bold text-2xl pt-3 pl-3">Hi, {userName}</h2>
      </div>
    </div>
  )
}

export default Profile