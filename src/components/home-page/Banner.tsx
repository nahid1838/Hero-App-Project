import Image from "next/image";
import heroImg from "@/assets/hero.png";
import { BsGooglePlay } from "react-icons/bs";
import { FaAppStoreIos } from "react-icons/fa";

const Banner = () => {
    return (
        <div>
            <div className='container mx-auto text-center space-y-5 pt-13'>
                <h1 className='text-5xl font-bold'>We Build <br /><span className='bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>Productive</span> Apps</h1>
                <p className='max-w-[60%] mx-auto text-gray-600'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className="flex gap-5 justify-center">
                    <button className="flex items-center gap-1 border border-gray-400 px-5 py-2.5 rounded-lg cursor-pointer hover:bg-green-300 hover:border-none transition-transform duration-300 hover:-translate-x-2"><BsGooglePlay className="text-xl text-blue-600" />Google Play</button>

                    <button className="flex items-center gap-1 border border-gray-400 px-5 py-2.5 rounded-lg cursor-pointer hover:bg-green-300 hover:border-none transition-transform duration-300 hover:translate-x-2"><FaAppStoreIos className="text-xl text-blue-600" />Google Play</button>
                </div>
            </div>

            <Image className="mx-auto w-[550px] h-auto pt-5"
            src={heroImg}
            alt="Banner Image"
            />


            <div className=" text-center space-y-8 py-10 bg-linear-to-r from-blue-500 to-purple-600 text-white">
                <h3 className="text-4xl font-bold text-zinc-800">Trusted by Millions, Built for You</h3>
                <div className="flex justify-center gap-20">
                    <div className="space-y-3">
                        <p className="text-gray-300">Total Downloads</p>
                        <h2 className="text-5xl font-bold">29.6M</h2>
                        <p className="text-gray-300">21% more than last month</p>
                    </div>
                    <div className="space-y-3">
                        <p className="text-gray-300">Total Reviews</p>
                        <h2 className="text-5xl font-bold">906K</h2>
                        <p className="text-gray-300">46% more than last month</p>
                    </div>
                    <div className="space-y-3">
                        <p className="text-gray-300">Active Apps</p>
                        <h2 className="text-5xl font-bold">132+</h2>
                        <p className="text-gray-300">31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;