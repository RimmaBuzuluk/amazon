// generateFakeAccounts.ts
const generateFakeAccounts = (count: number) => {
  const accounts = [];
  for (let i = 0; i < count; i++) {
    const account = {
      accountId: (i + 1).toString(),
      authToken: `user${i + 1}`,
      email: `user${i + 1}@example.com`,
      creationDate: `2022-01-${i + 1 < 10 ? '0' : ''}${i + 1}`,
    };
    accounts.push(account);
  }
  return accounts;
};

export default generateFakeAccounts;