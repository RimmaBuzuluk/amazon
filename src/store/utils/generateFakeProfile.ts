const generateFakeProfiles = (count: number, accounts: any[]) => {
  const countries = ['Ukraine', 'USA', 'Germany', 'France'];
  const marketplace=['Amazon', 'prom', 'Rozetka', 'OLX', 'AliExpress']

  const profiles = [];
  for (let i = 0; i < count; i++) {
    const randomIndexCountries = Math.floor(Math.random() * countries.length);
    const randomIndexMaerketplace = Math.floor(Math.random() * countries.length);
    const profile = {
      profileId: (i + 1).toString(),
      country: countries[randomIndexCountries],
      marketplace: marketplace[randomIndexMaerketplace],
      accountId: accounts[i % accounts.length].accountId
    };
    profiles.push(profile);
  }
  return profiles;
};

export default generateFakeProfiles;