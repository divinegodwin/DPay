import React from "react";
import Button from "../Components/Button";
import Image from "next/image";

const Main = () => {
  const userAmount = "N200";

  return (
    <div>
      <div>
        <div className="w-[95%] ml-2 px-5 py-5 rounded-xl h-[110px] mt-[2rem] bg-[#023E8A]">
          <div className="flex gap-3">
            <p className="text-white text-[15px]">Available Balance</p>
            <svg
              className="w-[18px] text-white"
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              ></path>
            </svg>

            <div className="flex pl-12">
              <p className="text-white text-[15px]"> Transaction details</p>
            </div>
          </div>

          <div className="flex flex-row gap-[4rem] py-2">
            <p className="text-white text-3xl py-2 font-bold"> {userAmount}</p>
            <Button
              className="w-[120px] h-[40px] mt-2 ml-[5rem] bg-white text-black rounded-full"
              value="add money"
            />
          </div>
        </div>
      </div>

      <div className="transfer-section w-[95%] h-[110px]  py-4 ml-2 rounded-lg bg-white mt-3">
        <div className="w-[50px] h-[50px] pl-3  pt-2 ml-[10rem] rounded-full bg-[#0077b6]">
          <svg
            className="w-[30px] text-white"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            ></path>
          </svg>
        </div>

        <p className="pl-[6rem] py-2 font-bold">Transfer to Dpay account</p>
      </div>

      <div className="services w-[95%] h-[200px] grid grid-cols-3 gap-4 px-3 pt-6  bg-white mt-3 pl-14 ml-2 rounded-lg ">
        <div className="w-[50px] h-[50px] pl-[10px]  pt-2  rounded-full bg-[#0077b6]">
          <svg
            className="w-[30px] h-[30px] text-white"
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
            <rect height="20" rx="2" ry="2" width="14" x="5" y="2" />
            <line x1="12" x2="12.01" y1="18" y2="18" />
          </svg>
          <div>
            <p className=" absolute left-16 pt-4 pl-[-4rem]">Airtime</p>
          </div>
        </div>

        <div className="w-[50px] h-[50px] pl-[10px]  pt-2  rounded-full bg-[#0077b6]">
          <svg
            className="w-[30px] h-[30px] text-white"
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
            <path d="M5 12.55a11 11 0 0 1 14.08 0" />
            <path d="M1.42 9a16 16 0 0 1 21.16 0" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <line x1="12" x2="12.01" y1="20" y2="20" />
          </svg>
          <div>
            <p className=" absolute pt-4 ">Data</p>
          </div>
        </div>

        <div className="w-[50px] h-[50px] pl-[10px]  pt-2  rounded-full bg-[#0077b6]">
          <svg
            className="text-white w-[30px]"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
            ></path>
          </svg>
          <div>
            <p className=" absolute pt-4 right-16 ">Games</p>
          </div>
        </div>

        <div className="w-[50px] h-[50px] pl-3  pt-3  rounded-full bg-[#0077b6]">
          <svg
            className="text-white w-[30px]"
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
            <rect height="15" rx="2" ry="2" width="20" x="2" y="7" />
            <polyline points="17 2 12 7 7 2" />
          </svg>
          <div>
            <p className=" absolute left-18 pt-4 pl-[-4rem]">TV</p>
          </div>
        </div>

        <div className="w-[50px] h-[50px] pl-3  pt-2  rounded-full bg-[#0077b6]">
          <svg
            className="w-[30px] text-white"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            ></path>
          </svg>
          <div>
            <p className=" absolute pt-4 left-[11rem]">Withdraw</p>
          </div>
        </div>

        <div className="w-[50px] h-[50px] pl-[10px]  pt-3  rounded-full bg-[#0077b6]">
          <svg
            className="text-white w-[30px]"
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
          <div>
            <p className=" absolute pt-4 right-18 ">More</p>
          </div>
        </div>
      </div>

      <div>
        <div className="refer bg-white h-[4.3rem] mt-4 w-[95%] ml-2 rounded-lg ">

          <div className=" absolute right-3 rounded-lg ">
          <svg
          className="w-[20px]  bg-[#f8f9fa]"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            ></path>
          </svg>
          </div>

          <header className="font-bold  pl-8 pt-3">Refer & Earn</header>
          <p className="pl-8 ">Earn N5000 per referralr</p>
        </div>

        <div className="refer bg-white h-[4.3rem] mt-2 w-[95%] ml-2 rounded-lg ">

        <div className=" absolute right-3 rounded-lg ">
          <svg
          className="w-[20px]  bg-[#f8f9fa]"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            ></path>
          </svg>
          </div>


          <header className="font-bold  pl-8 pt-3">Join & win</header>
          <p className="pl-8 ">Join Dpay to win over to N10,000,000</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
