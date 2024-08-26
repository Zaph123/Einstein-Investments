import { createContext, useEffect, useState } from "react"

export const InvestmentContext = createContext(null)

const InvestmentContextProvider = ({children}) => {
  const [userData, setUserData] = useState([])
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [dashboardSectionName, setDashboardSectionName ] = useState("Dashboard")
  const contextValue = {
     userData,
     setUserData,
     isAuthorized,
     setIsAuthorized,
     dashboardSectionName,
     setDashboardSectionName,}

  useEffect(() => {
    console.log(userData);
  },[userData])
  
  return <InvestmentContext.Provider value={contextValue}>{children}</InvestmentContext.Provider>
}

export default InvestmentContextProvider
