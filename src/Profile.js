import { useState, useEffect } from 'react'
import Header from './Header';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./Firebase";
import { query, collection, getDocs, where, addDoc, updateDoc } from "firebase/firestore";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  // Add similar state variables for email, phone number, price, about, etc.
  
  const [phone, setPhone] = useState("");
  const [editModeName, setEditModeName] = useState(false);
  const [editModeEmail, setEditModeEmail] = useState(false);
  const [editModePhoneNumber, setEditModePhoneNumber] = useState(false);
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedPhoneNumber, setUpdatedPhoneNumber] = useState("");


  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      setEmail(data.email);
      setPhone(data.phoneNumber);
    } catch (err) {
      console.error(err);
      alert("An error occurred while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  const handleUpdateName = async () => {
    try {
      if (!user || !user.uid) {
        console.error("User or user.uid is undefined.");
        return;
      }

      const userRef = collection(db, "users");
      const q = query(userRef, where("uid", "==", user.uid));
      const docSnap = await getDocs(q);

      if (docSnap.empty) {
        console.error("No matching document found for the user.");
        return;
      }

      const userDocRef = docSnap.docs[0].ref;
      await updateDoc(userDocRef, { name: updatedName });
      setName(updatedName);
      setUpdatedName("");
      setEditModeName(false);
      alert("Name updated successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while updating the name");
    }
  };

  const handleUpdateEmail = async () => {
    try {
      if (!user || !user.uid) {
        console.error("User or user.uid is undefined.");
        return;
      }

      const userRef = collection(db, "users");
      const q = query(userRef, where("uid", "==", user.uid));
      const docSnap = await getDocs(q);

      if (docSnap.empty) {
        console.error("No matching document found for the user.");
        return;
      }

      const userDocRef = docSnap.docs[0].ref;
      await updateDoc(userDocRef, { email: updatedEmail });
      setEmail(updatedEmail);
      setUpdatedEmail("");
      setEditModeEmail(false);
      alert("Email updated successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while updating the email");
    }
  };

  const handleUpdatePhoneNumber = async () => {
    try {
      if (!user || !user.uid) {
        console.error("User or user.uid is undefined.");
        return;
      }

      const userRef = collection(db, "users");
      const q = query(userRef, where("uid", "==", user.uid));
      const docSnap = await getDocs(q);

      if (docSnap.empty) {
        console.error("No matching document found for the user.");
        return;
      }

      const userDocRef = docSnap.docs[0].ref;
      await updateDoc(userDocRef, { phoneNumber: updatedPhoneNumber });
      setPhone(updatedPhoneNumber);
      setUpdatedPhoneNumber("");
      setEditModePhoneNumber(false);
      alert("Phone Number updated successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while updating the phone number");
    }
  }

  
  
  return (
    <>
    <Header />
    <div className="p-32 mx-auto p-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-6">
          <h1 className="text-2xl text-center font-bold">My Profile</h1>
        </div>
        <dl className="space-y-4">
        <div className="flex items-center">
        <dt className="w-1/3 text-gray-600">Full name</dt>
        {editModeName ? (
          <input
            className='text-black'
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
        ) : (
          <dd className="w-2/3">{name}</dd>
        )}
        <button
          className="ml-auto text-blue-500 hover:underline"
          onClick={() => {
            if (editModeName) handleUpdateName();
            setEditModeName(!editModeName);
          }}
        >
          {editModeName ? "Save" : "Update"}
        </button>
      </div>

      <div className="flex items-center">
        <dt className="w-1/3 text-gray-600">Email Address</dt>
        {editModeEmail ? (
          <input
            type="text"
            className='text-black'
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
          />
        ) : (
          <dd className="w-2/3">{email}</dd>
        )}
        <button
          className="ml-auto text-blue-500 hover:underline"
          onClick={() => {
            if (editModeEmail) handleUpdateEmail();
            setEditModeEmail(!editModeEmail);
          }}
        >
          {editModeEmail ? "Save" : "Update"}
        </button>
      </div>

          <div className="flex items-center">
            <dt className="w-1/3 text-gray-600">Phone Number</dt>
            <dd className="w-2/3">{phone}</dd>
            <button className="ml-auto text-blue-500 hover:underline">Update</button>
          </div>

          <div className="flex items-center">
            <dt className="w-1/3 text-gray-600">Price Starting at</dt>
            <dd className="w-2/3">price will come here</dd>
            <button className="ml-auto text-blue-500 hover:underline">Update</button>
          </div>

          <div className="flex items-start">
            <dt className="w-1/3 text-gray-600">About</dt>
            <dd className="w-2/3">about will come here</dd>
            <button className="ml-auto text-blue-500 hover:underline">Update</button>
          </div>

          {/*
          <div className="flex items-start">
            <dt className="w-1/3 text-gray-600">Images</dt>
            <dd className="w-2/3">
              <div className="mb-2">
                resume_back_end_developer.pdf (2.4mb) 
                <button className="text-blue-500 hover:underline ml-2">Update</button>
                <button className="text-red-500 hover:underline ml-2">Remove</button>
              </div>
              <div>
                coverletter_back_end_developer.pdf (4.5mb)
                <button className="text-blue-500 hover:underline ml-2">Update</button>
                <button className="text-red-500 hover:underline ml-2">Remove</button>
              </div>
            </dd>
          </div>
          */}
        </dl>
      </div>
    </div>
  </>
  );
};

export default Profile;
