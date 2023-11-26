"use client";
import Header from "@/Component/Header";
import React, { useState } from "react";

const page = () => {
  const [user, setuser] = useState("second");
  return (
    <>
      <Header username={user} />
      <div>About</div>
    </>
  );
};

export default page;
