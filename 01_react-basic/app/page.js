"use client";
import Header from "@/Component/Header";
import axios from "axios";
import React, { useState } from "react";

const page = () => {
  const [num, setnum] = useState(29);
  const [user, setuser] = useState("ViralJain");
  const [images, setimages] = useState([]);
  const change = () => {
    setnum(69);
  };
  const getImages = async () => {
    try {
      const res = await axios.get("https://picsum.photos/v2/list");
      const data = res.data;
      setimages(data);
      console.log(data);
    } catch (error) {
      console.error("image Fetching error");
    }
  };
  return (
    <>
      <Header username={user} />
      <h1 className="text-center text-5xl text-slate-800">
        Sheryians Coding School -{num}k Subscriber
      </h1>
      <button
        onClick={change}
        className="text-center text-xl text-slate-800 rounded-lg p-15 bg-orange-700"
      >
        Change Number
      </button>
      <hr></hr>
      <button
        onClick={getImages}
        className="text-center text-xl text-slate-800 rounded-lg p-15 bg-orange-700"
      >
        Get Images
      </button>

      <div className="p-10 m-4">
        {images.map((ele, i) => {
          return (
            <img
              key={i}
              src={ele.download_url}
              height={200}
              width={200}
              className="p-3 m-4 inline-block"
            />
          );
        })}
      </div>
    </>
  );
};

export default page;
