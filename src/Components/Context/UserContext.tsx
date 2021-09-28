import {useState, createContext } from "react";

// types
 type AuthUser = {
  name: string
  email: string
}

type UserContextType = {
  user: AuthUser | null
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>> 
}
// props
type UserContextProviderProps = {
  children: React.ReactNode
}

//export const UserContext = createContext<UserContextType | null>(null);
export const UserContext = createContext({} as UserContextType)

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

   return (
     <UserContext.Provider value={{user, setUser}}>
       {children}
     </UserContext.Provider>
   );
 };
 
 export default UserContextProvider;