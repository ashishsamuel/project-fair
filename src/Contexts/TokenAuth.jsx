import React, { createContext, useEffect, useState } from 'react'
export const tokenAuthorizationContext = createContext()

function TokenAuth({children}) {
    const [isAuthorized,setIsAuthorized] = useState(false)
    useEffect(()=>{
      if(sessionStorage.getItem("token")){
        setIsAuthorized(true)
      }else{
        setIsAuthorized(false)
      }
    },[isAuthorized])

  return (
    <tokenAuthorizationContext.Provider value={{isAuthorized,setIsAuthorized}}>
        {children}
    </tokenAuthorizationContext.Provider>
  )
}

export default TokenAuth
