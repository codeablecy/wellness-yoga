import { Code, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
                <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Cores of Light Logo"
                  width={50}
                  height={50}
                  className="w-full h-full"
                />
                </Link>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  Cores of Light
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  Spiritual Awakening & Wellness
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-6 leading-relaxed max-w-md">
              Ignite your inner potential with intuitive guidance and
              personalized self-discovery journeys.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 text-sm sm:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 text-sm sm:text-base"
                >
                  Events & Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 text-sm sm:text-base"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 text-sm sm:text-base"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  <Link
                    href="mailto:thasos111@gmail.com"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                  >
                    thasos111@gmail.com
                  </Link>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  <Link
                    href="tel:+357000000000"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                  >
                    +357 000000000
                  </Link>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  <Link
                    href="https://maps.app.goo.gl/v59x3pd8Sym9U7Rw9"
                    target="_blank"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                  >
                    Feidiou 14, Lemesos 3075, Cyprus
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Cores of Light. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 text-xs sm:text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 text-xs sm:text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Built by Signature */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6">
          <div className="flex flex-col sm:flex-row justify-center animate-pulse items-center space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-purple-700 dark:from-purple-500 dark:to-purple-600 rounded-full flex items-center justify-center">
                <Code className="w-3 h-3 text-white" />
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                Built and maintained by{" "}
                <Link
                  href="https://www.codeable.cloud/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors duration-200"
                >
                  Codeable
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
