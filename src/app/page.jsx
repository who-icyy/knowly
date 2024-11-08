"use client";
import Image from "next/image";
import LanguageCard from "./languages/languageCard";

export default function Home() {
  const topics = [
    {
      name: "Python Programming",
      level: "Basic",
      progress: 60
    },
    {
      name: "Javascript",
      level: "Intermediate",
      progress: 40
    },
    {
      name: "RUST Programming",
      level: "Expert",
      progress: 83
    },
    {
      name: "Kotlin",
      level: "Expert",
      progress: 23
    },
  ];

  return (
    <div className="flex flex-wrap gap-x-20 gap-y-10 ml-32 mt-10">
      {
        topics.map((val, index) => (
          <div key={index} className="hover:scale-110 transition-all ease-in-out duration-500">
            <LanguageCard
              name={val.name}
              progress={val.progress}
              level={val.level}
            />
          </div>
        ))
      }
    </div>
  );
}
