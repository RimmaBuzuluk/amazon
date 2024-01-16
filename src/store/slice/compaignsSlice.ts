import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Campaign {
    campaignId: string;
    clicks: number;
    cost: number;
    date: string;
    profileId: string;
}

interface CampaignState {
    campaigns: Campaign[];
}

const initialState: CampaignState = {
    campaigns: [],
}

const campaignsSlice = createSlice({
    name: 'campaigns',
    initialState,
    reducers: {
        setCampaigns: (state, action: PayloadAction<Campaign[]>) => {
            state.campaigns = action.payload;
        }
    }
});

export const { setCampaigns } = campaignsSlice.actions;

export const campaignsReducer = campaignsSlice.reducer;

export const selectCampaigns = (state: { campaigns: CampaignState }) => state.campaigns;

