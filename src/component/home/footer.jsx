import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import ImageEthio from "../../assets/ethio.png"; 
import ImageEritrea from "../../assets/eritria.png"; 

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="bg-slate-900 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left: Brand + Contact */}
        <div>
          <h2 className="text-xl font-semibold">EventFlow Management</h2>
          <p className="mt-2 text-sm text-slate-400 max-w-md">
            Contact us for tech webinars, discussion events, workshops, and conferences.
          </p>
          <div className="mt-4 space-y-1 text-sm text-slate-300">
            <p>
              Email:{" "}
              <a href="mailto:hello@eventflow.com" className="hover:text-green-400">
                hello@eventflow.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+251900000000" className="hover:text-green-400">
                +251 90 000 0000
              </a>
            </p>
          </div>
          <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
            <span>Serving clients in</span>
            <img src={ImageEthio} alt="Ethiopia flag" className="h-4 w-6 rounded-sm shadow-sm" />
            <img src={ImageEritrea} alt="Eritrea flag" className="h-4 w-6 rounded-sm shadow-sm" />
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex flex-col items-start gap-4 sm:items-end">
          <p className="text-sm text-slate-400">Connect with us</p>
          <div className="flex gap-3">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-100 hover:bg-green-600 transition" aria-label="LinkedIn">
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-100 hover:bg-green-600 transition" aria-label="Instagram">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-100 hover:bg-green-600 transition" aria-label="Twitter">
              <FaTwitter className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            © {new Date().getFullYear()} EventFlow Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
