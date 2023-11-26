"use client";
import React, { useState } from "react";
import Header from "@/Component/Header";
const page = () => {
  const [user, setuser] = useState("second");
  return (
    <>
      <Header username={user} />

      <div>Event Contact</div>
    </>
  );
};

export default page;
