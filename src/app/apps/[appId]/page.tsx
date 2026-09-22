import { getApps } from "@/lib/FetchApp";
import { IApp, IRating } from "@/typs/type";
import Image from "next/image";
import downloadImg from "@/assets/icon-downloads.png";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { notFound } from "next/navigation";
import AppInstallButton from "@/components/Apps/AppInstallButton";

interface AppDetailPageProps {
    params: Promise<{
        appId: number
    }>
}

const AppDetailPage = async ({ params }: AppDetailPageProps) => {

    const { appId } = await params;

    const allApps = await getApps();
    const app = allApps.find((app: IApp) => String(app.id) === String(appId));

    if (!app) {
        notFound();
    }

    const fullStars = Math.floor(app.ratingAvg);
    const hasHalfStar = app.ratingAvg - fullStars >= 0.5;
    const sortedRatings = [...app.ratings].reverse();
    const maxCount = Math.max(...app.ratings.map((r: IRating) => r.count));

    const formatCount = (n: number) => {
        if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
        if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
        return n.toString();
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-10">

                {/* Header */}
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-3xl overflow-hidden shadow-lg shrink-0 bg-gray-50">
                        <Image
                            src={app.image}
                            alt={app.title}
                            fill
                            className="object-cover"
                            sizes="144px"
                        />
                    </div>

                    <div className="flex-1 min-w-0">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 truncate">
                            {app.title}
                        </h1>
                        <p className="text-sm text-blue-600 font-medium mt-0.5">
                            {app.companyName}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mt-4">
                            <div className="flex items-center gap-1">
                                <div className="flex text-amber-400 text-sm">
                                    {Array.from({ length: 5 }).map((_, i) => {
                                        if (i < fullStars) return <FaStar key={i} />;
                                        if (i === fullStars && hasHalfStar)
                                            return <FaStarHalfAlt key={i} />;
                                        return <FaRegStar key={i} className="text-gray-300" />;
                                    })}
                                </div>
                                <span className="font-semibold text-gray-800">
                                    {app.ratingAvg}
                                </span>
                            </div>

                            <span className="text-gray-300">•</span>
                            <span className="text-sm text-gray-500">
                                {app.reviews} reviews
                            </span>

                            <span className="text-gray-300">•</span>
                            <div className="flex items-center gap-1.5">
                                <Image
                                    src={downloadImg}
                                    alt="Downloads"
                                    className="h-3.5 w-3.5 opacity-70"
                                />
                                <span className="text-sm font-medium text-gray-600">
                                    {app.downloads} downloads
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick stats strip */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-8 pb-8 border-b border-gray-100">
                    <div className="text-center px-2">
                        <p className="text-lg font-bold text-gray-900">{app.ratingAvg}</p>
                        <p className="text-xs text-gray-400 mt-0.5">Rating</p>
                    </div>
                    <div className="text-center px-2 border-x border-gray-100">
                        <p className="text-lg font-bold text-gray-900">{app.downloads}</p>
                        <p className="text-xs text-gray-400 mt-0.5">Downloads</p>
                    </div>
                    <div className="text-center px-2 sm:border-r sm:border-gray-100">
                        <p className="text-lg font-bold text-gray-900">{app.size} MB</p>
                        <p className="text-xs text-gray-400 mt-0.5">Size</p>
                    </div>
                    <div className="text-center px-2 hidden sm:block">
                        <p className="text-lg font-bold text-gray-900">{app.reviews}</p>
                        <p className="text-xs text-gray-400 mt-0.5">Reviews</p>
                    </div>
                </div>

                {/* Rating breakdown */}
                <div className="mt-8 flex flex-col sm:flex-row gap-8 items-start">
                    <div className="flex flex-col items-center shrink-0 w-full sm:w-32">
                        <p className="text-5xl font-bold text-gray-900">{app.ratingAvg}</p>
                        <div className="flex text-amber-400 text-sm mt-1">
                            {Array.from({ length: 5 }).map((_, i) => {
                                if (i < fullStars) return <FaStar key={i} />;
                                if (i === fullStars && hasHalfStar)
                                    return <FaStarHalfAlt key={i} />;
                                return <FaRegStar key={i} className="text-gray-300" />;
                            })}
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{app.reviews} reviews</p>
                    </div>

                    <div className="flex-1 w-full space-y-2">
                        {sortedRatings.map((r) => (
                            <div key={r.name} className="flex items-center gap-3">
                                <span className="text-xs text-gray-500 w-10 shrink-0">
                                    {r.name.split(" ")[0]}★
                                </span>
                                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-amber-400 rounded-full"
                                        style={{ width: `${(r.count / maxCount) * 100}%` }}
                                    />
                                </div>
                                <span className="text-xs text-gray-400 w-12 text-right shrink-0">
                                    {formatCount(r.count)}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <div className="mt-10">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">About this app</h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        {app.description}
                    </p>
                </div>

                <span className="flex justify-center pt-5">
                    <AppInstallButton app={app}></AppInstallButton>
                </span>
            </div>
        </div>
    );
};

export default AppDetailPage;