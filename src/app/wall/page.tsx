import React from "react";
import WallCard from "../Components/WallCard";
import { wallMessages } from "@/constants";

const WallPage = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center text-bold mt-5 md:mt-10 gap-8">
      {
        wallMessages.map((message) => (
          <WallCard key={message.id} message={message.message} author={message.author} />
        ))
      }
    </section>
  );
};

export default WallPage;
