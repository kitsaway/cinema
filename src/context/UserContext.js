import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  console.log('users', users)
  const loginUser = (data) => {
    const user = users.filter(
      (user) => user.email === data.email && user.password === data.password
    );
    setUser(user[0]);
  };

  const logoutUser = () => {
    setUser(null);
  }

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
