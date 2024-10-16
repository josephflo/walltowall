import Link from 'next/link'
import React from 'react'

const WallCard = ({ message, author }: { message: string, author: string }) => {
  return (
    <div className="flex-col w-[671px] h-[415px] bg-[#FFFB47] flex justify-center items-center border-2 border-black shadow-custom-bottom-right gap-6 text-center px-8">
        <h1 className="text-4xl">{message}</h1>
        <p className="text-2xl font-bold">{author}</p>
        <button className="bg-buttonPurple border-2 border-black  text-white font-bold mt-8 py-2 px-4 shadow-custom-bottom-right">
        <Link href={"/wall"}>
          ¡Ir a publicacion!
        </Link>
        </button>
      </div>
  )
}

export default WallCard