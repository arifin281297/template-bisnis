import { useState, useEffect } from "react";
import {
  SunIcon,
  MoonIcon,
} from "lucide-react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  // { name: "Customer", path: "/customer" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();

  const [dark, setDark] = useState(false);

  // apply dark mode ke html
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    // <Disclosure as="nav" className="bg-white dark:bg-gray-900 border-b dark:border-gray-800">
      <Disclosure
      as="nav"
      className="fixed top-0 left-0 w-full z-50 
      bg-white/70 dark:bg-gray-900/70 
      backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-8">

            {/* LOGO */}
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              <Link to="/" className="hover:opacity-80 transition">
                Your Company
              </Link>
            </h1>

            {/* DESKTOP MENU */}
                <div className="hidden md:flex gap-6 ml-[30rem]">
                {navigation.map((item) => {
                    const active = location.pathname === item.path;

                    return (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={classNames(
                        "text-sm font-medium transition",
                        active
                            ? "text-black dark:text-white"
                            : "text-gray-500 hover:text-black dark:hover:text-white"
                        )}
                    >
                        {item.name}
                    </Link>
                    );
                })}
                </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* DARK MODE BUTTON */}
            <button
              onClick={() => setDark(!dark)}
              className="text-sm px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white transition"
            >
              {dark ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-gray-700 dark:text-white" />}
            </button>

            {/* MOBILE BUTTON */}
            <DisclosureButton className="md:hidden text-gray-600 dark:text-white">
              <Bars3Icon className="h-6 w-6 ui-open:hidden" />
              <XMarkIcon className="hidden h-6 w-6 ui-open:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <DisclosurePanel className="md:hidden border-t dark:border-gray-800">
        <div className="px-4 py-3 space-y-2">
          {navigation.map((item) => {
            const active = location.pathname === item.path;

            return (
              <DisclosureButton
                key={item.path}
                as={Link}
                to={item.path}
                className={classNames(
                  "block px-3 py-2 rounded-md text-sm transition",
                  active
                    ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                    : "text-gray-600 dark:text-gray-300"
                )}
              >
                {item.name}
              </DisclosureButton>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}