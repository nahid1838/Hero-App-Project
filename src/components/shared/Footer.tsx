import footerLogo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#001931]">
            <div className="container mx-auto flex justify-between py-10">
                <Link className="flex items-center gap-1" href={"/"}>
                    <Image 
                    src={footerLogo}
                    alt="Navbar Logo"
                    height={30}
                    width={30}
                    />
                    <p className="font-bold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">HERO.IO</p>
                </Link>

                <div className="text-white space-y-3">
                    <p className="text-lg font-semibold text-gray-200">Social Links</p>
                    <div className="flex gap-4 text-lg cursor-pointer">
                        <span><FaSquareXTwitter /></span>
                        <span><FaLinkedin /></span>
                        <span><FaSquareFacebook /></span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto pb-5 space-y-3 text-gray-200">
                <hr />
                <p className="text-center">Copyright © 2025 - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;