import React, { useState } from "react";
import "./DisplayImage.scss"

export default function DisplayImage() {
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeImage = () => {
    setSelectedImage();
  };

  return (
    <div className="container">
      <form>
        <input type="file" name="pic" onChange={imageChange} />
        {selectedImage && (
          <div>
            <img
              src={URL.createObjectURL(selectedImage)}
              className="image"
              alt="thumb"
            />
            <button onClick={removeImage} className="delete">
              Remove
            </button>
          </div>
        )}
      </form>
    </div>
  );
}