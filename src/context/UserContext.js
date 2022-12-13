import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  const loginUser = (data) => {
    const user = users.filter(
      (user) => user.email === data.email && user.password === data.password
    );
    if (user) {
      setUser(user[0]);
    } else {
      alert("User doesn't exist");
    }
  };

  const logoutUser = () => {
    setUser(null);
  };

  const registerUser = (newUser) => {
    const userExists = users.find((user) => user.email === newUser.email);
    if (!userExists) {
      setUsers((prevState) => [...prevState, newUser]);
    } else {
      alert("User with provided email already exists!");
    }
  };

  return (
    <UserContext.Provider value={{ user, registerUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContext;
