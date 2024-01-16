
const generateFakeCampaigns = (count: number, profiles: any[]) => {
    const campaigns = [];
    for (let i = 0; i < count; i++) {
      const randomIndexProfiles = Math.floor(Math.random() * profiles.length);
      const campaign = {
        campaignId: (i + 1).toString(),
        clicks: Math.floor(Math.random() * 100), // Assuming clicks as a random number between 0 and 100
        cost: Math.random() * 1000, // Assuming cost as a random number between 0 and 1000
        date: "2024-01-15", // Replace with actual date generation logic
        profileId: profiles[randomIndexProfiles].profileId,
      };
      campaigns.push(campaign);
    }
    return campaigns;
  };
  
  export default generateFakeCampaigns;