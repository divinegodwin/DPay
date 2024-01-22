"use client"
import React, { useState } from 'react'
import Button from '../Components/Button'


const page = () => {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div>

       <form className='w-full px-10 mt-[6rem]'>

      

        <div className='pt-[4rem]'>
            <h2 className='font-bold text-2xl text-[#023E8A] text-center'>DPay</h2>
        </div>

        <div className='flex flex-col gap-4 justify-center pt-[2rem]'>
            <input 
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='username'
            value={userName}
            type='text'
            className='w-[100%] h-[60px] border-2 border-[#0077b6] rounded-lg pl-3'
            >
            </input>

            <input 
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='password'
            value={password}
            type='password'
            className='w-[100%] h-[60px] border-2 border-[#0077b6] rounded-lg pl-3'
            >
            </input>

                <Button className='w-[100%] h-[60px] rounded-lg bg-[#0077b6] text-white text-lg' value='Login'></Button>

        </div>

        <div>
        <p className='text-center pt-5'>Create An Account</p>
        </div>

       </form>

    </div>
  )
}

export default page