import { IApp } from "@/typs/type";
import Image from "next/image";
import downloadImg from "@/assets/icon-downloads.png";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Link from "next/link";

interface AppProps {
    app: IApp;
}

const AppCard = ({ app }: AppProps) => {
    const fullStars = Math.floor(app.ratingAvg);
    const hasHalfStar = app.ratingAvg - fullStars >= 0.5;

    return (
        <Link href={`/apps/${app.id}`}
        className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden">
            {/* Image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50">
                <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 300px"
                />
                {/* Size badge */}
                <span className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-0.5 rounded-full">
                    {app.size} MB
                </span>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
                <div>
                    <h3 className="text-base font-semibold text-gray-900 truncate">
                        {app.title}
                    </h3>
                    <p className="text-xs text-gray-400 truncate">{app.companyName}</p>
                </div>

                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {app.description}
                </p>

                <div className="flex items-center justify-between pt-1">
                    {/* Downloads */}
                    <div className="flex items-center gap-1.5">
                        <Image
                            src={downloadImg}
                            alt="Downloads"
                            className="h-3.5 w-3.5 opacity-70"
                        />
                        <span className="text-xs font-medium text-gray-600">
                            {app.downloads}
                        </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                        <div className="flex text-amber-400 text-[13px]">
                            {Array.from({ length: 5 }).map((_, i) => {
                                if (i < fullStars) return <FaStar key={i} />;
                                if (i === fullStars && hasHalfStar)
                                    return <FaStarHalfAlt key={i} />;
                                return <FaRegStar key={i} className="text-gray-300" />;
                            })}
                        </div>
                        <span className="text-xs font-semibold text-gray-700">
                            {app.ratingAvg}
                        </span>
                    </div>
                </div>

                <p className="text-[11px] text-gray-400 text-right -mt-1">
                    {app.reviews} reviews
                </p>
            </div>
        </Link>
    );
};

export default AppCard;