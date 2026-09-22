'use client';

import { IApp } from "@/typs/type";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface IAppContext {
    installedApps: IApp[];
    setInstalledApps: Dispatch<SetStateAction<IApp[]>>;
}

export const AppContext = createContext<IAppContext>({
    installedApps: [],
    setInstalledApps: () => {},
});

const AppProvider = ({children}: {children: ReactNode}) => {

    const [installedApps, setInstalledApps] = useState<IApp[]>([]);

    const sharedData = {
        installedApps,
        setInstalledApps
    }

    return (
        <AppContext.Provider value={sharedData}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;