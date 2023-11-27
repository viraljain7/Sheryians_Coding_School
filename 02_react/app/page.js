"use client";
import React, { useContext, useState } from "react";
import Header from "@/Component/Header";
import axios from "axios";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyContext } from "./Helper/Context";

const page = () => {
  const user = useContext(MyContext);
  const [username, setUsername] = useState("");
  const [details, setDetails] = useState([]);
  const notify = () => {
    toast.success("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = res.data;
    setDetails(data);
    console.log(data);
  };
  return (
    <>
      <Header />
      <form>
        <h3>Enter Your Name : </h3>
        <input
          type="text"
          className="rounded-lg p-2 m-5 text-xl border-gray-900 border-5"
          placeholder="Enter Your Name "
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            console.log(username);
          }}
        />
      </form>
      <button onClick={getData} className="bg-green-500 p-4 m-10 rounded-lg">
        Get Data
      </button>
      <button onClick={notify} className="bg-green-500 p-4 m-10 rounded-lg">
        Get Notify {user}
      </button>
      <div className="bg-slate-400">
        {details.map((ele, i) => {
          return (
            <li key={i}>
              {ele.name}---<Link href={`/${ele.id}`}> click</Link>{" "}
            </li>
          );
        })}
      </div>
      <ToastContainer />
    </>
  );
};

export default page;
