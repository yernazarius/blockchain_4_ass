import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineExplore, MdWork } from "react-icons/md";
import Image from "next/image";
import HeaderLink from "@/components/HeaderLink";
import MetamaskButton from "@/components/MetaMaskLogin";


export function HomePage() {
    return (
        <div className="space-y-24 relative">
            <header className="flex justify-around items-center py-4 max-w-screen-2xl mx-auto">
                <div className="relative w-36 h-10 -top-5">
                    <Image width={144} height={90} alt="image" src="https://www.veloceinternational.com/wp-content/uploads/2022/04/Linkedin-Logo.png" />
                </div>
                <div className="flex items-center sm:divide-x divide-gray-300">
                    <div className="hidden sm:flex space-x-8 pr-4">
                        <HeaderLink Icon={MdOutlineExplore} text="Discover" />
                        <HeaderLink Icon={BsFillPeopleFill} text="People" />
                        <HeaderLink Icon={AiOutlineVideoCameraAdd} text="Learning" />
                        <HeaderLink Icon={MdWork} text="Jobs" />
                        <span className="hidden lg:inline-flex h-0.5 w-[calc(100%+20px)] bg-black dark:bg-white rounded-t-full" />
                    </div>

                    <div>
                        <div className="pl-4">
                            <MetamaskButton />
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex flex-col xl:flex-row items-center max-w-6xl mx-auto ">
                <div className="space-y-6 xl:space-y-10 sm:ml-2">
                    <h1 className="text-3xl md:text-5xl font-light text-amber-800/80 max-w-xl !leading-snug xl:pl-0">
                        Welcome to your professional community
                    </h1>
                    <div className="max-w-md w-full">
                        <form>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Email or phone
                                </label>
                                <input type="text" id="email" className="appearance-none border border-black rounded w-full py-3 px-3 text-gray-700 " />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Password
                                </label>
                                <input type="password" id="password" className="appearance-none border border-black rounded w-full py-3 px-3 text-gray-700" />
                                <p className="text-md font-semibold mt-5 text-blue-700">Forgot password?</p>
                            </div>
                            <div className="flex items-center justify-between ">
                                <button className="w-full rounded-3xl bg-blue-700 hover:bg-blue-700 text-white font-bold py-3 px-4 focus:outline-none focus:shadow-outline" type="button">
                                    Sign in
                                </button>
                            </div>
                            <div className="flex items-center justify-center my-4">
                                <div className="border-t border-gray-300 flex-grow mr-3"></div>
                                <span className="text-gray-500 text-sm">or</span>
                                <div className="border-t border-gray-300 flex-grow ml-3"></div>
                            </div>
                            <div className="mt-4 text-center">
                                <p className="text-sm">By clicking Continue to join or sign in, you agree to LinkedIn’s <span className="text-blue-500">User Agreement</span>, <span className="text-blue-500">Privacy Policy</span>, and <span className="text-blue-500">Cookie Policy</span>.</p>
                            </div>
                            <div className="flex flex-col space-y-4 w-full items-center mt-8">
                                <MetamaskButton />
                                <button className="px-6 py-4 border border-gray-300 rounded-full shadow-sm text-md font-semibold text-gray-700 hover:bg-gray-50 w-full">
                                    New to LinkedIn? Join now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-28 right-5 mt-5">
                    <Image width={650} height={520} alt="image" src="/LinkedIn_Clone_Logo.svg" className="z-0" />
                </div>
            </main>
        </div>
    );
}
