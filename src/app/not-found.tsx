import pageNotFoundImg from "@/assets/error-404.png";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="container mx-auto py-20">
            <Image className="w-90 h-auto mx-auto"
            src={pageNotFoundImg}
            alt="Error Image"
            />

            <div className="flex flex-col gap-6 justify-center pt-5 items-center">
                <div className="text-center space-y-2">
                    <h3 className="text-4xl font-semibold">Oops, page not found!</h3>
                    <p className="text-gray-600">The page you are looking for is not available.</p>
                </div>

                <Link href={"/"}
                className="px-5 py-2.5 font-semibold rounded-lg bg-linear-to-r from-blue-500 to-purple-500 text-white cursor-pointer"
                >Go Back!</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;