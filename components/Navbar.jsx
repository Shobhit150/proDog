'use client'
import React from "react";
import { BagIcon, BoxIcon, CartIcon, HomeIcon, assets } from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { UserButton, useClerk } from "@clerk/nextjs";

const Navbar = () => {

  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();
  return (
    <nav className="flex items-center justify-between px-6 py-3 font-light border-b-[1px] border-black text-gray-700">
      

      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="border-2 border-transparent hover:border-gray-900 hover:text-gray-900 transition px-[4px]  rounded-[10px]">          
          Home
        </Link>
        <Link href="/all-products" className="border-2 border-transparent hover:border-gray-900 hover:text-gray-900 transition px-[4px]  rounded-[10px]">
          Shop
        </Link>
        <Link href="/" className="border-2 border-transparent hover:border-gray-900 hover:text-gray-900 transition px-[4px] rounded-[10px]">
          About Us
        </Link>
        <Link href="/" className="border-2 border-transparent hover:border-gray-900 hover:text-gray-900 transition px-[4px] rounded-[10px]">
          Contact
        </Link>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}

      </div>
      <div className="flex items-center absolute left-1/2 -translate-x-1/2 hover:border-2 rounded-[10px] ">
        <Image
          className="cursor-pointer w-18 md:w-10"
          onClick={() => router.push('/')}
          src={assets.logo}
          height={10} width={10}
          alt="logo"
        />
        
      </div>

      <ul className="hidden md:flex items-center gap-6 ">
        <div className="border-2 border-transparent hover:border-gray-900 hover:text-gray-900 transition px-[4px] rounded-[10px]">
        Search
        </div>
        
        {user
          ? <>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={() => router.push('/cart')}></UserButton.Action>
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={() => router.push('/my-orders')}></UserButton.Action>
              </UserButton.MenuItems>
            </UserButton>
          </>
          : <button onClick={openSignIn} className="flex items-center  hover:text-gray-900 transition cursor-pointer border-2 border-transparent hover:border-gray-900  px-[4px] rounded-[10px]">
            Login
          </button>}
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
        {
          user
            ? <>
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action label="Home" labelIcon={<HomeIcon />} onClick={() => router.push('/')}></UserButton.Action>
                </UserButton.MenuItems>
                <UserButton.MenuItems>
                  <UserButton.Action label="Products" labelIcon={<BoxIcon />} onClick={() => router.push('/all-products')}></UserButton.Action>
                </UserButton.MenuItems>
                <UserButton.MenuItems>
                  <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={() => router.push('/cart')}></UserButton.Action>
                </UserButton.MenuItems>
                <UserButton.MenuItems>
                  <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={() => router.push('/my-orders')}></UserButton.Action>
                </UserButton.MenuItems>
              </UserButton>
            </>
            : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
              <Image src={assets.user_icon} alt="user icon" />
              Account
            </button>}
      </div>
    </nav>
  );
};

export default Navbar;