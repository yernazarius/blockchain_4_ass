use anchor_lang::prelude::*;

declare_id!("FyDEYVmCc6obubJoMbStj1BkUs3T6EiizryeE9qWfyC1");

#[program]
pub mod blockchain_project {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, name: String, city: String, education: String) -> Result<()> {
        let user_account = &mut ctx.accounts.user_account;
        user_account.name = name;
        user_account.city = city;
        user_account.education = education;
        user_account.address = *ctx.accounts.user.key;
        Ok(())
    }

    pub fn add_friend(ctx: Context<AddFriend>, friend_address: Pubkey) -> Result<()> {
        let user_account = &mut ctx.accounts.user_account;
        user_account.friends.push(friend_address);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 32 + 64 + 64 + 64 + 32 * 10)]
    pub user_account: Account<'info, UserAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct AddFriend<'info> {
    #[account(mut)]
    pub user_account: Account<'info, UserAccount>,
    pub user: Signer<'info>,
}

#[account]
pub struct UserAccount {
    pub address: Pubkey,
    pub name: String,
    pub city: String,
    pub education: String,
    pub friends: Vec<Pubkey>,
}
