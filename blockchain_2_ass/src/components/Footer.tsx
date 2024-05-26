export function Footer() {
    return <footer className="mt-20">
        <div className="text-sm flex justify-between mx-auto items-center text-center w-9/12 font-medium text-gray-400 mb-20 flex-wrap">
            <div className="p-2 max-[296px]:mx-auto">
                <ul className="text-left">
                    <li>About</li>
                    <li className="mt-2">Community Guidelines</li>
                    <li className="mt-2">Privacy & Terms <i className="fa-solid fa-caret-down"></i></li>
                    <li className="mt-2">Sales Solutions</li>
                    <li className="mt-2">Safety Center</li>
                </ul>
                <p className="absolute mt-10 text-xs max-[880px]:mx-auto max-[880px]:mt-52 max-[704px]:mt-96 max-[346px]:mt-[500px] max-[296px]:mt-[600px]">LinkedIn Corporation © 2023</p>
            </div>
            <div className="p-2 max-[296px]:mt-10 max-[296px]:mx-auto">
                <ul className="text-left">
                    <li className="-mt-8">Accessibility</li>
                    <li className="mt-2">Careers</li>
                    <li className="mt-2">Ad Choices</li>
                    <li className="mt-2">Mobile</li>
                </ul>
            </div>
            <div className="max-[509px]:mx-auto max-[509px]:mt-10 max-[509px]:mb-5">
                <ul className="text-left">
                    <li className="-mt-8">Talent Solutions</li>
                    <li className="mt-2">Marketing Solutions</li>
                    <li className="mt-2">Advertising</li>
                    <li className="mt-2">Small Business</li>
                </ul>
            </div>
            <div className="p-2 max-[880px]:mx-auto">
                <ul className="text-left">
                    <li>
                        <p className="text-base"><i className="fa-solid  fa-circle-question"></i>Question?</p>
                        <p className="text-xs">Visit our Help Center.</p>
                    </li>
                    <li className="mt-2">
                        <p className="text-base"><i className="fa-solid fa-gear"></i>Manage your account and privacy</p>
                        <p className="text-xs">GO to your Settings.</p>
                    </li>
                    <li className="mt-2">
                        <p className="text-base"><i className="fa-solid fa-shield-halved"></i>Recommendation transparency</p>
                        <p className="text-xs">Learn more about Recommendation Content</p>
                    </li>
                </ul>
            </div>
            <div className="mb-24 p-2 max-[1221px]:mx-auto ">
                <p className="flex">Select Language</p>
                <button className="flex justify-between w-60 border p-1 rounded-md bg-[rgb(29,34,38)]">
                    <div>English (English)</div>
                    <div>
                        <i className="fa-solid fa-caret-down"></i>
                    </div>
                </button>
            </div>
        </div>
    </footer>
}