"use client";
import { useLocalStorage } from "@uidotdev/usehooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function page() {
  const localStorage = useLocalStorage();
  const [selectedImage, setSelectedImage] = React.useState("");
  const [currentUser, setThisUser] = useState({});

  const router = useRouter();

  // save photo to current login user's object
  const handleUploadPhoto = () => {
    const allUsers = JSON.parse(localStorage.getItem("users"));
    let updated = allUsers.map((item) =>
      item.username == currentUser.username
        ? { ...item, profilePic: selectedImage }
        : item
    );

    localStorage.setItem("users", JSON.stringify(updated));
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ ...currentUser, profilePic: selectedImage })
    );
    setThisUser((prev) => ({
      ...prev,
      profilePic: selectedImage,
    }));
  };

  // handle select photo
  const handleSelectPhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const image = URL.createObjectURL(file);
      setSelectedImage(image);
    } else {
    }
  };

  useEffect(() => {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setThisUser(loggedInUser);
  }, []);

  // handle login and clear localstorage
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    router.push("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="profile_wrapper">
        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <button
            onClick={handleLogout}
            style={{
              color: "darkblue",
              fontWeight: "bold",
            }}
          >
            Logout
          </button>
        </div>

        <div className="profile_pic_section">
          <div
            style={{
              width: 200,
              height: 200,
              overflow: "hidden",
              borderRadius: 100,
            }}
          >
            <Image
              // src={selectedImage || "/profile-pic.png"}
              src={currentUser?.profilePic || "/placeholderImage.jpg"}
              height={200}
              width={200}
              alt="profile-image"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <input
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              onChange={handleSelectPhoto}
            />
            <button
              style={{
                background: "darkblue",
                color: "white",
                border: "1px solid lightgray",
                padding: "5px 15px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
              onClick={handleUploadPhoto}
            >
              Update Photo
            </button>
          </div>
        </div>
        <div className="profile_details_section">
          <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>
            Profile Details:
          </h1>
          <div className="div_list_wrapper">
            <div className="div_list_child">
              <div>Name </div>
              <div>:</div>
              <div>{currentUser?.name}</div>
            </div>
            <div className="div_list_child">
              <div>Age </div>
              <div>:</div>
              <div>{currentUser?.age}</div>
            </div>
            <div className="div_list_child">
              <div>Company Name </div>
              <div>:</div>
              <div>{currentUser?.companyName}</div>
            </div>
            <div className="div_list_child">
              <div>Name </div>
              <div>:</div>
              <div>{currentUser?.username}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
