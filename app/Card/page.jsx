import React from 'react'
import Button from '../Components/Button'

const card = () => {

  let cardNumber = ''

  return (
    <div>

<div className='mt-5 pl-4 flex flex-row gap-40'>

<header className='text-2xl font-bold'>Cards</header>

<p className='text-lg text-[#0077b6] pl-16 pt-1'>Q&A</p>

</div>

<div className='flex flex-col justify-center'>
<p className='Font-bold text-center pt-[2rem] font-bold'>Virtual Card</p>
</div>
<div className='flex justify-center'>
<div className='w-[40px] flex h-[3px] rounded-full bg-[#0077b6]'></div>
</div>


<div className='grid justify-center'>
<header className='text-white font-bold text-xl relative top-24 right-[5rem]'>DPay</header>

<div className='cardNumber absolute top-[18rem] left-24 flex justify-center'>
<p className='text-white text-center'>  5400-4885-45543-9987</p>
</div>

<p className='text-white  relative top-[14rem] right-[5rem]'>Virtual Card</p>
</div>

<div className='w-[80%] h-[200px] bg-[#023E8A] flex justify-center ml-9 rounded-xl mt-10' >
</div>


<div className='flex justify-center mt-28'>
  <Button className='w-[300px] h-[60px] rounded-full font-bold bg-[#023E8A] text-white' value='Get It Now' />
</div>


    </div>
  )
}

export default card