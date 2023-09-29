// import { useRouter } from "next/router";
"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  // getting  details of logged in user
  let thisUser = JSON.parse(localStorage.getItem("loggedInUser"));

  //if user is logged in the redirected to profile page

  if (thisUser?.username) {
    redirect("/profile");
  }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
