import { Connection, PublicKey, SystemProgram, clusterApiUrl } from '@solana/web3.js';
import { Program, Provider, web3 } from '@project-serum/anchor';
import idl from './blockchain_project.json'; // Ensure this path is correct and the IDL file is present

const programID = new PublicKey(idl.metadata.address);
const network = clusterApiUrl('devnet');
const opts = {
    preflightCommitment: "processed"
};

// Load the keypair
const keypair = web3.Keypair.fromSecretKey(
    new Uint8Array(JSON.parse(require('fs').readFileSync('/Users/yernazarius/.config/solana/id.json', 'utf8')))
);

const getProvider = () => {
    const connection = new Connection(network, opts.preflightCommitment);
    const provider = new Provider(
        connection, window.solana, opts.preflightCommitment,
    );
    return provider;
}

const initializeUser = async (name: string, city: string, education: string) => {
    const provider = getProvider();
    const program = new Program(idl, programID, provider);

    const [userAccount] = await PublicKey.findProgramAddress(
        [provider.wallet.publicKey.toBuffer()],
        program.programId
    );

    await program.rpc.initialize(name, city, education, {
        accounts: {
            userAccount,
            user: provider.wallet.publicKey,
            systemProgram: SystemProgram.programId,
        },
        signers: [],
    });

    return userAccount;
}

const addFriend = async (friendAddress: string) => {
    const provider = getProvider();
    const program = new Program(idl, programID, provider);

    const [userAccount] = await PublicKey.findProgramAddress(
        [provider.wallet.publicKey.toBuffer()],
        program.programId
    );

    await program.rpc.addFriend(new PublicKey(friendAddress), {
        accounts: {
            userAccount,
            user: provider.wallet.publicKey,
        },
        signers: [],
    });

    return userAccount;
}

const getUserData = async (publicKey: PublicKey) => {
    const provider = getProvider();
    const program = new Program(idl, programID, provider);

    const [userAccount] = await PublicKey.findProgramAddress(
        [publicKey.toBuffer()],
        program.programId
    );

    const accountInfo = await program.account.userAccount.fetch(userAccount);
    return accountInfo;
}

export { initializeUser, addFriend, getUserData };
