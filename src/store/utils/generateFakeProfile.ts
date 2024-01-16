const generateFakeProfiles = (count: number, accounts: any[]) => {
    const profiles = [];
    for (let i = 0; i < count; i++) {
      const profile = {
        profileId: (i + 1).toString(),
        country: `Country${i + 1}`,
        marketplace: `Marketplace${i + 1}`,
        accountId: accounts[i % accounts.length].accountId
      };
      profiles.push(profile);
    }
    return profiles;
  };
  
  export default generateFakeProfiles;