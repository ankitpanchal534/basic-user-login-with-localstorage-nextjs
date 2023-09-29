// import { useRouter } from "next/router";
"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  let thisUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!thisUser?.username) {
    redirect("/login");
  }
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
