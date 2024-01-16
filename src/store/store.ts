import { configureStore } from "@reduxjs/toolkit";
import { accountReducer, setAccounts } from "./slice/accountSlice";

import generateFakeAccounts from "./utils/generateFakeAccounts";
import { profileReducer, setProfiles } from "./slice/profileSlice.ts";
import generateFakeProfiles from "./utils/generateFakeProfile";

const store = configureStore({
  reducer: {
    account: accountReducer,
    profile: profileReducer
  },
});

const fakeAccounts = generateFakeAccounts(125);
store.dispatch(setAccounts(fakeAccounts));

const fakeProfiles=generateFakeProfiles(250, fakeAccounts);
store.dispatch(setProfiles(fakeProfiles))

export default store;
