// import { useRouter } from "next/router";
"use client";
import { useLocalStorage } from "@uidotdev/usehooks";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const localStorage = useLocalStorage();
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
