// ImageUpload.js

import React, { useState } from 'react';
import { storage, db } from './Firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ImImage } from "react-icons/im";
import { VscSend } from "react-icons/vsc";
import Header from './Header';

function ImageUpload({ username, updateFeedImage }) {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState('');

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    try {
      const storageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.error(error);
          alert(error.message);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(storageRef);
            await addDoc(collection(db, 'posts'), {
              timestamp: serverTimestamp(),
              message: caption,
              image: downloadURL,
              name: username,
            });
            setProgress(0);
            setCaption('');
            setImage(null);
            // Update the parent component state with the newly uploaded image
            updateFeedImage(downloadURL);
          } catch (error) {
            console.error(error);
            alert(error.message);
          }
        }
      );
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <>
    <Header />
    <div className=" w-full p-4 border border-gray-300 rounded mt-4 flex flex-col items-center">
      <progress className="w-full mb-2" value={progress} max="100" />
      <div className="flex items-center w-full mb-2 text-black">
        <input
          type="text"
          placeholder="Enter your text here...."
          onChange={(event) => setCaption(event.target.value)}
          value={caption}
          className="flex-grow border border-gray-300 rounded text-black mr-2"
          />
        <label className="text-yellow-500 p-4 cursor-pointer">
          <ImImage size={20} />
          <input type="file" onChange={handleChange} className="hidden" />
        </label>
        <button onClick={handleUpload} className="bg-blue-500 text-white p-4 rounded">
          <VscSend />
        </button>
      </div>
    </div>
    </>
  );
}

export default ImageUpload;