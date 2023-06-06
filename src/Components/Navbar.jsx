import { useState } from "react";
import { Link } from "react-router-dom";
import Shape from "../assets/Shape.svg";
import Logo from "../assets/logo.svg";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="lg:flex lg:justify-between lg:px-16 lg:pt-6 px-10 pt-16 xl:px-[100px] xl:pt-6 bg-primaryGradient bg-opacity-5">
      <div className="lg:flex lg:items-center lg:gap-5 relative">
        <div className="flex justify-between">
          {/* logo */}
          <div>
            <img src={Logo} alt="" />
          </div>
          {/* responsive bars */}
          <div className="lg:hidden">
            <button
              className="flex items-center px-3 py-2 text-[#26282B]  hover:text-gray-900"
              onClick={toggleMenu}
            >
              <img src={Shape} alt="" />
            </button>
          </div>
        </div>
        {/* navitems */}
        <div
          className={`${
            menuOpen
              ? "block flex flex-col items-start absolute right-2 bg-white z-[100] px-2 pb-[90px]"
              : "hidden"
          }    lg:flex  cursor-pointer `}
        >
          <Link to="/" className="text-dark xl:text-lg text-sm capitalize mx-4">
            Cryptocurrency
          </Link>
          <Link
            to="/exchanges"
            className="text-dark xl:text-lg text-sm capitalize mx-4"
          >
            Exchanges
          </Link>
          <Link
            to="/watchlist"
            className="text-dark xl:text-lg text-sm capitalize mx-4"
          >
            Watchlist
          </Link>
          <Link
            to="/nft"
            className="text-dark xl:text-lg text-sm capitalize mx-4"
          >
            NFT
          </Link>
          <Link
            to="/portfolio"
            className="text-dark xl:text-lg text-sm capitalize mx-4"
          >
            Portfolio
          </Link>
          <Link
            to="/products"
            className="text-dark xl:text-lg text-sm capitalize mx-4"
          >
            Products
          </Link>

          {/* <Link to="/contact" className="text-dark text-lg capitalize p-[10px]">
            Contact
          </Link> */}
        </div>
      </div>
      <div
        className={`${
          menuOpen
            ? "flex flex-col items-start absolute right-[80px] top-[240px] bg-white z-[100]"
            : "hidden"
        } lg:flex lg:items-center`}
      >
        <SecondaryButton>log in</SecondaryButton>
        <PrimaryButton>sign up</PrimaryButton>
      </div>
    </nav>

    // <nav className="lg:px-16 lg:py-6">
    //   <div className="flex justify-between w-full h-[10vh] items-center relative px-8 py-16 md:px-10 md:py-5 ">
    //     {/* logo */}
    //     <div>
    //       <img src={Logo} alt="" />
    //       {/* <h1 className="text-3xl font-extrabold md:text-4xl cursor-pointer">
    //         Logo
    //       </h1> */}
    //     </div>
    //     <div className="lg:hidden">
    // <button
    //   className="flex items-center px-3 py-2 text-[#26282B]  hover:text-gray-900"
    //   onClick={toggleMenu}
    // >
    //   <img src={Shape} alt="" />
    // </button>
    //     </div>
    // <div
    //   className={`${
    //     menuOpen
    //       ? "block flex flex-col absolute top-[8vh] right-2 bg-white "
    //       : "hidden"
    //   }   lg:top-0 lg:items-center lg:flex lg:flex-row  cursor-pointer `}
    // >
    //   <Link to="/" className="text-dark text-lg capitalize p-[10px]">
    //     Cryptocurrency
    //   </Link>
    //   <Link
    //     to="/exchanges"
    //     className="text-dark text-lg capitalize p-[10px]"
    //   >
    //     Exchanges
    //   </Link>
    //   <Link
    //     to="/watchlist"
    //     className="text-dark text-lg capitalize p-[10px]"
    //   >
    //     Watchlist
    //   </Link>
    //   <Link to="/nft" className="text-dark text-lg capitalize p-[10px]">
    //     NFT
    //   </Link>
    //   <Link
    //     to="/portfolio"
    //     className="text-dark text-lg capitalize p-[10px]"
    //   >
    //     Portfolio
    //   </Link>
    //   <Link
    //     to="/products"
    //     className="text-dark text-lg capitalize p-[10px]"
    //   >
    //     Products
    //   </Link>

    //   <SecondaryButton />
    //   <PrimaryButton />

    //   {/* <Link to="/contact" className="text-dark text-lg capitalize p-[10px]">
    //     Contact
    //   </Link> */}
    // </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
