"use client";
import { navLinks } from "@/constants";

const MobileNav = () => {
  return (
    <div>
      {navLinks.map((link) => (
        <a
          href={link.route}
          key={link.route}
          className="block py-2 text-center text-gray-600 hover:text-gray-800"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default MobileNav;
