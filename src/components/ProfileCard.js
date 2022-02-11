import React from "react";

const ProfileCard = ({
  picture,
  name,
  gender,
  phone,
  location,
  email,
  dob,
}) => {
  return (
    <div className="flex flex-col bg-white shadow-sm rounded-md border-l-4 border-l-green-500 sm:flex-row">
      {/*profile picture  */}
      <div className="w-full sm:w-64 bg-gray-300 max-h-full">
        <img
          className="h-full w-full mx-auto"
          src={picture.large}
          alt="profile"
        />
      </div>
      {/* end of profile picture */}
      {/* user detail */}
      <div className=" p-3 ">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <span className="text-green-500">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
          <span className="tracking-wide">About</span>
        </div>
        <div className="text-gray-700">
          <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">First Name</div>
              <div className="px-4 py-2">{name.first}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Last Name</div>
              <div className="px-4 py-2">{name.last}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Gender</div>
              <div className="px-4 py-2">{gender}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Contact No.</div>
              <div className="px-4 py-2">{phone}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Current Address</div>
              <div className="px-4 py-2">{location.state}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Permanant Address</div>
              <div className="px-4 py-2">{location.city}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Email.</div>
              <div className="px-4 py-2">
                <a className="text-blue-800" href="mailto:jane@example.com">
                  {email}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Birthday</div>
              <div className="px-4 py-2">{dob.date}</div>
            </div>
          </div>
        </div>
      </div>
      {/* end of user detail */}
    </div>
  );
};

export default ProfileCard;
