import React from "react";
import { Navbar, Collapse  } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo.png'
 
function NavList() {
  return (
    <ul className="pt-5 xl:pt-0 flex flex-col lg:flex-row xl:items-center gap-3 text-lg font-extrabold">
      <NavLink to="/" className=" hover:!text-black !font-montserrat cursor-pointer hover:underline decoration-[#ffac00] underline-offset-8 transition-all ">
        Home
      </NavLink>

      <NavLink to="/#sobre" className=" hover:!text-black !font-montserrat cursor-pointer hover:underline decoration-[#ffac00] underline-offset-8 transition-all ">
        Sobre
      </NavLink>

      <NavLink to="/produtos" className=" hover:!text-black !font-montserrat cursor-pointer hover:underline decoration-[#ffac00] underline-offset-8 transition-all ">
        Nossos produtos
      </NavLink>
    </ul>
  );
}
 
export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <Navbar className="mx-auto px-5 py-5 md:py-7 max-w-[1300px] bg-transparent rounded-none border-none overflow-hidden">
      <div className="flex items-center justify-between text-blue-gray-900">
        <NavLink to="/" className="lg:w-1/3 cursor-pointer">
          <img src={logo} alt="" className="w-[200px] md:w-[150px] lg:w-[200px] " />
        </NavLink>

        {/* MENU DESKTOP */}
        <div className="hidden w-full lg:flex lg:justify-between items-center">
          <NavList />
          <a 
            href="tel:+"
            className="underline decortion-black hover:decoration-[#ffac00]"
          >
            (34) 3818-1800
          </a>
        </div>
        
        <button
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          { openNav ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            : 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          }
        </button>
      </div>

       {/* MENU MOBILE */}
      <Collapse   open={openNav} className="lg:hidden">
        <NavList />
      </Collapse  >

    </Navbar>
  );
}