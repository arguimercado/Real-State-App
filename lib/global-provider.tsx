import React, {createContext, useContext} from "react";
import {useAppwrite} from "@/lib/persistence/useAppwrite";
import {getCurrentUser} from "@/lib/persistence/appwrite";

interface User {
    $id: string;
    name: string;
    email: string;
    avatar: string;
}

interface GlobalContextType {
    isLoggedIn: boolean;
    user: User | null;
    loading: boolean;
    refetch: (newParams?: Record<string,string | number>) => Promise<void>;

}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);


export const GlobalProvider = ({children}: {children: React.ReactNode}) => {


    const {
        data: user,
        loading,
        refetch,
    } = useAppwrite({ fn: getCurrentUser});

    const isLoggedIn = !!user;



    return (
        <GlobalContext.Provider value={{
            isLoggedIn,
            user,
            loading,
            refetch,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () : GlobalContextType => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return context;
}

export default useGlobalContext;