import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center text-bold mt-5 md:mt-10">
      <h1 className="text-4xl md:text-font-title text-hero font-bold ">Comparte tu Mensaje</h1>
      <h1 className="text-font-subtitle font-bold">y haz una diferencia</h1>
      <p className="text-font-text text-center p-4 leading-tight">Un mensaje breve pero poderoso que capte la atención,<br />
      invitando a las personas a dejar su huella.</p>
      <button className="bg-buttonPurple border-2 border-black  text-white font-bold py-2 px-4 shadow-custom-bottom-right">
        <Link href={"/wall"}>
          ¡Empieza ya!
        </Link>
      </button>
    </section>
  );
};

export default Hero;
