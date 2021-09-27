import {useState} from 'react';
type AuthUser = {
  name: string
  email: string
}
const User = () => {
  // informing here that user can be null or AuthUser
 // const [user, setUser] = useState<AuthUser | null>(null);
  
  // type assertion if one is sure user will be initialized 
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
     // hard code user login info a
     setUser({
       name: 'Lucas',
       email: 'lucas@example.com'
})
  }
 /* const handleLogout = () => {
    // set back to state of null 
    setUser(null);
   }*/
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button>*/}
      <div>User name is {user.name} </div>
       <div>User email is {user.email} </div>
    </div>
  );
};

export default User;