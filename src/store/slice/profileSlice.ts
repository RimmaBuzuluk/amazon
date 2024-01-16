import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Profile {
  profileId: string;
  country: string;
  marketplace: string;
  accountId: string; // ID of the account record to which the profile belongs
}

interface ProfileState {
  profiles: Profile[];
}

const initialState: ProfileState = {
  profiles: [],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfiles: (state, action: PayloadAction<Profile[]>) => {
      state.profiles = action.payload;
    },
  },
});

export const { setProfiles} = profileSlice.actions;

export const profileReducer = profileSlice.reducer;

export const selectProfiles = (state: { profile: ProfileState }) => state.profile.profiles;
