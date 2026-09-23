import { IApp } from '@/typs/type';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { ImDownload3 } from 'react-icons/im';
import UninstallAppButton from '../Apps/UninstallAppButton';


const InstalledAppCard = ({installedApp}: {installedApp: IApp}) => {
    return (
            <div className='container mx-auto flex justify-between items-center  bg-white px-7 py-5 rounded-xl'>
                <div className='flex gap-7 items-center'>
                    <Image className='rounded-xl'
                    src={installedApp.image}
                    alt='Installed app Image'
                    width={70}
                    height={70}
                    />

                    <div className='space-y-2'>
                        <h4 className='text-2xl font-bold'>{installedApp.title}</h4>

                        <div className='flex gap-4'>
                            <p className='flex items-center gap-1 text-blue-600'><ImDownload3 /> {installedApp.downloads}</p>
                            <p className='flex items-center gap-1 text-orange-400'><FaStar /> {installedApp.ratingAvg}</p>
                            <p className='text-gray-600'>{installedApp.size} MB</p>
                        </div>
                    </div>
                </div>

                <UninstallAppButton installedApp={installedApp}></UninstallAppButton>
            </div>
    );
};

export default InstalledAppCard;