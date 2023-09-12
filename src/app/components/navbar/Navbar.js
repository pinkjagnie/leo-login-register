"use client";

import { useState } from "react";
import Link from "next/link";

import { WiTornado } from "react-icons/wi";

import Drawer from "../Drawer";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (prevState) => setOpenDrawer(!prevState);

  return (
    <>
      <Drawer openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
      <div className="fixed navbar bg-base-100 z-50">
        {/* DRAWER BUTTON */}
        <div className="flex-none">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => toggleDrawer(openDrawer)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
        {/* LOGO PART */}
        <Link href="/" className="flex-1 pl-4 font-bold text-xl">
          <WiTornado size={30} />
          TornadoX
        </Link>
        {/* MENU PART */}
        <div className="flex-none">
          <MobileMenu />
          <DesktopMenu />
        </div>
      </div>
    </>
  );
};

export default Navbar;
