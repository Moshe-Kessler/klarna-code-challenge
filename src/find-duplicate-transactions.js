/**
 * Finds duplicated transactions
 * @param {Transaction[]} transactions
 * @returns {Transaction[][]} arrays of duplicated transactions
 */
function findDuplicateTransactions(transactions = []) {
  const sortedByDate = transactions.sort(
    (a, b) => timeToNum(a.time) - timeToNum(b.time)
  );

  const groups = sortedByDate.reduce((acc, curr) => {
    const idx = `${curr.sourceAccount}${curr.targetAccount}${curr.category}${curr.amount}`;
    acc[idx] = isMoreThanOneMinute(acc[idx] || [], curr)
      ? acc[idx]
      : [...(acc[idx] || []), curr];
    return acc;
  }, {});
  const result = [];
  for (const group of Object.values(groups)) {
    if (group.length > 1) {
      result.push(group);
    }
  }
  return result;
}

/**
 * Parses a string containing a date
 * @param {String} time
 * @returns {Number} number of milliseconds between that date and midnight, January 1, 1970
 */
function timeToNum(time) {
  return Date.parse(time);
}

/**
 * Checks if time difference between consecutive transaction is more than 1 minute
 * @param {Transactions[] | []} arr Array of transactions
 * @param {Transaction} transaction A transaction object
 */
function isMoreThanOneMinute(arr, transaction) {
  return arr.length
    ? Math.abs(
        timeToNum(arr[arr.length - 1].time) - timeToNum(transaction.time)
      ) /
        1000 >
        60
    : false;
}

module.exports = findDuplicateTransactions;

// console.log(
//   findDuplicateTransactions([
//     {
//       id: 6,
//       sourceAccount: "my_account",
//       targetAccount: "internet_shop",
//       amount: -250,
//       category: "other",
//       time: "2018-03-01T22:16:40.000Z",
//     },
//     {
//       id: 102,
//       sourceAccount: "my_account",
//       targetAccount: "internet_shop",
//       amount: -250,
//       category: "other",
//       time: "2018-03-01T22:16:50.000Z",
//     },
//     {
//       id: 13,
//       sourceAccount: "my_account",
//       targetAccount: "coffee_shop",
//       amount: -50,
//       category: "eating_out",
//       time: "2018-04-01T10:24:00.000Z",
//     },
//     {
//       id: 14,
//       sourceAccount: "my_account",
//       targetAccount: "coffee_shop",
//       amount: -50,
//       category: "eating_out",
//       time: "2018-04-01T10:24:40.000Z",
//     },
//     {
//       id: 15,
//       sourceAccount: "my_account",
//       targetAccount: "coffee_shop",
//       amount: -50,
//       category: "eating_out",
//       time: "2018-04-01T10:25:10.000Z",
//     },
//     {
//       id: 30,
//       sourceAccount: "my_account",
//       targetAccount: "coffee_shop",
//       amount: -90,
//       category: "eating_out",
//       time: "2018-05-07T09:54:21.000Z",
//     },
//     {
//       id: 31,
//       sourceAccount: "my_account",
//       targetAccount: "coffee_shop",
//       amount: -90,
//       category: "eating_out",
//       time: "2018-05-07T09:55:10.000Z",
//     },
//     {
//       id: 32,
//       sourceAccount: "my_account",
//       targetAccount: "coffee_shop",
//       amount: -90,
//       category: "eating_out",
//       time: "2018-05-07T09:56:09.000Z",
//     },
//     {
//       id: 33,
//       sourceAccount: "my_account",
//       targetAccount: "coffee_shop",
//       amount: -90,
//       category: "eating_out",
//       time: "2018-05-07T09:57:05.000Z",
//     },
//   ])
// );
