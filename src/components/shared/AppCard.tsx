import { IApp } from "@/typs/type";
import Image from "next/image";
import downloadImg from "@/assets/icon-downloads.png";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

interface AppProps {
    app: IApp
}

const AppCard = ({app}: AppProps) => {
    return (
        <div className="space-y-3 bg-gray-200 p-4 rounded-lg">
            <Image className="rounded-lg"
            src={app.image}
            alt="App image"
            width={380}
            height={400}
            />

            <p className="text-lg font-semibold">{app.title}</p>

            <div className="flex justify-between">
                <div className="flex items-center gap-1 bg-white px-1 py-0.5 rounded-md">
                    <Image className="h-4 w-4"
                    src={downloadImg}
                    alt="Download Image icon"
                    />
                    <p className="font-semibold text-[#00D390]">{app.downloads}</p>
                </div>
                <p className="flex items-center text-orange-500 font-bold gap-1 bg-pink-200 px-1 py-0.5 rounded-md"><span>{app.ratingAvg >= 5 ? <FaStar /> : <FaStarHalfStroke />}</span> {app.ratingAvg}</p>
            </div>
        </div>
    );
};

export default AppCard;