import { NavLinks } from "@/constants";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="z-50 mt-4 mb-4 md:mb-10">
      <div className="flex justify-between items-center w-fullh-16 px-8 py-2">
        <Link href={"/"}>
          <h1>WallToWall</h1>
        </Link>
        <nav className="flex gap-2 lg:gap-8">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm gap-2 px-4 py-2"
            >
              {link.name}
            </Link>
          ))}
          <Link href={"/login"}>
            <button className="bg-buttonPurple border-2 border-black  text-white font-bold py-2 px-4 shadow-custom-bottom-right">
              Ingresar
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
