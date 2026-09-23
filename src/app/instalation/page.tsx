'use client';

import InstalledAppCard from "@/components/shared/InstalledAppCard";
import { AppContext } from "@/context/AppProvider";
import Link from "next/link";
import { useContext } from "react";
import { ImDownload3 } from "react-icons/im";

const InstallationPage = () => {

    const {installedApps} = useContext(AppContext);

    return (
        <div className="bg-gray-200">
            <div className="container mx-auto py-13 space-y-3">
                <h3 className='text-4xl font-bold text-center'>Your Installed Apps</h3>
                <p className="text-gray-600 text-center">Explore All Installed Apps on the Market developed by developers</p>
            </div>

            {
                installedApps.length > 0 ?
                <div className="space-y-5 pt-5 pb-15">
                {
                    installedApps.map(installedApp => <InstalledAppCard
                        key={installedApp.id} 
                        installedApp={installedApp}></InstalledAppCard>)
                }
                </div> :

                <div className="pb-10">
                    <div className="container mx-auto bg-white rounded-2xl py-15 space-y-3">
                        <h3 className="text-4xl text-gray-400 text-center font-bold">There is no App Insalled</h3>

                        <div className="flex justify-center">
                            <Link href={"/apps"}
                            className="w-fit flex items-center gap-0.5 text-gray-100 bg-gray-400 px-5 py-0.5 rounded-md cursor-pointer"><ImDownload3 /> Chose App To Install</Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default InstallationPage;