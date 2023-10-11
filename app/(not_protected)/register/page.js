"use client";
import { useLocalStorage } from "@uidotdev/usehooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function page() {
  const router = useRouter();
  const localStorage = useLocalStorage();

  // state to manage username and password

  const [formDetails, setFormDetails] = useState({});

  // create new user funtion

  const handleCreateUser = (e) => {
    e.preventDefault();
    const getAllUsers = JSON.parse(localStorage.getItem("users")) || [];
    const all_users = [...getAllUsers];
    let checkUserName = all_users?.filter(
      (us) => us.username == formDetails.username
    );
    if (checkUserName?.length > 0) {
      Swal.fire({
        icon: "error",
        text: "UserName is already in user ,please enter diffrent username !",
      });
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([...getAllUsers, formDetails])
      );
      setFormDetails({
        age: "",
        companyName: "",
        name: "",
        password: "",
        username: "",
      });
      Swal.fire({
        icon: "success",
        text: "Your account has been created succesfully !",
      });
      router.push("/login");
    }
    console.log("all_users", all_users);
  };

  // function to handle input fields value
  const handleInput = (e) => {
    setFormDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create account
        </h2>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm ">
        <form onSubmit={handleCreateUser}>
          <div className="mt-2">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-1">
              <input
                onChange={handleInput}
                value={formDetails?.username}
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-1">
              <input
                onChange={handleInput}
                value={formDetails?.password}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
            </div>
            <div className="mt-1">
              <input
                onChange={handleInput}
                value={formDetails?.name}
                id="name"
                name="name"
                type="name"
                // required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="Age"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Age
              </label>
            </div>
            <div className="mt-1">
              <input
                onChange={handleInput}
                value={formDetails?.age}
                id="Age"
                name="age"
                type="Age"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="Company Name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company Name
              </label>
            </div>
            <div className="mt-1">
              <input
                onChange={handleInput}
                value={formDetails?.companyName}
                id="Company Name"
                name="companyName"
                type="Company Name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-2">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create Account
            </button>
          </div>
          <div className="mt-2">
            <Link href={"/login"}>
              <button className="flex w-full justify-center rounded-md text-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
