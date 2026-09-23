import AppCard from "@/components/shared/AppCard";
import { getApps } from "@/lib/FetchApp";
import { IApp } from "@/typs/type";

const AppsPage = async() => {

    const allApps = await getApps();

    return (
        <div className='container mx-auto py-10'>
            <div className='text-center space-y-3'>
                <h3 className='text-4xl font-bold'>Our All Applications</h3>
                <p className='text-gray-600'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div>
                <h3 className="text-2xl font-bold py-5">{`(${allApps.length}) Apps Founded`}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 pt-10">
                {
                    allApps.map((app: IApp) => <AppCard key={app.id} app={app}></AppCard>)
                }
            </div>
        </div>
    );
};

export default AppsPage;