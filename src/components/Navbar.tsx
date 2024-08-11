'use client'
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { MouseEvent, useState } from "react"

const handleScroll = (e: MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");

  if (href) {
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({behavior: "smooth"})
    }
  }
};


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="bg-gray-500 flexBetween max-container 2xl:px-10 padding-container relative z-30 py-2">
        <Link href={"/"}>
            <Image src="/CowboysLogo.png" alt="logo" width={45} height={29} />
        </Link>
        
        <ul className="hidden h-ful gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 text-gray-10 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
          <Link href="#contact-us" key="contact_us" onClick={handleScroll} className="block regular-16 text-gray-10 hover:font-bold">
            Contact Us
          </Link>
        </ul>

        <div className="lg:flexCenter hidden">
          <Button 
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_gray"
          />
        </div>
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden filter-gray"
          onClick={toggleSidebar}
        />

        
        <div className={`fixed top-0 right-0 h-full w-64 bg-gray-500 text-white transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}>
          <div className="p-6">
            <button 
              className="text-xl font-bold text-white"
              onClick={toggleSidebar}
            >
              &times;
            </button>
            <ul className="mt-8 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="block regular-16 text-gray-10 hover:font-bold">
                  {link.label}
                </Link>
              ))}

            </ul>
          </div>
        </div>
        
    </nav>
  )
}

export default Navbar