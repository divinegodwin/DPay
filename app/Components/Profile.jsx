import React from 'react'
import Image from 'next/image'

const Profile = () => {
    const name = 'Hi @User'
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
        <h2 className="font-bold text-2xl pt-3 pl-3">{name}</h2>
      </div>
    </div>
  )
}

export default Profile