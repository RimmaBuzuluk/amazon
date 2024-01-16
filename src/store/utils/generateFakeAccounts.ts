const generateRandomDate = () => {
  const currentDate = new Date();
  const randomDate = new Date(
    currentDate.getFullYear() - Math.floor(Math.random() * 10), // random year within the last 10 years
    Math.floor(Math.random() * 12), // random month (from 0 to 11)
    Math.floor(Math.random() * 28) + 1 //random day (from 1 to 28, just for simplicity
  );

  return randomDate.toISOString().split('T')[0]; // Convert to "YYYY-MM-DD" format string
};

const generateFakeAccounts = (count: number) => {
  const accounts = [];
  for (let i = 0; i < count; i++) {
    const account = {
      accountId: (i + 1).toString(),
      authToken: `user${i + 1}`,
      email: `user${i + 1}@example.com`,
      creationDate: generateRandomDate(),
    };
    accounts.push(account);
  }
  return accounts;
};

export default generateFakeAccounts;
