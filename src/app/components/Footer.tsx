"use client";

import Link from "next/link";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";
import { useState } from "react";

export default function Footer() {
  const [trackingEnabled, setTrackingEnabled] = useState(true);

  return (
    <>
      {/* Map Section */}
      <div className="w-full text-center bg-gray-200 py-6">
        <h3 className="text-lg font-semibold mb-4">Find Us</h3>
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.020007902508!2d7.504687274134263!3d6.431032993547024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044b53740f3c4e3%3A0x9b2cfe8ddf58ed05!2sPort%20Harcourt%20-%20Enugu%20Expy%2C%20Independence%20Layout%20Phase%20II%2C%20Enugu%20400102%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1716380166829!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#0a0f2c] text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h2 className="text-4xl font-bold">Toshel</h2>
            <p className="text-blue-400 font-semibold">CONSTRUCTION</p>
            <p className="text-gray-400 mt-2">
              &copy; {new Date().getFullYear()} Toshel Construction.
            </p>
            <div className="mt-4 space-y-2 text-gray-400 text-sm">
              <Link href="#" className="hover:text-blue-300">
                Terms and Conditions
              </Link>{" "}
              |{" "}
              <Link href="#" className="hover:text-blue-300">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="#" className="hover:text-blue-300">
                Cookie Policy
              </Link>{" "}
              |{" "}
              <Link href="#" className="hover:text-blue-300">
                Accessibility Statement
              </Link>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-4 text-blue-400">
              <a href="#" className="hover:text-blue-200">
                <FaXTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/toshelconstruction042?igsh=MwhvNGt2NHd3azBtaA=="
                target="_blank"
                className="hover:text-blue-200"
              >
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-200">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="hover:text-blue-200">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="hover:text-blue-200">
                <FaTiktok size={24} />
              </a>
            </div>
          </div>

          {/* Tracking & Policies */}
          <div>
            <p className="text-gray-400 text-sm mt-2">
              Our website uses tracking technologies to learn how our visitors
              interact with our site so we can improve our services and provide
              valuable content.
            </p>
            <div className="mt-4 space-x-4">
              <button
                onClick={() => setTrackingEnabled(!trackingEnabled)}
                className="text-blue-400 hover:underline"
              >
                {trackingEnabled ? "Disable Tracking" : "Enable Tracking"}
              </button>
              <Link href="#" className="text-blue-400 hover:underline">
                Read our privacy policy
              </Link>
              <Link href="#" className="text-blue-400 hover:underline">
                Read our cookies policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#080c26] text-center py-4 mt-6 border-t border-gray-700">
          <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded-lg">
            OK
          </button>
        </div>
      </footer>
    </>
  );
}
