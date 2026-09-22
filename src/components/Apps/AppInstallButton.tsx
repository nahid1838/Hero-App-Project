'use client';

import { AppContext } from "@/context/AppProvider";
import { IApp } from "@/typs/type";
import { useContext, useState } from "react";

const AppInstallButton = ({app}: {app: IApp}) => {

    const {installedApps, setInstalledApps} = useContext(AppContext);
    const [isInstalled, setIsInstalled] = useState(false);

    const handleInstallButton = () => {
        setInstalledApps([...installedApps, app]);
        setIsInstalled(true);
    }

    return (
        <button
            onClick={handleInstallButton}
            disabled={isInstalled}
            className={`btn btn-primary ${
                isInstalled
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "px-10 transition duration-300 hover:translate-y-2 font-bold hover:shadow-lg hover:shadow-gray-400"
            }`}
        >
            {isInstalled ? "Installed" : "Install"}
        </button>
    );
};

export default AppInstallButton;