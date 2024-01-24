"use client"
import Button from '../Components/Button';
import Link from 'next/link';
import { useUserContext } from '../Context';
import { useState } from 'react';
import supabase from '@/supabaseClient';
import { useRouter } from 'next/navigation';


const Login = () => {
  const router = useRouter()

  const [inputUsername, setInputUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async () =>{
    try{
    const {data:username, error} = await supabase .from('DPay') .select('name')
    .eq('name', inputUsername )

    if(username){
        alert('succes')
        router.push('/Main')
    }
    if(error){
      console.log('an error occured', error)
      return
    }
  }catch{
    console.log(error)
  }
    }
    
  
  return (
    <div>
      <form className='w-full px-10 mt-[6rem]'>
        <div className='pt-[4rem]'>
          <h2 className='font-bold text-2xl text-[#023E8A] text-center'>DPay</h2>
        </div>

        <div className='flex flex-col gap-4 justify-center pt-[2rem]'>
          <input
            onChange={(e) => setInputUsername(e.target.value)}
            placeholder='username'
            value={inputUsername}
            type='text'
            className='w-[100%] h-[60px] border-2 border-[#0077b6] rounded-lg pl-3'
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            value={password}
            type='password'
            className='w-[100%] h-[60px] border-2 border-[#0077b6] rounded-lg pl-3'
          />

          <Button
            onClick={handleLogin}
            className='w-[100%] h-[60px] rounded-lg bg-[#0077b6] text-white text-lg'
            value='Sign In'
          ></Button>
        </div>

        <div>
          <Link href='/userAccount'>
            <p className='text-center pt-5'>Create An Account</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
