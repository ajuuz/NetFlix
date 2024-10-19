import { createContext, useState } from "react";

export  const searchContext  = createContext();

export function SearchCont({children}){
    const [isSearchOn,setisSearchOn] = useState(false);
    const [subString,setSubString] = useState('');

    return(
        <searchContext.Provider value={{isSearchOn,setisSearchOn,subString,setSubString}}>
            {children}
        </searchContext.Provider>
    )
}