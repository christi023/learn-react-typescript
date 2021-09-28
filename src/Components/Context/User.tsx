import { useContext } from "react";
import { UserContext } from "./UserContext";

const User1 = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
   // if (userContext) {
      userContext.setUser({
        name: 'Lily',
        email :'lily@outlook.com'
      })
    //}
   };
  const handleLogout = () => {
  //  if (userContext) {
      userContext.setUser(null)
   // }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name} </div>
      <div>User email is {userContext.user?.email} </div>
    </div>
  );
};

export default User1;