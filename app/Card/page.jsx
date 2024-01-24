import React from 'react'
import Button from '../Components/Button'
import Image from 'next/image'
const card = () => {

  let cardNumber = ''

  return (
    <div>

<div className='mt-5 pl-4 flex flex-row gap-40'>

<header className='text-2xl font-bold'>Cards</header>

<p className='text-lg text-[#0077b6] pl-16 pt-1'>Q&A</p>

</div>

<div className='bg-none'>



</div>


<div className='flex justify-center mt-28'>
  <Button className='w-[300px] h-[60px] rounded-full font-bold bg-[#023E8A] text-white' value='Get It Now' />
</div>



    </div>
  )
}

export default card