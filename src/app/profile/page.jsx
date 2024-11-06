"use client";
import React, { useState, useEffect } from "react";
import styles from "./profile.module.scss";

const ProfilePage = () => {
  // Load data from localStorage or use default values
  const storedProfileData = JSON.parse(localStorage.getItem("profileData")) || {
    name: "Harshal Mukte",
    email: "harshalmukte@gmail.com",
    profileImage:
      "https://media.licdn.com/dms/image/v2/D4D03AQGHiGgsiiAqNg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718681868771?e=2147483647&v=beta&t=lOX83lVdr_-sZiGiunkRILrmMpghiDaArI6p1Oy_AOg", // Default image path
  };

  const [profileData, setProfileData] = useState(storedProfileData);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  // Save updated profile data
  const handleSave = () => {
    localStorage.setItem("profileData", JSON.stringify(profileData));
    setIsEditing(false);
    setMessage("Profile updated successfully!");
    setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  };

  // Handle input changes for name and email
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle Image Change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileData((prevData) => ({
          ...prevData,
          profileImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.profileWrapper}>
      <div className={styles.header}>
        <h1>Profile Details</h1>
        <p>Manage your personal information and account settings</p>
      </div>


      <div className={styles.profilePage}>
        <div className={styles.profileHeader}>
          <div className={styles.imageWrapper}>
            <img
              src={profileData.profileImage}
              alt="Profile"
              className={styles.profileImage}
            />
            {isEditing && (
              <label className={styles.editImageLabel}>
                Change Image
                <input
                  type="file"
                  onChange={handleImageChange}
                  className={styles.imageInput}
                />
              </label>
            )}
          </div>
          <h2>Hello, I am {profileData.name}</h2>
        </div>

        <div className={styles.profileContent}>

          {isEditing ? (
            <div className={styles.profileForm}>
              <label>Update Name</label>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleChange}
                className={styles.editable}
              />

              <label>Update Email</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                className={styles.editable}
              />
            </div>
          ): (
            <div className={styles.infoSection}>
            <p><strong>Name:</strong> {profileData.name}</p>
            <p><strong>Email:</strong> {profileData.email}</p>
          </div>

          )}

          <div className={styles.buttonContainer}>
            {isEditing ? (
              <button className={styles.saveButton} onClick={handleSave}>
                Save
              </button>
            ) : (
              <button
                className={styles.editButton}
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </div>

          {message && <p className={styles.message}>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
