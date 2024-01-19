import React from 'react'
import Button from '../Components/Button'
import Image from 'next/image'

const Reward = () => {
  const cashback = 'N200'
  return (
    <div>
      <div className="bg-[#0077b6] h-[200px]">
        <div className="w-full  text-white">
          <header className="text-2xl font-bold pl-4 pt-5">Rewards</header>

          <div className="w-[40px] h-[40px] pl-[10px] flex flex-row mt-[-2rem] mx-4 ml-auto pt-2  rounded-full bg-[#0077b6]">
            <svg
              className="text-white w-[20px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class="main-grid-item-icon"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </div>
        </div>

        <div className="pt-4 pl-4 text-white flex ">
          <Image
            src="/Images/coin.png"
            className="w-[20px] h-[20px] mt-2"
            width={20}
            height={20}
          />
          <p className="pt-[6px] pl-2">Cashback</p>
        </div>

        <p className="pt-1 font-bold text-2xl text-white pl-4">{cashback}</p>
      </div>

      <div className=" w-[95%] h-[80px] bg-white pl-8 py-4  rounded-2xl flex-col m-auto mt-[-2rem]">
        <div className='flex'>
        <svg
        className='w-[25px] '
          data-slot="icon"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
          ></path>
        </svg>

        <p className="font-bold pl-2">Daily bunus</p>
        </div>

        <Button
          className="bg-[#0077b6] text-white w-[100px] h-[30px] mt-[-1rem] right-4 absolute rounded-full"
          value="Get Now"
        />

        <p className="text-sm pt-2">Get up to N1000 bonus</p>
      </div>

      <div className="bg-[#0077b6] text-white h-[190px] mt-36 pt-5">
        <div className="flex ">
          <Image
            src="/Images/coin.png"
            className="w-[20px] h-[20px] ml-3 mt-2"
            width={20}
            height={20}
          />

          <header className="font-bold text-2xl pl-4">
            Refer & Earn Cashback
          </header>
        </div>
        <p className="pl-4 pt-3 text-[16px]">
          Earn <span className="font-bold">N800</span> Cashout
          <br />
          per referral
        </p>
        <Button
          className="bg-white text-[#0077b6] h-[40px] w-[160px] p-2 mt-4 ml-4 px-2 font-bold rounded-full"
          value="Refer and Earn"
        />
      </div>
    </div>
  );
}

export default Reward