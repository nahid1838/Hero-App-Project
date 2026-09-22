import { IApp } from '@/typs/type';


const InstalledAppCard = ({installedApp}: {installedApp: IApp}) => {
    return (
        <div>
            This is the installed app card {installedApp.title}
        </div>
    );
};

export default InstalledAppCard;