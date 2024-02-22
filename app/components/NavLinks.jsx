import Link from "next/link";
import react from "@heroicons/react";



const NavLinks = ({ href, title }) => {
  return (
    <link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </link>
  )
}

export default NavLinks

