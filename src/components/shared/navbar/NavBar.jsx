"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, Home, Calendar, BarChart3, Menu } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/timeline", label: "Timeline", icon: Calendar },
    { href: "/stats", label: "Stats", icon: BarChart3 },
  ];

  return (
    <nav className="navbar bg-base-100 shadow-md border-b border-green-200 sticky top-0 z-50 py-5">
      <div className="max-w-7xl mx-auto w-full px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="navbar-start">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 transition"
          >
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-700 tracking-tight">
                PlantPal
              </h1>
              <p className="text-[10px] text-green-600 -mt-1">
                keep them alive
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal gap-2 flex justify-between items-center">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all
                      ${
                        isActive
                          ? "bg-green-600 text-white shadow-md"
                          : "hover:bg-green-100 text-base-content"
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Menu Button + Extra Actions */}
        <div className="navbar-end flex items-center gap-3">
          {/* Add Plant Button (visible on all sizes) */}
          <Link
            href="/add-plant"
            className="btn btn-primary btn-sm hidden sm:flex gap-2"
          >
            <Leaf className="w-4 h-4" />
            Add Plant
          </Link>

          {/* Hamburger for Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost btn-circle lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-base-100 border-t w-full py-4 shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="menu menu-vertical gap-2">
              {navLinks.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-3 py-4 px-6 rounded-2xl font-medium text-lg
                        ${
                          isActive
                            ? "bg-green-600 text-white"
                            : "hover:bg-green-50"
                        }`}
                    >
                      <Icon className="w-6 h-6" />
                      {label}
                    </Link>
                  </li>
                );
              })}

              {/* Mobile Add Plant Button */}
              <li className="mt-4">
                <Link
                  href="/add-plant"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn btn-primary w-full flex gap-2 justify-center"
                >
                  <Leaf className="w-5 h-5" />
                  Add New Plant
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
