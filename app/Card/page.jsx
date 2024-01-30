import React from 'react'
import Button from '../Components/Button'
import Image from 'next/image'

const card = () => {

  let cardNumber = '2996-4456-6345-2355'

  return (
    <div>

<div className='mt-5 pl-4 flex flex-row gap-40'>

<header className='text-2xl font-bold'>Cards</header>

<p className='text-lg text-[#0077b6] pl-16 pt-1'>Q&A</p>

</div>

<div>
<div className='flex justify-center mt-24'>

<Image
            src="/Images/card.jpg"
            className="w-[340px] h-[220px] mt-2 rounded-lg"
            width={340}
            height={220}
          />

          <p className='absolute top-[18rem] text-[#fff] font-bold text-2xl'>{cardNumber}</p>
          </div>
</div>


<div className='flex justify-center mt-28'>
  <Button className='w-[300px] h-[60px] rounded-full font-bold bg-[#023E8A] text-white' value='Get It Now' />
</div>



    </div>
  )
}

export default card