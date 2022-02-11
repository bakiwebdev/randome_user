import React, { useState, useEffect } from "react";
import CustomButton from "./CustomButton";
import ProfileCard from "./ProfileCard";

const PersonController = () => {
  const [person, setPerson] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getRandomUser = async () => {
    setIsLoading(true);
    const randomUser = await fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => data.results[0]);
    setPerson(randomUser);
    setIsLoading(false);
  };

  useEffect(() => {
    getRandomUser();
  }, []);

  const buttonHandler = () => getRandomUser();

  return (
    <div>
      <div className="h-screen w-screen bg-gray-100 flex flex-col justify-center items-center">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ProfileCard
            name={person.name}
            picture={person.picture}
            gender={person.gender}
            dob={person.dob}
            location={person.location}
            phone={person.phone}
            email={person.email}
          />
        )}
        <CustomButton text="Generate Random User" onClick={buttonHandler} />
      </div>
    </div>
  );
};

export default PersonController;
