import Web3 from 'web3';

declare global {
    interface Window {
        ethereum?: any;
    }
}

export const connectMetamask = async () => {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.getAccounts();
            return accounts[0];
        } catch (error) {
            console.error('User denied account access');
            return null;
        }
    } else {
        console.error('Metamask not detected');
        return null;
    }
};
