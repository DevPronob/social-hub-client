import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState,
  } from "react";
  
  import { IUser } from "../types";
import { getMe } from "@/services/AuthService";

  
  const UserContext = createContext<IUserProviderValues | undefined>(undefined);
  
  interface IUserProviderValues {
    user: IUser | null;
    isLoading: boolean;
    setUser: (user: IUser | null) => void;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
  }
//   akta react function create kora hoisa UserProvider name
//   akane 2 ta state create kora hoisa user and loading name 
//   then akta function create kora hoisa abong fetch kora hoisa user ar re then ata state a set kora hoisa the akta 
//   useEffect a function ta call koa hoisa 
//   then return a UserContext.Provider a value pass koa hoisa 
//   then oitar virore  children pass kora hoisa
  const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
  
    const handleUser = async () => {
      const user = await getMe() as IUser;
      console.log(user,"from user context");
  
      setUser(user);
      setIsLoading(false);
    };
  
    useEffect(() => {
      handleUser();
    }, [isLoading]);
  
    return (
      <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export const useUser = () => {
    const context = useContext(UserContext);
  
    if (context === undefined) {
      throw new Error("useUser must be used within the UserProvider context");
    }
  
    return context;
  };
  
  export default UserProvider;