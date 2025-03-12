"use client";
import ProfileLayout from "@/components/ProfileLayout";
import { useState } from "react";
import { FaCog, FaPen, FaBell, FaUser } from "react-icons/fa";

export default function ProfilePage() {
  const [progress, setProgress] = useState(70);

  return (
    <ProfileLayout>
      <div
        className="relative bg-cover rounded-b-2xl min-h-[30vh] bg-center bg-no-repeat p-6"
        style={{ backgroundImage: "url('img/bg.png')" }}
      ></div>
      <div className="relative text-center mt-5 mx-5 bg-white rounded-t-3xl flex flex-col justify-center items-center pb-10 pt-16">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-45 ">
          <img
            src="img/Profile.png"
            alt="Profile"
            className="w-[200px] h-[240px] "
          />
        </div>

        <h2 className="text-xl font-bold">
          Amanda Christine <FaPen className="inline ml-2 cursor-pointer" />
        </h2>
        <p className="text-gray-600">South Jakarta, DKI Jakarta, Indonesia</p>
        <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded">
          Button
        </button>

        <div className="absolute top-5 right-5 flex flex-col gap-2">
          <button className="px-4 py-2 bg-white border rounded shadow">
            Button
          </button>
          <button className="px-4 py-2 bg-white border rounded shadow">
            Button
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded">
            Button
          </button>
        </div>
      </div>
      <div className="flex p-6 gap-6">
        <aside className="w-1/3 bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Profile Status</h3>
          <p className="text-gray-500 text-sm">Intermediate</p>
          <p className=" text-gray-600">Complete 2 steps to achieve Expert!</p>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
            <div
              className="bg-red-500 h-4 rounded-full text-center text-white "
              style={{ width: `${progress}%` }}
            >
              {progress}%
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-bold">
              Which industry do you work in?
            </h4>
            <p className=" text-gray-600">
              Members who add an industry receive up to 2.5 times as many
              profile views
            </p>
            <button className="mt-2 px-3 py-1 border rounded text-sm">
              Button
            </button>
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-bold">
              Which University do you go to?
            </h4>
            <p className=" text-gray-600">
              Members who add an industry receive up to 2.5 times as many
              profile views
            </p>
            <button className="mt-2 px-3 py-1 border rounded text-sm">
              Button
            </button>
          </div>
        </aside>
        <main className="w-2/3 bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">About</h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
          </p>
          <button className="mt-2 text-blue-500 text-sm">...see more</button>
        </main>
      </div>
    </ProfileLayout>
  );
}
