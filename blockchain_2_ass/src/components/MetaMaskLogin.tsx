"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { connectMetamask } from '../lib/metamask';
import { useUser } from '../components/UserContext';

const MetamaskButton = () => {
    const { setAddress } = useUser();
    const router = useRouter();

    const handleMetamaskLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const connectedAccount = await connectMetamask();
        if (connectedAccount) {
            setAddress(connectedAccount);
            console.log('Connected account:', connectedAccount);
            router.push('/profile');
        }
    };

    return (
        <button
            className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-full shadow-sm text-md font-medium text-gray-700 hover:bg-gray-50 w-full"
            onClick={handleMetamaskLogin}
        >
            <Image src="/MetaMask_logo.webp" width={28} height={28} className="mr-2" alt="Metamask logo" />
            Continue with MetaMask
        </button>
    );
};

export default MetamaskButton;
