import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white p-6 mt-6">
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 mx-8">
        <div className="col-1">
          <h1 className="text-4xl font-bold tracking-widest">LOGO</h1>
          <p className=" mt-5">
            Nam posuere accumsan porta <br />. Integer id orci sed brante
            tincidunt <br /> tincidunt sit amet sed libero.
          </p>
          <p className="mt-15">© LOGO 2022</p>
        </div>
        <div>
          <h4 className="font-bold">PROPERTY</h4>
          <ul className=" flex flex-col gap-5 mt-5">
            <li>Property Category</li>
            <li>Testimony</li>
            <li>Download App</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">ABOUT</h4>
          <ul className=" flex flex-col gap-5 mt-5">
            <li>About Us</li>
            <li>News and Events</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">CONTACTS</h4>
          <ul className=" flex flex-col gap-5 mt-5">
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Send Feedback</li>
            <li>Socials</li>
          </ul>
          <div className="flex gap-5 mt-5">
            <div className="bg-black rounded-full text-white p-1">
              <FaFacebook className="text-2xl" />
            </div>
            <div className="bg-black rounded-full text-white p-1">
              <FaLinkedin className="text-2xl" />
            </div>
            <div className="bg-black rounded-full text-white p-1">
              <FaTwitter className="text-2xl" />
            </div>
            <div className="bg-black rounded-full text-white p-1">
              <FaInstagram className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
