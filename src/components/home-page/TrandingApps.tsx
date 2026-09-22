import { getApps } from "@/lib/FetchApp";
import { IApp } from "@/typs/type";
import AppCard from "../shared/AppCard";



const TrandingApps = async() => {

    const apps = await getApps();
    console.log(apps);

    return (
        <div className='container mx-auto py-15'>
            <div className='text-center space-y-3'>
                <h3 className='text-3xl font-bold'>Trending Apps</h3>
                <p className='text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className="grid grid-cols-4 space-x-5 space-y-10 pt-10">
                {
                    apps.slice(0, 8).map((app: IApp) => <AppCard key={app.id} app={app}></AppCard>)
                }
            </div>
        </div>
    );
};

export default TrandingApps;