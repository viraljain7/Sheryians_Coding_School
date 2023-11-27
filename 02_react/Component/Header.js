import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-gray-800 p-4 m-2">Header bolte merko</div>
      <Link href="/Contact">Contact Us</Link>
    </>
  );
};

export default page;
