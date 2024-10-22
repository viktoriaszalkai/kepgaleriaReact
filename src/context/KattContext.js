import { createContext, useState } from "react";

export const KattContext = createContext(""); //létrehozunk egy contextet

export const KattProvider=({children})=>{
  
  const [lista, setLista]=useState(["../kepek/kep1.jpg","../kepek/kep2.jpg","../kepek/kep3.jpg"]);
  
    function katt(adat){
      const slista=[...lista];
      slista[adat]=!slista[adat]
      setLista([...slista]);
      console.log("app:katt")
    }

    return <KattContext.Provider value={{lista, katt}}>
    {children}
    </KattContext.Provider>;
}