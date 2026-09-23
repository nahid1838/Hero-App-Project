"use client";

import { AppContext } from "@/context/AppProvider";
import { IApp } from "@/typs/type";
import { useContext } from "react";
import { toast } from "react-toastify";

const UninstallAppButton = ({installedApp}: {installedApp: IApp}) => {

    const {installedApps, setInstalledApps} = useContext(AppContext);

    const filteredInstalledApps = installedApps.filter(currentApp => currentApp.id !== installedApp.id);

    const handleUninstallButton = () => {
        setInstalledApps(filteredInstalledApps);

        toast.success(`${installedApp.title} Uninstalled Successfully.`)
    }

    return (
        <button onClick={() => handleUninstallButton()}
        className='bg-blue-500 px-6 py-3 h-fit text-white font-semibold rounded-lg cursor-pointer hover:bg-red-500 hover:duration-200 hover:shadow-lg hover:shadow-gray-600'>Uninstall</button>
    );
};

export default UninstallAppButton;