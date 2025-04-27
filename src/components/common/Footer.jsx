import React from "react";
import logo from "../../assets/logo-blue.png";

export default function Footer() {
  return (
    <footer className="text-sm">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div>
            <img src={logo} alt="MobiusEngine" className="h-9" />
            <hr className="flex-grow border-t border-gray-300 mt-5" />
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-[#0649E7]">
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <address className="not-italic leading-relaxed">
                  1875 Mission St Ste 103 #450
                  <br />
                  San Francisco, CA 94103
                </address>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <a
                  href="mailto:finance@mobiusengine.ai"
                  className="hover:underline"
                >
                  finance@mobiusengine.ai
                </a>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Telephone</h4>
                <a href="tel:6508896026" className="hover:underline">
                  650-889-6026
                </a>
              </div>
            </div>

            <div>
              <div className="flex-col mt-6 md:mt-0 flex space-x-4">
                <div className="underline text-[#0649E7]">Socials</div>
                <div className="flex gap-4 mt-3">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-[#0649E7] text-[#0649E7] rounded-full p-2 hover:bg-[#0649E7] hover:text-white transition h-fit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="h-5 w-5"
                      fill="currentColor"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zm-46.4-341.1C24.09 106.9 0 82.6 0 52.61S24.09-1.7 53.79-1.7 107.6 22.64 107.6 52.61 83.5 106.9 53.88 106.9zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.7V448h-92.6V148.9h88.9v40.8h1.3c12.4-23.4 42.7-48.3 87.9-48.3 94 0 111.4 61.9 111.4 142.3V448z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-[#0649E7] text-[#0649E7] rounded-full p-2 hover:bg-[#0649E7] hover:text-white transition h-fit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="h-5 w-5"
                      fill="currentColor"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.3 0-74.7-33.4-74.7-74.7s33.4-74.7 74.7-74.7 74.7 33.4 74.7 74.7-33.4 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9H314c-14.9 0-26.9-12-26.9-26.9V117.3c0-14.9 12-26.9 26.9-26.9h29.6c14.9 0 26.9 12 26.9 26.9v19.4zM398.8 80H49.2C22 80 0 102 0 129.2v231.6C0 410 22 432 49.2 432h349.6c27.2 0 49.2-22 49.2-49.2V129.2C448 102 426 80 398.8 80zm-24.1 312.8c0 13.3-10.8 24.1-24.1 24.1H97.4c-13.3 0-24.1-10.8-24.1-24.1V142.7c0-13.3 10.8-24.1 24.1-24.1h253.2c13.3 0 24.1 10.8 24.1 24.1v250.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0649E7]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-white">
          <span>© 2025 Mobiusservices LLC</span>
          <div className="mt-3 sm:mt-0 flex space-x-6">
            <a href="#" className="hover:underline">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
