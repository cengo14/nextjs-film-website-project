"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  const tabs = [
    { name: "En Populer", url: "popular" },
    { name: "Tüm Zamanların En İyileri", url: "top_rated" },
    { name: "Yakında Gelecekler", url: "upcoming" },
  ];
  return (
    <div className="p-5 m-5 bg-gray-100 dark:bg-gray-800 flex items-center justify-center gap-7">
      {tabs.map((tab, i) => (
        <Link
          key={i}
          className={`cursor-pointer hover:opacity-80 transition-opacity ${
            tab.url === genre && " underline text-amber-600 underline-offset-8"
          }`}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
