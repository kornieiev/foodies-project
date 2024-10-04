"use client";

import { useRef, useState } from "react";
import css from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef();

  const handlePickClick = () => {
    imageInput.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={css.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={css.controls}>
        <div className={css.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && (
            <Image src={pickedImage} alt='The image selected by user' fill />
          )}
        </div>
        <input
          className={css.input}
          type='file'
          id={name}
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInput}
          // multiple // позволит юзеру загружать несколько файлов сразу
          onChange={handleImageChange}
          required
        />
      </div>
      <button className={css.button} type='button' onClick={handlePickClick}>
        Pick an image
      </button>
    </div>
  );
}
