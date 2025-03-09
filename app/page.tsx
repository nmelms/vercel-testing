"use client";
import { useEffect } from "react";

const stats = [
  { id: 1, name: "Transactions every 24 hours", value: "44 million" },
  { id: 2, name: "Assets under holding", value: "$119 trillion" },
  { id: 3, name: "New users annually", value: "46,000" },
];

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/user-info");
        const json = await res.json();
        console.log(json);
      } catch (error) {
        console.log("there was an error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32 h-screen flex flex-col a">
      <div className="text-black text-center text-[50px] flex-1 flex justify-center mt-[50px] text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        hello welcome
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base/7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
