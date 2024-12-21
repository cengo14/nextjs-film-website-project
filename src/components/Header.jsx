"use client";

import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import Link from "next/link";
import ThemeComp from "./ThemeComp";
import { useRouter } from "next/navigation";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const menu = [
    { name: "About", url: "/about" },
    { name: "Sign In", url: "/login" },
  ];
  const searchFunc = (e) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  };
  return (
    <div className="flex items-center gap-8 h-20 p-5">
      <Link
        href={"/"}
        className="bg-amber-600 p-3 text-2xl font-bold rounded-lg"
      >
        MovieApp
      </Link>
      <div className="flex flex-1 items-center gap-2 border border-gray-500 rounded-lg p-3 ">
        <input
          onKeyDown={searchFunc}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Arama yapın..."
          className="outline-none flex-1 bg-transparent"
          type="text"
        />
        <BiSearch size={25} color="gray" />
      </div>
      <ThemeComp />
      {menu.map((i, key) => (
        <MenuItem key={key} item={i} />
      ))}
    </div>
  );
};

export default Header;
