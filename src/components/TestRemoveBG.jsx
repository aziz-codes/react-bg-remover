import React, { useState } from "react";
import { removeBackground } from "../services/api";
const TestRemoveBG = () => {
  const [loading, setloading] = useState(false);
  const [removeBg, setRemovedBg] = useState(null);
  const handleClick = () => {
    document.getElementById("imageInput").click();
  };
  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    const result = await removeBackground(file);
    setRemovedBg(`data:image/jpeg;base64, ${result}`);
  };
  return (
    <section className="flex h-screen w-full py-10 justify-centerflex flex-col justify-evenly">
      <div className="h-56 w-56 rounded-md border">
        {removeBg && (
          <img
            className="h-full w-full rounded-md"
            src={removeBg}
            alt="removed background"
          />
        )}
      </div>

      <button
        className="px-4 py-2 bg-sky-700 rounded-3xl text-white font-bold text-lg max-w-[200px] mx-auto"
        onClick={handleClick}
      >
        Upload Image
      </button>
      <input hidden type="file" id="imageInput" onChange={handleImageChange} />
    </section>
  );
};

export default TestRemoveBG;
