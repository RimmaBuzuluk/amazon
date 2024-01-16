import { configureStore } from "@reduxjs/toolkit";
import { accountReducer, setAccounts } from "./slice/accountSlice";

import generateFakeAccounts from "./utils/generateFakeAccounts";
import { profileReducer, setProfiles } from "./slice/profileSlice.ts";
import generateFakeProfiles from "./utils/generateFakeProfile";
import { campaignsReducer, setCampaigns } from "./slice/campaignsSlice.ts";
import generateFakeCampaigns from "./utils/generateFakeCampaigns.ts";

const store = configureStore({
  reducer: {
    account: accountReducer,
    profile: profileReducer,
    campaign: campaignsReducer
  },
});

const fakeAccounts = generateFakeAccounts(125);
store.dispatch(setAccounts(fakeAccounts));

const fakeProfiles=generateFakeProfiles(700, fakeAccounts);
store.dispatch(setProfiles(fakeProfiles))

const fakeCampaigns=generateFakeCampaigns(1000, fakeProfiles)
store.dispatch(setCampaigns(fakeCampaigns))

export default store;
