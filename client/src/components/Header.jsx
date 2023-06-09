import { NavLink } from "react-router-dom";
import { SiOpenai } from "react-icons/si";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between bg-zinc-100 sm:px-8 px-4 py-4 border-b border-b-zinc-300">
      <NavLink
        to="/"
        className="flex items-center gap-1 font-playfair text-2xl font-bold"
      >
        <SiOpenai />
        <h1>DALL.E 2.0</h1>
      </NavLink>
      <div className="flex items-center gap-3 md:gap-5 lg:gap-7">
        <NavLink
          to="/create-post"
          className="px-5 py-2 bg-indigo-600 text-gray-100 text-xs lg:text-sm rounded-sm hover:opacity-80 transition font-medium"
        >
          <p>Let's Create</p>
        </NavLink>
        <DropdownMenu />
      </div>
    </header>
  );
};

export default Header;
