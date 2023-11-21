import React from 'react';

const Profile = () => {
  return (
    <div className="p-24 mx-auto p-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">My Profile</h1>
        </div>
        <dl className="space-y-4">
          <div className="flex items-center">
            <dt className="w-1/3 text-gray-600">Full name</dt>
            <dd className="w-2/3">Margot Foster</dd>
            <button className="ml-auto text-blue-500 hover:underline">Update</button>
          </div>

          <div className="flex items-center">
            <dt className="w-1/3 text-gray-600">Application for</dt>
            <dd className="w-2/3">Backend Developer</dd>
            <button className="ml-auto text-blue-500 hover:underline">Update</button>
          </div>

          <div className="flex items-center">
            <dt className="w-1/3 text-gray-600">Email address</dt>
            <dd className="w-2/3">margotfoster@example.com</dd>
            <button className="ml-auto text-blue-500 hover:underline">Update</button>
          </div>

          <div className="flex items-center">
            <dt className="w-1/3 text-gray-600">Salary expectation</dt>
            <dd className="w-2/3">$120,000</dd>
            <button className="ml-auto text-blue-500 hover:underline">Update</button>
          </div>

          <div className="flex items-start">
            <dt className="w-1/3 text-gray-600">About</dt>
            <dd className="w-2/3">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
            <button className="ml-auto text-blue-500 hover:underline">Update</button>
          </div>

          <div className="flex items-start">
            <dt className="w-1/3 text-gray-600">Attachments</dt>
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
        </dl>
      </div>
    </div>
  );
};

export default Profile;
