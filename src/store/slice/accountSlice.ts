// accountSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Account {
    accountId: string;
    authToken: string;
    email: string;
    creationDate: string;
}

interface AccountState {
    accounts: Account[];
}

const initialState: AccountState = {
    accounts: [],
}

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setAccounts: (state, action: PayloadAction<Account[]>) => {
            state.accounts = action.payload;
        },
    }
})

export const { setAccounts } = accountSlice.actions;

export const accountReducer = accountSlice.reducer;

// Створюємо селектор
export const selectAccounts = (state: { account: AccountState }) => state.account.accounts;
