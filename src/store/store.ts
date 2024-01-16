import { configureStore } from "@reduxjs/toolkit";
import { accountReducer, setAccounts } from "./slice/accountSlice";

import generateFakeAccounts from "./utils/generateFakeAccounts.ts";

const store = configureStore({
  reducer: {
    account: accountReducer,
  },
});

const fakeAccounts = generateFakeAccounts(25);
store.dispatch(setAccounts(fakeAccounts));

export default store;
