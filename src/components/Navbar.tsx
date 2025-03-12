import { FaSearch, FaBell, FaEnvelope, FaCaretDown, FaGlobe, FaUser } from "react-icons/fa";
import SortBy from "./Sortby";
import Link from "next/link";

interface NavbarProps {
  variant?: "default" | "properties"; // Pilihan tampilan navbar
  sortBy?: string;
  setSortBy?: (value: string) => void;
}

const Navbar = ({ variant = "default", sortBy, setSortBy }: NavbarProps) => {
  if (variant === "properties") {
    return (
      <header className="pb-5 bg-custom-gradient">
        <div className="text-white mx-5 px-5 p-4 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Link href="/properties">
              <h1 className="text-xl font-bold">LOGO</h1>
            </Link>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search"
                className="p-2 rounded-md text-black bg-white"
              />
              <button className="bg-white p-2 rounded-md text-black">
                <FaSearch />
              </button>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <span>Property</span>
            <Link href="/profile">
            <span>Profile</span>
            </Link>
            <FaBell />
            <FaUser />
          </div>
        </div>
        {sortBy !== undefined && setSortBy !== undefined && (
          <SortBy sortBy={sortBy} setSortBy={setSortBy} />
        )}
      </header>
    );
  }

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
      <div className="text-2xl font-bold">LOGO</div>
      <div className="flex items-center gap-3 mr-auto ml-6">
        <div className="relative">
          <button className="flex items-center bg-gray-100 px-3 py-1 rounded-md">
            <FaGlobe className="mr-2" />
            Menu
            <FaCaretDown className="ml-2" />
          </button>
          <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md hidden">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Option 1
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Option 2
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Option 3
            </a>
          </div>
        </div>

        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-md w-80">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none flex-1"
          />
          <button className="text-white bg-red-500 p-2 rounded-md">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-black text-lg">
          <FaEnvelope />
        </button>
        <button className="text-black text-lg">
          <FaBell />
        </button>

        <div className="relative flex items-center gap-2 border rounded-full p-1 px-2">
          <img
            src="/profile-pic.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <FaCaretDown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
