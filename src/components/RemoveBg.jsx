import React, { useState } from "react";
import CameraImage from "../assets/camera.png";
import { removeBackground } from "../services/api";
const RemoveBg = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
      const result = await removeBackground(file);
      console.log(result);
    }
  };
  //   console.log(selectedImage);
  const handleImageClick = () => {
    // Trigger the hidden file input when the div is clicked
    document.getElementById("imageFile").click();
  };
  const handleChange = (e) => {
    const file = e.target.files[0];
  };
  const handleButtonChange = () => {
    document.getElementById("fileInput").click();
  };
  return (
    <section className="w-full h-screen flex justify-center items-center gap-6">
      <div className="h-44 w-44 border relative">
        <div className="relative h-full w-full" onClick={handleImageClick}>
          {selectedImage ? (
            <img src={selectedImage} alt="Selected Image" />
          ) : (
            <img
              src={CameraImage}
              alt="Select Photo"
              className="absolute h-full w-full object-contain"
            />
          )}
        </div>
        <input
          type="file"
          hidden
          accept=".jpg , .png , .jpeg"
          id="imageFile"
          onChange={handleImageChange}
        />
      </div>

      <div className="h-44 w-44 bg-gray-400 animate-pulse"></div>
      <button
        className="px-4 py-2 rounded-full bg-sky-500 text-bold text-white"
        onClick={handleButtonChange}
      >
        Upload Image
      </button>
      <input type="file" hidden id="fileInput" />
    </section>
    // <div className="w-44 h-44 bg-gray-300 relative">
    //   <div className="w-full h-full cursor-pointer" onClick={handleImageClick}>
    //     {selectedImage ? (
    //       <img
    //         src={selectedImage}
    //         alt="Selected Image"
    //         className="w-full h-full object-cover"
    //       />
    //     ) : (
    //       <p className="text-center flex items-center justify-center h-full">
    //         Click to select an image
    //       </p>
    //     )}
    //   </div>
    //   <input
    //     id="imageInput"
    //     type="file"
    //     accept="image/*"
    //     className="hidden"
    //     onChange={handleImageChange}
    //   />
    // </div>
  );
};

export default RemoveBg;
