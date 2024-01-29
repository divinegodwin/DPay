"use client";
import React from "react";
import { useState, useEffect} from "react";
import Button from "../Components/Button";
import Link from "next/link";
import { useUserContext } from "../Context";
import { useRouter } from "next/navigation";

const createAccount = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  const [processing, setProcessing] = useState(false); //setting processing state
  const [error, setError] = useState(""); //setting error state
  const { userName, updateUsername } = useUserContext(); //declaring user name context
  
  //check if data exist


  const submitInfoToDatabase = async (e) => {
    e.preventDefault();
    if (!username || !password || !email || !number) {
      //validating user input
      setError("all input must be filled");
      return;
    }
    if (password.length <= 5) {
      setError("password is insecured");
      return;
    }
    
    const { data } = await supabase
      .from("user-account")
      .select("name")
      .eq("name", "username");

    if (data.length > 0) {
      setError("user exist");
      return;
    }

    try {
      const { data, error } = await supabase.from("user-account").insert([
        {
          name: username,
          password: password,
          number: number,
          email: email,
        },
      ]);
      router.push("/Main");
      if (error) {
        console.log("an error ocuured submitting data", error);
      }
    } catch (error) {
      console.log("error occured at catch block");
    } finally {
      setProcessing(false);
    }
  };
  return (
    <div>
      <form className="w-full px-10">
        <div className="pt-[4rem]">
          <h2 className="font-bold text-2xl text-[#023E8A] text-center">
            DPay
          </h2>
        </div>

        <div className="flex flex-col gap-4 justify-center pt-[2rem]">
          <input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            value={username}
            type="text"
            className="w-[100%] h-[60px] border-2 border-[#0077b6] rounded-lg pl-3"
          ></input>

          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            value={email}
            type="email"
            className="w-[100%] h-[60px] border-2 border-[#0077b6] rounded-lg pl-3"
          ></input>

          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="phone number"
            value={number}
            type="number"
            className="w-[100%] h-[60px] border-2 border-[#0077b6] rounded-lg pl-3"
          ></input>

          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            value={password}
            type="password"
            className="w-[100%] h-[60px] border-2 border-[#0077b6] rounded-lg pl-3"
          ></input>

          <Button
            onClick={submitInfoToDatabase}
            className="w-[100%] h-[60px] rounded-lg bg-[#0077b6] text-white text-lg"
            value="Signup"
          ></Button>
        </div>

        <div>
          <Link href="/Login">
            <p className="text-center pt-5">Login</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default createAccount;
