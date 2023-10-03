// "use client"
// import AppContext from "./appContext"

// import { useState } from "react"

// const AppState = ({ children }) => {
//     const [isLeftNavHidden, setisLeftNavHidden] = useState(true);
//     const isleftNavHidden = () => {
//         if (isLeftNavHidden) {
//             setisLeftNavHidden(false);
//         } else {
//             setisLeftNavHidden(true);
//         }
//     }
//     return (
//         <AppContext.Provider value={{ isLeftNavHidden, setisLeftNavHidden, isleftNavHidden }}>
//             {children}
//         </AppContext.Provider>
//     )
// }

// export default AppState;


import { AppProvider } from "./appContext";
type AppStateProps = {
    children:React.ReactNode;
};
export default function AppState({children}:AppStateProps){
    return <AppProvider>{children}</AppProvider>
}


