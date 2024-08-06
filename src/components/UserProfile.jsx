import { useState } from "react";

// Hvad er fejlen her og hvordan løses den?
// I komponentet 'updateAge', manglede der prevUser

const UserProfile = () => {
  const [user, setUser] = useState({ name: "John", age: 25 });

  const updateAge = () => {
    setUser((prevUser) => ({...prevUser, age: 26 }));
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={updateAge}>Update Age</button>
    </div>
  );
};

export default UserProfile;
