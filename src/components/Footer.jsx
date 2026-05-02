import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { FiMail, FiGlobe } from "react-icons/fi";

function Footer() {
  const socials = [
    { icon: FiGlobe, href: "https://yourwebsite.com", color: "hover:bg-blue-500", label: "Website" },
    { icon: FaInstagram, href: "https://instagram.com", color: "hover:bg-pink-500", label: "Instagram" },
    { icon: FaLinkedin, href: "https://linkedin.com", color: "hover:bg-blue-600", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com", color: "hover:bg-gray-900", label: "GitHub" },
    { icon: FiMail, href: "mailto:youremail@gmail.com", color: "hover:bg-green-500", label: "Email" },
  ];

  return (
    <footer className="relative bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-20 pb-10 overflow-hidden">

      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[300px] h-[300px] bg-purple-500/20 blur-3xl rounded-full bottom-[-150px] right-[-150px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Your Company
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              We build modern digital products, scalable apps, and premium UI/UX experiences.
            </p>
          </div>

          {/* NAV */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Customer"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="relative group inline-block"
                  >
                    <span className="group-hover:text-blue-500 transition">
                      {item}
                    </span>

                    {/* underline animation */}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>

            <div className="flex gap-3 flex-wrap">

              {socials.map((item, i) => {
                const Icon = item.icon;

                return (
                    <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative p-3 rounded-full bg-white-100 transition 
                    hover:scale-110 hover:text-white ${item.color}`}
                    >

                    <Icon size={18} />

                    {/* optional glow effect */}
                    <span className="absolute inset-0 rounded-full opacity-0 hover:opacity-30 bg-white blur-md transition"></span>

                    </a>
                );
                })}

            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;