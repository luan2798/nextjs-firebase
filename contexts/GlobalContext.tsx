
import { createContext, useState } from "react";
export const GlobalContext = createContext({
  data: [],
  user: null,
  setData: (x: any)=>{},
  setUser: (x: any)=>{},
})


const GlobalContextProvider: React.FC<any> = (props) => {
  // because for now, if we have 4000+ bubbles, the app will crash, so we should use useBubbles one time only
  const [data, setData] = useState<any>([]);
  const [user, setUser] = useState<any>(null);
  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
        user,
        setUser
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;