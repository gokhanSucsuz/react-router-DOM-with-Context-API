/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const SiteContext = createContext();
function SiteContextProvider({ children }) {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("user")) ?? null)
  },[])
  const handleLogin = () => {
    const user = {
      id: 1,
      name: "Gökhan"
    };
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <SiteContext.Provider value={{user, handleLogin, handleLogout}}>
      {children}
    </SiteContext.Provider>
  );
}
export { SiteContextProvider, SiteContext };
